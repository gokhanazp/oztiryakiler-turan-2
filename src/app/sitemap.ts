import type { MetadataRoute } from "next";
import { devices } from "@/data/devices";
import { guides } from "@/data/guides";
import { sectors } from "@/data/sectors";
import { areas, areaPath } from "@/data/areas";
import { site } from "@/config/site";
import { abs } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(site.contentUpdated);
  const e = (p: string) => ({ url: abs(p), lastModified });
  return [
    e("/"), e("/servis"), e("/ariza-rehberi"), e("/sektorler"), e("/periyodik-bakim"), e("/servis-ucreti"),
    e("/hizmet-bolgesi"), e("/hakkimizda"), e("/iletisim"), e("/sss"),
    ...devices.map((d) => e(`/servis/${d.slug}`)),
    ...guides.map((g) => e(`/ariza-rehberi/${g.slug}`)),
    ...sectors.map((s) => e(`/sektorler/${s.slug}`)),
    ...areas.map((a) => e(areaPath(a))),
    e("/yasal-uyari"), e("/kvkk"),
  ];
}
