import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { RouterExtensions } from "nativescript-angular";
import { ArtworksService } from "~/app/services/artworks.service";
import { Artwork } from "~/app/models/artwork";
import { action } from "tns-core-modules/ui/dialogs";
import { ArtworkTypesService } from "~/app/services/artwork-types.service";
import { ArtworkType } from "~/app/models/artworkType";
import { Place } from "~/app/models/place";
import { PlacesService } from "~/app/services/places.service";

@Component({
    selector: "Artworks",
    templateUrl: "./artworks.component.html",
    styleUrls: [
        "./artworks.component.scss"
    ]
})
export class ArtworksComponent implements OnInit {

    artworks: Array<Artwork> = [];
    artworkTypes: Array<ArtworkType> = [];
    places: Array<Place> = [];
    typeOfArtwork: string = "Tous";
    place: string = "Toutes";

    dialogShown = false;

    constructor(private routerExtensions: RouterExtensions,
                private artworksService: ArtworksService,
                private artworkTypesService: ArtworkTypesService,
                private placesService: PlacesService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        console.log('load artworksssss')
        this.refreshArtworks();
        this.refreshArtworkTypes();
        this.refreshPlaces();
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onNavigationItemTap(args: any) {
        this.routerExtensions.navigate(["/map/artworks/artwork"], { animated: false });
    }

    toggleModal() {
        this.dialogShown = !this.dialogShown;
    }

    onTypeArtworkTap(): void {
        const actions = ["Tous"];

        for (const artworkType of this.artworkTypes) {
            actions.push(artworkType.name);
        }

        const options = {
            title: "Type d'oeuvre",
            message: "Choisir un type d'oeuvre",
            cancelButtonText: "Annuler",
            actions
        };

        action(options).then((result) => {
            this.typeOfArtwork = (result === "Annuler") ? this.typeOfArtwork : result;
        });
    }

    onPlaceTap(): void {
        const actions = ["Toutes"];

        for (const place of this.places) {
            actions.push(place.name);
        }

        const options = {
            title: "Place",
            message: "Choisir une place",
            cancelButtonText: "Annuler",
            actions
        };

        action(options).then((result) => {
            this.place = (result === "Annuler") ? this.place : result;
        });
    }

    getFilters() {
        const filters = [];
        for (const artworkType of this.artworkTypes) {
            if (artworkType.name === this.typeOfArtwork) {
                filters.push(
                    {
                        name: "artwork_type",
                        value: artworkType.id
                    }
                );
            }
        }
        for (const place of this.places) {
            if (place.name === this.place) {
                filters.push(
                    {
                        name: "place",
                        value: place.id
                    }
                );
            }
        }

        return filters;
    }

    refreshArtworks() {
        this.dialogShown = false;
        const filters = this.getFilters();
        this.artworksService.list(filters).subscribe(
            (artworks) => {
                this.artworks =  artworks.results.map(
                    (item) => new Artwork(item)
                );
            }
        );
    }

    refreshArtworkTypes() {
        this.artworkTypesService.list().subscribe(
            (artworkTypes) => {
                this.artworkTypes =  artworkTypes.results.map(
                    (item) => new ArtworkType(item)
                );
            }
        );
    }

    refreshPlaces() {
        this.placesService.list().subscribe(
            (places) => {
                this.places =  places.results.map(
                    (item) => new Place(item)
                );
            }
        );
    }
}
