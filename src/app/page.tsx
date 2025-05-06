import Airlines from "@/components/sections/Airlines";
import Banks from "@/components/sections/Banks";
import Content from "@/components/sections/Content";
import Converter from "@/components/sections/Converter";
import { CurrencyProvider } from "@/context/CurrencyContext";

export default function Home() {
  return (
    <main className="flex flex-col">
      <CurrencyProvider>
        <Converter />
        <Content />
      </CurrencyProvider>
      <Banks />
      <Airlines />
    </main>
  );
}
