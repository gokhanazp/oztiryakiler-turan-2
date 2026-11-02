import Link from "next/link";
import { devices } from "@/data/devices";
import { site, waLink, independenceNote } from "@/config/site";
import { DevIcon, IArrow, ICheck, IPhone, IPlus, IWa } from "./icons";
import type { QA } from "@/data/devices";

export function Ld({ data }: { data: object | object[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export function Crumbs({ items, dark = false }: { items: { name: string; path: string }[]; dark?: boolean }) {
  return (
    <nav aria-label="Sayfa yolu" className={`text-[13px] font-semibold ${dark ? "text-white/55" : "text-mute"}`}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((it, i) => (
          <li key={it.path} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden>›</span>}
            {i === items.length - 1 ? <span className={dark ? "text-white" : "text-ink"} aria-current="page">{it.name}</span> : <Link href={it.path} className={dark ? "hover:text-white" : "hover:text-ink"}>{it.name}</Link>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Koyu zemin + brülör halkaları (ocak alevi esinli) + sarı ışıma + alt uyarı şeridi */
const RINGS = Array.from({ length: 10 }, (_, i) => 70 + i * 42);
export function DarkBg() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute right-[-260px] top-1/2 h-[900px] w-[900px] -translate-y-1/2 sm:right-[-180px] lg:right-[-60px]" style={{ maskImage: "radial-gradient(circle, #000 35%, transparent 70%)", WebkitMaskImage: "radial-gradient(circle, #000 35%, transparent 70%)" }}>
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,194,26,0.32)_0%,rgba(255,194,26,0.08)_28%,transparent_55%)]" />
        <svg viewBox="0 0 900 900" className="absolute inset-0 h-full w-full">
          {RINGS.map((r, i) => (
            <circle key={r} cx="450" cy="450" r={r} fill="none"
              stroke={i % 3 === 1 ? "#ffc21a" : "#ffffff"}
              strokeOpacity={i % 3 === 1 ? 0.45 : 0.1}
              strokeWidth={i % 3 === 1 ? 3 : 1}
              strokeDasharray={i % 3 === 1 ? "1 13" : undefined}
              strokeLinecap="round" />
          ))}
        </svg>
      </div>
      <div className="absolute -bottom-40 -left-24 h-[360px] w-[360px] rounded-full bg-sun/10 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-[6px] opacity-90" style={{ backgroundImage: "repeating-linear-gradient(135deg,#ffc21a 0 14px,#17191c 14px 28px)" }} />
    </div>
  );
}

/** İç sayfa başlığı – tam genişlik koyu bant, header ile aynı hizada */
export function PageTop({ kicker, title, lead, crumbs, children }: { kicker?: string; title: string; lead?: string; crumbs: { name: string; path: string }[]; children?: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <DarkBg />
      <div className="wrap relative py-10 sm:py-14">
        <Crumbs items={crumbs} dark />
        {kicker && <p className="mt-5 inline-flex rounded-full bg-sun px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-ink">{kicker}</p>}
        <h1 className="mt-3 max-w-4xl text-[32px] font-extrabold leading-[1.08] sm:text-[46px]">{title}</h1>
        {lead && <p className="mt-4 max-w-3xl text-[17px] leading-relaxed text-white/75">{lead}</p>}
        {children}
      </div>
    </section>
  );
}

/** Güven rozetleri */
export function TrustRow({ className = "" }: { className?: string }) {
  const items = [
    { t: "Aynı gün servis", d: "Avrupa Yakası'nda mobil ekipler" },
    { t: "Onaysız işlem yok", d: "Ücret önceden bildirilir" },
    { t: "Garantili onarım", d: "İşçilik ve parça garantisi" },
    { t: "Faturalı hizmet", d: "Kurumsal işletmelere uygun" },
  ];
  return (
    <ul className={`grid grid-cols-2 gap-3 lg:grid-cols-4 ${className}`}>
      {items.map((i) => (
        <li key={i.t} className="flex items-start gap-3 rounded-[14px] border-2 border-ink bg-white p-4 shadow-[4px_4px_0_#17191c]">
          <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sun"><ICheck className="h-4 w-4" /></span>
          <span><span className="block text-[15px] font-extrabold leading-tight">{i.t}</span><span className="mt-0.5 block text-[12px] text-mute">{i.d}</span></span>
        </li>
      ))}
    </ul>
  );
}

export function CallButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      <a href={`tel:${site.phoneHref}`} className="b-sun"><IPhone /> {site.phone}</a>
      <a href={waLink()} target="_blank" rel="noopener" className="b-wa"><IWa /> WhatsApp</a>
    </div>
  );
}

export function SectionTitle({ n, title, lead }: { n?: string; title: string; lead?: string }) {
  return (
    <div className="max-w-3xl">
      {n && <p className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-mute"><span className="h-2 w-2 rounded-full bg-sun" />{n}</p>}
      <h2 className="mt-2 text-[24px] font-extrabold leading-tight sm:text-[30px]">{title}</h2>
      {lead && <p className="mt-2 text-[16px] text-ink-3">{lead}</p>}
    </div>
  );
}

/** Cihaz kartları – kompakt ızgara */
export function DeviceRows({ exclude }: { exclude?: string }) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {devices.filter((d) => d.slug !== exclude).map((d) => (
        <li key={d.slug}>
          <Link href={`/servis/${d.slug}`} className="group flex h-full flex-col rounded-[14px] border-2 border-transparent bg-white p-4 transition hover:-translate-y-0.5 hover:border-ink hover:shadow-[4px_4px_0_#17191c]">
            <span className="grid h-11 w-11 place-items-center rounded-[10px] bg-ink text-sun transition group-hover:bg-sun group-hover:text-ink">
              <DevIcon name={d.icon} className="h-5 w-5" />
            </span>
            <span className="mt-3 text-[15px] font-extrabold leading-tight">{d.name}</span>
            <span className="mt-1 line-clamp-2 text-[12px] leading-snug text-mute">{d.symptoms[0].s}</span>
            <span className="mt-auto flex items-center gap-1 pt-3 text-[12px] font-extrabold">Servis <IArrow className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" /></span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function QAList({ items }: { items: QA[] }) {
  return (
    <div className="divide-y divide-line overflow-hidden rounded-[16px] border-2 border-ink bg-white px-5 sm:px-6">
      {items.map((f, i) => (
        <details key={f.q} className="group" open={i === 0}>
          <summary className="flex cursor-pointer list-none items-start gap-4 py-4">
            <span className="mt-0.5 text-sm font-extrabold text-sun-2">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="flex-1 text-[16px] font-bold leading-snug">{f.q}</h3>
            <span className="q-plus mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sun transition"><IPlus className="h-3.5 w-3.5" /></span>
          </summary>
          <p className="pb-5 pl-9 pr-8 text-[15px] leading-relaxed text-ink-3">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function DarkBand({ title, text }: { title: string; text?: string }) {
  return (
    <section className="wrap sec">
      <div className="panel-dark relative overflow-hidden px-6 py-8 sm:px-10">
        <div aria-hidden className="pointer-events-none absolute -bottom-16 -right-10 h-48 w-48 rounded-full bg-sun/25 blur-3xl" />
        <div className="relative flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
          <div>
            <h2 className="text-[22px] font-extrabold sm:text-[28px]">{title}</h2>
            {text && <p className="mt-1.5 max-w-xl text-white/70">{text}</p>}
          </div>
          <CallButtons />
        </div>
      </div>
    </section>
  );
}

export function Note() {
  return <p className="rounded-[12px] border border-line bg-white px-4 py-3 text-[13px] leading-relaxed text-mute"><span className="mr-1 font-bold text-ink">Not:</span>{independenceNote}</p>;
}

export function Ticks({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-2 sm:grid-cols-2">
      {items.map((t) => (
        <li key={t} className="flex items-start gap-3 rounded-[12px] bg-white px-4 py-3 text-[15px] font-semibold">
          <span className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-sun"><ICheck className="h-2.5 w-2.5" /></span>{t}
        </li>
      ))}
    </ul>
  );
}
