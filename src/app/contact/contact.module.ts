import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ContactRoutingModule } from "./contact-routing.module";
import { ContactComponent } from "./contact.component";
import { SharedModule } from "~/app/shared/shared.module";
import { NativeScriptFormsModule } from "nativescript-angular";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ContactRoutingModule,
        SharedModule,
        NativeScriptFormsModule,
        TranslateModule
    ],
    declarations: [
        ContactComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ContactModule { }
