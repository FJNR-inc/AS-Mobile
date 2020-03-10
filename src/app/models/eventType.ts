export interface IEventType {
    id: number;
    name: string;
    name_fr: string;
    name_en: string;
}

export class EventType {
    id: number;
    name: string;
    name_fr: string;
    name_en: string;

    constructor(data: IEventType) {
        Object.assign(this, data);
    }
}
