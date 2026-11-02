import Link from "next/link";
import { notFound } from "next/navigation";
import { getSector, sectors } from "@/data/sectors";
import { getDevice } from "@/data/devices";
import { crumbLd, meta } from "@/lib/seo";
import { CallButtons, DarkBand, Ld, Note, PageTop, SectionTitle } from "@/components/ui";
import { DevIcon, IAlert, IArrow, ICal } from "@/components/icons";

type P = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export const generateStaticParams = () => sectors.map((s) => ({ slug: s.slug }));

export async function generateMetadata({ params }: P) {
  const s = getSector((await params).slug);
  if (!s) return {};
  return meta({ title: s.metaTitle, description: s.metaDescription, path: `/sektorler/${s.slug}`, absolute: true });
}

export default async function SectorPage({ params }: P) {
  const s = getSector((await params).slug);
  if (!s) notFound();
  const path = `/sektorler/${s.slug}`;
  const crumbs = [{ name: "Anasayfa", path: "/" }, { name: "Sektörler", path: "/sektorler" }, { name: s.name, path }];

  return (
    <>
      <Ld data={crumbLd(crumbs)} />
      <PageTop kicker={s.name} title={s.h1} lead={s.lead} crumbs={crumbs}>
        <CallButtons className="mt-7" />
      </PageTop>

      <div className="wrap space-y-10 py-10">
        <section className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-4 text-[17px] leading-[1.8] text-ink-3">
            {s.context.map((p) => <p key={p.slice(0, 30)}>{p}</p>)}
          </div>
          <div className="rounded-[10px] bg-ink p-6 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sun">Kritik ekipmanlar</p>
            <ul className="mt-4 space-y-2">
              {s.critical.map((slug) => {
                const d = getDevice(slug)!;
                return (
                  <li key={slug}>
                    <Link href={`/servis/${slug}`} className="flex items-center justify-between rounded-[10px] border border-white/10 px-3 py-3 font-bold hover:border-sun">
                      <span className="flex items-center gap-3"><DevIcon name={d.icon} className="h-5 w-5 text-sun" />{d.name}</span>
                      <IArrow />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section>
          <SectionTitle title="En sık karşılaştığımız riskler" />
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {s.risks.map((r) => (
              <li key={r.t} className="card p-6">
                <IAlert className="h-6 w-6 text-sun-2" />
                <h3 className="mt-3 text-lg font-extrabold">{r.t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-3">{r.d}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <SectionTitle title="Önerdiğimiz bakım takvimi" lead="Ekipman sayınıza ve kullanım yoğunluğunuza göre birlikte netleştiriyoruz." />
          <div className="mt-6 overflow-hidden rounded-[10px] border-2 border-ink">
            {s.plan.map((p, i) => (
              <div key={p.period} className={`grid gap-3 bg-white px-5 py-5 md:grid-cols-[200px_1fr] ${i > 0 ? "border-t border-line" : ""}`}>
                <p className="flex items-center gap-2 font-extrabold"><ICal className="h-5 w-5 text-sun-2" />{p.period}</p>
                <ul className="flex flex-wrap gap-2">
                  {p.items.map((it) => <li key={it} className="rounded-[10px] bg-paper px-3 py-1.5 text-sm font-semibold">{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <Link href="/periyodik-bakim" className="b-line mt-6">Periyodik bakım nasıl işler? <IArrow /></Link>
        </section>

        <Note />
      </div>

      <section className="pb-2">
        <div className="wrap">
          <p className="text-sm font-extrabold text-sun-2">Diğer sektörler</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {sectors.filter((x) => x.slug !== s.slug).map((x) => (
              <li key={x.slug}><Link href={`/sektorler/${x.slug}`} className="b-line py-2 text-sm">{x.name}</Link></li>
            ))}
          </ul>
        </div>
      </section>
      <DarkBand title={`${s.name} için bakım planı konuşalım`} />
    </>
  );
}
