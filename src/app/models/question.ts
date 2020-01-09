import BaseModel from "./baseModel";
import { Choice } from "~/app/models/choice";

export class Question extends BaseModel {
    id: number;
    url: string;
    label: string;
    type: string;
    page: string;
    index: number;
    choices: Array<Choice>;
    correctly_answered: boolean;
    explanation: string;

    constructor(data: Object = {}) {
        super(data);
    }
}
