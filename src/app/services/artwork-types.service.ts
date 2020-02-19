import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, of } from "rxjs";
import GlobalService from "./globalService";
import { artworkTypes } from "~/app/datas/artwork_data_type";
import { IArtworkType } from "~/app/models/artworkType";
import { map } from "rxjs/internal/operators";
import { InternationalizationService } from "~/app/services/internationalization.service";
import { IResponseApi } from "~/app/models/api";

@Injectable()
export class ArtworkTypesService extends GlobalService {

    urlArtworkTypes = this.URL_BASE_API + "/artwork_type";

    constructor(public http: HttpClient) {
        super();
    }

    list(): Observable<any> {

        const local = InternationalizationService.getLocale();
        const newArtworkTypesResponse: IResponseApi<IArtworkType> = artworkTypes;
        newArtworkTypesResponse.results = artworkTypes.results.map(
            (artworkType: IArtworkType) => {
            artworkType.name = artworkType["name_" + local];

            return artworkType;
        });

        return of(newArtworkTypesResponse);
    }

    get(id: number): Observable<any> {
        const local = InternationalizationService.getLocale();

        return of(artworkTypes.results.find(
            (artworkType: IArtworkType) => {
                return artworkType.id === id;
            }
        )).pipe(
            map((artworkType: IArtworkType) => {
                artworkType.name = artworkType["name_" + local];

                return artworkType;
            })
        );
    }
}
