import BaseModel from "./baseModel";
import { IPartnerType, PartnerType } from "~/app/models/partner-type";
import { Artist } from "~/app/models/artist";
import { ArtworkType } from "~/app/models/artworkType";
import { Place } from "~/app/models/place";
import { IArtwork } from "~/app/models/artwork";

export interface IPartner {
    id: number;
    name: string;
    name_fr: string;
    name_en: string;
    logo: string;
    link: string;
    link_fr: string;
    link_en: string;
    description: string;
    description_fr: string;
    description_en: string;
    partner_type: number;
}

export class Partner {

    id: number;
    name: string;
    name_fr: string;
    name_en: string;
    logo: string;
    link: string;
    link_fr: string;
    link_en: string;
    description: string;
    description_fr: string;
    description_en: string;
    partner_type: number;

    constructor(data: IPartner) {
        Object.assign(this, data);
    }
}
