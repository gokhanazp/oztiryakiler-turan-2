import Link from "next/link";
import { notFound } from "next/navigation";
import { getGuide, guides, guidesFor } from "@/data/guides";
import { getDevice } from "@/data/devices";
import { site } from "@/config/site";
import { articleLd, crumbLd, meta } from "@/lib/seo";
import { CallButtons, Crumbs, DarkBand, DarkBg, Ld, Note } from "@/components/ui";
import { DevIcon, IArrow, IBook } from "@/components/icons";

type P = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export const generateStaticParams = () => guides.map((g) => ({ slug: g.slug }));

export async function generateMetadata({ params }: P) {
  const g = getGuide((await params).slug);
  if (!g) return {};
  return meta({ title: g.title, description: g.description, path: `/ariza-rehberi/${g.slug}`, absolute: g.title.length > 37, type: "article" });
}

export default async function GuidePage({ params }: P) {
  const g = getGuide((await params).slug);
  if (!g) notFound();
  const d = getDevice(g.device)!;
  const path = `/ariza-rehberi/${g.slug}`;
  const crumbs = [{ name: "Anasayfa", path: "/" }, { name: "Arıza rehberi", path: "/ariza-rehberi" }, { name: g.title, path }];
  const more = guidesFor(g.device).filter((x) => x.slug !== g.slug);
  const others = guides.filter((x) => x.device !== g.device).slice(0, 3);

  return (
    <>
      <Ld data={[articleLd(g.title, g.description, path, site.contentUpdated), crumbLd(crumbs)]} />
      <article>
        <header className="relative overflow-hidden bg-ink text-white">
          <DarkBg />
          <div className="wrap relative py-10 sm:py-14">
            <Crumbs items={crumbs} dark />
            <p className="mt-5 inline-flex rounded-full bg-sun px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-ink">{d.name} · {g.minutes} dk okuma</p>
            <h1 className="mt-3 max-w-4xl text-[32px] font-extrabold leading-[1.1] sm:text-[46px]">{g.title}</h1>
            <p className="mt-4 max-w-3xl text-[17px] leading-relaxed text-white/75">{g.intro}</p>
          </div>
        </header>

        <div className="wrap grid gap-8 py-10 lg:grid-cols-[1fr_280px]">
          <div className="prose-guide min-w-0 rounded-[16px] bg-white p-5 sm:p-8">
            {g.sections.map((s) => (
              <section key={s.h}>
                <h2>{s.h}</h2>
                {s.p && <p>{s.p}</p>}
                {s.list && <ul>{s.list.map((li) => <li key={li}>{li}</li>)}</ul>}
              </section>
            ))}
            <div className="mt-12 rounded-[10px] border-2 border-ink bg-white p-6 shadow-[6px_6px_0_#ffc21a]">
              <p className="text-lg font-extrabold">Sorun devam ediyor mu?</p>
              <p className="mt-1 text-ink-3">Öztiryakiler {d.name.toLocaleLowerCase("tr-TR")} arızaları için teknisyenimiz yerinde ölçüm yapıp arızayı giderir.</p>
              <CallButtons className="mt-4" />
            </div>
            <div className="mt-8"><Note /></div>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <Link href={`/servis/${d.slug}`} className="flex items-center gap-3 rounded-[10px] bg-ink p-5 text-white hover:bg-ink-3">
              <DevIcon name={d.icon} className="h-8 w-8 text-sun" />
              <span className="font-extrabold leading-tight">{d.h1}<span className="mt-1 block text-xs font-semibold text-white/60">Servis sayfasına git →</span></span>
            </Link>
            {more.length > 0 && (
              <div className="rounded-[10px] bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-mute">Aynı cihaz</p>
                <ul className="mt-3 space-y-3">
                  {more.map((m) => <li key={m.slug}><Link href={`/ariza-rehberi/${m.slug}`} className="text-sm font-bold leading-snug hover:underline">{m.title}</Link></li>)}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </article>

      <section className="pb-2">
        <div className="wrap">
          <p className="text-sm font-extrabold text-sun-2">Diğer rehberler</p>
          <ul className="mt-4 grid gap-4 md:grid-cols-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/ariza-rehberi/${o.slug}`} className="card group flex h-full items-start gap-3 p-5 hover:border-ink">
                  <IBook className="mt-0.5 h-5 w-5 shrink-0" /><span className="font-bold leading-snug">{o.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/ariza-rehberi" className="b-line mt-6">Tüm rehberler <IArrow /></Link>
        </div>
      </section>
      <DarkBand title="Teknisyene mi ihtiyacınız var?" />
    </>
  );
}
