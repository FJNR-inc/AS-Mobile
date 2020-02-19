import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ArtworksRoutingModule } from "./artworks-routing.module";
import { ArtworksComponent } from "./artworks.component";
import { ArtworkComponent } from "./artwork/artwork.component";
import { SharedModule } from "~/app/shared/shared.module";
import { ModalDialogService, NativeScriptFormsModule } from "nativescript-angular";
import { ListQuizzComponent } from './artwork/list-quizz/list-quizz.component';
import {TranslateModule} from "@ngx-translate/core";
import { RedirectMapComponent } from './redirect-map/redirect-map.component';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ArtworksRoutingModule,
        SharedModule,
        NativeScriptFormsModule,
        TranslateModule
    ],
    declarations: [
        ArtworksComponent,
        ArtworkComponent,
        ListQuizzComponent,
        RedirectMapComponent
    ],
    providers: [
        ModalDialogService
    ],
    exports: [
        ArtworksComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ArtworksModule { }
