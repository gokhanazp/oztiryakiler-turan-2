/** Cihaz sayfası hero görselleri (public/img/cihaz) */
export type DevImg = { src: string; w: number; h: number; alt: string };

const img = (k: string, w: number, h: number, alt: string): DevImg => ({ src: `/img/cihaz/${k}.webp`, w, h, alt });

export const deviceImages: Record<string, DevImg> = {
  "oztiryakiler-ocak-servisi": img("ocak", 720, 720, "Öztiryakiler 6 gözlü gazlı endüstriyel ocak"),
  "oztiryakiler-yer-ocagi-servisi": img("yer-ocagi", 408, 384, "Öztiryakiler gazlı yer ocağı"),
  "oztiryakiler-buzdolabi-servisi": img("buzdolabi", 447, 447, "Öztiryakiler cam kapılı endüstriyel buzdolabı"),
  "oztiryakiler-fritoz-servisi": img("fritoz", 554, 554, "Öztiryakiler çift hazneli elektrikli fritöz"),
  "oztiryakiler-benmari-servisi": img("benmari", 720, 720, "Öztiryakiler tekerlekli benmari servis arabası"),
  "oztiryakiler-firin-servisi": img("firin", 554, 554, "Öztiryakiler kombi fırın"),
  "oztiryakiler-pizza-firini-servisi": img("pizza-firini", 554, 554, "Öztiryakiler iki katlı elektrikli pizza fırını"),
  "oztiryakiler-makarna-haslama-servisi": img("makarna-haslama", 554, 554, "Öztiryakiler çift hazneli makarna haşlama"),
  "oztiryakiler-izgara-servisi": img("izgara", 338, 296, "Öztiryakiler gazlı ızgara"),
  "oztiryakiler-bulasik-makinesi-servisi": img("bulasik-makinesi", 554, 554, "Öztiryakiler tezgah altı bulaşık makinesi"),
};
