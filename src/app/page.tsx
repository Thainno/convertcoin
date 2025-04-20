import Airlines from "@/components/sections/Airlines";
import Banks from "@/components/sections/Banks";
import Brokers from "@/components/sections/Brokers";
import Content from "@/components/sections/Content";
import Converter from "@/components/sections/Converter";
import Values from "@/components/sections/Values";
import { CurrencyProvider } from "@/context/CurrencyContext";

interface HomeProps {
  initialLeft?: string;
  initialRight?: string;
}

export default function Home({
  initialLeft = "USD",
  initialRight = "BRL",
}: HomeProps) {
  return (
    <main className="flex flex-col gap-40">
      <CurrencyProvider>
        <Converter initialLeft={initialLeft} initialRight={initialRight} />
        <Values />
      </CurrencyProvider>
      <Content />
      <Banks />
      <Brokers />
      <Airlines />
    </main>
  );
}
