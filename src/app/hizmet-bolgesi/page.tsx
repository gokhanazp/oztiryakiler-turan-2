import Link from "next/link";
import { regions } from "@/data/regions";
import { areas, areaPath } from "@/data/areas";
import { site } from "@/config/site";
import { crumbLd, meta } from "@/lib/seo";
import { CallButtons, DarkBand, Ld, PageTop } from "@/components/ui";
import { IPin } from "@/components/icons";

export const metadata = meta({
  title: "Hizmet Bölgesi: Avrupa Yakası | Öztiryakiler Teknik",
  absolute: true,
  description: "Öztiryakiler Teknik Servis'in yerinde servis verdiği İstanbul Avrupa Yakası ilçeleri ve semtleri: Şişli, Beşiktaş, Fatih, Bakırköy, Esenyurt ve diğerleri.",
  path: "/hizmet-bolgesi",
});

const crumbs = [{ name: "Anasayfa", path: "/" }, { name: "Hizmet bölgesi", path: "/hizmet-bolgesi" }];

export default function Area() {
  return (
    <>
      <Ld data={crumbLd(crumbs)} />
      <PageTop kicker="Hizmet bölgesi" title={`${site.region}'nın 25 ilçesindeyiz`} lead="Merkezimiz Bayrampaşa'da. Teknisyenlerimiz gün içinde bölgelere göre planlanır; bu sayede yakın konumdaki çağrılara hızlı ulaşabiliyoruz. Aşağıda ilçeleri ve sık gittiğimiz semtleri bulabilirsiniz." crumbs={crumbs}>
        <CallButtons className="mt-7" />
      </PageTop>
      <section className="py-12">
        <div className="wrap space-y-10">
          <div>
            <h2 className="text-2xl font-extrabold">Öne çıkan servis bölgelerimiz</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {areas.map((a) => <li key={a.slug}><Link href={areaPath(a)} className="b-line py-2 text-sm">{a.name} Öztiryakiler Servisi</Link></li>)}
            </ul>
          </div>
          {regions.map((r) => (
            <div key={r.group} className="grid gap-6 border-t-2 border-ink pt-6 lg:grid-cols-[280px_1fr]">
              <div>
                <h2 className="text-2xl font-extrabold">{r.group}</h2>
                <p className="mt-2 text-sm text-mute">{r.note}</p>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {r.districts.map((d) => {
                  const ar = areas.find((x) => x.name === d.name);
                  const inner = (
                    <>
                      <p className="flex items-center gap-2 text-lg font-extrabold"><IPin className="h-5 w-5 text-sun-2" />{d.name}</p>
                      <p className="mt-1 text-sm text-ink-3">{d.places}</p>
                      {ar && <p className="mt-2 text-sm font-extrabold underline decoration-sun decoration-2 underline-offset-4">{d.name} servis sayfası →</p>}
                    </>
                  );
                  return (
                    <li key={d.name}>
                      {ar ? <Link href={areaPath(ar)} className="block h-full rounded-[10px] border-2 border-ink bg-white p-4 transition hover:shadow-[4px_4px_0_#17191c]">{inner}</Link> : <div className="h-full rounded-[10px] bg-white p-4">{inner}</div>}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <DarkBand title="Adresinizi söyleyin, en yakın ekibi yönlendirelim" />
    </>
  );
}
