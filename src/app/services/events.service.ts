import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import GlobalService from "./globalService";

@Injectable()
export class EventsService extends GlobalService {

    urlEvents = this.URL_BASE_API + "/event";

    constructor(public http: HttpClient) {
        super();
    }

    list(filters: Array<{name: string, value: any}> = null, limit = 100, offset = 0): Observable<any> {
        const headers = this.getHeaders();
        let params = new HttpParams();
        params = params.set("limit", limit.toString());
        params = params.set("offset", offset.toString());

        for (const filter of filters) {
            params = params.set(filter.name, filter.value);
        }

        return this.http.get<any>(
            this.urlEvents,
            {headers, params}
        );
    }

    get(id: number): Observable<any> {
        const headers = this.getHeaders();
        const params = new HttpParams();

        return this.http.get<any>(
            this.urlEvents + "/" + id,
            {headers, params}
        );
    }
}
