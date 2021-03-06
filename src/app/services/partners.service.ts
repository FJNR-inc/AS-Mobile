import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import GlobalService from "./globalService";

@Injectable()
export class PartnersService extends GlobalService {

    URL_PARTNERS = this.URL_BASE_API + "/partner";
    URL_PARTNER_TYPES = this.URL_BASE_API + "/partner_type";

    constructor(public http: HttpClient) {
        super();
    }

    list(filters: Array<{name: string, value: any}> = null, limit = 100, offset = 0): Observable<any> {
        const headers = this.getHeaders();
        let params = new HttpParams();
        params = params.set("limit", limit.toString());
        params = params.set("offset", offset.toString());

        if (filters != null) {
            for (const filter of filters) {
                if (filter.name === "partner_type__key") {
                    params = params.set("partner_type__key", filter.value);
                }
            }
        }

        return this.http.get<any>(
            this.URL_PARTNERS,
            {headers: headers, params: params}
        );
    }

    listSection(filters: Array<{name: string, value: any}> = null, limit = 100, offset = 0): Observable<any> {
        const headers = this.getHeaders();
        let params = new HttpParams();
        params = params.set("limit", limit.toString());
        params = params.set("offset", offset.toString());

        if (filters != null) {
            for (const filter of filters) {
                if (filter.name === "partner_type__key") {
                    params = params.set("partner_type__key", filter.value);
                }
            }
        }

        return this.http.get<any>(
            this.URL_PARTNER_TYPES,
            {headers: headers, params: params}
        );
    }
}
