import type { IconsPaths } from "./components/IconsPath";

export interface Projects {
    title: {en: string; es: string};
    description: {en: string; es: string};
    imgUrl: string;
    tecnologies: string[];
    gitHubLink: string;
    urlLink?: string;
}

export type lenguages = "en" | "es" | "fr"