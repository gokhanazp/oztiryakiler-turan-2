import Link from "next/link";
import { notFound } from "next/navigation";
import { devices, getDevice } from "@/data/devices";
import { guidesFor } from "@/data/guides";
import { sectors } from "@/data/sectors";
import { site, waLink } from "@/config/site";
import { crumbLd, meta, qaLd, serviceLd } from "@/lib/seo";
import { CallButtons, DarkBand, DeviceRows, Ld, Note, PageTop, QAList, SectionTitle, Ticks } from "@/components/ui";
import { IAlert, IArrow, IBook, IClock, IPhone, ITool, IWa } from "@/components/icons";

type P = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export const generateStaticParams = () => devices.map((d) => ({ slug: d.slug }));

export async function generateMetadata({ params }: P) {
  const d = getDevice((await params).slug);
  if (!d) return {};
  return meta({ title: d.metaTitle, description: d.metaDescription, path: `/servis/${d.slug}`, absolute: true });
}

export default async function DevicePage({ params }: P) {
  const d = getDevice((await params).slug);
  if (!d) notFound();
  const path = `/servis/${d.slug}`;
  const crumbs = [{ name: "Anasayfa", path: "/" }, { name: "Servisler", path: "/servis" }, { name: `${d.name} servisi`, path }];
  const related = guidesFor(d.slug);
  const usedIn = sectors.filter((s) => s.critical.includes(d.slug));

  return (
    <>
      <Ld data={[serviceLd(d.h1, d.metaDescription, path, d.scope), crumbLd(crumbs), qaLd(d.qa)]} />
      <PageTop kicker="Servis" title={d.h1} lead={d.lead} crumbs={crumbs}>
        <CallButtons className="mt-7" />
      </PageTop>

      <div className="wrap grid gap-8 py-10 lg:grid-cols-[1fr_320px]">
        <article className="min-w-0 space-y-14">
          <section className="space-y-4 text-[17px] leading-[1.8] text-ink-3">
            {d.body.map((p) => <p key={p.slice(0, 32)}>{p}</p>)}
          </section>

          <section>
            <SectionTitle title="Belirti, olası neden ve yapılan işlem" />
            <div className="mt-6 overflow-hidden rounded-[10px] border-2 border-ink">
              <div className="hidden grid-cols-3 bg-ink px-5 py-3 text-xs font-bold uppercase tracking-wider text-sun md:grid">
                <span>Belirti</span><span>Olası neden</span><span>Ne yapıyoruz</span>
              </div>
              <ul className="divide-y divide-line bg-white">
                {d.symptoms.map((s) => (
                  <li key={s.s} className="grid gap-2 px-5 py-4 md:grid-cols-3 md:gap-6">
                    <p className="font-extrabold">{s.s}</p>
                    <p className="text-[15px] text-ink-3"><span className="mr-1 font-bold text-mute md:hidden">Neden:</span>{s.cause}</p>
                    <p className="text-[15px] text-ink-3"><span className="mr-1 font-bold text-mute md:hidden">İşlem:</span>{s.fix}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <SectionTitle title="Servisi aramadan önce kontrol edin" />
            <ol className="mt-6 space-y-3">
              {d.selfCheck.map((c, i) => (
                <li key={c} className="flex items-start gap-4">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[10px] bg-ink text-sm font-extrabold text-sun">{i + 1}</span>
                  <p className="pt-1 text-[16px]">{c}</p>
                </li>
              ))}
            </ol>
            <p className="mt-5 flex items-start gap-2 text-sm text-mute"><IAlert className="mt-0.5 h-4 w-4 shrink-0" /> Gaz bağlantılarına ve elektrik aksamına kendiniz müdahale etmeyin.</p>
          </section>

          <section>
            <SectionTitle title={`${d.name} servis kapsamı`} />
            <div className="mt-6"><Ticks items={d.scope} /></div>
          </section>

          <section className="rounded-[10px] bg-paper-2 p-6 sm:p-8">
            <h2 className="flex items-center gap-2 text-xl font-extrabold"><ITool /> Ömrünü uzatmak için</h2>
            <ul className="mt-4 space-y-2">
              {d.care.map((c) => <li key={c} className="flex gap-3 text-[15px]"><span className="mt-2 h-1.5 w-4 shrink-0 bg-ink" />{c}</li>)}
            </ul>
          </section>

          {related.length > 0 && (
            <section>
              <SectionTitle title="İlgili arıza rehberleri" />
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {related.map((g) => (
                  <li key={g.slug}>
                    <Link href={`/ariza-rehberi/${g.slug}`} className="card group flex h-full items-start gap-3 p-5 hover:border-ink">
                      <IBook className="mt-0.5 h-5 w-5 shrink-0" />
                      <span className="font-bold leading-snug">{g.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section>
            <SectionTitle title="Sorular ve cevaplar" />
            <div className="mt-6"><QAList items={d.qa} /></div>
          </section>

          <Note />
        </article>

        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-[10px] border-2 border-ink bg-white p-6 shadow-[6px_6px_0_#ffc21a]">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-mute">{d.name} arızası mı?</p>
            <a href={`tel:${site.phoneHref}`} className="mt-2 block text-2xl font-extrabold">{site.phone}</a>
            <p className="mt-2 flex items-center gap-2 text-sm text-mute"><IClock className="h-4 w-4" /> {site.hours.short}</p>
            <div className="mt-5 grid gap-2">
              <a href={`tel:${site.phoneHref}`} className="b-sun w-full"><IPhone /> Hemen ara</a>
              <a href={waLink()} target="_blank" rel="noopener" className="b-wa w-full"><IWa /> WhatsApp&apos;tan yaz</a>
            </div>
          </div>
          {usedIn.length > 0 && (
            <div className="rounded-[10px] bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-mute">Bu cihazın kritik olduğu işletmeler</p>
              <ul className="mt-3 space-y-2">
                {usedIn.map((s) => (
                  <li key={s.slug}><Link href={`/sektorler/${s.slug}`} className="flex items-center justify-between font-bold hover:underline">{s.name} <IArrow /></Link></li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>

      <section className="pb-2">
        <div className="wrap">
          <SectionTitle title="Diğer cihazlar" />
          <div className="mt-6"><DeviceRows exclude={d.slug} /></div>
        </div>
      </section>
      <DarkBand title={`${d.name} için teknisyen yönlendirelim`} text={`${site.region}'nın tüm ilçelerinde yerinde servis.`} />
    </>
  );
}
