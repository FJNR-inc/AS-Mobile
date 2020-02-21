import { Component } from "@angular/core";
import { MapView, Marker, Position, Style } from "nativescript-google-maps-sdk";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Artwork } from "~/app/models/artwork";
import { ArtworksService } from "~/app/services/artworks.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import * as geolocation from "nativescript-geolocation";

declare const com: any;

@Component({
    moduleId: module.id,
    selector: "map",
    templateUrl: "./map.component.html",
    styleUrls: ["./map.component.scss"]
})
export class MapComponent {

    latitude = 45.497748;
    longitude = -73.571746;
    zoom = 13;
    minZoom = 11;
    maxZoom = 22;
    bearing = 0;
    tilt = 0;
    padding = [20, 20, 20, 20];
    mapView: MapView;

    style = `
        [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          },
          {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          },
          {
            "featureType": "poi",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dadada"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "transit",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#c9c9c9"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }
        ]
    `;

    mapIsReady: boolean = false;
    currentLevelName: string;
    artworks: Array<Artwork>;
    displayedArtworks: Array<Artwork>;

    constructor(private artworksService: ArtworksService,
                private router: Router,
                private activatedRoute: ActivatedRoute) {
        this.activateLocation();
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    activateLocation() {
        geolocation.isEnabled().then(
            (isEnabled) => {
                if (!isEnabled) {
                    geolocation.enableLocationRequest(true, true).then(() => {
                    }, (e) => {
                        console.log("Error: " + (e.message || e));
                    }).catch((ex) => {
                        console.log("Unable to Enable Location", ex);
                    });
                }
            },
            (error) => {
                console.log("Error: " + (error.message || error));
            }
        );
    }

    onMapReady(event) {
        this.mapView = event.object;
        this.mapView.myLocationEnabled = true;
        this.mapView.settings.indoorLevelPickerEnabled = true;
        this.mapView.setStyle(<Style>JSON.parse(this.style));

        this.mapIsReady = true;

        this.activatedRoute.params.subscribe((params: Params) => {
            const index = +params.id;
            if (index) {
                this.zoomOnArtwork(index);
            }
            this.getArtworks();
        });
        this.getArtworks();
    }

    initMarkerOnMap() {
        this.mapView.removeAllMarkers();

        for (const artwork of this.displayedArtworks) {

            /* Code to use custom icon
            const imgModule = require("ui/image");
            const icon = new imgModule.Image();
            const imageSource = require("image-source");
            icon.src = "~/assets/icon/photographie.png";
            icon.imageSource = imageSource.fromFile("~/assets/icon/photographie.png");

            marker.icon = icon;
             */

            /* code to use custom color

            //marker.color = "blue";
             */

            const marker = new Marker();
            marker.position = Position.positionFromLatLng(artwork.latitude, artwork.longitude);
            marker.title = artwork.name;
            marker.snippet = artwork.place.name;
            marker.userData = {index: artwork.id};
            this.mapView.addMarker(marker);
        }
    }

    onIndoorBuildingFocused(args) {
        // Can't use this script since indoor building are not shown.
        /*
        if (args.indoorBuilding) {
            this.currentLevelName = args.indoorBuilding.levels[args.indoorBuilding.defaultLevelIndex].name;
        } else {
            this.currentLevelName = null;
        }
        this.refreshDisplayedArtworks();
         */
    }

    onIndoorLevelActivated(args) {
        // Can't use this script since indoor building are not shown.
        /*
        if (args.activateLevel) {
            this.currentLevelName = args.activateLevel.name;
        } else {
            this.currentLevelName = null;
        }
        this.refreshDisplayedArtworks();
         */
    }

    refreshDisplayedArtworks() {
        this.displayedArtworks = [];
        for (const artwork of this.artworks) {
            if (!this.currentLevelName || this.currentLevelName && artwork.level === this.currentLevelName) {
                this.displayedArtworks.push(artwork);
            }
        }
        this.initMarkerOnMap();
    }

    zoomOnArtwork(id) {
        this.artworksService.get(id).subscribe(
            (artwork) => {
                const item = new Artwork(artwork);
                this.latitude = Number(item.latitude);
                this.longitude = Number(item.longitude);
                this.zoom = 18;
            }
        );
    }

    getArtworks() {
        this.artworksService.list().subscribe(
            (artworks) => {
                this.artworks = artworks.results.map(
                    (item) => new Artwork(item)
                );
                this.displayedArtworks = this.artworks;
                this.refreshDisplayedArtworks();
            }
        );
    }

    onMarkerInfoWindowTapped(args) {

        const index = args.marker.userData.index;
        this.router.navigate(["/artworks/artwork/" + index]);
    }
}
