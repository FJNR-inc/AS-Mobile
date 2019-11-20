import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { EventsRoutingModule } from "./events-routing.module";
import { EventsComponent } from "./events.component";
import { EventComponent } from "./event/event.component";
import { SharedModule } from "~/app/shared/shared.module";
import { ModalDialogService } from "nativescript-angular";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        EventsRoutingModule,
        SharedModule
    ],
    declarations: [
        EventsComponent,
        EventComponent
    ],
    providers: [
        ModalDialogService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class EventsModule { }
