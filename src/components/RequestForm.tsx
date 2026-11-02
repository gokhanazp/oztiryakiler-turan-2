"use client";
import { useState } from "react";
import { waLink } from "@/config/site";
import { devices } from "@/data/devices";
import { allDistricts } from "@/data/regions";
import { track } from "./Analytics";

/** Arıza bildirim formu – sunucu kullanmaz, bilgileri hazır bir WhatsApp mesajına dönüştürür. */
export default function RequestForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg = [
      "Merhaba, arıza bildirmek istiyorum.",
      `İsim / işletme: ${f.get("name")}`,
      `Dönüş numarası: ${f.get("phone")}`,
      `Servis ilçesi: ${f.get("district")}`,
      `Arızalı cihaz: ${f.get("device")}`,
      `Belirti: ${f.get("note") || "belirtilmedi"}`,
    ].join("\n");
    track("generate_lead", { method: "whatsapp_form", device: String(f.get("device")), district: String(f.get("district")) });
    window.open(waLink(msg), "_blank", "noopener");
    setSent(true);
  }

  const input = "mt-1.5 w-full rounded-[10px] border-2 border-line bg-paper px-3.5 py-3 text-ink outline-none focus:border-ink";

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-[10px] border-2 border-ink bg-white p-5 shadow-[8px_8px_0_#ffc21a] sm:grid-cols-2 sm:p-8">
      <label className="text-sm font-medium text-ink">İsminiz veya işletme adı
        <input name="name" required autoComplete="name" className={input} />
      </label>
      <label className="text-sm font-medium text-ink">Size dönüş yapacağımız numara
        <input name="phone" type="tel" required autoComplete="tel" inputMode="tel" className={input} />
      </label>
      <label className="text-sm font-medium text-ink">Servis adresinin ilçesi
        <select name="district" required className={input} defaultValue="">
          <option value="" disabled>Listeden seçin</option>
          {allDistricts.map((d) => <option key={d}>{d}</option>)}
        </select>
      </label>
      <label className="text-sm font-medium text-ink">Hangi cihaz?
        <select name="device" required className={input} defaultValue="">
          <option value="" disabled>Listeden seçin</option>
          {devices.map((s) => <option key={s.slug}>{s.name}</option>)}
          <option>Başka bir cihaz</option>
        </select>
      </label>
      <label className="text-sm font-medium text-ink sm:col-span-2">Ne oluyor? (belirti)
        <textarea name="note" rows={4} className={input} placeholder="Ör. yer ocağının sağ gözü yandıktan bir süre sonra sönüyor" />
      </label>
      <div className="sm:col-span-2">
        <button type="submit" className="b-sun w-full py-4 sm:w-auto">Arıza bildirimini WhatsApp ile gönder</button>
        <p className="mt-3 text-xs text-mute">
          Gönder düğmesi, yazdıklarınızı hazır bir WhatsApp mesajı olarak açar; mesajı siz gönderirsiniz. Bilgileriniz yalnızca bu arıza kaydı için kullanılır.
        </p>
        {sent && <p className="mt-3 rounded-[10px] bg-sun-soft p-3 text-sm text-ink">Mesaj hazır. WhatsApp penceresinde gönder tuşuna bastığınızda kaydınız ekibimize düşer.</p>}
      </div>
    </form>
  );
}
