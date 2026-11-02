import { site, waLink } from "@/config/site";
import { crumbLd, meta } from "@/lib/seo";
import { Ld, Note, PageTop } from "@/components/ui";
import RequestForm from "@/components/RequestForm";
import { IClock, IPhone, IPin, IWa } from "@/components/icons";

export const metadata = meta({
  title: "İletişim ve Arıza Bildirimi",
  description: "Öztiryakiler mutfak ekipmanı arızası bildirmek için arayın, WhatsApp'tan yazın veya formu doldurun. Avrupa Yakası servis hattı: 0534 748 61 07.",
  path: "/iletisim",
});

const crumbs = [{ name: "Anasayfa", path: "/" }, { name: "İletişim", path: "/iletisim" }];

export default function Contact() {
  return (
    <>
      <Ld data={crumbLd(crumbs)} />
      <PageTop kicker="İletişim" title="Arıza bildirin" lead="En hızlı yol telefon. Yazmayı tercih ederseniz WhatsApp veya aşağıdaki form da aynı ekibe ulaşır." crumbs={crumbs} />
      <section className="py-12">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-3">
            <a href={`tel:${site.phoneHref}`} className="flex items-center gap-4 rounded-[10px] bg-sun p-5">
              <IPhone className="h-7 w-7" />
              <span><span className="block text-xs font-bold uppercase tracking-[0.2em]">Servis hattı</span><span className="text-2xl font-extrabold">{site.phone}</span></span>
            </a>
            <a href={waLink()} target="_blank" rel="noopener" className="flex items-center gap-4 rounded-[10px] bg-[#1fa855] p-5 text-white">
              <IWa className="h-7 w-7" />
              <span><span className="block text-xs font-bold uppercase tracking-[0.2em]">WhatsApp</span><span className="text-xl font-extrabold">{site.phoneIntl}</span></span>
            </a>
            <div className="flex items-start gap-4 rounded-[10px] bg-white p-5">
              <IClock className="mt-0.5 h-6 w-6" />
              <span><span className="block font-extrabold">Çalışma saatleri</span><span className="text-ink-3">{site.hours.long}</span></span>
            </div>
            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.display)}`} target="_blank" rel="noopener" className="flex items-start gap-4 rounded-[10px] border-2 border-ink bg-white p-5 transition hover:shadow-[4px_4px_0_#17191c]">
              <IPin className="mt-0.5 h-6 w-6" />
              <span><span className="block font-extrabold">Adres</span><span className="text-ink-3">{site.address.display}</span><span className="mt-1 block text-sm font-bold underline">Yol tarifi al</span></span>
            </a>
            <div className="flex items-start gap-4 rounded-[10px] bg-white p-5">
              <IPin className="mt-0.5 h-6 w-6" />
              <span><span className="block font-extrabold">Hizmet bölgesi</span><span className="text-ink-3">{site.region} – 25 ilçede yerinde servis</span></span>
            </div>
            {site.email && <a href={`mailto:${site.email}`} className="block rounded-[10px] bg-white p-5 font-bold">{site.email}</a>}
            <Note />
          </div>
          <div id="talep" className="scroll-mt-24">
            <h2 className="mb-5 text-2xl font-extrabold">Arıza bildirim formu</h2>
            <RequestForm />
          </div>
        </div>
        <div className="wrap mt-10">
          <iframe
            title="Öztiryakiler Teknik Servis konum"
            src={`https://www.google.com/maps?q=${encodeURIComponent(site.address.display)}&output=embed`}
            className="h-[360px] w-full rounded-[16px] border-2 border-ink"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
