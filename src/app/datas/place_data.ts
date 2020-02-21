import { IResponseApi } from "~/app/models/api";
import { IPlace } from "~/app/models/place";

export const places: IResponseApi<IPlace> = {
    count: 13,
    next: null,
    previous: null,
    results: [{
        id: 120,
        plan: "E_Place_Victoria.jpg",
        name: "Place Victoria",
        name_fr: "Place Victoria",
        name_en: ""
    }, {
        id: 121,
        plan: "F_Cite_Int.jpg",
        name: "Cité Internationale",
        name_fr: "Cité Internationale",
        name_en: ""
    }, {
        id: 122,
        plan: "B_Palais_Congres.jpg",
        name: "Palais des Congrès",
        name_fr: "Palais des Congrès",
        name_en: ""
    }, {
        id: 123,
        plan: "D_CCMM.jpg",
        name: "Centre Commerce Mondial de Montréal",
        name_fr: "Centre Commerce Mondial de Montréal",
        name_en: ""
    }, {
        id: 124,
        plan: "A_Guy_Favreau.jpg",
        name: "Complexe Guy-Favreau",
        name_fr: "Complexe Guy-Favreau",
        name_en: ""
    }, {id: 125, plan: null, name: "Agora UQAM ", name_fr: "Agora UQAM ", name_en: ""}, {
        id: 126,
        plan: null,
        name: "Château Dufresne ",
        name_fr: "Château Dufresne ",
        name_en: ""
    }, {
        id: 127,
        plan: "C_Jacques_Parizeau.jpg",
        name: "Jacques Parizeau",
        name_fr: "Jacques Parizeau",
        name_en: ""
    }, {
        id: 128,
        plan: null,
        name: "Institut Culturel du Mexique",
        name_fr: "Institut Culturel du Mexique",
        name_en: ""
    }, {id: 129, plan: null, name: "Cinema Du Parc ", name_fr: "Cinema Du Parc ", name_en: ""}, {
        id: 130,
        plan: null,
        name: "Centre Des Arts Actuels Skol ",
        name_fr: "Centre Des Arts Actuels Skol ",
        name_en: ""
    }, {
        id: 131,
        plan: null,
        name: "Observatoire Place Ville Marie ",
        name_fr: "Observatoire Place Ville Marie ",
        name_en: ""
    }, {id: 132, plan: null, name: "Ellephant", name_fr: "Ellephant", name_en: ""}]
};
