import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import Analytics from "@/components/Analytics";
import { Ld } from "@/components/ui";
import { site } from "@/config/site";
import { orgLd, webLd } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Öztiryakiler Teknik Servis | Mutfak Ekipmanı Tamiri", template: "%s | Öztiryakiler Teknik" },
  description: "Öztiryakiler ticari mutfak ekipmanlarında arıza onarımı, arıza rehberleri ve periyodik bakım. İstanbul Avrupa Yakası'nda yerinde servis: 0534 748 61 07.",
  applicationName: site.name,
  formatDetection: { telephone: true, address: false, email: false },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  verification: site.googleVerification ? { google: site.googleVerification } : undefined,
};

export const viewport: Viewport = { themeColor: "#17191c", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <link rel="preload" href="/fonts/manrope-latin-wght-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>
        <a href="#ana" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:bg-sun focus:p-3 focus:font-bold">İçeriğe atla</a>
        <Ld data={[orgLd(), webLd()]} />
        <Header />
        <main id="ana">{children}</main>
        <Footer />
        <FloatingContact />
        {site.gaId && <Analytics gaId={site.gaId} />}
      </body>
    </html>
  );
}
