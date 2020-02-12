import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { MapComponent } from "./map.component";

const routes: Routes = [
    {
        path: "", component: MapComponent,
        children: [
            {
                path: "artworks",
                loadChildren: () => import("~/app/artworks/artworks.module").then(
                    (m) => m.ArtworksModule)
            }

        ]
    },
    { path: ":id", component: MapComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class MapRoutingModule { }
