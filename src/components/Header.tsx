"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Brand from "./Brand";
import { DevIcon, IArrow, IClock, IClose, IMenu, IPhone, IPin, IWa } from "./icons";
import { devices } from "@/data/devices";
import { site, waLink } from "@/config/site";

const nav = [
  { href: "/servis", label: "Servisler" },
  { href: "/ariza-rehberi", label: "Arıza Rehberi" },
  { href: "/sektorler", label: "Sektörler" },
  { href: "/periyodik-bakim", label: "Periyodik Bakım" },
  { href: "/hizmet-bolgesi", label: "Bölgeler" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => setMounted(true), []);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open]);

  const active = (href: string) => pathname === href || pathname.startsWith(href + "/");

  const overlay = (
    <div className={`fixed inset-0 z-[70] lg:hidden ${open ? "visible" : "invisible"}`} aria-hidden={!open}>
      <div onClick={() => setOpen(false)} className={`absolute inset-0 bg-ink/60 transition-opacity ${open ? "opacity-100" : "opacity-0"}`} />
      <div role="dialog" aria-modal="true" aria-label="Menü"
        className={`absolute inset-y-0 right-0 flex w-[88%] max-w-sm flex-col bg-white shadow-2xl transition duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex h-16 items-center justify-between border-b border-line px-4">
          <Brand />
          <button onClick={() => setOpen(false)} className="grid h-10 w-10 place-items-center rounded-[10px] bg-paper" aria-label="Menüyü kapat"><IClose className="h-5 w-5" /></button>
        </div>
        <nav className="flex-1 overflow-y-auto overscroll-contain p-4" aria-label="Mobil menü">
          <ul className="grid gap-1">
            {[{ href: "/", label: "Anasayfa" }, ...nav, { href: "/sss", label: "S.S.S." }].map((n) => (
              <li key={n.href}>
                <Link href={n.href} className={`flex items-center justify-between rounded-[10px] px-3 py-3 text-[16px] font-extrabold ${(n.href === "/" ? pathname === "/" : active(n.href)) ? "bg-sun" : "active:bg-paper"}`}>
                  {n.label}<IArrow className="h-4 w-4 opacity-40" />
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-5 px-1 text-[11px] font-bold uppercase tracking-[0.2em] text-mute">Cihazlar</p>
          <ul className="mt-2 grid grid-cols-2 gap-1.5">
            {devices.map((d) => (
              <li key={d.slug}>
                <Link href={`/servis/${d.slug}`} className="flex items-center gap-2 rounded-[10px] bg-paper px-3 py-2.5 text-[13px] font-bold"><DevIcon name={d.icon} className="h-4 w-4" />{d.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="grid grid-cols-2 gap-2 border-t border-line p-4">
          <a href={`tel:${site.phoneHref}`} className="b-sun"><IPhone /> Ara</a>
          <a href={waLink()} target="_blank" rel="noopener" className="b-wa"><IWa /> WhatsApp</a>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Üst bilgi şeridi */}
      <div className="hidden bg-ink text-[13px] text-white/75 md:block">
        <div className="wrap flex h-10 items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><span className="h-2 w-2 animate-pulse rounded-full bg-[#2ecc71]" /> Yerinde servis · çoğu arızada aynı gün</span>
            <span className="flex items-center gap-1.5"><IPin className="h-4 w-4 text-sun" />Merkez: Bayrampaşa · Avrupa Yakası 25 ilçe</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><IClock className="h-4 w-4 text-sun" />{site.hours.long}</span>
            <a href={waLink()} target="_blank" rel="noopener" className="flex items-center gap-1.5 font-bold text-white hover:text-sun"><IWa className="h-4 w-4" />WhatsApp</a>
          </div>
        </div>
      </div>

      <header className={`sticky top-0 z-50 border-b bg-white transition-shadow ${scrolled ? "border-transparent shadow-[0_6px_24px_-10px_rgba(23,25,28,0.35)]" : "border-line"}`}>
        <div className="wrap flex h-[68px] items-center justify-between gap-6 lg:h-[76px]">
          <Brand />

          <nav aria-label="Ana menü" className="hidden h-full lg:block">
            <ul className="flex h-full items-center gap-1 text-[15px] font-bold">
              {nav.map((n) => (
                <li key={n.href} className={`h-full ${n.href === "/servis" ? "group relative" : ""}`}>
                  <Link href={n.href} className={`relative flex h-full items-center px-3 transition ${active(n.href) ? "text-ink" : "text-ink-3 hover:text-ink"}`}>
                    {n.label}
                    <span className={`absolute inset-x-3 bottom-0 h-[3px] rounded-t bg-sun transition ${active(n.href) ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
                  </Link>
                  {n.href === "/servis" && (
                    <div className="invisible absolute left-0 top-full w-[620px] pt-0 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                      <div className="grid grid-cols-[1fr_200px] overflow-hidden rounded-b-[16px] border-2 border-t-0 border-ink bg-white shadow-[6px_6px_0_#17191c]">
                        <div className="grid grid-cols-2 gap-1 p-3">
                          {devices.map((d) => (
                            <Link key={d.slug} href={`/servis/${d.slug}`} className="flex items-center gap-3 rounded-[10px] px-3 py-2.5 text-[14px] font-bold text-ink hover:bg-sun-soft">
                              <span className="grid h-8 w-8 place-items-center rounded-[8px] bg-ink text-sun"><DevIcon name={d.icon} className="h-4 w-4" /></span>
                              {d.name} servisi
                            </Link>
                          ))}
                        </div>
                        <div className="flex flex-col justify-between bg-ink p-5 text-white">
                          <p className="text-[15px] font-extrabold leading-snug">Cihazınızı listede bulamadınız mı?</p>
                          <a href={`tel:${site.phoneHref}`} className="b-sun mt-4 px-3 py-2.5 text-sm"><IPhone className="h-4 w-4" />Arayın</a>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a href={`tel:${site.phoneHref}`} className="hidden items-center gap-3 xl:flex">
              <span className="grid h-11 w-11 place-items-center rounded-full border-2 border-ink"><IPhone className="h-5 w-5" /></span>
              <span className="leading-tight">
                <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-mute">Servis hattı</span>
                <span className="block text-[18px] font-extrabold">{site.phone}</span>
              </span>
            </a>
            <a href={`tel:${site.phoneHref}`} className="b-sun hidden border-2 border-ink shadow-[3px_3px_0_#17191c] transition hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#17191c] sm:inline-flex">
              <IPhone className="h-4 w-4" /> Hemen Ara
            </a>
            <a href={`tel:${site.phoneHref}`} aria-label="Servisi ara" className="grid h-11 w-11 place-items-center rounded-[10px] bg-sun sm:hidden"><IPhone /></a>
            <button onClick={() => setOpen(true)} aria-label="Menüyü aç" aria-expanded={open} className="grid h-11 w-11 place-items-center rounded-[10px] bg-ink text-white lg:hidden">
              <IMenu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>
      {mounted && createPortal(overlay, document.body)}
    </>
  );
}
