import { Component } from "@angular/core";
import { InternationalizationService } from "~/app/services/internationalization.service";
import { action } from "tns-core-modules/ui/dialogs";
import {Router} from "@angular/router";

@Component({
  selector: "ns-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"]
})
export class WelcomeComponent {

    FIRST_OPENING_STORAGE_NAME = "FirstOpening";

    step = 1;
    currentLanguage: string;

    constructor(private internationalizationService: InternationalizationService,
                private router: Router) {
        this.checkForRedirection();
        this.currentLanguage = InternationalizationService.getNameLocale();
    }

    checkForRedirection() {
        console.log('check redirection')
        const appSettings = require("tns-core-modules/application-settings");
        const check = appSettings.getString(this.FIRST_OPENING_STORAGE_NAME);

        if (check) {
            console.log('redirect to map')
            this.router.navigate(["/map/redirect"]);
        }
    }

    nextStep() {
        this.step += 1;
    }

    finish() {
        console.log('finish')
        const appSettings = require("tns-core-modules/application-settings");
        appSettings.setString(this.FIRST_OPENING_STORAGE_NAME, "done");
        console.log('go to map')
        this.router.navigate(["/map/artwork/redirect"]);
    }

    onSelectLanguageTap() {
        const actions = ["Francais", "English"];

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
            this.currentLanguage = result;
            this.internationalizationService.setLocale(lang);
        });
    }
}
