import Airlines from "@/components/sections/Airlines";
import Banks from "@/components/sections/Banks";
import Brokers from "@/components/sections/Brokers";
import Content from "@/components/sections/Content";
import Converter from "@/components/sections/Converter";
import Values from "@/components/sections/Values";

export default function Home() {
  return (
    <>
      <Converter />
      <Values />
      <Content />
      <Banks />
      <Brokers />
      <Airlines />
    </>
  );
}
