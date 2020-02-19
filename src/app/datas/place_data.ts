import { IResponseApi } from "~/app/models/api";
import { IPlace } from "~/app/models/place";

export const places: IResponseApi<IPlace> = {
    count: 11,
    next: null,
    previous: null,
    results: [{
        id: 96,
        plan: null,
        name: "Place Victoria",
        name_fr: "Place Victoria",
        name_en: ""
    }, {
        id: 97,
        plan: "ID_Lieu-2.jpg",
        name: "Cité Internationale",
        name_fr: "Cité Internationale",
        name_en: ""
    }, {
        id: 98,
        plan: null,
        name: "Palais des congrès",
        name_fr: "Palais des congrès",
        name_en: ""
    }, {
        id: 99,
        plan: null,
        name: "Centre commerce mondial",
        name_fr: "Centre commerce mondial",
        name_en: ""
    }, {
        id: 100,
        plan: null,
        name: "Complexe Guy-Favreau",
        name_fr: "Complexe Guy-Favreau",
        name_en: ""
    }, {id: 101, plan: null, name: "Agora UQAM", name_fr: "Agora UQAM", name_en: ""}, {
        id: 102,
        plan: null,
        name: "Château Dufresne",
        name_fr: "Château Dufresne",
        name_en: ""
    }, {id: 103, plan: null, name: "Jacques Parizeau", name_fr: "Jacques Parizeau", name_en: ""}, {
        id: 104,
        plan: null,
        name: "Institut Culturel du Mexique",
        name_fr: "Institut Culturel du Mexique",
        name_en: ""
    }, {
        id: 106,
        plan: null,
        name: "Centre Des Arts Actuels Skol",
        name_fr: "Centre Des Arts Actuels Skol",
        name_en: ""
    }, {id: 105, plan: "slim_hCWqI1R.png", name: "Cinema Du Parc", name_fr: "Cinema Du Parc", name_en: null}]
};
