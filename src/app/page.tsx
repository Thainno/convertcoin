import { Inter } from "next/font/google";

import Airlines from "@/components/sections/Airlines";
import Banks from "@/components/sections/Banks";
import Brokers from "@/components/sections/Brokers";
import Content from "@/components/sections/Content";
import Converter from "@/components/sections/Converter";
import Values from "@/components/sections/Values";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function Home() {
  return (
    <main className={`${inter.variable} font-mono`}>
      <Converter />
      <Values />
      <Content />
      <Banks />
      <Brokers />
      <Airlines />
    </main>
  );
}
