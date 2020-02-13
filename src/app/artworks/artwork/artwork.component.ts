import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { RouterExtensions } from "nativescript-angular";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Artwork } from "~/app/models/artwork";
import { ArtworksService } from "~/app/services/artworks.service";
import { AssessmentsService } from "~/app/services/assessments.service";
import { Assessment } from "~/app/models/assessment";
import GlobalService from "~/app/services/globalService";
import { MediasService } from "~/app/services/medias.service";
import { Media } from "~/app/models/media";

@Component({
  selector: "ns-artwork",
  templateUrl: "./artwork.component.html",
  styleUrls: [
      "./artwork.component.scss"
  ]
})
export class ArtworkComponent implements OnInit {

    index = 0;
    artwork: Artwork;
    assessments: Array<Assessment> = [];
    medias: Array<Media>;
    email: string;
    selectedMedia: Media;

    emailVerified = false;

    constructor(public routerExtensions: RouterExtensions,
                private activatedRoute: ActivatedRoute,
                private artworksService: ArtworksService,
                private assessmentService: AssessmentsService,
                private globalService: GlobalService,
                private router: Router,
                private mediaService: MediasService) {
        console.log('Load artwork')
    }

    ngOnInit() {

        console.log('Load artwork ng one init')
        this.activatedRoute.params.subscribe((params: Params) => {

            console.log('Load artwork index ' + params.id)
            this.index = params.id;
            this.refreshArtwork();
            this.listMediaOfArtwork();
        });
        this.email = this.globalService.getEmail();
    }

    listMediaOfArtwork() {
        this.mediaService.list([{name: "artwork", value: this.index}]).subscribe(
            (medias) => {
                this.medias = medias.results.map(
                    (item) => new Media(item)
                );
            }
        );
    }

    getArtworkName() {
        if (this.artwork) {
            return this.artwork.name;
        } else {
            return "";
        }
    }

    listAssessmentOfArtwork() {
        const filters = [
            {
                name: "artwork",
                value: this.artwork.id
            }
        ];
        this.assessmentService.list(filters).subscribe(
            (assessments) => {
                this.assessments = assessments.results.map(
                    (item) => new Assessment(item)
                );
            }
        );
    }

    refreshArtwork() {
        this.artworksService.get(this.index).subscribe(
            (artwork) => {
                this.artwork =  new Artwork(artwork);
                this.listAssessmentOfArtwork();
            }
        );
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    goBack() {
        this.routerExtensions.back();
    }

    onTap() {
        if (this.isEmailValid()) {
            this.globalService.setEmail(this.email);
            this.emailVerified = true;

            if (this.assessments.length === 1) {
                this.router.navigate(["/map/quiz/" + this.assessments[0].id]);
            }
        }
    }

    selectMedia(media) {
        this.selectedMedia = media;
    }

    closeMedia() {
        this.selectedMedia = null;
    }

    isEmailValid() {
        const regexp = new RegExp("^.+@.+\..+$");
        console.log(regexp.test(this.email));

        return regexp.test(this.email);
    }
}
