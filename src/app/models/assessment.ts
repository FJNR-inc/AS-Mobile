import BaseModel from "./baseModel";
import { Artwork } from "~/app/models/artwork";

export class Assessment extends BaseModel {
    id: number;
    name: string;
    information_text: string;
    artwork: Artwork;

    constructor(data: Object = {}) {
        super(data);
        if (data) {
            if (data.hasOwnProperty("artwork")) {
                this.artwork = new Artwork(data["artwork"]);
            }
        }
    }
}
