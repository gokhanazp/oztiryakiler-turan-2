import { crumbLd, meta, qaLd, serviceLd } from "@/lib/seo";
import { CallButtons, DarkBand, Ld, Note, PageTop, QAList, SectionTitle, Ticks } from "@/components/ui";
import type { QA } from "@/data/devices";

export const metadata = meta({
  title: "Periyodik Bakım Anlaşması | Öztiryakiler Teknik",
  absolute: true,
  description: "Restoran, otel ve yemekhaneler için Öztiryakiler mutfak ekipmanlarına aylık veya üç aylık periyodik bakım; kireç, gaz emniyeti ve soğutma kontrolü.",
  path: "/periyodik-bakim",
});

const crumbs = [{ name: "Anasayfa", path: "/" }, { name: "Periyodik bakım", path: "/periyodik-bakim" }];

const visit = [
  "Gazlı cihazlarda alev, termokupl ve sızdırmazlık kontrolü",
  "Fritöz ve fırın termostatlarının ölçümle doğrulanması",
  "Buzdolabı kondenser temizliği ve iç sıcaklık ölçümü",
  "Kombi fırın ve bulaşık makinesinde kireç durumunun tespiti",
  "Bulaşık makinesi deterjan–parlatıcı dozaj ayarı",
  "Conta, menteşe ve kapı ayarlarının kontrolü",
  "Her cihaz için yazılı durum raporu",
  "Yakında arıza verebilecek parçaların önceden bildirilmesi",
];

const tiers = [
  { t: "Üç aylık plan", who: "Kafe, pastane ve küçük restoranlar", d: "Yılda dört planlı ziyaret. Mevsim geçişlerinde soğutma ve ısıtma ekipmanları gözden geçirilir." },
  { t: "Aylık plan", who: "Yoğun restoranlar, oteller ve yemekhaneler", d: "Her ay planlı ziyaret. Kireç, yağ ve yıpranma birikmeden giderilir; acil çağrılarda öncelik tanınır." },
  { t: "Etkinlik öncesi kontrol", who: "Catering ve organizasyon mutfakları", d: "Yoğun dönem veya büyük etkinlik öncesinde tüm ekipmanın tek seferlik genel kontrolü." },
];

const qa: QA[] = [
  { q: "Bakım anlaşmasıyla arıza onarımı ücretsiz mi oluyor?", a: "Planlı ziyaretlerde yapılan kontrol, temizlik ve ayar işçiliği anlaşmaya dahildir. Değişmesi gereken parçalar önceden bildirilir ve onayınızla ayrıca fiyatlandırılır." },
  { q: "Ziyaretler servis saatimizi etkiler mi?", a: "Hayır. Ziyaret saatlerini servis dışı zamanlara, örneğin sabah açılış öncesine veya öğleden sonraki sakin saatlere planlıyoruz." },
  { q: "Kaç cihaz için anlaşma yapılabilir?", a: "Tek bir cihazdan tüm mutfağa kadar esnek planlama yapıyoruz. Ücret, cihaz sayısına ve ziyaret sıklığına göre belirlenir." },
];

export default function Maintenance() {
  return (
    <>
      <Ld data={[crumbLd(crumbs), qaLd(qa), serviceLd("Ticari mutfak periyodik bakımı", "Öztiryakiler mutfak ekipmanları için planlı bakım ziyaretleri.", "/periyodik-bakim", visit)]} />
      <PageTop kicker="Periyodik bakım" title="Arıza çıkmasını beklemeden bakım" lead="Endüstriyel mutfak ekipmanları genellikle aniden değil, yavaş yavaş bozulur. Planlı bakım bu yıpranmayı servis saatine yansımadan yakalar; acil çağrı sayısını, enerji tüketimini ve parça masrafını düşürür." crumbs={crumbs}>
        <CallButtons className="mt-7" />
      </PageTop>

      <div className="wrap space-y-10 py-10">
        <section>
          <SectionTitle title="Bir bakım ziyaretinde neler yapılır?" />
          <div className="mt-6"><Ticks items={visit} /></div>
        </section>

        <section>
          <SectionTitle title="Size uygun plan" />
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {tiers.map((t, i) => (
              <li key={t.t} className={`rounded-[10px] p-6 ${i === 1 ? "bg-ink text-white shadow-[8px_8px_0_#ffc21a]" : "border-2 border-ink bg-white"}`}>
                <p className={`text-xs font-bold uppercase tracking-[0.2em] ${i === 1 ? "text-sun" : "text-mute"}`}>{t.who}</p>
                <h3 className="mt-3 text-2xl font-extrabold">{t.t}</h3>
                <p className={`mt-3 leading-relaxed ${i === 1 ? "text-white/80" : "text-ink-3"}`}>{t.d}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <SectionTitle title="Bakım hakkında sorular" />
          <QAList items={qa} />
        </section>
        <Note />
      </div>
      <DarkBand title="İşletmeniz için bakım teklifi alın" text="Cihaz listenizi WhatsApp'tan gönderin, size özel planı hazırlayalım." />
    </>
  );
}
