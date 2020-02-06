import { HttpHeaders } from "@angular/common/http";

export default class GlobalService {

    // URL_BASE_API = "http://10.0.2.2:8000";
    URL_BASE_API = "https://drm4oye0d8.execute-api.ca-central-1.amazonaws.com/dev";
    EMAIL_STORAGE_NAME = "Email";

    getHeaders(contentType: string = "application/json") {
        const options = {};

        if (contentType) {
            options["Content-Type"] = contentType;
        }

        const email = this.getEmail();

        if (email) {
            options["Email"] = email;
        }

        const header = new HttpHeaders(options);

        return header;
    }

    getEmail() {
        const appSettings = require("tns-core-modules/application-settings");

        return appSettings.getString(this.EMAIL_STORAGE_NAME);
    }

    setEmail(email) {
        const appSettings = require("tns-core-modules/application-settings");
        appSettings.setString(this.EMAIL_STORAGE_NAME, email);
    }
}
