import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ArtworksRoutingModule } from "./artworks-routing.module";
import { ArtworksComponent } from "./artworks.component";
import { ArtworkComponent } from './artwork/artwork.component';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ArtworksRoutingModule
    ],
    declarations: [
        ArtworksComponent,
        ArtworkComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ArtworksModule { }
