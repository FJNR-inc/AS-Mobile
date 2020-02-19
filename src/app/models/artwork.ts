import BaseModel from "./baseModel";
import { Artist, IArtist } from "~/app/models/artist";
import { IPlace, Place } from "~/app/models/place";
import { ArtworkType, IArtworkType } from "~/app/models/artworkType";

export interface IArtwork {
    id: number;
    name: string;
    name_fr: string;
    name_en: string;
    picture: string;
    artist: IArtist;
    place: IPlace;
    description: string;
    description_fr: string;
    description_en: string;
    level: string;
    latitude: string;
    longitude: string;
    plan: string;
    artwork_type: IArtworkType;
    index_itinerary: number;
    creation_year: string;
    qr_code_token: string;
}

export class Artwork {
    id: number;
    name: string;
    name_fr: string;
    name_en: string;
    picture: string;
    artist: Artist;
    place: Place;
    description: string;
    description_fr: string;
    description_en: string;
    level: string;
    latitude: number;
    longitude: number;
    plan: string;
    artwork_type: ArtworkType;
    index_itinerary: number;
    creation_year: string;
    qr_code_token: string;

    constructor(data: IArtwork) {
        Object.assign(this, data);

        if (data.artist && typeof data.artist !== "string") {
            this.artist = new Artist(data.artist);
        }

        if (data.artwork_type && typeof data.artwork_type !== "string") {
            this.artwork_type = new ArtworkType(data.artwork_type);
        }

        if (data.place && typeof data.place !== "string") {
            this.place = new Place(data.place);
        }
    }
}
