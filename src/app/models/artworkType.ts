import BaseModel from "./baseModel";

export interface IArtworkType {
    id: number;
    name: string;
    name_fr: string;
    name_en: string;
}

export class ArtworkType extends BaseModel {
    id: number;
    name: string;
    name_fr: string;
    name_en: string;
}
