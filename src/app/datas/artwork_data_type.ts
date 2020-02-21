import { IResponseApi } from "~/app/models/api";
import { IArtworkType } from "~/app/models/artworkType";

export const artworkTypes: IResponseApi<IArtworkType> = {
    count: 10,
    next: null,
    previous: null,
    results: [{id: 76, name: "Photographie", name_fr: "Photographie", name_en: ""}, {
        id: 77,
        name: "Performance",
        name_fr: "Performance",
        name_en: ""
    }, {id: 78, name: "Installation", name_fr: "Installation", name_en: ""}, {
        id: 79,
        name: "Sculpture",
        name_fr: "Sculpture",
        name_en: ""
    }, {id: 80, name: "Projection Vidéo", name_fr: "Projection Vidéo", name_en: ""}, {
        id: 81,
        name: "Texte",
        name_fr: "Texte",
        name_en: ""
    }, {id: 82, name: "Installation Sonore", name_fr: "Installation Sonore", name_en: ""}, {
        id: 83,
        name: "Oeuvre Vidéo Générative",
        name_fr: "Oeuvre Vidéo Générative",
        name_en: ""
    }, {
        id: 84,
        name: "Estampes numériques, sculptures et vidéos",
        name_fr: "Estampes numériques, sculptures et vidéos",
        name_en: ""
    }, {id: 85, name: "Exposition", name_fr: "Exposition", name_en: ""}]
};
