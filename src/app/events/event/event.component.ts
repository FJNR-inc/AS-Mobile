import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { RouterExtensions } from "nativescript-angular";
import { ActivatedRoute, Params } from "@angular/router";
import { Event } from "~/app/models/event";
import { EventsService } from "~/app/services/events.service";

@Component({
  selector: "ns-event",
  templateUrl: "./event.component.html",
  styleUrls: [
      "./event.component.scss"
  ]
})
export class EventComponent implements OnInit {

    index = 0;
    event: Event;

    constructor(public routerExtensions: RouterExtensions,
                private activatedRoute: ActivatedRoute,
                private eventsService: EventsService) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.index = +params["id"];
            this.refreshEvent();
        });
    }

    getEventName() {
        if (this.event) {
            return this.event.name;
        } else {
            return "";
        }
    }

    refreshEvent() {
        this.eventsService.get(this.index).subscribe(
            (event) => {
                this.event =  new Event(event);
            }
        );
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    goBack() {
        this.routerExtensions.back();
    }

    formatDate(value) {
        return value;
    }

    redirectToSubscribe() {
        const utilsModule = require("tns-core-modules/utils/utils");
        utilsModule.openUrl(this.event.link);
    }
}
