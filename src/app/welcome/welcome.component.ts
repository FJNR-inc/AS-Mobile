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
        this.currentLanguage = InternationalizationService.getLocale();
    }

    checkForRedirection() {
        const appSettings = require("tns-core-modules/application-settings");
        const check = appSettings.getString(this.FIRST_OPENING_STORAGE_NAME);

        if (check) {
            this.router.navigate(["/map"]);
        }
    }

    nextStep() {
        this.step += 1;
    }

    finish() {
        const appSettings = require("tns-core-modules/application-settings");
        appSettings.setString(this.FIRST_OPENING_STORAGE_NAME, "done");
        this.router.navigate(["/map"]);
    }

    onSelectLanguageTap() {
        const actions = [];

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
            this.currentLanguage = (result === "Annuler") ? this.currentLanguage : result;
            this.internationalizationService.setLocale(this.currentLanguage);
        });
    }
}
