import Airlines from "@/components/sections/Airlines";
import Banks from "@/components/sections/Banks";
import Brokers from "@/components/sections/Brokers";
import Content from "@/components/sections/Content";
import Converter from "@/components/sections/Converter";
import Values from "@/components/sections/Values";
import { CurrencyProvider } from "@/context/CurrencyContext";

export default function Home() {
  return (
    <main className="flex flex-col gap-40">
      <CurrencyProvider>
        <Converter />
        <Values />
      </CurrencyProvider>
      <Content />
      <Banks />
      <Brokers />
      <Airlines />
    </main>
  );
}
