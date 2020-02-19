import BaseModel from "./baseModel";

export interface IArtist {
    id: number;
    first_name: string;
    last_name: string;
    country: string;
    country_fr: string;
    country_en: string;
    picture: string;
    bio: string;
    bio_fr: string;
    bio_en: string;
}


export class Artist extends BaseModel {
    id: number;
    first_name: string;
    last_name: string;
    country: string;
    country_fr: string;
    country_en: string;
    picture: string;
    bio: string;
    bio_fr: string;
    bio_en: string;

    get full_name() {
        return this.first_name + " " + this.last_name;
    }
}
