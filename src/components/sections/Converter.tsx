import Card from "../common/Card";
import "@/styles/components/sections/converter.css";
import "@/styles/components/common/card.css";

export default function Converter() {
  return (
    <section className="converter">
      <div className="cards">
        <Card />
        <Card />
      </div>
      <span className="w-full text-center">Finalizar aqui</span>
    </section>
  );
}
