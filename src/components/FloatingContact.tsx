import { site, waLink } from "@/config/site";
import { IPhone, IWa } from "./icons";

/** Mobilde sağ altta yüzen arama + WhatsApp düğmeleri */
export default function FloatingContact() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 lg:hidden">
      <a href={waLink()} target="_blank" rel="noopener" aria-label="WhatsApp ile yazın"
        className="grid h-14 w-14 place-items-center rounded-full bg-[#1fa855] text-white shadow-[0_6px_20px_rgba(0,0,0,0.25)]">
        <IWa className="h-7 w-7" />
      </a>
      <a href={`tel:${site.phoneHref}`} aria-label="Servisi arayın"
        className="grid h-14 w-14 place-items-center rounded-full border-2 border-ink bg-sun text-ink shadow-[0_6px_20px_rgba(0,0,0,0.25)]">
        <IPhone className="h-6 w-6" />
      </a>
    </div>
  );
}
