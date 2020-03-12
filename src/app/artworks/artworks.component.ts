import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { RouterExtensions } from "nativescript-angular";
import { ArtworksService } from "~/app/services/artworks.service";
import { Artwork } from "~/app/models/artwork";
import { action, ActionOptions } from "tns-core-modules/ui/dialogs";
import { ArtworkTypesService } from "~/app/services/artwork-types.service";
import { ArtworkType } from "~/app/models/artworkType";
import { Place } from "~/app/models/place";
import { PlacesService } from "~/app/services/places.service";
import { Router } from "@angular/router";
import { InternationalizationService } from "~/app/services/internationalization.service";

interface ITranslationModalLabel {

    typeOfArtWorkAll: string;
    typeOfPlaceAll: string;
    typeOfArtWorkCancel: string;
    typeOfPlaceCancel: string;
    actionOptionPlace: ActionOptions;
    actionOptionArtworkType: ActionOptions;
}

interface ITranslationModal {
    [key: string]: ITranslationModalLabel;
}

@Component(
    {
        selector: "Artworks",
        templateUrl: "./artworks.component.html",
        styleUrls: [
            "./artworks.component.scss"
        ]
    }
)
export class ArtworksComponent implements OnInit {

    artworks: Array<Artwork> = [];
    artworkTypes: Array<ArtworkType> = [];
    places: Array<Place> = [];

    typeOfArtwork: string;
    place: string;

    translationModal: ITranslationModal = {
        en: {
            typeOfArtWorkAll: "All",
            typeOfPlaceAll: "All",
            typeOfArtWorkCancel: "Cancel",
            typeOfPlaceCancel: "Cancel",
            actionOptionPlace: {
                title: "Place",
                message: "Choose a place",
                cancelButtonText: "Cancel",
                actions: ["All"]
            },
            actionOptionArtworkType: {
                title: "Artwork Type",
                message: "Choose an artwork type",
                cancelButtonText: "Cancel",
                actions: ["All"]
            }
        },
        fr: {
            typeOfArtWorkAll: "Tous",
            typeOfPlaceAll: "Toutes",
            typeOfArtWorkCancel: "Annuler",
            typeOfPlaceCancel: "Annuler",
            actionOptionPlace: {
                title: "Place",
                message: "Choisir une place",
                cancelButtonText: "Annuler",
                actions: ["Toutes"]
            },
            actionOptionArtworkType: {
                title: "Type d'oeuvre",
                message: "Choisir un type d'oeuvre",
                cancelButtonText: "Annuler",
                actions: ["Tous"]
            }
        }
    };

    dialogShown = false;

    constructor(private routerExtensions: RouterExtensions,
                private artworksService: ArtworksService,
                private artworkTypesService: ArtworkTypesService,
                private placesService: PlacesService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {

        this.refreshArtworks();
        this.refreshArtworkTypes();
        this.refreshPlaces();
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onNavigationItemTap(args: any) {
        this.routerExtensions.navigate(["/artworks/artwork"], {animated: false});
    }

    toggleModal() {
        this.dialogShown = !this.dialogShown;
    }

    onTypeArtworkTap(): void {

        const local = InternationalizationService.getLocale();

        const options: ActionOptions = this.translationModal[local].actionOptionArtworkType;

        action(options).then((result) => {
            this.typeOfArtwork =
                (result === this.translationModal[local].typeOfArtWorkCancel)
                    ? this.typeOfArtwork : result;
        });
    }

    onPlaceTap(): void {

        const local = InternationalizationService.getLocale();

        const options: ActionOptions = this.translationModal[local].actionOptionPlace;

        action(options).then((result) => {
            this.place =
                (result === this.translationModal[local].typeOfPlaceCancel)
                    ? this.place : result;
        });
    }

    getFilterArtworkType() {
        const artworkTypeFilter = this.artworkTypes.find(
            (artworkType: ArtworkType) => artworkType.name === this.typeOfArtwork);

        return !!artworkTypeFilter ? artworkTypeFilter.id : null;

    }

    getFilterPlace() {
        const artworkTypeFilter = this.places.find(
            (place: Place) => place.name === this.place);

        return !!artworkTypeFilter ? artworkTypeFilter.id : null;

    }

    refreshArtworks() {
        this.dialogShown = false;
        this.artworksService.list(
            this.getFilterPlace(),
            this.getFilterArtworkType()).subscribe(
            (artworks) => {
                this.artworks = artworks.results.map(
                    (item) => new Artwork(item)
                );
            }
        );
    }

    refreshArtworkTypes() {
        this.artworkTypesService.list().subscribe(
            (artworkTypes) => {
                this.artworkTypes = artworkTypes.results.map(
                    (item) => new ArtworkType(item)
                );
                const local = InternationalizationService.getLocale();

                this.typeOfArtwork = this.translationModal[local].typeOfArtWorkAll;
                for (const artworkType of this.artworkTypes) {
                    this.translationModal[local].
                    actionOptionArtworkType.actions.push(artworkType.name);
                }
            }
        );
    }

    refreshPlaces() {
        this.placesService.list().subscribe(
            (places) => {
                this.places = places.results.map(
                    (item) => new Place(item)
                );


                const local = InternationalizationService.getLocale();

                this.place = this.translationModal[local].typeOfPlaceAll;
                for (const place of this.places) {
                    this.translationModal[local].
                    actionOptionPlace.actions.push(place.name);
                }
            }
        );
    }
}
