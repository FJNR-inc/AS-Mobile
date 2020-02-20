import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import GlobalService from "./globalService";
import { partnerTypes } from "~/app/datas/partner_types_data";
import { InternationalizationService } from "~/app/services/internationalization.service";
import { IResponseApi } from "~/app/models/api";
import { IPartnerType } from "~/app/models/partner-type";
import { IPartner } from "~/app/models/partner";

@Injectable()
export class PartnersService extends GlobalService {

    URL_PARTNERS = this.URL_BASE_API + "/partner";
    URL_PARTNER_TYPES = this.URL_BASE_API + "/partner_type";

    constructor(public http: HttpClient) {
        super();
    }

    listSection(): Observable<any> {
        const local = InternationalizationService.getLocale();
        const newPartnerTypesResponse: IResponseApi<IPartnerType> = JSON.parse(JSON.stringify(partnerTypes));
        newPartnerTypesResponse.results = JSON.parse(JSON.stringify(partnerTypes)).results.map(
            (partnerType: IPartnerType) => {
                partnerType.name = partnerType["name_" + local];

                partnerType.partner_set = partnerType.partner_set.map(
                    (partner: IPartner) => {
                        partner.name = partner["name_" + local];
                        partner.link = partner["link_" + local];
                        partner.description = partner["description_" + local];

                        return partner;
                    }
                );

                return partnerType;
            });

        return of(newPartnerTypesResponse);
    }
}
