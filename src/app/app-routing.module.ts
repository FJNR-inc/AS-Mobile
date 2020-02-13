import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/welcome", pathMatch: "full" },
    { path: "welcome", loadChildren: () => import("~/app/welcome/welcome.module").then((m) => m.WelcomeModule) },
    { path: "map", loadChildren: () => import("~/app/map/map.module").then((m) => m.MapModule) },
     ];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
