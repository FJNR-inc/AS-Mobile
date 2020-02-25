import { Component } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

interface IAuthor {
    name: string;
    title: string;
    avatar: string;
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
            title: "Ministre du Tourisme",
            avatar: "~/assets/PHO_Officielle_ProulxCaroline.png"
        },
        {
            name: "Nathalie Roy",
            title: "Ministre de la Culture et des Communications",
            avatar: "~/assets/PHO_Officielle_RoyNathalie_BasseResolution.png"
        },
        {
            name: "Chantal Rouleau",
            title: "Ministre déléguée aux Transports et ministre responsable de la Métropole et de la région de Montréal",
            avatar: "~/assets/PHO_Officielle_RouleauChantal.jpg"
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
