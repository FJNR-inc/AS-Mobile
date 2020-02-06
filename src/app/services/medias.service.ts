import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import GlobalService from "./globalService";

@Injectable()
export class MediasService extends GlobalService {

    urlMedias = this.URL_BASE_API + "/artwork_media";

    constructor(public http: HttpClient) {
        super();
    }

    list(filters: Array<{name: string, value: any}> = null, limit = 100, offset = 0): Observable<any> {
        const headers = this.getHeaders();
        let params = new HttpParams();
        params = params.set("limit", limit.toString());
        params = params.set("offset", offset.toString());

        if (filters) {
            for (const filter of filters) {
                params = params.set(filter.name, filter.value);
            }
        }

        return this.http.get<any>(
            this.urlMedias,
            {headers, params}
        );
    }

    get(id: number): Observable<any> {
        const headers = this.getHeaders();
        const params = new HttpParams();

        return this.http.get<any>(
            this.urlMedias + "/" + id,
            {headers, params}
        );
    }
}
