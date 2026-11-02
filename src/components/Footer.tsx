import Link from "next/link";
import Brand from "./Brand";
import { devices } from "@/data/devices";
import { sectors } from "@/data/sectors";
import { areas, areaPath } from "@/data/areas";
import { site, independenceNote } from "@/config/site";
import { IClock, IPhone, IPin } from "./icons";

export default function Footer() {
  return (
    <footer className="mt-4 bg-ink pb-24 text-white/75 lg:pb-0">
      <div className="wrap">
        <div className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Brand dark />
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed">{site.tagline}.</p>
            <ul className="mt-5 space-y-2 text-[14px]">
              <li><a href={`tel:${site.phoneHref}`} className="flex items-center gap-2 font-extrabold text-white hover:text-sun"><IPhone className="h-4 w-4 text-sun" />{site.phone}</a></li>
              <li className="flex items-center gap-2"><IClock className="h-4 w-4 text-sun" />{site.hours.short}</li>
              <li className="flex items-start gap-2"><IPin className="mt-0.5 h-4 w-4 shrink-0 text-sun" /><span>{site.address.display}</span></li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-sun">Servisler</p>
            <ul className="space-y-1.5 text-[14px]">
              {devices.map((d) => <li key={d.slug}><Link href={`/servis/${d.slug}`} className="hover:text-white">{d.name} servisi</Link></li>)}
            </ul>
          </div>
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-sun">Sektörler</p>
            <ul className="space-y-1.5 text-[14px]">
              {sectors.map((s) => <li key={s.slug}><Link href={`/sektorler/${s.slug}`} className="hover:text-white">{s.name}</Link></li>)}
            </ul>
          </div>
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-sun">Bilgi</p>
            <ul className="space-y-1.5 text-[14px]">
              <li><Link href="/ariza-rehberi" className="hover:text-white">Arıza rehberi</Link></li>
              <li><Link href="/periyodik-bakim" className="hover:text-white">Periyodik bakım</Link></li>
              <li><Link href="/servis-ucreti" className="hover:text-white">Servis ücreti</Link></li>
              <li><Link href="/hizmet-bolgesi" className="hover:text-white">Hizmet bölgesi</Link></li>
              <li><Link href="/hakkimizda" className="hover:text-white">Hakkımızda</Link></li>
              <li><Link href="/sss" className="hover:text-white">S.S.S.</Link></li>
              <li><Link href="/iletisim" className="hover:text-white">İletişim</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-6">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-sun">Servis bölgeleri</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-1.5 text-[14px]">
            {areas.map((a) => <li key={a.slug}><Link href={areaPath(a)} className="hover:text-white">{a.name} Öztiryakiler Servisi</Link></li>)}
          </ul>
        </div>
        <div className="border-t border-white/10 py-6 text-[12px] leading-relaxed text-white/50">
          <p>{independenceNote}</p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
            <span>© {new Date().getFullYear()} {site.legalName || site.name}</span>
            <Link href="/yasal-uyari" className="hover:text-white">Yasal uyarı</Link>
            <Link href="/kvkk" className="hover:text-white">KVKK</Link>
            <a href="https://gokhan-yildirim.com" target="_blank" rel="noopener" className="hover:text-white sm:ml-auto">Web tasarım</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
