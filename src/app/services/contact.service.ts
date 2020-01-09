import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import GlobalService from "~/app/services/globalService";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ContactService extends GlobalService {

    URL_CONTACT = this.URL_BASE_API + "/contact";

    constructor(public http: HttpClient) {
        super();
    }

    create(email: string, message: string): Observable<any> {
        const headers = this.getHeaders();

        return this.http.post<any>(
            this.URL_CONTACT,
            {
                sender_email: email,
                message
            },
            {headers}
        );
    }
}
