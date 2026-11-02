import Link from "next/link";
import { devices } from "@/data/devices";
import { guides } from "@/data/guides";
import { sectors } from "@/data/sectors";
import { allDistricts } from "@/data/regions";
import { site, waLink } from "@/config/site";
import { meta, qaLd } from "@/lib/seo";
import { DarkBand, DarkBg, DeviceRows, Ld, Note, QAList, SectionTitle, TrustRow } from "@/components/ui";
import QuickRequest from "@/components/QuickRequest";
import { DevIcon, IArrow, IBook, ICal, ICheck, IPhone, IPin, ITool, IWa } from "@/components/icons";
import type { QA } from "@/data/devices";

export const metadata = meta({
  title: "Öztiryakiler Teknik Servis | Mutfak Ekipmanı Tamiri",
  description: "Öztiryakiler ocak, fırın, fritöz, buzdolabı ve bulaşık makinesi arızalarında yerinde onarım, arıza rehberleri ve bakım. Avrupa Yakası: 0534 748 61 07.",
  path: "/",
  absolute: true,
});

const steps = [
  { t: "Arızayı anlatın", d: "Telefon, WhatsApp veya hızlı talep formuyla cihazı, belirtiyi ve adresi iletin." },
  { t: "Teknisyen yola çıkar", d: "Size en yakın ekip, arızaya uygun parçalarla yönlendirilir." },
  { t: "Tespit ve fiyat onayı", d: "Arıza ölçümle bulunur; ücreti öğrenmeden işlem başlamaz." },
  { t: "Onarım, test, teslim", d: "Cihaz önünüzde çalıştırılır; faturalı ve garantili teslim edilir." },
];

const homeQa: QA[] = [
  { q: "Öztiryakiler'in yetkili servisi misiniz?", a: "Hayır. Öztiryakiler marka cihazlara bakım ve onarım yapan bağımsız bir teknik servisiz. Garanti süresi devam eden cihazlarınız için üreticinin yetkili servisine başvurmanızı öneririz." },
  { q: "Hangi saatlerde servis veriyorsunuz?", a: `${site.hours.long}. Soğutma ve gaz arızaları gibi acil durumlara öncelik veriyoruz.` },
  { q: "Teknisyen gelmeden fiyat öğrenebilir miyim?", a: "Belirtiyi ve cihaz modelini anlatırsanız yaklaşık bir aralık verebiliriz. Kesin ücret, arıza yerinde tespit edildikten sonra ve işe başlamadan önce bildirilir." },
  { q: "Restoranımız için düzenli bakım yapıyor musunuz?", a: "Evet. İşletmenizdeki ekipmanlara göre aylık veya üç aylık bakım planı hazırlıyoruz. Ayrıntılar Periyodik Bakım sayfasında." },
];

export default function Home() {
  return (
    <>
      <Ld data={qaLd(homeQa)} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-white">
        <DarkBg />
        <div className="wrap relative grid gap-10 pb-24 pt-12 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:pb-28 lg:pt-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[13px] font-semibold text-white/85">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#2ecc71]" /> {site.region}&apos;nda yerinde servis
            </p>
            <h1 className="mt-6 text-[38px] font-extrabold leading-[1.04] sm:text-[56px] lg:text-[64px]">
              Öztiryakiler mutfak ekipmanı <span className="text-sun">tamir ve bakım</span> servisi
            </h1>
            <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-white/75">
              Ocak, fırın, fritöz, buzdolabı ve bulaşık makinesi arızalarında restoran, otel ve yemekhanelere yerinde servis. Arızayı ölçerek
              buluyor, onayınızla onarıyoruz.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${site.phoneHref}`} className="b-sun px-6 py-4 text-[17px]"><IPhone /> {site.phone}</a>
              <a href={waLink()} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-[10px] border-2 border-white/25 px-6 py-3.5 text-[17px] font-bold transition hover:border-white hover:bg-white hover:text-ink"><IWa /> WhatsApp</a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[14px] text-white/80">
              {["10 cihaz grubunda uzman", "Pazar günü acil servis", "Faturalı ve garantili"].map((t) => (
                <li key={t} className="flex items-center gap-2"><span className="grid h-5 w-5 place-items-center rounded-full bg-sun text-ink"><ICheck className="h-3 w-3" /></span>{t}</li>
              ))}
            </ul>
          </div>
          <QuickRequest />
        </div>
      </section>

      {/* GÜVEN */}
      <section className="wrap relative z-10 -mt-14">
        <TrustRow />
      </section>

      {/* SERVİSLER */}
      <section className="wrap sec">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
          <SectionTitle n="Servisler" title="Hangi Öztiryakiler cihazınız arızalı?" lead="Cihazı seçin; sık görülen belirtileri, olası nedenleri ve servis kapsamını görün." />
          <Link href="/servis" className="b-line shrink-0 py-2 text-sm">Tüm servisler <IArrow /></Link>
        </div>
        <div className="mt-7"><DeviceRows /></div>
      </section>

      {/* SÜREÇ + NEDEN */}
      <section className="wrap pb-10 sm:pb-14">
        <div className="grid gap-5 lg:grid-cols-12">
          <div className="panel-dark relative overflow-hidden p-6 sm:p-8 lg:col-span-5">
            <DarkBg />
            <div className="relative">
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-sun">Neden bizi arıyorlar?</p>
              <h2 className="mt-3 text-[26px] font-extrabold leading-tight sm:text-[32px]">Mutfağınız durmasın diye sahadayız</h2>
              <dl className="mt-7 grid grid-cols-2 gap-3">
                {[["10", "cihaz grubu"], ["25", "ilçe"], ["08–20", "her gün*"], ["Faturalı", "her işlem"]].map(([v, l]) => (
                  <div key={l} className="rounded-[12px] bg-white/5 p-4 ring-1 ring-white/10">
                    <dt className="sr-only">{l}</dt>
                    <dd className="text-[26px] font-extrabold text-sun">{v}</dd>
                    <dd className="text-[13px] text-white/65">{l}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-[12px] text-white/45">*Pazar günleri yalnızca acil çağrılar.</p>
            </div>
          </div>

          <div className="panel p-6 sm:p-8 lg:col-span-7">
            <SectionTitle n="Süreç" title="Bir telefonla başlayan dört adım" />
            <ol className="mt-6 space-y-0">
              {steps.map((s, i) => (
                <li key={s.t} className="relative flex gap-4 pb-6 last:pb-0">
                  {i < steps.length - 1 && <span aria-hidden className="absolute left-[19px] top-10 h-[calc(100%-40px)] w-[2px] bg-line" />}
                  <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-ink bg-sun text-[15px] font-extrabold">{i + 1}</span>
                  <div className="pt-1.5">
                    <h3 className="text-[17px] font-extrabold">{s.t}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-ink-3">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* BAKIM */}
      <section className="border-y-2 border-ink bg-sun">
        <div className="wrap grid gap-5 py-10 md:grid-cols-[auto_1fr_auto] md:items-center">
          <span className="grid h-14 w-14 place-items-center rounded-[12px] bg-ink text-sun"><ICal className="h-7 w-7" /></span>
          <div>
            <h2 className="text-[24px] font-extrabold sm:text-[28px]">Restoran ve oteller için periyodik bakım</h2>
            <p className="mt-1 max-w-2xl text-ink-3">Kireç, tıkanıklık ve yıpranma; servis saatinde değil, sizin belirlediğiniz saatte giderilsin. Aylık ve üç aylık planlar.</p>
          </div>
          <Link href="/periyodik-bakim" className="b-ink px-6 py-3.5">Bakım planını incele <IArrow /></Link>
        </div>
      </section>

      {/* REHBER + SEKTÖR */}
      <section className="wrap sec">
        <div className="grid gap-5 lg:grid-cols-12">
          <div className="panel p-6 sm:p-8 lg:col-span-7">
            <SectionTitle n="Arıza rehberi" title="Servisi aramadan önce okuyun" />
            <ul className="mt-5 divide-y divide-line">
              {guides.slice(0, 5).map((g) => {
                const d = devices.find((x) => x.slug === g.device)!;
                return (
                  <li key={g.slug}>
                    <Link href={`/ariza-rehberi/${g.slug}`} className="group flex items-start gap-3 py-3.5">
                      <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-[10px] bg-paper"><DevIcon name={d.icon} className="h-4 w-4" /></span>
                      <span className="flex-1">
                        <span className="block text-[15px] font-bold leading-snug group-hover:underline">{g.title}</span>
                        <span className="mt-0.5 block text-[12px] text-mute">{d.name} · {g.minutes} dk okuma</span>
                      </span>
                      <IArrow className="mt-2 h-4 w-4 shrink-0 transition group-hover:translate-x-0.5" />
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link href="/ariza-rehberi" className="mt-3 inline-flex items-center gap-1 text-sm font-extrabold"><IBook className="h-4 w-4" /> {guides.length} rehberin tamamı <IArrow className="h-4 w-4" /></Link>
          </div>

          <div className="panel-dark p-6 sm:p-8 lg:col-span-5">
            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-sun">Sektörler</p>
            <h2 className="mt-2 text-[24px] font-extrabold leading-tight sm:text-[30px]">İşletmenize göre servis</h2>
            <ul className="mt-5 grid gap-2">
              {sectors.map((s) => (
                <li key={s.slug}>
                  <Link href={`/sektorler/${s.slug}`} className="flex items-center justify-between rounded-[10px] bg-white/5 px-4 py-3 text-[15px] font-bold ring-1 ring-white/10 transition hover:bg-sun hover:text-ink">
                    {s.name}<IArrow className="h-4 w-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* BÖLGELER */}
      <section className="wrap pb-10 sm:pb-14">
        <div className="panel p-6 sm:p-8">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
            <SectionTitle n="Hizmet bölgesi" title={`${site.region}'nın 25 ilçesindeyiz`} />
            <Link href="/hizmet-bolgesi" className="b-line shrink-0 py-2 text-sm"><IPin className="h-4 w-4" /> Semtleri gör</Link>
          </div>
          <ul className="mt-6 flex flex-wrap gap-2">
            {allDistricts.map((d) => (
              <li key={d} className="rounded-full border border-line bg-paper px-3.5 py-1.5 text-[14px] font-semibold">{d}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* SSS */}
      <section className="wrap pb-4">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionTitle n="S.S.S." title="Kısaca merak edilenler" />
            <div className="mt-5 space-y-3">
              <Link href="/servis-ucreti" className="flex items-center gap-3 rounded-[14px] bg-white p-4 text-sm font-bold transition hover:shadow-[3px_3px_0_#17191c]"><ITool className="h-5 w-5" /> Servis ücreti nasıl belirlenir?</Link>
              <Link href="/sss" className="flex items-center gap-3 rounded-[14px] bg-white p-4 text-sm font-bold transition hover:shadow-[3px_3px_0_#17191c]"><IBook className="h-5 w-5" /> Tüm sorular</Link>
            </div>
          </div>
          <div className="space-y-4 lg:col-span-8">
            <QAList items={homeQa} />
            <Note />
          </div>
        </div>
      </section>

      <DarkBand title="Cihazınız şu an çalışmıyor mu?" text="Arızayı telefonda anlatın; size en yakın teknisyeni yönlendirelim." />
    </>
  );
}
