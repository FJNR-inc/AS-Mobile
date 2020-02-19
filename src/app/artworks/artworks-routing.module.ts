import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ArtworksComponent } from "./artworks.component";
import { ArtworkComponent } from "~/app/artworks/artwork/artwork.component";
import { RedirectMapComponent } from "~/app/artworks/redirect-map/redirect-map.component";

const routes: Routes = [
    { path: "", component: ArtworksComponent },
    { path: "artwork/:id", component: ArtworkComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ArtworksRoutingModule { }
