import { Component } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { ActivatedRoute, Params } from "@angular/router";
import { MapService } from "~/app/services/map.service";

declare const com: any;

@Component({
    moduleId: module.id,
    selector: "map",
    templateUrl: "./map.component.html",
    styleUrls: ["./map.component.scss"]
})
export class MapComponent {

    constructor(private _mapService: MapService,
                private activatedRoute: ActivatedRoute) {

        this.activatedRoute.params.subscribe((params: Params) => {
            const index = params.id;
            if (index) {
                this._mapService.zoomOnArtwork(index);
            }
            this._mapService.getArtworks();
        });
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
