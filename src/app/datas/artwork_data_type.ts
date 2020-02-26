import { IResponseApi } from "~/app/models/api";
import { IArtworkType } from "~/app/models/artworkType";

export const artworkTypes: IResponseApi<IArtworkType> = {
    count: 10,
    next: null,
    previous: null,
    results: [{id: 86, name: "Photographie", name_fr: "Photographie", name_en: "Photography"}, {
        id: 87,
        name: "Performance",
        name_fr: "Performance",
        name_en: "Performance"
    }, {id: 88, name: "Installation", name_fr: "Installation", name_en: "Installation"}, {
        id: 89,
        name: "Sculpture",
        name_fr: "Sculpture",
        name_en: "Sculpture"
    }, {id: 90, name: "Projection Vidéo", name_fr: "Projection Vidéo", name_en: "Video projection"}, {
        id: 91,
        name: "Texte",
        name_fr: "Texte",
        name_en: "Text"
    }, {
        id: 92,
        name: "Installation Sonore",
        name_fr: "Installation Sonore",
        name_en: "Sound Installation"
    }, {
        id: 93,
        name: "Oeuvre Vidéo Générative",
        name_fr: "Oeuvre Vidéo Générative",
        name_en: "Generative Video Work"
    }, {
        id: 94,
        name: "Estampes numériques, sculptures et vidéos",
        name_fr: "Estampes numériques, sculptures et vidéos",
        name_en: "Digital prints, sculptures and videos"
    }, {id: 95, name: "Exposition", name_fr: "Exposition", name_en: "Exposition"}]
};
