"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { site } from "@/config/site";

const slides = [
  { src: "/img/hero/mutfak-1.webp", alt: "Endüstriyel restoran mutfağında ocak, fritöz ve kazan hattı", tag: "Pişirme hattı", title: "Ocak, fritöz ve kazanlarda yerinde onarım" },
  { src: "/img/hero/mutfak-2.webp", alt: "Ticari mutfakta tezgah tipi buzdolabı ve soğutma ekipmanları", tag: "Soğutma", title: "Buzdolabı ve tezgah tipi soğutucularda servis" },
];

const DELAY = 5500;

export default function HeroSlider() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const go = useCallback((n: number) => setI((n + slides.length) % slides.length), []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || reduce) return;
    timer.current = setInterval(() => setI((x) => (x + 1) % slides.length), DELAY);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [paused, i]);

  return (
    <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="relative aspect-[5/4] overflow-hidden rounded-[18px] border-2 border-white/15 bg-ink-2 shadow-[8px_8px_0_#ffc21a]" aria-roledescription="carousel" aria-label="Servis verdiğimiz mutfak ekipmanları">
        {slides.map((s, n) => (
          <div key={s.src} className={`absolute inset-0 transition-opacity duration-700 ease-out ${n === i ? "opacity-100" : "opacity-0"}`} aria-hidden={n !== i} role="group" aria-roledescription="slide" aria-label={`${n + 1} / ${slides.length}`}>
            <Image src={s.src} alt={s.alt} fill priority={n === 0} sizes="(min-width:1024px) 560px, 92vw" className={`object-cover transition-transform duration-[6000ms] ease-out ${n === i ? "scale-105" : "scale-100"}`} />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <span className="inline-flex rounded-full bg-sun px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.16em] text-ink">{s.tag}</span>
              <p className="mt-2 max-w-sm text-[19px] font-extrabold leading-snug text-white sm:text-[22px]">{s.title}</p>
            </div>
          </div>
        ))}

        <div className="absolute left-4 top-4 flex gap-2 sm:left-auto sm:right-4">
          <button type="button" onClick={() => go(i - 1)} aria-label="Önceki görsel" className="grid h-10 w-10 place-items-center rounded-full bg-white/90 text-ink transition hover:bg-sun">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <button type="button" onClick={() => go(i + 1)} aria-label="Sonraki görsel" className="grid h-10 w-10 place-items-center rounded-full bg-white/90 text-ink transition hover:bg-sun">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>

        <div className="absolute bottom-6 right-5 flex gap-1.5 sm:right-6">
          {slides.map((s, n) => (
            <button key={s.src} type="button" onClick={() => go(n)} aria-label={`${n + 1}. görsel`} aria-current={n === i} className={`h-2 rounded-full transition-all ${n === i ? "w-7 bg-sun" : "w-2 bg-white/60 hover:bg-white"}`} />
          ))}
        </div>
      </div>

      {/* Yüzen bilgi kartı */}
      <a href={`tel:${site.phoneHref}`} className="absolute -left-3 top-6 hidden items-center gap-3 rounded-[12px] border-2 border-ink bg-white px-4 py-3 text-ink shadow-[4px_4px_0_#17191c] transition hover:-translate-y-0.5 sm:flex lg:-left-8">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-sun">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg>
        </span>
        <span>
          <span className="block text-[11px] font-bold uppercase tracking-[0.15em] text-ink-3">Arıza mı var?</span>
          <span className="block text-[17px] font-extrabold">{site.phone}</span>
        </span>
      </a>
    </div>
  );
}
