import { crumbLd, meta, qaLd } from "@/lib/seo";
import { CallButtons, DarkBand, Ld, Note, PageTop, QAList, SectionTitle } from "@/components/ui";
import type { QA } from "@/data/devices";

export const metadata = meta({
  title: "Servis Ücreti Nasıl Belirlenir? Şeffaf Fiyatlandırma",
  description: "Endüstriyel mutfak ekipmanı tamirinde servis ücretini belirleyen etkenler: arıza tipi, parça, işçilik ve süre. Onaysız işlem yapılmaz.",
  path: "/servis-ucreti",
  absolute: true,
});

const crumbs = [{ name: "Anasayfa", path: "/" }, { name: "Servis ücreti", path: "/servis-ucreti" }];

const factors = [
  { t: "Arızanın türü", d: "Bir brülör temizliği ile kompresör değişimi arasında hem süre hem parça açısından büyük fark vardır." },
  { t: "Değişecek parça", d: "Termokupl veya conta gibi küçük parçalarla elektronik kart ve motor gibi büyük parçaların maliyeti farklıdır." },
  { t: "İşçilik süresi", d: "Gaz kaçağı tespiti, kaynak ve vakum gibi işlemler daha uzun sürer; işçilik buna göre hesaplanır." },
  { t: "Cihazın erişilebilirliği", d: "Tezgah altına sabitlenmiş veya sökülmesi zor cihazlarda ek süre gerekebilir." },
];

const qa: QA[] = [
  { q: "Arıza tespiti için ücret alıyor musunuz?", a: "Yerinde tespit ve ücret bilgisi ilk adımdır. Tespit sonrası onarımı onaylarsanız işlem bu ziyarette yapılır; koşulları arama sırasında net olarak paylaşıyoruz." },
  { q: "Telefonda kesin fiyat verebilir misiniz?", a: "Belirtiye göre yaklaşık bir aralık verebiliriz, ancak aynı belirti farklı parçalardan kaynaklanabilir. Kesin ücret ölçüm yapıldıktan sonra belirlenir." },
  { q: "Fatura düzenliyor musunuz?", a: "Evet, yapılan tüm işçilik ve parça için fatura düzenliyoruz." },
  { q: "Onarım mı daha mantıklı, yeni cihaz mı?", a: "Onarım maliyeti cihazın değerine yaklaşıyorsa bunu açıkça söylüyor, karar vermeniz için iki seçeneği karşılaştırmalı olarak sunuyoruz." },
];

export default function Pricing() {
  return (
    <>
      <Ld data={[crumbLd(crumbs), qaLd(qa)]} />
      <PageTop kicker="Fiyatlandırma" title="Servis ücreti nasıl belirlenir?" lead="Ticari mutfak ekipmanında aynı belirti çok farklı arızalardan kaynaklanabilir. Bu yüzden sabit bir liste yerine, arıza yerinde tespit edildikten sonra net bir ücret bildiriyoruz. Onayınız olmadan hiçbir işlem yapılmaz." crumbs={crumbs}>
        <CallButtons className="mt-7" />
      </PageTop>
      <div className="wrap space-y-10 py-10">
        <section>
          <SectionTitle title="Ücreti etkileyen dört etken" />
          <ol className="mt-6 grid gap-4 sm:grid-cols-2">
            {factors.map((f, i) => (
              <li key={f.t} className="card flex gap-4 p-6">
                <span className="text-3xl font-extrabold text-sun-2">{i + 1}</span>
                <div><h3 className="text-lg font-extrabold">{f.t}</h3><p className="mt-1 text-ink-3">{f.d}</p></div>
              </li>
            ))}
          </ol>
        </section>
        <section className="rounded-[10px] border-2 border-ink bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-extrabold">Sürpriz yok: üç kuralımız</h2>
          <ul className="mt-5 grid gap-4 md:grid-cols-3">
            <li><p className="font-extrabold">Önce tespit</p><p className="mt-1 text-ink-3">Tahminle parça değiştirmeyiz; arızayı ölçümle buluruz.</p></li>
            <li><p className="font-extrabold">Sonra onay</p><p className="mt-1 text-ink-3">İşin kapsamını ve ücreti öğrenmeden onarım başlamaz.</p></li>
            <li><p className="font-extrabold">En son test</p><p className="mt-1 text-ink-3">Cihaz önünüzde çalıştırılır, fatura ve garanti ile teslim edilir.</p></li>
          </ul>
        </section>
        <section className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <SectionTitle title="Ücretle ilgili sorular" />
          <QAList items={qa} />
        </section>
        <Note />
      </div>
      <DarkBand title="Arızanızı anlatın, yaklaşık bilgi verelim" />
    </>
  );
}
