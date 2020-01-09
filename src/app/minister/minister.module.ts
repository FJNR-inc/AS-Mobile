import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { MinisterRoutingModule } from "./minister-routing.module";
import { MinisterComponent } from "./minister.component";
import { SharedModule } from "~/app/shared/shared.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        MinisterRoutingModule,
        SharedModule
    ],
    declarations: [
        MinisterComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MinisterModule { }
