import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import GlobalService from "./globalService";
import { artworks } from "~/app/datas/artwork_data";
import { IArtwork } from "~/app/models/artwork";
import { IResponseApi } from "~/app/models/api";
import { InternationalizationService } from "~/app/services/internationalization.service";
import { map } from "rxjs/internal/operators";

@Injectable()
export class ArtworksService extends GlobalService {

    urlArtworks = this.URL_BASE_API + "/artwork";

    constructor(public http: HttpClient) {
        super();
    }

    list(placeId: number = null, artworkTypeId: number = null): Observable<any> {

        const newArtworkResponse: IResponseApi<IArtwork> = JSON.parse(JSON.stringify(artworks));
        newArtworkResponse.results = newArtworkResponse.results.filter(
            (artwork: IArtwork) => {
                const checkPlace = !placeId || artwork.place.id === placeId;
                const checkType = !artworkTypeId || artwork.artwork_type.id === artworkTypeId;

                return checkPlace && checkType;
            }
        ).map((artwork: IArtwork) => {

            InternationalizationService.translateObject(artwork,
                ["description", "name"]);
            InternationalizationService.translateObject(artwork.artist,
                ["country", "bio"]);
            InternationalizationService.translateObject(artwork.artwork_type,
                ["name"]);
            InternationalizationService.translateObject(artwork.place,
                ["name"]);

            return artwork;
        });

        return of(newArtworkResponse);
    }

    get(id: number): Observable<any> {

        const newArtwork = JSON.parse(JSON.stringify(artworks)).results.find(
            (artwork: IArtwork) => {

                return artwork.id === id;
            }
        );

        return of(newArtwork).pipe(
            map((artwork: IArtwork) => {

                InternationalizationService.translateObject(artwork,
                    ["description", "name"]);
                InternationalizationService.translateObject(artwork.artist,
                    ["country", "bio"]);
                InternationalizationService.translateObject(artwork.artwork_type,
                    ["name"]);
                InternationalizationService.translateObject(artwork.place,
                    ["name"]);

                return artwork;
            })
        );
    }
}
