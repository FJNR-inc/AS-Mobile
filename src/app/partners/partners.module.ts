import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { PartnersRoutingModule } from "./partners-routing.module";
import { PartnersComponent } from "./partners.component";
import { SharedModule } from "~/app/shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        PartnersRoutingModule,
        SharedModule,
        TranslateModule
    ],
    declarations: [
        PartnersComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class PartnersModule { }
