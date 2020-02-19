import BaseModel from "~/app/models/baseModel";
import { IPartner, Partner } from "~/app/models/partner";

export interface IPartnerType {
    id: number;
    key: string;
    name: string;
    name_fr: string;
    name_en: string;
    partner_set: Array<IPartner>;
}

export class PartnerType extends BaseModel {
    id: number;
    key: string;
    name: string;
    name_fr: string;
    name_en: string;
    partner_set: Array<Partner>;
}
