import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, of } from "rxjs";
import GlobalService from "./globalService";
import { artworks } from "~/app/datas/artwork_data";
import { Artwork, IArtwork } from "~/app/models/artwork";
import { IResponseApi } from "~/app/models/api";
import { InternationalizationService } from "~/app/services/internationalization.service";
import { map } from "rxjs/internal/operators";

@Injectable()
export class ArtworksService extends GlobalService {

    urlArtworks = this.URL_BASE_API + "/artwork";

    constructor(public http: HttpClient) {
        super();
    }

    list(placeId: number = null , artworkTypeId: number = null): Observable<any> {

        const local = InternationalizationService.getLocale();
        const newArtworkResponse: IResponseApi<IArtwork> = artworks;
        newArtworkResponse.results = artworks.results.filter(
            (artwork: IArtwork) => {
                const checkPlace = !placeId || artwork.artist.id === placeId;
                const checkType = !artworkTypeId || artwork.artwork_type.id === artworkTypeId;

                return checkPlace && checkType;
            }
        ).map((artwork: IArtwork) => {
            artwork.description = artwork["description_" + local];
            artwork.name = artwork["name_" + local];

            artwork.artist.country = artwork.artist["country_" + local];
            artwork.artist.bio = artwork.artist["bio_" + local];

            artwork.place.name = artwork.place["name_" + local];

            artwork.artwork_type.name = artwork.artwork_type["name_" + local];

            return artwork;
        });

        return of(newArtworkResponse);
    }

    get(id: number): Observable<any> {

        const newArtwork = artworks.results.find(
            (artwork: IArtwork) => {

                return artwork.id === id;
            }
        );
        const local = InternationalizationService.getLocale();

        return of(newArtwork).pipe(
            map((artwork: IArtwork) => {
                artwork.description = artwork["description_" + local];
                artwork.name = artwork["name_" + local];

                artwork.artist.country = artwork.artist["country_" + local];
                artwork.artist.bio = artwork.artist["bio_" + local];

                artwork.place.name = artwork.place["name_" + local];

                artwork.artwork_type.name = artwork.artwork_type["name_" + local];

                return artwork;
            })
        );
    }
}
