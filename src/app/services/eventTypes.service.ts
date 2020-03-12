import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, of } from "rxjs";
import GlobalService from "./globalService";
import { map } from "rxjs/internal/operators";
import { InternationalizationService } from "~/app/services/internationalization.service";
import { IEventType } from "~/app/models/eventType";
import { IResponseApi } from "~/app/models/api";
import { eventTypes } from "~/app/datas/event_type_data";

@Injectable()
export class EventTypesService extends GlobalService {

    urlEventTypes = this.URL_BASE_API + "/event_type";

    constructor(public http: HttpClient) {
        super();
    }

    list(): Observable<any> {

        const newArtworkResponse: IResponseApi<IEventType> = JSON.parse(JSON.stringify(eventTypes));
        newArtworkResponse.results = newArtworkResponse.results.map(
            (eventType: IEventType) => {

            InternationalizationService.translateObject(eventType,
                ["name"]);

            return eventType;
        });

        return of(newArtworkResponse);
    }

    get(id: number): Observable<any> {
        const newEvent = JSON.parse(JSON.stringify(eventTypes)).results.find(
            (eventType: IEventType) => {

                return eventType.id === id;
            }
        );

        return of(newEvent).pipe(
            map((eventType: IEventType) => {

                InternationalizationService.translateObject(eventType,
                    ["name"]);

                return eventType;
            })
        );
    }
}
