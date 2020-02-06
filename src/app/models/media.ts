import BaseModel from "./baseModel";

export class Media extends BaseModel {
    id: number;
    url: string;
    file: string;
    media_type: string;
    detail: string;
    artwork: string;
}
