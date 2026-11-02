import { crumbLd, meta } from "@/lib/seo";
import { CallButtons, DarkBand, DeviceRows, Ld, Note, PageTop } from "@/components/ui";

export const metadata = meta({
  title: "Öztiryakiler Servisleri – Cihaz Bazında Onarım",
  description: "Öztiryakiler ocak, yer ocağı, buzdolabı, fritöz, benmari, fırın, pizza fırını, makarna haşlama, ızgara ve bulaşık makinesi için onarım sayfaları.",
  path: "/servis",
  absolute: true,
});

const crumbs = [{ name: "Anasayfa", path: "/" }, { name: "Servisler", path: "/servis" }];

export default function Services() {
  return (
    <>
      <Ld data={crumbLd(crumbs)} />
      <PageTop kicker="Servisler" title="Hangi cihaz için servis arıyorsunuz?" lead="Cihazınızı seçin; sık görülen belirtileri, olası nedenlerini ve servisin neleri kapsadığını görün." crumbs={crumbs}>
        <CallButtons className="mt-7" />
      </PageTop>
      <section className="py-12">
        <div className="wrap space-y-10">
          <DeviceRows />
          <Note />
        </div>
      </section>
      <DarkBand title="Cihazınızı listede bulamadınız mı?" text="Diğer ticari mutfak ekipmanları için de arayabilirsiniz." />
    </>
  );
}
