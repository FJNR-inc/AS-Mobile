import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { PartnersRoutingModule } from "./partners-routing.module";
import { PartnersComponent } from "./partners.component";
import { SharedModule } from "~/app/shared/shared.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        PartnersRoutingModule,
        SharedModule
    ],
    declarations: [
        PartnersComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class PartnersModule { }
