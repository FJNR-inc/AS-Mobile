import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { PartnersService } from "~/app/services/partners.service";
import { Partner } from "~/app/models/partner";
import { PartnerType } from "~/app/models/partner-type";

@Component({
    selector: "Partners",
    templateUrl: "./partners.component.html",
    styleUrls: [
        "./partners.component.scss"
    ]
})
export class PartnersComponent implements OnInit {

    partners: Array<Partner>;

    partnerTypes: Array<PartnerType> = [];

    constructor(private partnersService: PartnersService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.loadSections();
    }

    loadSections() {
        this.partnersService.listSection().subscribe(
            (sections) => {
                this.partnerTypes = sections.results;
            }
        );
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
