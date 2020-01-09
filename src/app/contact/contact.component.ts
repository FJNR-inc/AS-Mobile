import { Component } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { ContactService } from "~/app/services/contact.service";

@Component({
    selector: "Contact",
    templateUrl: "./contact.component.html",
    styleUrls: [
        "./contact.component.scss"
    ]
})
export class ContactComponent {
    email: string = "";
    message: string = "";

    error: string = null;
    success: boolean = false;

    constructor(private contactService: ContactService) {
        // Use the component constructor to inject providers.
    }

    send(): void {
        this.contactService.create(this.email, this.message).subscribe(
            () => {
                this.error = null;
                this.success = true;
            },
            (err) => {
                if (err.error.non_field_errors) {
                    this.error = err.error.non_field_errors;
                }
                if (err.error.sender_email) {
                    this.error = err.error.sender_email;
                }
                if (err.error.message) {
                    this.error = err.error.message;
                }
            }
        );
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
