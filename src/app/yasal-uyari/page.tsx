import { site, independenceNote } from "@/config/site";
import { meta } from "@/lib/seo";
import { PageTop } from "@/components/ui";

export const metadata = meta({
  title: "Yasal Uyarı",
  description: "Öztiryakiler Teknik Servis bağımsız servis beyanı: Öztiryakiler markasının yetkili servisi değildir; marka adı yalnızca cihazları tanımlamak için kullanılır.",
  path: "/yasal-uyari",
});

export default function Legal() {
  return (
    <>
      <PageTop title="Yasal uyarı" crumbs={[{ name: "Anasayfa", path: "/" }, { name: "Yasal uyarı", path: "/yasal-uyari" }]} />
      <section className="py-12">
        <div className="wrap prose-guide max-w-3xl">
          <h2>Bağımsız servis beyanı</h2>
          <p>{independenceNote}</p>
          <p>Kısacası: Öztiryakiler adını, onardığımız cihazların hangi marka olduğunu anlatmak için kullanıyoruz. {site.legalName || site.name} ile marka sahibi arasında bayilik, temsilcilik ya da yetkili servis sözleşmesi yoktur.</p>
          <h2>Garantili cihazlar</h2>
          <p>Cihazınız hâlâ fabrika garantisi kapsamındaysa, bağımsız bir servisin yapacağı onarım bu garantiyi geçersiz kılabilir. Böyle bir durumda bizi aramadan önce garanti belgenizi kontrol etmenizi ve üreticiyle iletişime geçmenizi tavsiye ederiz.</p>
          <h2>Rehber içerikleri</h2>
          <p>Rehberlerde anlattığımız kontroller, cihazı sökmeden yapılabilecek basit gözlemlerle sınırlıdır. Gaz hattı, brülör, elektrik panosu veya soğutma devresi gibi bölümlerin açılması ehliyetli bir teknisyenin işidir; bu sayfalardaki bilgiler profesyonel müdahalenin yerini tutmaz.</p>
        </div>
      </section>
    </>
  );
}
