import Link from "next/link";

/** Özgün logo: sarı kare içinde brülör alevi (marka logosu kullanılmaz) */
export function Mark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <rect width="40" height="40" rx="5" fill="#ffc21a" />
      <path d="M20 8c1.6 4 5.6 6.4 5.6 11.4A5.6 5.6 0 0 1 20 25a5.6 5.6 0 0 1-5.6-5.6c0-2.6 1.4-3.8 2.6-5.2.3 1.8 1.2 2.8 2.2 3.2-.4-3.2.2-6.4.8-9.4z" fill="#17191c" />
      <rect x="9" y="28" width="22" height="3.2" fill="#17191c" />
    </svg>
  );
}

export default function Brand({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Öztiryakiler Teknik Servis – anasayfa">
      <Mark />
      <span className="leading-none">
        <span className={`block text-[17px] font-extrabold tracking-tight ${dark ? "text-white" : "text-ink"}`}>ÖZTİRYAKİLER</span>
        <span className={`mt-1 block text-[11px] font-semibold uppercase tracking-[0.32em] ${dark ? "text-sun" : "text-mute"}`}>Teknik Servis</span>
      </span>
    </Link>
  );
}
