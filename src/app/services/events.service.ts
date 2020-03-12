import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import GlobalService from "./globalService";
import { map } from "rxjs/internal/operators";
import { InternationalizationService } from "~/app/services/internationalization.service";
import { events } from "~/app/datas/event_data";
import { IEvent } from "~/app/models/event";
import { IResponseApi } from "~/app/models/api";

@Injectable()
export class EventsService extends GlobalService {

    urlEvents = this.URL_BASE_API + "/event";

    constructor(public http: HttpClient) {
        super();
    }

    list(placeId: number = null, eventTypeId: number = null): Observable<any> {

        const newArtworkResponse: IResponseApi<IEvent> = JSON.parse(JSON.stringify(events));
        newArtworkResponse.results = newArtworkResponse.results.filter(
            (event: IEvent) => {
                const checkPlace = !placeId || event.place.id === placeId;
                const checkType = !eventTypeId || event.event_type.id === eventTypeId;

                console.log(eventTypeId)
                console.log(event.event_type)
                console.log(checkType)
                return checkPlace && checkType;
            }
        ).map((event: IEvent) => {

            InternationalizationService.translateObject(event,
                ["description"]);
            InternationalizationService.translateObject(event.event_type,
                ["name"]);
            InternationalizationService.translateObject(event.place,
                ["name"]);

            return event;
        });

        return of(newArtworkResponse);
    }

    get(id: number): Observable<any> {
        const newEvent = JSON.parse(JSON.stringify(events)).results.find(
            (event: IEvent) => {

                return event.id === id;
            }
        );

        return of(newEvent).pipe(
            map((event: IEvent) => {

                InternationalizationService.translateObject(event,
                    ["description"]);
                InternationalizationService.translateObject(event.event_type,
                    ["name"]);
                InternationalizationService.translateObject(event.place,
                    ["name"]);

                return event;
            })
        );
    }
}
