/**
 * Site ayarları – tüm firma bilgileri buradan yönetilir.
 */
export const site = {
  // Yayın adresi (sonunda / olmadan). Vercel'de NEXT_PUBLIC_SITE_URL ile tanımlayın.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.oztiryakiler-servisi.net",

  name: "Öztiryakiler Teknik Servis",
  shortName: "Öztiryakiler Teknik",
  tagline: "Ticari mutfak ekipmanları için arıza, onarım ve periyodik bakım",
  legalName: "", // Ticari ünvan (boşsa gösterilmez)
  email: "", // Çalışan bir e-posta (boşsa gösterilmez)

  phone: "0534 748 61 07",
  phoneIntl: "+90 534 748 61 07",
  phoneHref: "+905347486107",
  whatsapp: "905347486107",

  region: "İstanbul Avrupa Yakası",
  address: {
    street: "Vatan Mah. Kanaat Sok. Esenler Cad. No:53 Kat:1",
    district: "Bayrampaşa",
    postalCode: "34035",
    display: "Vatan Mah. Kanaat Sok. Esenler Cad. No:53 Kat:1, 34035 Bayrampaşa / İstanbul",
  },
  city: "İstanbul",

  hours: {
    short: "Hafta içi ve Cumartesi 08.00–20.00",
    long: "Pazartesi–Cumartesi 08.00–20.00 · Pazar günleri acil çağrılar",
    schema: [
      { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "08:00", closes: "20:00" },
      { days: ["Sunday"], opens: "10:00", closes: "18:00" },
    ],
  },

  social: [] as string[], // Google İşletme Profili, Instagram vb. linkleri

  gaId: process.env.NEXT_PUBLIC_GA_ID || "",
  googleVerification: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",

  /** İçeriğin son güncellenme tarihi (sitemap lastmod) */
  contentUpdated: "2026-10-31",
} as const;

export const independenceNote =
  "Öztiryakiler Teknik Servis, Öztiryakiler markasının yetkili servisi değildir; bu marka ile ortaklık veya bayilik ilişkisi bulunmayan bağımsız bir teknik servistir. Marka adı, yalnızca bakım ve onarımını yaptığımız cihazları tanımlamak için kullanılır.";

export const waLink = (text = "Merhaba, mutfak ekipmanım için servis istiyorum.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
