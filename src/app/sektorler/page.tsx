import Link from "next/link";
import { sectors } from "@/data/sectors";
import { crumbLd, meta } from "@/lib/seo";
import { DarkBand, Ld, PageTop } from "@/components/ui";
import { IArrow } from "@/components/icons";

export const metadata = meta({
  title: "Sektörlere Göre Servis | Öztiryakiler Teknik",
  absolute: true,
  description: "Restoran, otel, yemekhane, okul kantini, gemi ve askeri kurum mutfakları için Öztiryakiler ekipman servisi ve işletmeye özel bakım takvimleri.",
  path: "/sektorler",
});

const crumbs = [{ name: "Anasayfa", path: "/" }, { name: "Sektörler", path: "/sektorler" }];

export default function Sectors() {
  return (
    <>
      <Ld data={crumbLd(crumbs)} />
      <PageTop kicker="Sektörler" title="Her mutfağın kritik cihazı farklıdır" lead="Bir otel kahvaltısında benmari, bir fast food işletmesinde fritöz, bir yemekhanede yer ocağı her şeydir. İşletme türünüze göre risklerin ve bakım ihtiyacının nasıl değiştiğini görün." crumbs={crumbs} />
      <section className="py-12">
        <div className="wrap">
          <ul className="divide-y divide-line border-y-2 border-ink">
            {sectors.map((s, i) => (
              <li key={s.slug}>
                <Link href={`/sektorler/${s.slug}`} className="group grid items-center gap-3 py-6 sm:grid-cols-[80px_1fr_auto] sm:px-3 hover:bg-white">
                  <span className="text-4xl font-extrabold text-sun-2">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="block text-2xl font-extrabold">{s.name}</span>
                    <span className="mt-1 block max-w-3xl text-ink-3">{s.lead}</span>
                  </span>
                  <IArrow className="hidden h-6 w-6 transition group-hover:translate-x-1 sm:block" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <DarkBand title="İşletmeniz listede yok mu?" text="Kreş, hastane, spor tesisi; ticari mutfağı olan her işletmeye hizmet veriyoruz." />
    </>
  );
}
