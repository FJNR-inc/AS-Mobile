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

    sections = [];

    constructor(private partnersService: PartnersService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.loadSections();
    }

    loadSections() {
        this.partnersService.listSection().subscribe(
            (sections) => {
                for (const section of sections.results) {
                    const newSection = {
                        key: section.key,
                        name: section.name,
                        partners: []
                    };
                    this.loadPartnersOfSection(newSection);
                    this.sections.push(newSection);
                }
            }
        );
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
