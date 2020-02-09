import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SharedModule } from "~/app/shared/shared.module";
import { TranslateModule } from "@ngx-translate/core";
import { WelcomeComponent } from "~/app/welcome/welcome.component";
import { WelcomeRoutingModule } from "~/app/welcome/welcome-routing.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SharedModule,
        TranslateModule,
        WelcomeRoutingModule
    ],
    declarations: [
        WelcomeComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class WelcomeModule { }
