import { guidesA } from "./guides-a";
import { guidesB } from "./guides-b";

export type GuideSection = { h: string; p?: string; list?: string[] };
export type Guide = {
  slug: string;
  device: string; // device slug
  title: string;
  description: string;
  minutes: number;
  intro: string;
  sections: GuideSection[];
};

export const guides: Guide[] = [...guidesA, ...guidesB];
export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);
export const guidesFor = (deviceSlug: string) => guides.filter((g) => g.device === deviceSlug);
