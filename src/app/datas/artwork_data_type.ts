import { IResponseApi } from "~/app/models/api";
import { IArtworkType } from "~/app/models/artworkType";

export const artworkTypes: IResponseApi<IArtworkType> = {
    count: 10,
    next: null,
    previous: null,
    results: [{id: 206, name: "Photographie", name_fr: "Photographie", name_en: "Photography"}, {
        id: 207,
        name: "Performance",
        name_fr: "Performance",
        name_en: "Performance"
    }, {id: 208, name: "Installation", name_fr: "Installation", name_en: "Installation"}, {
        id: 209,
        name: "Sculpture",
        name_fr: "Sculpture",
        name_en: "Sculpture"
    }, {
        id: 210,
        name: "Projection Vidéo",
        name_fr: "Projection Vidéo",
        name_en: "Video projection"
    }, {id: 211, name: "Texte", name_fr: "Texte", name_en: "Text"}, {
        id: 212,
        name: "Installation Sonore",
        name_fr: "Installation Sonore",
        name_en: "Sound Installation"
    }, {
        id: 213,
        name: "Oeuvre Vidéo Générative",
        name_fr: "Oeuvre Vidéo Générative",
        name_en: "Generative Video Work"
    }, {
        id: 214,
        name: "Estampes numériques, sculptures et vidéos",
        name_fr: "Estampes numériques, sculptures et vidéos",
        name_en: "Digital prints, sculptures and videos"
    }, {id: 215, name: "Exposition", name_fr: "Exposition", name_en: "Exposition"}]
};
