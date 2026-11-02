import type { Metadata } from "next";
import { site } from "@/config/site";
import { allDistricts } from "@/data/regions";

export const abs = (path = "/") => `${site.url}${path === "/" ? "" : path}`;

export function clamp(text: string, max = 155) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,.;:–-]+$/, "") + "…";
}

type M = { title: string; description: string; path: string; absolute?: boolean; noindex?: boolean; type?: "website" | "article" };

export function meta({ title, description, path, absolute, noindex, type = "website" }: M): Metadata {
  const url = abs(path);
  const d = clamp(description);
  return {
    title: absolute ? { absolute: title } : title,
    description: d,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: true } : undefined,
    openGraph: { type, locale: "tr_TR", url, siteName: site.name, title, description: d, images: [{ url: abs("/og.png"), width: 1200, height: 630, alt: site.name }] },
    twitter: { card: "summary_large_image", title, description: d, images: [abs("/og.png")] },
  };
}

const ORG = `${site.url}/#org`;

export function orgLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": ORG,
    name: site.name,
    legalName: site.legalName || undefined,
    description: `${site.tagline}. Öztiryakiler marka cihazlara bağımsız teknik servis (yetkili servis değildir).`,
    url: abs("/"),
    telephone: site.phoneHref,
    email: site.email || undefined,
    image: abs("/og.png"),
    logo: abs("/logo.png"),
    priceRange: "₺₺",
    address: { "@type": "PostalAddress", streetAddress: site.address.street, addressLocality: site.address.district, addressRegion: site.city, postalCode: site.address.postalCode, addressCountry: "TR" },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.display)}`,
    openingHoursSpecification: site.hours.schema.map((h) => ({ "@type": "OpeningHoursSpecification", dayOfWeek: h.days, opens: h.opens, closes: h.closes })),
    areaServed: allDistricts.map((n) => ({ "@type": "City", name: `${n}, İstanbul` })),
    sameAs: site.social.length ? site.social : undefined,
  };
}

export function webLd() {
  return { "@context": "https://schema.org", "@type": "WebSite", "@id": `${site.url}/#web`, url: abs("/"), name: site.name, inLanguage: "tr-TR", publisher: { "@id": ORG } };
}

export function crumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: abs(it.path) })),
  };
}

export function serviceLd(name: string, description: string, path: string, parts: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: abs(path),
    provider: { "@id": ORG },
    areaServed: { "@type": "AdministrativeArea", name: "İstanbul Avrupa Yakası" },
    hasOfferCatalog: { "@type": "OfferCatalog", name: `${name} kapsamı`, itemListElement: parts.map((p) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: p } })) },
  };
}

export function articleLd(title: string, description: string, path: string, date: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: abs(path),
    mainEntityOfPage: abs(path),
    datePublished: date,
    dateModified: date,
    inLanguage: "tr-TR",
    author: { "@type": "Organization", name: site.name, url: abs("/") },
    publisher: { "@id": ORG },
    image: abs("/og.png"),
  };
}

export function qaLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}
