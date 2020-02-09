import BaseModel from "./baseModel";
import { Artist } from "~/app/models/artist";
import {Place} from "~/app/models/place";

export class Artwork extends BaseModel {
    id: number;
    name: string;
    picture: string;
    artist: Artist;
    place: Place;
    description: string;
    level: string;
    latitude: number;
    longitude: number;
    plan: string;

    constructor(data: Object = {}) {
        super(data);
        if (data) {
            if (data.hasOwnProperty("artist")) {
                this.artist = new Artist(data["artist"]);
            }
            if (data.hasOwnProperty("place")) {
                this.place = new Place(data["place"]);
            }
        }
    }
}
