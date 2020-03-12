import { IResponseApi } from "~/app/models/api";
import { IEventType } from "~/app/models/eventType";

export const eventTypes: IResponseApi<IEventType> = {
    count: 7,
    next: null,
    previous: null,
    results: [{
        id: 64,
        name: "Médiation culturelle",
        name_fr: "Médiation culturelle",
        name_en: "Cultural Mediation"
    }, {
        id: 65, name: "Visite Focus", name_fr: "Visite Focus", name_en: "Focus Visit"}, {
        id: 66,
        name: "Visite guidée",
        name_fr: "Visite guidée",
        name_en: "Guid Tour"
    }, {
        id: 67, name: "Midi Express", name_fr: "Midi Express", name_en: "Lunch Express"}, {
        id: 68,
        name: "Rencontre avec artiste",
        name_fr: "Rencontre avec artiste",
        name_en: "Talk with artist"
    }, {
        id: 69, name: "Table ronde", name_fr: "Table ronde", name_en: "Round Table Discussion"}, {
        id: 70,
        name: "Activité",
        name_fr: "Activité",
        name_en: "Activity"
    }]
};
