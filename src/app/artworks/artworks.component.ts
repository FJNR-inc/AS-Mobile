import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { RouterExtensions } from "nativescript-angular";

@Component({
    selector: "Artworks",
    templateUrl: "./artworks.component.html",
    styleUrls: [
        "./artworks.component.scss"
    ]
})
export class ArtworksComponent implements OnInit {

    artworks: Array<{background: string, label: string, author: string}> = [
        {
            background: "~/assets/artwork/1.jpg",
            label: "Optimus II",
            author: "Amelie Laurence Fortin"
        },
        {
            background: "~/assets/artwork/2.jpg",
            label: "Test 2",
            author: "Author 2"
        },
        {
            background: "~/assets/artwork/1.jpg",
            label: "Optimus II",
            author: "Amelie Laurence Fortin"
        },
        {
            background: "~/assets/artwork/2.jpg",
            label: "Test 2",
            author: "Author 2"
        }
    ];

    constructor(private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onNavigationItemTap(args: any) {
        this.routerExtensions.navigate(["/artworks/artwork"], { animated: false });
    }
}
