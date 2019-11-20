import BaseModel from "./baseModel";
import { Place } from "~/app/models/place";
import { EventType } from "~/app/models/eventType";

export class Event extends BaseModel {
    id: number;
    name: string;
    description: string;
    picture: string;
    link: string;
    place: Place;
    eventType: EventType;
    date: string;

    constructor(data: Object = {}) {
        super(data);
        if (data) {
            if (data.hasOwnProperty("event_type")) {
                this.eventType = new EventType(data["event_type"]);
            }
            if (data.hasOwnProperty("place")) {
                this.place = new Place(data["place"]);
            }
        }
    }
}
