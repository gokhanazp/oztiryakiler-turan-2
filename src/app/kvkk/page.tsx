import { site } from "@/config/site";
import { meta } from "@/lib/seo";
import { PageTop } from "@/components/ui";

export const metadata = meta({
  title: "KVKK Aydınlatma Metni",
  description: "Öztiryakiler Teknik Servis kişisel verilerin korunması aydınlatma metni: arıza bildiriminde işlenen veriler, amaçlar, çerezler ve haklarınız.",
  path: "/kvkk",
});

export default function Kvkk() {
  return (
    <>
      <PageTop title="KVKK Aydınlatma Metni" crumbs={[{ name: "Anasayfa", path: "/" }, { name: "KVKK", path: "/kvkk" }]} />
      <section className="py-12">
        <div className="wrap prose-guide max-w-3xl">
          <p><em>Bu metin genel bir şablondur; yayın öncesi hukuk danışmanınıza kontrol ettirin.</em></p>
          <h2>Veri sorumlusu</h2>
          <p>{site.legalName || site.name} – Telefon: {site.phone}{site.email ? ` · E-posta: ${site.email}` : ""}</p>
          <h2>Hangi veriler işlenir?</h2>
          <p>Arıza bildirimi sırasında paylaştığınız ad-soyad veya işletme adı, telefon numarası, servis adresi ile cihaz ve arıza bilgileri.</p>
          <h2>Amaç ve hukuki sebep</h2>
          <p>Veriler; servis talebinin alınması, teknisyen yönlendirilmesi, onarımın yürütülmesi ve faturalandırma amacıyla, KVKK m.5/2 (c) sözleşmenin kurulması/ifası ve (ç) hukuki yükümlülük sebeplerine dayanılarak işlenir.</p>
          <h2>Aktarım</h2>
          <p>Verileriniz yasal zorunluluklar dışında üçüncü kişilerle paylaşılmaz. WhatsApp üzerinden gönderilen mesajlar ilgili platformun koşullarına tabidir.</p>
          <h2>Çerezler</h2>
          <p>Ziyaret istatistikleri için Google Analytics çerezleri yalnızca onay vermeniz hâlinde kullanılır.</p>
          <h2>Haklarınız</h2>
          <p>KVKK m.11 kapsamındaki taleplerinizi {site.email ? `${site.email} adresine veya ` : ""}{site.phone} numarasına iletebilirsiniz.</p>
        </div>
      </section>
    </>
  );
}
