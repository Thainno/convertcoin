import type { Metadata } from "next";
import { fira } from "@/assets/fonts/fonts";
import "@/styles/globals.css";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Convert Coin",
  description:
    "Conversor de moedas online gratuito e fácil de usar. Converta dólar para real, euro para libra e muito mais com taxas de câmbio atualizadas em tempo real. Suporta mais de 150 moedas internacionais. Ideal para viagens, negócios e investimentos.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={fira.className}>
      <body>
        {/* <Header /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
