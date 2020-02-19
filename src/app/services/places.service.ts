import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, of } from "rxjs";
import GlobalService from "./globalService";
import { places } from "~/app/datas/place_data";
import { IPlace } from "~/app/models/place";
import { map } from "rxjs/internal/operators";
import { InternationalizationService } from "~/app/services/internationalization.service";
import { IResponseApi } from "~/app/models/api";

@Injectable()
export class PlacesService extends GlobalService {

    urlPlaces = this.URL_BASE_API + "/place";

    constructor(public http: HttpClient) {
        super();
    }

    list(): Observable<any> {
        const local = InternationalizationService.getLocale();
        const newPlacesResponse: IResponseApi<IPlace> = places;
        newPlacesResponse.results = places.results.map(
            (place: IPlace) => {
                place.name = place["name_" + local];

                return place;
            });

        return of(newPlacesResponse);
    }

    get(id: number): Observable<any> {
        const local = InternationalizationService.getLocale();
        const newPlace = places.results.find(
            (place: IPlace) => {

                return place.id === id;
            }
        );

        return of(newPlace).pipe(
            map((place: IPlace) => {
                place.name = place["name_" + local];

                return place;
            })
        );
    }
}
