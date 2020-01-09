import { Component } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

interface IAuthor {
    name: string;
    title: string;
}
@Component({
    selector: "Minister",
    templateUrl: "./minister.component.html",
    styleUrls: [
        "./minister.component.scss"
    ]
})
export class MinisterComponent {

    AUTHORS: Array<IAuthor> = [
        {
            name: "Caroline Proulx",
            title: "Ministre du Tourisme"
        },
        {
            name: "Nathalie Roy",
            title: "Ministre de la Culture et des Communications",
        },
        {
            name: "Chantal Rouleau",
            title: "Ministre déléguée aux Transports et ministre responsable de la Métropole et de la région de Montréal",
        }
    ];

    LOGOS = [
        {
            url: "~/assets/logo_quebec.png"
        },
        {
            url: "~/assets/logo_votre_gouvernement.png"
        }
    ]

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
