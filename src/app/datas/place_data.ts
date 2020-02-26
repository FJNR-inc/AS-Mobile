import { IResponseApi } from "~/app/models/api";
import { IPlace } from "~/app/models/place";

export const places: IResponseApi<IPlace> = {
    count: 13,
    next: null,
    previous: null,
    results: [{
        id: 133,
        plan: "E_Place_Victoria.jpg",
        name: "Place Victoria",
        name_fr: "Place Victoria",
        name_en: "Victoria Sqare"
    }, {
        id: 134,
        plan: "F_Cite_Int.jpg",
        name: "Cité Internationale",
        name_fr: "Cité Internationale",
        name_en: "Cité Internationale"
    }, {
        id: 135,
        plan: "B_Palais_Congres.jpg",
        name: "Palais des Congrès",
        name_fr: "Palais des Congrès",
        name_en: "Palais des Congrès"
    }, {
        id: 136,
        plan: "D_CCMM.jpg",
        name: "Centre Commerce Mondial de Montréal",
        name_fr: "Centre Commerce Mondial de Montréal",
        name_en: "World Trade Centre Montréal"
    }, {
        id: 137,
        plan: "A_Guy_Favreau.jpg",
        name: "Complexe Guy-Favreau",
        name_fr: "Complexe Guy-Favreau",
        name_en: "Guy-Favreau Complex"
    }, {id: 138, plan: null, name: "Agora UQAM ", name_fr: "Agora UQAM ", name_en: "Agoraa UQAM"}, {
        id: 139,
        plan: null,
        name: "Château Dufresne ",
        name_fr: "Château Dufresne ",
        name_en: "Château Dufresne "
    }, {
        id: 140,
        plan: "C_Jacques_Parizeau.jpg",
        name: "Édifice Jacques Parizeau",
        name_fr: "Édifice Jacques Parizeau",
        name_en: "Édifice Jacques-Parizeau"
    }, {
        id: 141,
        plan: null,
        name: "Institut Culturel du Mexique",
        name_fr: "Institut Culturel du Mexique",
        name_en: "Cultural Institute of Mexico"
    }, {
        id: 142,
        plan: null,
        name: "Cinema Du Parc ",
        name_fr: "Cinema Du Parc ",
        name_en: "Cinema du Parc"
    }, {id: 143, plan: null, name: "Skol", name_fr: "Skol", name_en: "Skol"}, {
        id: 144,
        plan: null,
        name: "Observatoire Place Ville Marie ",
        name_fr: "Observatoire Place Ville Marie ",
        name_en: "Observatoire Place Ville Marie "
    }, {id: 145, plan: null, name: "Ellephant", name_fr: "Ellephant", name_en: "Ellephant"}]
};
