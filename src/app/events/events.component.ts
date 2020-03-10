import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { RouterExtensions } from "nativescript-angular";
import { action, ActionOptions } from "tns-core-modules/ui/dialogs";
import { EventTypesService } from "~/app/services/eventTypes.service";
import { EventType } from "~/app/models/eventType";
import { Event } from "~/app/models/event";
import { EventsService } from "~/app/services/events.service";
import { ArtworkType } from "~/app/models/artworkType";
import { InternationalizationService } from "~/app/services/internationalization.service";

interface ITranslationModalLabel {

    typeOfEventAll: string;
    typeOfEventCancel: string;
    actionOptionEventType: ActionOptions;
}

interface ITranslationModal {
    [key: string]: ITranslationModalLabel;
}

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

    dialogShown = false;

    typeOfEvent: string;
    translationModal: ITranslationModal = {
        en: {
            typeOfEventAll: "All",
            typeOfEventCancel: "Cancel",
            actionOptionEventType: {
                title: "Event Type",
                message: "Choose an event type",
                cancelButtonText: "Cancel",
                actions: ["All"]
            }
        },
        fr: {
            typeOfEventAll: "Tous",
            typeOfEventCancel: "Annuler",
            actionOptionEventType: {
                title: "Type d'evenement",
                message: "Choisir un type d'evenement",
                cancelButtonText: "Annuler",
                actions: ["Tous"]
            }
        }
    };

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
        const local = InternationalizationService.getLocale();

        this.typeOfEvent = this.translationModal[local].typeOfEventAll;
        const options: ActionOptions = this.translationModal[local].actionOptionEventType;

        for (const eventType of this.eventTypes) {
            options.actions.push(eventType.name);
        }

        action(options).then((result) => {
            this.typeOfEvent =
                (result === this.translationModal[local].typeOfEventCancel)
                    ? this.typeOfEvent : result;
        });

    }

    getFilterEventType() {
        const eventTypeFilter = this.eventTypes.find(
            (eventType: ArtworkType) => eventType.name === this.typeOfEvent);

        return !!eventTypeFilter ? eventTypeFilter.id : null;

    }

    refreshEvents() {
        this.dialogShown = false;
        this.eventsService.list(
            this.getFilterEventType()).subscribe(
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
        return value;
    }
}
