import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/map", pathMatch: "full" },
    { path: "map", loadChildren: () => import("~/app/map/map.module").then(m => m.MapModule) },
    { path: "artworks", loadChildren: () => import("~/app/artworks/artworks.module").then(m => m.ArtworksModule) },
    { path: "partners", loadChildren: () => import("~/app/partners/partners.module").then(m => m.PartnersModule) },
    { path: "featured", loadChildren: () => import("~/app/featured/featured.module").then(m => m.FeaturedModule) },
    { path: "contact", loadChildren: () => import("~/app/contact/contact.module").then(m => m.ContactModule) },
    { path: "settings", loadChildren: () => import("~/app/settings/settings.module").then(m => m.SettingsModule) }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
