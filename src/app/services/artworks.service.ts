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

        console.log(`filters-> placeId: ${placeId}, artworkTypeId: ${artworkTypeId}`);

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

                /*artwork.description = artwork["description_" + local]
                    ? artwork["description_" + local] : artwork.description;
                artwork.name = artwork["name_" + local] ? artwork["name_" + local] : artwork.name;

                artwork.artist.country = artwork.artist["country_" + local]
                    ? artwork.artist["country_" + local] : artwork.artist.country;
                artwork.artist.bio = artwork.artist["bio_" + local]
                    ? artwork.artist["bio_" + local] : artwork.artist.bio;

                artwork.place.name = artwork.place["name_" + local]
                    ? artwork.place["name_" + local] : artwork.place.name;

                artwork.artwork_type.name = artwork.artwork_type["name_" + local]
                    ? artwork.artwork_type["name_" + local] : artwork.artwork_type.name;*/


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
