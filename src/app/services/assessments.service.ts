import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import GlobalService from "./globalService";

@Injectable()
export class AssessmentsService extends GlobalService {

    URL_ASSESSMENT = this.URL_BASE_API + "/assessments";
    URL_PAGE = this.URL_BASE_API + "/pages";
    URL_QUESTION = this.URL_BASE_API + "/questions";
    URL_ANSWER = this.URL_BASE_API + "/answers";

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
                params = params.set(filter.name, filter.value.toString());
            }
        }

        return this.http.get<any>(
            this.URL_ASSESSMENT,
            {headers, params}
        );
    }

    get(id: number): Observable<any> {
        const headers = this.getHeaders();
        const params = new HttpParams();

        return this.http.get<any>(
            this.URL_ASSESSMENT + "/" + id,
            {headers, params}
        );
    }

    listPagesOfAssessment(id: number): Observable<any> {
        const headers = this.getHeaders();
        let params = new HttpParams();
        params = params.set("assessment", id.toString());

        return this.http.get<any>(
            this.URL_PAGE,
            {headers, params}
        );
    }

    listQuestionsOfPage(idPage: number): Observable<any> {
        const headers = this.getHeaders();
        let params = new HttpParams();
        params = params.set("page", idPage.toString());

        return this.http.get<any>(
            this.URL_QUESTION,
            {headers, params}
        );
    }

    listQuestionsOfAssessment(idAssessment: number): Observable<any> {
        const headers = this.getHeaders();
        let params = new HttpParams();
        params = params.set("page__assessment", idAssessment.toString());

        return this.http.get<any>(
            this.URL_QUESTION,
            {headers, params}
        );
    }

    submitAnswer(answer: {question: string, choices: Array<string>}): Observable<any> {
        const headers = this.getHeaders();

        return this.http.post<any>(
            this.URL_ANSWER,
            answer,
            {headers}
        );
    }
}
