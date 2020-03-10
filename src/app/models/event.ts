import { IPlace, Place } from "~/app/models/place";
import { EventType, IEventType } from "~/app/models/eventType";

export interface IEvent {
    id: number;
    name: string;
    description: string;
    description_fr: string;
    description_en: string;
    picture: string;
    link: string;
    place: IPlace;
    event_type: IEventType;
    date: string;
}

export class Event {
    id: number;
    name: string;
    description: string;
    description_fr: string;
    description_en: string;
    picture: string;
    link: string;
    place: Place;
    event_type: EventType;
    date: string;

    constructor(data: IEvent) {
        Object.assign(this, data);

        if (data.place && typeof data.place !== "string") {
            this.place = new Place(data.place);
        }

        if (data.event_type && typeof data.event_type !== "string") {
            this.event_type = new EventType(data.event_type);
        }
    }
}
