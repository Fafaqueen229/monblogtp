import { ref } from "vue"
import img1 from "@/assets/images/img1.svg"
import img2 from "@/assets/images/img2.svg"
import img3 from "@/assets/images/img3.svg"
import img4 from "@/assets/images/img4.svg"
import img5 from "@/assets/images/img5.svg"
import img6 from "@/assets/images/img6.svg"
import img7 from "@/assets/images/img7.svg"
import img8 from "@/assets/images/img8.svg"
export const articles = [
    {
        title: "Qu'est-ce que la rédation de contenu ? 9 conseils pour vous aider à publier d'excellents contenus",
        summary: "La rédaction de contenu est le processus de planification, de rédaction et d‘édition de contenu web, généralement à des fins de marketing numérique. Il peut s‘agir de rédiger des billets de blog et des articles, des scripts pour des vidéos et des podcasts, ainsi que du contenu pour des plateformes spécifiques, comme des tweetstorms sur Twitter ou des posts sur Reddit.",
        id: 1,
        content: "Qu'est-ce que la rédaction de contenu ? La rédaction de contenu est le processus de planification, de rédaction et d'édition de contenu web, généralement à des fins de marketing numérique. Il peut s'agir de la rédaction de billets de blog et d'articles, de scripts pour des vidéos et des podcasts, ainsi que de contenus destinés à des plateformes spécifiques, comme les tweetstorms sur Twitter ou les messages texte sur Reddit. Pourquoi est-il important de bien rédiger votre contenu ?Lorsque la plupart des gens entendent « rédaction de contenu », ils pensent « rédaction d'articles ».Cependant, la rédaction de contenu n'est pas seulement importante pour les articles de blog.En effet, la rédaction de contenu est essentielle pour tous les types de formats de contenu",
        image: img1
    },
    {
        title: "Guide des paramètres URL pour les débutants",
        summary: "Dans ce guide complet, nous explorons les divers aspects des paramètres URL. Découvrez comment utiliser les chaînes de requête sans nuire à vos classements.",
        id: 2,
        content: "Paramètres URL et leur impact sur le SEO.Les paramètres URL font partie intégrante des structures URL. Bien qu'ils soient un atout inestimable entre les mains de professionnels chevronnés du SEO, les chaînes de requête présentent souvent de sérieux défis pour les classements de votre site web.Dans ce guide, vous trouverez les problèmes de SEO les plus courants auxquels vous devez prêter attention lorsque vous travaillez avec des paramètres URL. Que sont les paramètres URL ? Les paramètres URL (également appelés « chaînes de requête » ou « paramètres de requête d'URL ») sont des éléments insérés dans vos URL pour vous aider à filtrer et à organiser le contenu ou à suivre des informations sur votre site web. En un mot, les paramètres URL sont un moyen de transmettre des informations sur un clic en utilisant l'URL elle-même.Pour identifier un paramètre URL, reportez-vous à la partie de l'URL qui suit le point d'interrogation (?). Les paramètres URL sont composés d'une clé et d'une valeur, séparées par un signe égal (=). Les paramètres multiples sont ensuite séparés par une esperluette (&).",
        image: img2
    },
    {
        title: "Guide du débutant en Content Marketing B2B : les tactiques à connaître pour réussir du premier coup",
        summary: "Dans cet article, nous allons vous présenter une sélection d‘exemples de FAQ et vous fournir différents modèles pour vous aider à créer une excellente expérience client pour votre audience.",
        id: 3,
        content: "Les sections de Foire aux questions (FAQ) sont l'occasion d'établir un lien avec votre audience, de la surprendre et la séduire en offrant une très bonne expérience de service clientèle.Les FAQ sont généralement conçues après coup et compilées à la hâte pour répondre à un besoin, ce qui est dommage, car votre FAQ représente une véritable opportunité d'augmenter votre taux de conversion en établissant un lien avec votre audience.Nous allons vous guider à travers une sélection d'exemples de FAQ et vous fournir différents modèles FAQ pour vous aider à créer une excellente expérience client pour votre audience.",
        image: img3
    },
    {
        title: "Trois types de page pilier (et leur utilité pour le classement)",
        summary: "Découvrez comment vous pouvez utiliser les pages piliers et les pages clusters pour enrichir votre contenu, améliorer votre référencement et atteindre votre public cible. Cet article vous présente les types de page pilier et des exemples utiles que vous pouvez reproduire.",
        id: 4,
        content: "Découvrez comment vous pouvez utiliser les pages piliers et les pages clusters pour enrichir votre contenu, améliorer votre référencement et atteindre votre public cible. Cet article vous présente les types de page pilier et des exemples utiles que vous pouvez reproduire.Qu’est-ce qu’une page pilier ?Dans les faits, une page pilier est une sorte de hub ou de plateforme sur laquelle sont construites les pages clusters. La page pilier fournit une vue d’ensemble complète d’un sujet, mais laisse la place à une couverture plus détaillée de la thématique dans les pages clusters – celles-ci se concentrant généralement sur un aspect particulier du sujet, souvent un mot-clé.Par exemple, un pilier de contenu sur le référencement peut aborder brièvement le référencement technique, puis renvoyer à une page cluster qui approfondit le sujet.",
        image: img4
    },
    {
        title: "Comment créer une stratégie SEO efficace en 8 étapes",
        summary: "Une solide stratégie SEO améliorera sans nul doute vos classements organiques dans les moteurs de recherche. Utilisez notre processus en 8 étapes (+ modèle) afin d’élaborer une stratégie pour votre site.",
        id: 5,
        content: "Une stratégie SEO est un plan d’action conçu pour aider à améliorer le classement d’un site web et à augmenter le trafic de recherche organique. Il s’agit d’une liste détaillée de tâches à accomplir qui vous aidera à vous concentrer sur les éléments qui apportent plus de trafic et de revenus grâce au SEO.Dans cet article, nous allons vous montrer exactement comment créer et exécuter une stratégie SEO efficace, étape par étape.Allons-y. Utilisez notre modèle tout au long du processus.",
        image: img5
    },
    {
        title: "Comment chercher des mots clés sur un site web particulier",
        summary: "Si vous recherchez des informations très spécifiques, vous pouvez effectuer une recherche pour trouver des détails sur un site web particulier. Apprenez-en plus avec Semrush !",
        id: 6,
        content: "Google est idéal pour trouver des informations. Il donne des résultats précis en une fraction de seconde. Mais qu'en est-il si vous voulez des informations vraiment spécifiques, comme des résultats provenant de votre site web ou de celui d'un concurrent ? Oui, Google peut aussi s'en charger. Ce guide vous présente une méthode simple et rapide pour rechercher des mots clés en se focalisant sur un site web particulier. Qu'est-ce qu'une recherche sur un site web ? Une recherche sur un site est un moyen de rechercher des contenus ou des sujets spécifiques sur un site web. Il existe plusieurs façons d'effectuer une recherche axée sur un site pour trouver du contenu pertinent, mais celle que vous choisirez dépendra probablement de la raison de votre recherche. Pourquoi effectuer une recherche sur un site web spécifique ? Pour les spécialistes du marketing digital, une recherche pour un site web peut être utile pour recueillir des informations et des données non seulement sur votre site web, mais aussi sur les sites web des concurrents. ",
        image: img6
    },
    {
        title: "SEO B2B : une stratégie complète",
        summary: "Le SEO est l‘un des plus importants canaux d‘acquisition de clients pour les entreprises B2B. Dans ce guide, nous détaillons comment mettre en place une solide stratégie de SEO B2B, étape par étape.",
        id: 7,
        content: "Le SEO est l'un des plus importants canaux d'acquisition de clients pour les entreprises B2B. Avoir une forte visibilité organique à tous les stades du cycle d'achat est un moyen sûr d'accélérer la croissance. Mais quand il s'agit de mettre au point une stratégie de SEO B2B, par où doit-on commencer ? Stimuler la croissance organique d'une entreprise B2B comporte ses propres défis. Il existe des différences entre les stratégies de SEO commercial B2B et B2C. Il est essentiel de comprendre comment aborder ce canal en tenant compte de ces différences, car c'est la clé du succès. Dans ce guide, nous allons décomposer les parties essentielles d'une stratégie complète de SEO B2B et examiner les principales différences avec le SEO B2C.",
        image: img7
    },
    {
        title: "Comment désavouer des liens ?",
        summary: "Les backlinks sont sans doute le facteur de classement le plus important, et c‘est ce qui contribue à l‘incertitude générale autour de leur gestion. Oubliez les discussions qui disent qu‘acquérir des backlinks est une bonne chose.",
        id: 8,
        content: "Les backlinks sont sans doute le facteur de classement le plus important, et c'est ce qui contribue à l'incertitude générale autour de leur gestion. Oubliez les discussions qui disent qu'acquérir des backlinks est une bonne chose. Et si on s'en débarrassait ? Le spécialiste lambda du SEO doit-il se préoccuper de désavouer les liens ? Contrairement à d'autres sujets, Google a été assez franc sur sa façon de voir le désaveu des backlinks et la place qu’ils doivent occuper dans vos outils d'optimisation.",
        image: img8
    }
]