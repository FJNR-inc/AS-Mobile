import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PartnersService } from "~/app/services/partners.service";
import { ArtworksService } from "~/app/services/artworks.service";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NgShadowModule } from "nativescript-ngx-shadow";
import { ArtworkTypesService } from "~/app/services/artwork-types.service";
import { PlacesService } from "~/app/services/places.service";
import { EventsService } from "~/app/services/events.service";
import { EventTypesService } from "~/app/services/eventTypes.service";
import { AssessmentsService } from "~/app/services/assessments.service";
import { NativeScriptFormsModule } from "nativescript-angular";
import GlobalService from "~/app/services/globalService";
import { ContactService } from "~/app/services/contact.service";
import { MediasService } from "~/app/services/medias.service";
import { MapView } from "nativescript-google-maps-sdk";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { registerLocaleData } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import localeFr from "@angular/common/locales/fr";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { InternationalizationService } from "~/app/services/internationalization.service";
import { SharedModule } from "~/app/shared/shared.module";
import { registerElement } from "nativescript-angular/element-registry";

registerElement("MapView", () => MapView);

registerLocaleData(localeFr);

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, "/assets/i18n/", ".json");
}

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
        NativeScriptHttpClientModule,
        NgShadowModule,
        NativeScriptFormsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        SharedModule
    ],
    declarations: [
        AppComponent
    ],
    exports: [],
    providers: [
        PartnersService,
        ArtworksService,
        ArtworkTypesService,
        PlacesService,
        EventsService,
        EventTypesService,
        AssessmentsService,
        GlobalService,
        ContactService,
        MediasService,
        InternationalizationService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
