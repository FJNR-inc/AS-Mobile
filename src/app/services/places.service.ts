import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
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
        const newPlacesResponse: IResponseApi<IPlace> = JSON.parse(JSON.stringify(places)) ;
        newPlacesResponse.results = JSON.parse(JSON.stringify(places)).results.map(
            (place: IPlace) => {

                InternationalizationService.translateObject(place, ["name"]);

                return place;
            });

        return of(newPlacesResponse);
    }

    get(id: number): Observable<any> {
        const newPlace = JSON.parse(JSON.stringify(places)).results.find(
            (place: IPlace) => {

                return place.id === id;
            }
        );

        return of(newPlace).pipe(
            map((place: IPlace) => {

                InternationalizationService.translateObject(place, ["name"]);

                return place;
            })
        );
    }
}
