import { IResponseApi } from "~/app/models/api";
import { IEvent } from "~/app/models/event";

export const events: IResponseApi<IEvent> = {
    count: 8, next: null, previous: null, results: [{
        id: 57,
        event_type: {
            id: 68,
            name: "Rencontre avec artiste",
            name_fr: "Rencontre avec artiste",
            name_en: "Talk with artist"
        },
        place: {
            id: 292,
            plan: "D_CCMM.jpg",
            name: "Centre Commerce Mondial de Montréal",
            name_fr: "Centre Commerce Mondial de Montréal",
            name_en: "World Trade Centre Montréal"
        },
        picture: "julie-piche.jpg",
        name: "Rencontre avec l'artiste Julie Piché",
        description: "Vous êtes invités à assister à une visite unique! Découvrez les œuvres des souterrains à travers les yeux de nos commissaires. Ainsi entrez dans l’univers de ceux qui constituent notre festival cette année.",
        description_fr: "Vous êtes invités à assister à une visite unique! Découvrez les œuvres des souterrains à travers les yeux de nos commissaires. Ainsi entrez dans l’univers de ceux qui constituent notre festival cette année.",
        description_en: "You are invited to attend a unique visit! Discover the art that lives in our underground through the eyes of our curators and step into the world of this year’s festival participants.",
        link: "https://www.eventbrite.ca/e/billets-visite-guidee-rencontre-avec-lartiste-julie-piche-96122508009",
        date: "2020-03-22T14:00:00Z"
    }, {
        id: 58,
        event_type: {id: 66, name: "Visite guidée", name_fr: "Visite guidée", name_en: "Guid Tour"},
        place: {
            id: 292,
            plan: "D_CCMM.jpg",
            name: "Centre Commerce Mondial de Montréal",
            name_fr: "Centre Commerce Mondial de Montréal",
            name_en: "World Trade Centre Montréal"
        },
        picture: "visite-guidee.jpg",
        name: "Visite guidée ",
        description: "Rassemblant aussi bien des néophytes que des amateurs, cette visite guidée vous permettra d'en connaître un peu plus sur les œuvres du parcours souterrain et ce, sous différents angles.",
        description_fr: "Rassemblant aussi bien des néophytes que des amateurs, cette visite guidée vous permettra d'en connaître un peu plus sur les œuvres du parcours souterrain et ce, sous différents angles.",
        description_en: "Attracting by both neophytes and enthusiasts, this guided tour helps you discover more about the artworks that make up the underground route as well as view them through different angles. The discussion will revolve around the theme of the festival: Reset, and how the artists interpreted it.",
        link: "https://www.eventbrite.ca/e/billets-visite-guidee-rencontre-avec-lartiste-julie-piche-96122508009",
        date: "2020-03-22T14:00:00Z"
    }, {
        id: 59,
        event_type: {id: 65, name: "Visite Focus", name_fr: "Visite Focus", name_en: "Focus Visit"},
        place: {id: 294, plan: null, name: "Agora UQAM ", name_fr: "Agora UQAM ", name_en: "Agoraa UQAM"},
        picture: "Lynn-Banon-Focus.jpg",
        name: "FOCUS - Lynn Banon, Commissaire invité",
        description: "Ce mardi, c'est la commissaire invité Lynn Bannon qui sera votre guide. Elle vous accueillera dès 18 heure à l'Agora, au Pavillon Judith Jasmin à l'UQAM. Le long du parcours, votre guide vous dévoilera un aperçu des coulisses du festival et partagera ses pensées relatives au thème du festival : RESET. Lynn Bannon se concentrera sur les oeuvres exposées par trois artistes canadiens à L'UQAM : Sandra Lachance, Laurent Lamarche et Andrée-Anne Mercier.",
        description_fr: "Ce mardi, c'est la commissaire invité Lynn Bannon qui sera votre guide. Elle vous accueillera dès 18 heure à l'Agora, au Pavillon Judith Jasmin à l'UQAM. Le long du parcours, votre guide vous dévoilera un aperçu des coulisses du festival et partagera ses pensées relatives au thème du festival : RESET. Lynn Bannon se concentrera sur les oeuvres exposées par trois artistes canadiens à L'UQAM : Sandra Lachance, Laurent Lamarche et Andrée-Anne Mercier.",
        description_en: "This Tuesday, guest curator Lynn Bannon will be your guide. Along the underground path, your guide will give you a behind-the-scenes look at the festival and share her thoughts on the festival's theme: RESET. Lynn Bannon will focus on the works exhibited by three Canadian artists at UQAM: Sandra Lachance, Laurent Lamarche and Andrée-Anne Mercier.",
        link: "https://www.eventbrite.ca/e/billets-focus-lynn-banon-commissaire-invite-96465052569",
        date: "2020-03-19T18:00:00Z"
    }, {
        id: 60,
        event_type: {id: 69, name: "Table ronde", name_fr: "Table ronde", name_en: "Round Table Discussion"},
        place: {id: 294, plan: null, name: "Agora UQAM ", name_fr: "Agora UQAM ", name_en: "Agoraa UQAM"},
        picture: "table-ronde-RAAV-UQAM.jpg",
        name: "Table Ronde : Comment la recherche création permet le RESET ?",
        description: "Venez partager un moment de discussion et de questionnement autour du thème : Comment la recherche création permet le RESET ? Cette année, le Festival Art Souterrain souhaite interpeller les passants des souterrains de Montréal  autour de la thématique RESET. Si vous aviez un bouton permettant de tout effacer et recommencer, appuierez-vous ? Une cinquantaine d'artistes du Québec et au-delà se sont penchés sur le sujet et vous invitent à découvrir leur interprétation dans les souterrains de Montréal. ",
        description_fr: "Venez partager un moment de discussion et de questionnement autour du thème : Comment la recherche création permet le RESET ? Cette année, le Festival Art Souterrain souhaite interpeller les passants des souterrains de Montréal  autour de la thématique RESET. Si vous aviez un bouton permettant de tout effacer et recommencer, appuierez-vous ? Une cinquantaine d'artistes du Québec et au-delà se sont penchés sur le sujet et vous invitent à découvrir leur interprétation dans les souterrains de Montréal. ",
        description_en: "Come and share a moment of discussion and questioning around the theme: How does creative research enable RESET? This year, the Festival Art Souterrain wants to question the passers-by of Montreal's undergrounds around the theme RESET. If you had a button to erase everything and start over, would you press it? Over fifty artists from Quebec and beyond have been working on the subject and invite you to discover their interpretation in Montreal's undergrounds. ",
        link: "https://www.eventbrite.ca/e/billets-table-ronde-comment-la-recherche-creation-permet-le-reset-97758531399",
        date: "2020-03-16T12:00:00Z"
    }, {
        id: 61,
        event_type: {
            id: 68,
            name: "Rencontre avec artiste",
            name_fr: "Rencontre avec artiste",
            name_en: "Talk with artist"
        },
        place: {
            id: 300,
            plan: null,
            name: "Observatoire Place Ville Marie ",
            name_fr: "Observatoire Place Ville Marie ",
            name_en: "Observatoire Place Ville Marie "
        },
        picture: "Bonnie-Baxter.jpg",
        name: "Rencontre avec Bonnie Baxter",
        description: "Venez discuter avec l'artiste Bonnie Baxter dans ce lieu magique qu'est l'Observatoire sur sa vision de RESET et son engagement dans l'art contemporain.",
        description_fr: "Venez discuter avec l'artiste Bonnie Baxter dans ce lieu magique qu'est l'Observatoire sur sa vision de RESET et son engagement dans l'art contemporain.",
        description_en: "Come and talk with the artist Bonnie Baxter in this magical place of the Observatory on her vision of \"RESET\" and her commitment to contemporary art.",
        link: "https://www.eventbrite.ca/e/billets-rencontre-avec-bonnie-baxter-98527088173",
        date: "2020-03-16T17:30:00Z"
    }, {
        id: 62,
        event_type: {id: 66, name: "Visite guidée", name_fr: "Visite guidée", name_en: "Guid Tour"},
        place: {
            id: 292,
            plan: "D_CCMM.jpg",
            name: "Centre Commerce Mondial de Montréal",
            name_fr: "Centre Commerce Mondial de Montréal",
            name_en: "World Trade Centre Montréal"
        },
        picture: "visite-guidee.jpg",
        name: "Guid tour",
        description: "Rassemblant aussi bien des néophytes que des amateurs, cette visite guidée vous permettra d'en connaître un peu plus sur les œuvres du parcours souterrain et ce, sous différents angles.",
        description_fr: "Rassemblant aussi bien des néophytes que des amateurs, cette visite guidée vous permettra d'en connaître un peu plus sur les œuvres du parcours souterrain et ce, sous différents angles.",
        description_en: "Attracting by both neophytes and enthusiasts, this guided tour helps you discover more about the artworks that make up the underground route as well as view them through different angles. The discussion will revolve around the theme of the festival: Reset, and how the artists interpreted it.",
        link: "https://www.eventbrite.ca/e/billets-guided-tour-reset-96135765663",
        date: "2020-03-21T14:00:00Z"
    }, {
        id: 63,
        event_type: {id: 66, name: "Visite guidée", name_fr: "Visite guidée", name_en: "Guid Tour"},
        place: {
            id: 292,
            plan: "D_CCMM.jpg",
            name: "Centre Commerce Mondial de Montréal",
            name_fr: "Centre Commerce Mondial de Montréal",
            name_en: "World Trade Centre Montréal"
        },
        picture: "visite-guidee.jpg",
        name: "Visite guidée ",
        description: "Rassemblant aussi bien des néophytes que des amateurs, cette visite guidée vous permettra d'en connaître un peu plus sur les œuvres du parcours souterrain et ce, sous différents angles.",
        description_fr: "Rassemblant aussi bien des néophytes que des amateurs, cette visite guidée vous permettra d'en connaître un peu plus sur les œuvres du parcours souterrain et ce, sous différents angles.",
        description_en: "Attracting by both neophytes and enthusiasts, this guided tour helps you discover more about the artworks that make up the underground route as well as view them through different angles. The discussion will revolve around the theme of the festival: Reset, and how the artists interpreted it.",
        link: "https://www.eventbrite.ca/e/billets-visite-guidee-reset-96119926287",
        date: "2020-03-15T14:00:00Z"
    }, {
        id: 64,
        event_type: {id: 70, name: "Activité", name_fr: "Activité", name_en: "Activity"},
        place: {
            id: 298,
            plan: "Minuit-au-parc.jpg",
            name: "Cinema Du Parc ",
            name_fr: "Cinema Du Parc ",
            name_en: "Cinema du Parc"
        },
        picture: "Minuit-au-parc.jpg",
        name: "Minuit au Parc",
        description: "2001, l’Odysée de l’espace est un classique du cinéma qui explore avec brio la thématique du Festival Art Souterrain 2020 : « RESET ». Découvrez, ou redécouvrez, ce chef d’œuvre grâce à notre partenariat avec le Cinéma du Parc. Minuit au Parc est un évènement incontournable de votre fin de semaine pour aborder notre thématique sous un nouvel angle !",
        description_fr: "2001, l’Odysée de l’espace est un classique du cinéma qui explore avec brio la thématique du Festival Art Souterrain 2020 : « RESET ». Découvrez, ou redécouvrez, ce chef d’œuvre grâce à notre partenariat avec le Cinéma du Parc. Minuit au Parc est un évènement incontournable de votre fin de semaine pour aborder notre thématique sous un nouvel angle !",
        description_en: "Artifice and fantasy force us to deal with the social issues we are inevitably confronted by. As a response to the utopian universe we are encouraged to buy into by advertisements, Mathieu Latulippe and Associates create a space where we can reflect upon how we live together and inhabit the world.",
        link: "https://www.eventbrite.ca/e/billets-minuit-au-parc-98685909211",
        date: "2020-03-22T18:00:00Z"
    }]
};
