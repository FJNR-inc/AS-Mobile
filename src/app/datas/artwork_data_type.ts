import { IResponseApi } from "~/app/models/api";
import { IArtworkType } from "~/app/models/artworkType";

export const artworkTypes: IResponseApi<IArtworkType> = {
    count: 7,
    next: null,
    previous: null,
    results: [{id: 59, name: "Photographie", name_fr: "Photographie", name_en: ""}, {
        id: 60,
        name: "Performance",
        name_fr: "Performance",
        name_en: ""
    }, {id: 61, name: "Installation", name_fr: "Installation", name_en: ""}, {
        id: 62,
        name: "Sculpture",
        name_fr: "Sculpture",
        name_en: ""
    }, {id: 63, name: "Vidéo", name_fr: "Vidéo", name_en: ""}, {
        id: 64,
        name: "Impression Numérique",
        name_fr: "Impression Numérique",
        name_en: ""
    }, {id: 65, name: "Autres", name_fr: "Autres", name_en: ""}]
};
