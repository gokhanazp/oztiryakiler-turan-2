import Link from "next/link";
import { notFound } from "next/navigation";
import { areas, areaPath, getArea, AREA_SUFFIX } from "@/data/areas";
import { getDevice } from "@/data/devices";
import { site } from "@/config/site";
import { abs, crumbLd, meta, qaLd } from "@/lib/seo";
import { CallButtons, DarkBand, DeviceRows, Ld, Note, PageTop, QAList, SectionTitle, Ticks } from "@/components/ui";
import { DevIcon, IArrow, IPin } from "@/components/icons";

type P = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export const generateStaticParams = () => areas.map((a) => ({ slug: `${a.slug}${AREA_SUFFIX}` }));

const title = (n: string) => {
  const base = `${n} Öztiryakiler Servisi`;
  return base.length + 16 <= 60 ? `${base} | Yerinde Tamir` : base;
};

export async function generateMetadata({ params }: P) {
  const a = getArea((await params).slug);
  if (!a) return {};
  const devs = a.devices.slice(0, 3).map((d) => getDevice(d.slug)!.name.toLocaleLowerCase("tr-TR")).join(", ");
  return meta({
    title: title(a.name),
    absolute: true,
    description: `${a.name} Öztiryakiler servisi: ${devs} ve diğer ticari mutfak ekipmanlarında yerinde arıza onarımı ve bakım. ${a.places.slice(0, 2).join(", ")} · ${site.phone}`,
    path: areaPath(a),
  });
}

export default async function AreaPage({ params }: P) {
  const a = getArea((await params).slug);
  if (!a) notFound();
  const path = areaPath(a);
  const crumbs = [{ name: "Anasayfa", path: "/" }, { name: "Hizmet bölgesi", path: "/hizmet-bolgesi" }, { name: a.name, path }];
  const svcLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${a.name} Öztiryakiler Servisi`,
    serviceType: "Ticari mutfak ekipmanı teknik servisi",
    url: abs(path),
    provider: { "@id": `${site.url}/#org` },
    areaServed: { "@type": "City", name: `${a.name}, İstanbul` },
  };

  return (
    <>
      <Ld data={[crumbLd(crumbs), svcLd, qaLd(a.qa)]} />
      <PageTop kicker={`${a.name} · Yerinde servis`} title={`${a.name} Öztiryakiler Servisi`} lead={a.lead} crumbs={crumbs}>
        <CallButtons className="mt-7" />
      </PageTop>

      <div className="wrap space-y-12 py-10">
        <section className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="text-2xl font-extrabold">{a.loc} hangi mutfaklara servis veriyoruz?</h2>
            <div className="mt-4 space-y-4 text-[17px] leading-[1.8] text-ink-3">
              {a.profile.map((p) => <p key={p.slice(0, 30)}>{p}</p>)}
            </div>
            <div className="mt-6"><Ticks items={a.businesses} /></div>
          </div>
          <aside className="space-y-4">
            <div className="rounded-[10px] bg-ink p-6 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-sun">Gittiğimiz semtler</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {a.places.map((p) => <li key={p} className="rounded-[10px] border border-white/15 px-3 py-1.5 text-sm font-bold">{p}</li>)}
              </ul>
            </div>
            <div className="panel bg-white p-6">
              <p className="flex items-center gap-2 font-extrabold"><IPin className="h-5 w-5 text-sun-2" />Merkezden ulaşım</p>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-3">{a.route}</p>
              <p className="mt-3 text-sm font-semibold text-ink-3">Merkez: {site.address.display}</p>
            </div>
          </aside>
        </section>

        <section>
          <SectionTitle title={`${a.loc} en sık çağrıldığımız cihazlar`} lead="Bölgedeki işletme tiplerine göre öne çıkan arızalar." />
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {a.devices.map((x) => {
              const d = getDevice(x.slug)!;
              return (
                <li key={x.slug}>
                  <Link href={`/servis/${x.slug}`} className="card flex h-full flex-col p-6 transition hover:-translate-y-0.5">
                    <DevIcon name={d.icon} className="h-7 w-7 text-sun-2" />
                    <h3 className="mt-3 text-lg font-extrabold">Öztiryakiler {d.name} Servisi</h3>
                    <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-3">{x.note}</p>
                    <span className="mt-4 flex items-center gap-1 text-sm font-extrabold">Arızalar ve onarım <IArrow /></span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <section>
          <SectionTitle title="Tüm cihazlar" lead={`${a.name} genelinde aşağıdaki Öztiryakiler ekipmanlarının tamamına servis veriyoruz.`} />
          <div className="mt-6"><DeviceRows /></div>
        </section>

        <section className="max-w-4xl">
          <SectionTitle title={`${a.name} servisi hakkında sorular`} />
          <div className="mt-6"><QAList items={a.qa} /></div>
        </section>

        <Note />
      </div>

      <section className="pb-2">
        <div className="wrap">
          <p className="text-sm font-extrabold text-sun-2">Diğer servis bölgelerimiz</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {areas.filter((x) => x.slug !== a.slug).map((x) => (
              <li key={x.slug}><Link href={areaPath(x)} className="b-line py-2 text-sm">{x.name} Öztiryakiler Servisi</Link></li>
            ))}
            <li><Link href="/hizmet-bolgesi" className="b-line py-2 text-sm">Tüm ilçeler</Link></li>
          </ul>
        </div>
      </section>
      <DarkBand title={`${a.loc}ki işletmeniz için hemen servis isteyin`} />
    </>
  );
}
