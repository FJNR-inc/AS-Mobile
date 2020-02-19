import BaseModel from "./baseModel";

export interface IPlace {
    id: number;
    name: string;
    name_fr: string;
    name_en: string;
    plan: string;
}
export class Place extends BaseModel {
    id: number;
    name: string;
    name_fr: string;
    name_en: string;
    plan: string;
}
