import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SettingsRoutingModule } from "./settings-routing.module";
import { SettingsComponent } from "./settings.component";
import { SharedModule } from "~/app/shared/shared.module";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SettingsRoutingModule,
        SharedModule,
        TranslateModule
    ],
    declarations: [
        SettingsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SettingsModule { }
