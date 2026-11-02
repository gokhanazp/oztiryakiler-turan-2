"use client";
import { useState } from "react";
import { site, waLink } from "@/config/site";
import { devices } from "@/data/devices";
import { allDistricts } from "@/data/regions";
import { track } from "./Analytics";
import { IPhone, IWa } from "./icons";

/** Hero içindeki hızlı servis talebi kartı (WhatsApp'a hazır mesaj açar) */
export default function QuickRequest({ defaultDevice = "" }: { defaultDevice?: string }) {
  const [ok, setOk] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg = [
      "Merhaba, servis talebim var.",
      `Cihaz: ${f.get("device")}`,
      `İlçe: ${f.get("district")}`,
      `Telefon: ${f.get("phone")}`,
    ].join("\n");
    track("generate_lead", { method: "quick_form", device: String(f.get("device")) });
    window.open(waLink(msg), "_blank", "noopener");
    setOk(true);
  }

  const field = "w-full rounded-[10px] border-2 border-line bg-paper px-3.5 py-3 text-[15px] font-semibold text-ink outline-none transition focus:border-ink";

  return (
    <div className="rounded-[18px] border-2 border-ink bg-white p-5 text-ink shadow-[6px_6px_0_#ffc21a] sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <p className="text-[19px] font-extrabold">Hızlı servis talebi</p>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e8f7ee] px-2.5 py-1 text-[11px] font-bold text-[#178a45]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#1fa855]" /> Hızlı dönüş
        </span>
      </div>
      <p className="mt-1 text-[13px] text-mute">Üç bilgiyi doldurun, teknisyenimiz sizi arasın.</p>
      <form onSubmit={submit} className="mt-4 grid gap-3">
        <label className="sr-only" htmlFor="qr-device">Cihaz</label>
        <select id="qr-device" name="device" required defaultValue={defaultDevice} className={field}>
          <option value="" disabled>Arızalı cihaz</option>
          {devices.map((d) => <option key={d.slug}>{d.name}</option>)}
          <option>Diğer ekipman</option>
        </select>
        <label className="sr-only" htmlFor="qr-district">İlçe</label>
        <select id="qr-district" name="district" required defaultValue="" className={field}>
          <option value="" disabled>İlçe</option>
          {allDistricts.map((d) => <option key={d}>{d}</option>)}
        </select>
        <label className="sr-only" htmlFor="qr-phone">Telefon</label>
        <input id="qr-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required placeholder="Telefon numaranız" className={field} />
        <button type="submit" className="b-wa w-full py-3.5"><IWa /> Talebi gönder</button>
      </form>
      {ok && <p className="mt-3 rounded-[10px] bg-sun-soft px-3 py-2 text-[13px] font-semibold">WhatsApp açıldı; mesajı gönderdiğinizde talebiniz bize ulaşır.</p>}
      <div className="mt-4 flex items-center gap-3 border-t border-line pt-4">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-sun"><IPhone className="h-5 w-5" /></span>
        <div className="leading-tight">
          <p className="text-[12px] font-semibold text-mute">Beklemek istemiyorsanız</p>
          <a href={`tel:${site.phoneHref}`} className="text-[18px] font-extrabold hover:underline">{site.phone}</a>
        </div>
      </div>
    </div>
  );
}
