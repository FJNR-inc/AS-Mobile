import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { RouterExtensions } from "nativescript-angular";
import { action } from "tns-core-modules/ui/dialogs";
import { EventTypesService } from "~/app/services/eventTypes.service";
import { EventType } from "~/app/models/eventType";
import { Event } from "~/app/models/event";
import { EventsService } from "~/app/services/events.service";
import { DateHelper } from "../helpers/date";

@Component({
    selector: "Events",
    templateUrl: "./events.component.html",
    styleUrls: [
        "./events.component.scss"
    ]
})
export class EventsComponent implements OnInit {

    events: Array<Event> = [];
    eventTypes: Array<EventType> = [];
    typeOfEvent: string = "Tous";

    dialogShown = false;

    constructor(private routerExtensions: RouterExtensions,
                private eventsService: EventsService,
                private eventTypesService: EventTypesService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.refreshEvents();
        this.refreshEventTypes();
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onNavigationItemTap(args: any) {
        this.routerExtensions.navigate(["/events/event"], { animated: false });
    }

    toggleModal() {
        this.dialogShown = !this.dialogShown;
    }

    onTypeEventTap(): void {
        const actions = ["Tous"];

        for (const eventType of this.eventTypes) {
            actions.push(eventType.name);
        }

        const options = {
            title: "Type d'evenement",
            message: "Choisir un type d'evenement",
            cancelButtonText: "Annuler",
            actions
        };

        action(options).then((result) => {
            this.typeOfEvent = (result === "Annuler") ? this.typeOfEvent : result;
        });
    }

    getFilters() {
        const filters = [];
        for (const eventType of this.eventTypes) {
            if (eventType.name === this.typeOfEvent) {
                filters.push(
                    {
                        name: "event_type",
                        value: eventType.id
                    }
                );
            }
        }

        return filters;
    }

    refreshEvents() {
        this.dialogShown = false;
        const filters = this.getFilters();
        this.eventsService.list(filters).subscribe(
            (events) => {
                this.events =  events.results.map(
                    (item) => new Event(item)
                );
            }
        );
    }

    refreshEventTypes() {
        this.eventTypesService.list().subscribe(
            (eventTypes) => {
                this.eventTypes =  eventTypes.results.map(
                    (item) => new EventType(item)
                );
            }
        );
    }

    formatDate(value) {
        return DateHelper.formatDate(value);
    }
}
