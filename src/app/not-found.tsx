import Link from "next/link";
import { CallButtons } from "@/components/ui";

export const metadata = { title: "Sayfa bulunamadı", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="wrap py-24">
      <p className="text-8xl font-extrabold text-sun-2">404</p>
      <h1 className="mt-4 text-3xl font-extrabold">Bu sayfa burada değil.</h1>
      <p className="mt-3 text-ink-3">Arızanız için doğrudan bize ulaşabilirsiniz.</p>
      <CallButtons className="mt-6" />
      <Link href="/" className="mt-6 inline-block font-bold underline">Anasayfaya dön</Link>
    </section>
  );
}
