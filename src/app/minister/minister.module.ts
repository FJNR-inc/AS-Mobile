import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { MinisterRoutingModule } from "./minister-routing.module";
import { MinisterComponent } from "./minister.component";
import { SharedModule } from "~/app/shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        MinisterRoutingModule,
        SharedModule,
        TranslateModule
    ],
    declarations: [
        MinisterComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MinisterModule { }
