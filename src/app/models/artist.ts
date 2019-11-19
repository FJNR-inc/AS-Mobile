import BaseModel from "./baseModel";

export class Artist extends BaseModel {
    id: number;
    first_name: string;
    last_name: string;
    country: string;

    get full_name() {
        return this.first_name + " " + this.last_name;
    }
}
