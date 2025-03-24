import "@/styles/components/sections/converter.css";
import "@/styles/components/common/card.css";

import Card from "../common/Card";
import coin1 from "@/assets/images/ico-coin-1.svg";
import coin2 from "@/assets/images/ico-coin-2.svg";

export default function Converter() {
  return (
    <section className="converter">
      <div className="cards">
        <Card
          imagePosition="left"
          imageSrc={coin1}
          currencyName="USD - Dólar Americano"
          currencySymbol="U$"
        />
        <Card
          imagePosition="right"
          imageSrc={coin2}
          currencyName="BRL - Real Brasileiro"
          currencySymbol="R$"
        />
      </div>
    </section>
  );
}
