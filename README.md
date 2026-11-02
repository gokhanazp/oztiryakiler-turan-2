# Öztiryakiler Teknik Servis – Web Sitesi (2. site)

Next.js 15 (App Router) + React 19 + Tailwind CSS 4. Tamamı statik üretilir (SSG).

## Çalıştırma

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Yayın öncesi

1. `src/config/site.ts` → `url` (alan adı), gerekirse `legalName`, `email`.
2. Vercel Environment Variables:
   - `NEXT_PUBLIC_SITE_URL` = `https://www.yeni-alanadi.com` (www kullanacaksanız www'lu yazın, Vercel'deki ana domain ile aynı olmalı)
   - `NEXT_PUBLIC_GA_ID` = GA4 kimliği (isteğe bağlı; KVKK çerez onayıyla yüklenir)
3. İlk siteden **ayrı** bir GitHub deposu ve **ayrı** bir Vercel projesi kullanın.

## Yapı (47 dizinlenebilir sayfa)

| Bölüm | URL | Adet |
|---|---|---|
| Servis (cihaz) | `/servis/oztiryakiler-ocak-servisi` | 10 |
| Arıza rehberi | `/ariza-rehberi/{slug}` | 19 |
| Sektör | `/sektorler/{slug}` | 6 |
| Diğer | `/periyodik-bakim`, `/servis-ucreti`, `/hizmet-bolgesi`, `/hakkimizda`, `/iletisim`, `/sss`, `/kvkk`, `/yasal-uyari` | |

İçerik: `src/data/devices.ts`, `src/data/guides-a.ts`, `src/data/guides-b.ts`, `src/data/sectors.ts`, `src/data/regions.ts`.

## İlk siteyle farklılık kuralları

- Metinler ilk siteden kopyalanmamalı. Yazım sırasında ölçülen ortak metin oranı: ~%1 (5 kelimelik dizilere göre).
- Yeni içerik eklerken ilk sitedeki cümleleri kullanmayın; yeni arıza rehberleri en değerli içerik türüdür.
- Telefon numarası ve marka adı ilk siteden farklıdır (0534 748 61 07 · Öztiryakiler Teknik Servis).

## Marka notu

Öztiryakiler'in yetkili servisi değildir. Beyan footer'da (her sayfa), içerik sayfalarındaki not kutusunda, /yasal-uyari ve S.S.S.'de yer alır. Öztiryakiler logosu kullanılmaz.
