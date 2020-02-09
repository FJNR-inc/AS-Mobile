import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { InternationalizationService } from "~/app/services/internationalization.service";
import { action } from "tns-core-modules/ui/dialogs";

@Component({
    selector: "Settings",
    templateUrl: "./settings.component.html",
    styleUrls: [
        "./settings.component.scss"
    ]
})
export class SettingsComponent implements OnInit {

    currentLanguage: string;

    constructor(private internationalizationService: InternationalizationService) {
        this.currentLanguage = InternationalizationService.getLocale();
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onSelectLanguageTap() {
        const actions = ["Francais", "English"];

        for (const language of this.internationalizationService.LOCALES) {
            actions.push(language);
        }

        const options = {
            title: "Langue",
            message: "Choisir une langue",
            cancelButtonText: "Annuler",
            actions
        };

        action(options).then((result) => {
            let lang = null;
            if (result === "Francais") {
                lang = "fr";
            } else {
                lang = "en";
            }
            this.currentLanguage = lang;
            this.internationalizationService.setLocale(this.currentLanguage);
        });
    }
}
