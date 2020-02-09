import { EventEmitter, Injectable, Output } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

const LANGUAGE_STORAGE_NAME = "Language";
const DEFAULT_LOCALE = "fr";

@Injectable()
export class InternationalizationService {

    static getLocale() {
        const appSettings = require("tns-core-modules/application-settings");
        const locale = appSettings.getString(LANGUAGE_STORAGE_NAME);

        if (locale) {
            return locale;
        } else {
            return DEFAULT_LOCALE;
        }
    }

    static getNameLocale() {
        const appSettings = require("tns-core-modules/application-settings");
        const locale = appSettings.getString(LANGUAGE_STORAGE_NAME);

        if (locale) {
            if (locale === "fr") {
                return "Francais";
            } else if (locale === "en") {
                return "English";
            } else {
                return locale;
            }
        } else {
            return DEFAULT_LOCALE;
        }
    }

    LOCALES = ["en", "fr"];
    @Output() locale: EventEmitter<any> = new EventEmitter();

    constructor(private translate: TranslateService) { }

    setLocale(locale) {
        if (this.LOCALES.lastIndexOf(locale) > -1) {
            this.translate.use(locale);
        }
        const appSettings = require("tns-core-modules/application-settings");
        appSettings.setString(LANGUAGE_STORAGE_NAME, locale);
    }
}
