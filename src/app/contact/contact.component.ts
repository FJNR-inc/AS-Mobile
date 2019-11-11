import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Elevation } from "nativescript-ngx-shadow";

@Component({
    selector: "Contact",
    templateUrl: "./contact.component.html",
    styleUrls: [
        "./contact.component.scss"
    ]
})
export class ContactComponent implements OnInit {

    boxElevation;

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.boxElevation = Elevation.SNACKBAR;
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
