import { site } from "@/config/site";
import { crumbLd, meta } from "@/lib/seo";
import { DarkBand, Ld, Note, PageTop, SectionTitle } from "@/components/ui";

export const metadata = meta({
  title: "Hakkımızda",
  description: "Öztiryakiler Teknik Servis: İstanbul Avrupa Yakası'nda ticari mutfak ekipmanlarına bağımsız arıza onarımı ve periyodik bakım hizmeti.",
  path: "/hakkimizda",
});

const crumbs = [{ name: "Anasayfa", path: "/" }, { name: "Hakkımızda", path: "/hakkimizda" }];

const values = [
  { t: "Ölçmeden değiştirmeyiz", d: "Her teşhis ölçü aletiyle yapılır. Gereksiz parça değişimi hem size hem bize zaman kaybettirir." },
  { t: "Mutfağın saatine uyarız", d: "Planlı işleri servis dışı saatlere koyar, acil arızalarda ise önceliği soğutma ve gaz güvenliğine veririz." },
  { t: "Açık konuşuruz", d: "Onarımın mantıklı olmadığı durumlarda bunu söyler, kararı size bırakırız." },
];

export default function About() {
  return (
    <>
      <Ld data={crumbLd(crumbs)} />
      <PageTop kicker="Hakkımızda" title="Mutfakların arka tarafında çalışan ekip" lead={`${site.name}, ${site.region}'nda restoran, otel, yemekhane ve pastanelerdeki Öztiryakiler ekipmanlarına arıza onarımı ve planlı bakım hizmeti veren bağımsız bir teknik servistir.`} crumbs={crumbs} />
      <div className="wrap space-y-10 py-10">
        <section className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4 text-[17px] leading-[1.8] text-ink-3">
            <p>Ticari mutfakta ekipman, işletmenin en pahalı ve en yoğun çalışan varlıklarından biridir. Bir arıza yalnızca onarım masrafı değil, kaybedilen servis saati demektir. Çalışma şeklimizi bu gerçeğe göre kurduk: hızlı ulaşmak, doğru teşhis koymak ve aynı arızanın tekrar etmesini önlemek.</p>
            <p>Gazlı pişirme cihazları, elektrikli ısıtma sistemleri, soğutma devreleri ve endüstriyel bulaşık makineleri ekibimizin uzmanlık alanıdır. Sahada edindiğimiz deneyimi, sitemizdeki arıza rehberlerinde işletme sahipleri ve mutfak ekipleriyle paylaşıyoruz.</p>
          </div>
          <ul className="space-y-4">
            {values.map((v, i) => (
              <li key={v.t} className="flex gap-4 rounded-[10px] bg-white p-5">
                <span className="text-2xl font-extrabold text-sun-2">{i + 1}</span>
                <div><p className="text-lg font-extrabold">{v.t}</p><p className="mt-1 text-ink-3">{v.d}</p></div>
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-[10px] border-2 border-ink bg-white p-6 sm:p-8">
          <SectionTitle title="Bağımsız servis olduğumuzu açıkça belirtiyoruz" />
          <p className="mt-4 max-w-3xl leading-relaxed text-ink-3">Öztiryakiler markasının yetkili servisi değiliz ve marka sahibiyle herhangi bir ticari bağımız yoktur. Garanti süresi devam eden cihazlarınızda üreticinin yetkili servisine başvurmanızı öneririz; garanti dışındaki cihazlarınız için hizmetinizdeyiz.</p>
        </section>
        <Note />
      </div>
      <DarkBand title="Bizimle çalışmak ister misiniz?" />
    </>
  );
}
