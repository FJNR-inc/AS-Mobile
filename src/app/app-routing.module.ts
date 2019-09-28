import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/map", pathMatch: "full" },
    { path: "map", loadChildren: () => import("~/app/map/map.module").then(m => m.MapModule) },
    { path: "artworks", loadChildren: () => import("~/app/artworks/artworks.module").then(m => m.ArtworksModule) },
    { path: "search", loadChildren: () => import("~/app/search/search.module").then(m => m.SearchModule) },
    { path: "featured", loadChildren: () => import("~/app/featured/featured.module").then(m => m.FeaturedModule) },
    { path: "settings", loadChildren: () => import("~/app/settings/settings.module").then(m => m.SettingsModule) }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
