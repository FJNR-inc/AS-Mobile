import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { EventsComponent } from "./events.component";
import { EventComponent } from "~/app/events/event/event.component";

const routes: Routes = [
    { path: "", component: EventsComponent },
    { path: "event/:id", component: EventComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class EventsRoutingModule { }
