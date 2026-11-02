import Link from "next/link";
import { devices } from "@/data/devices";
import { guidesFor } from "@/data/guides";
import { crumbLd, meta } from "@/lib/seo";
import { DarkBand, Ld, PageTop } from "@/components/ui";
import { DevIcon, IArrow } from "@/components/icons";

export const metadata = meta({
  title: "Arıza Rehberi | Öztiryakiler Teknik Servis",
  absolute: true,
  description: "Endüstriyel ocak, fırın, fritöz, buzdolabı ve bulaşık makinesi arızalarının nedenleri, güvenle yapılabilecek kontroller ve servis çağırma zamanı.",
  path: "/ariza-rehberi",
});

const crumbs = [{ name: "Anasayfa", path: "/" }, { name: "Arıza rehberi", path: "/ariza-rehberi" }];

export default function GuideIndex() {
  return (
    <>
      <Ld data={crumbLd(crumbs)} />
      <PageTop kicker="Arıza rehberi" title="Mutfak ekipmanı arızaları: neden olur, ne yapılır?" lead="Teknisyenlerimizin sahada en sık karşılaştığı sorunları derledik. Her rehberde olası nedenler, kendi başınıza güvenle yapabileceğiniz kontroller ve servis gerektiren durumlar var." crumbs={crumbs} />
      <section className="py-12">
        <div className="wrap space-y-12">
          {devices.map((d) => {
            const list = guidesFor(d.slug);
            if (!list.length) return null;
            return (
              <div key={d.slug} className="grid gap-4 border-t-2 border-ink pt-6 md:grid-cols-[240px_1fr]">
                <Link href={`/servis/${d.slug}`} className="flex items-center gap-3 self-start">
                  <span className="grid h-11 w-11 place-items-center rounded-[10px] bg-ink text-sun"><DevIcon name={d.icon} /></span>
                  <span className="text-xl font-extrabold">{d.name}</span>
                </Link>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {list.map((g) => (
                    <li key={g.slug}>
                      <Link href={`/ariza-rehberi/${g.slug}`} className="card group flex h-full flex-col p-5 hover:border-ink">
                        <span className="font-extrabold leading-snug">{g.title}</span>
                        <span className="mt-2 text-sm text-mute">{g.description}</span>
                        <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold">{g.minutes} dk okuma <IArrow className="h-4 w-4" /></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
      <DarkBand title="Rehber yetmediyse bir telefon yeter" />
    </>
  );
}
