import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PartnersService } from "~/app/services/partners.service";
import { ArtworksService } from "~/app/services/artworks.service";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NgShadowModule } from "nativescript-ngx-shadow";
import {ArtworkTypesService} from "~/app/services/artwork-types.service";
import {PlacesService} from "~/app/services/places.service";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
        NativeScriptHttpClientModule,
        NgShadowModule
    ],
    declarations: [
        AppComponent
    ],
    exports: [],
    providers: [
        PartnersService,
        ArtworksService,
        ArtworkTypesService,
        PlacesService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
