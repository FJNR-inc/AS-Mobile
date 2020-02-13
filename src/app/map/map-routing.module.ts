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
            },
            { path: "events", loadChildren: () => import("~/app/events/events.module").then((m) => m.EventsModule) },
            { path: "quiz", loadChildren: () => import("~/app/quiz/quiz.module").then((m) => m.QuizModule) },
            { path: "minister", loadChildren: () => import("~/app/minister/minister.module").then((m) => m.MinisterModule) },
            { path: "partners", loadChildren: () => import("~/app/partners/partners.module").then((m) => m.PartnersModule) },
            { path: "contact", loadChildren: () => import("~/app/contact/contact.module").then((m) => m.ContactModule) },
            { path: "settings", loadChildren: () => import("~/app/settings/settings.module").then((m) => m.SettingsModule) }


        ]
    },
    { path: ":id", component: MapComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class MapRoutingModule { }
