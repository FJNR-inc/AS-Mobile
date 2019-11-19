import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ArtworksRoutingModule } from "./artworks-routing.module";
import { ArtworksComponent } from "./artworks.component";
import { ArtworkComponent } from "./artwork/artwork.component";
import { SharedModule } from "~/app/shared/shared.module";
import { ModalDialogService } from "nativescript-angular";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ArtworksRoutingModule,
        SharedModule
    ],
    declarations: [
        ArtworksComponent,
        ArtworkComponent
    ],
    providers: [
        ModalDialogService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ArtworksModule { }
