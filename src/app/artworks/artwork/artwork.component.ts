import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { RouterExtensions } from "nativescript-angular";
import { ActivatedRoute, Params } from "@angular/router";
import { Artwork } from "~/app/models/artwork";
import { ArtworksService } from "~/app/services/artworks.service";

@Component({
  selector: 'ns-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: [
      './artwork.component.scss'
  ]
})
export class ArtworkComponent implements OnInit {

    index = 0;
    artwork: Artwork;

    constructor(public routerExtensions: RouterExtensions,
                private activatedRoute: ActivatedRoute,
                private artworksService: ArtworksService) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.index = params["id"];
            this.refreshArtwork();
        });
    }

    getArtworkName() {
        if (this.artwork) {
            return this.artwork.name;
        } else {
            return "";
        }
    }

    refreshArtwork() {
        this.artworksService.get(this.index).subscribe(
            (artwork) => {
                this.artwork =  new Artwork(artwork);
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
}
