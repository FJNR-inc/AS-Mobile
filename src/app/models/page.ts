import BaseModel from "./baseModel";
import { Assessment } from "~/app/models/assessment";

export class Page extends BaseModel {
    id: number;
    assessment: Assessment;

    constructor(data: Object = {}) {
        super(data);
        if (data) {
            if (data.hasOwnProperty("assessment")) {
                this.assessment = new Assessment(data["assessment"]);
            }
        }
    }
}
