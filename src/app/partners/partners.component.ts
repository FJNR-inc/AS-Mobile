import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { PartnersService } from "~/app/services/partners.service";
import { Partner } from "~/app/models/partner";

@Component({
    selector: "Partners",
    templateUrl: "./partners.component.html",
    styleUrls: [
        "./partners.component.scss"
    ]
})
export class PartnersComponent implements OnInit {

    partners: Array<Partner>;

    sections = [
        {
            key: "GrandPartenaires",
            name: "Grand partenaires",
            partners: []
        },
        {
            key: "Partenaires",
            name: "Partenaires",
            partners: []
        }
    ];

    constructor(private partnersService: PartnersService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        for (const section of this.sections) {
            this.loadPartnersOfSection(section);
        }
    }

    loadPartnersOfSection(section) {
        this.partnersService.list([{name: "partner_type__key", value: section.key}]).subscribe(
            (partners) => {
                section.partners =  partners.results.map(
                    (item) => new Partner(item)
                );
            }
        );
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
