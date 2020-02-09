import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { MapRoutingModule } from "./map-routing.module";
import { MapComponent } from "./map.component";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        MapRoutingModule,
        TranslateModule
    ],
    declarations: [
        MapComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MapModule { }
