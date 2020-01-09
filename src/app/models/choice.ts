import BaseModel from "./baseModel";

export class Choice extends BaseModel {
    id: number;
    url: string;
    label: string;
    question: string;
    index: number;

    constructor(data: Object = {}) {
        super(data);
    }
}
