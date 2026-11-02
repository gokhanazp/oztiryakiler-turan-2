import Link from "next/link";
import { devices } from "@/data/devices";
import { crumbLd, meta, qaLd } from "@/lib/seo";
import { DarkBand, Ld, Note, PageTop, QAList } from "@/components/ui";
import type { QA } from "@/data/devices";

export const metadata = meta({
  title: "Sık Sorulan Sorular",
  description: "Öztiryakiler Teknik Servis hakkında sorular: yetkili servis durumu, çalışma saatleri, ücret, garanti, bakım anlaşması ve cihaz bazında sorular.",
  path: "/sss",
});

const crumbs = [{ name: "Anasayfa", path: "/" }, { name: "S.S.S.", path: "/sss" }];

const general: QA[] = [
  { q: "Öztiryakiler'in yetkili servisi misiniz?", a: "Hayır. Öztiryakiler marka ticari mutfak ekipmanlarına hizmet veren bağımsız bir teknik servisiz; marka ile ticari bir bağımız yoktur." },
  { q: "Yaptığınız onarımlar garantili mi?", a: "Evet. İşçilik ve taktığımız parçalar garantimiz altındadır; süre ve koşullar faturada belirtilir." },
  { q: "Hafta sonu çalışıyor musunuz?", a: "Cumartesi tam gün çalışıyoruz. Pazar günleri soğutma ve gaz arızası gibi acil çağrılara dönüş yapıyoruz." },
  { q: "Adresiniz nerede?", a: "Merkezimiz Vatan Mah. Kanaat Sok. Esenler Cad. No:53 Kat:1, 34035 Bayrampaşa / İstanbul adresindedir. Servislerin büyük çoğunluğunu işletmenizde, yerinde yapıyoruz." },
  { q: "Hangi ilçelere geliyorsunuz?", a: "İstanbul Avrupa Yakası'nın 25 ilçesinin tamamına geliyoruz. Ayrıntılı liste Hizmet Bölgesi sayfasında." },
  { q: "Başka markaların cihazlarına da bakıyor musunuz?", a: "Uzmanlık alanımız Öztiryakiler marka ekipmanlar olsa da benzer yapıdaki ticari mutfak cihazları için de arayabilirsiniz." },
];

export default function Faq() {
  return (
    <>
      <Ld data={[crumbLd(crumbs), qaLd([...general, ...devices.flatMap((d) => d.qa)])]} />
      <PageTop kicker="S.S.S." title="Sık sorulan sorular" lead="Genel sorular aşağıda; cihaza özel sorular için ilgili bölüme geçin." crumbs={crumbs}>
        <ul className="mt-6 flex flex-wrap gap-2">
          {devices.map((d) => <li key={d.slug}><a href={`#${d.slug}`} className="rounded-[10px] bg-white px-3 py-1.5 text-sm font-bold hover:bg-sun">{d.name}</a></li>)}
        </ul>
      </PageTop>
      <section className="py-12">
        <div className="wrap max-w-4xl space-y-14">
          <div>
            <h2 className="mb-4 text-2xl font-extrabold">Genel</h2>
            <QAList items={general} />
          </div>
          {devices.map((d) => (
            <div key={d.slug} id={d.slug} className="scroll-mt-24">
              <h2 className="mb-4 text-2xl font-extrabold"><Link href={`/servis/${d.slug}`} className="hover:underline">{d.name}</Link></h2>
              <QAList items={d.qa} />
            </div>
          ))}
          <Note />
        </div>
      </section>
      <DarkBand title="Sorunuzun cevabı burada yok mu?" />
    </>
  );
}
