import Image from "next/image";

import Card from "../common/Card";
import coin1 from "@/assets/images/ico-coin-1.svg";
import coin2 from "@/assets/images/ico-coin-2.svg";
import arrowLeft from "@/assets/images/arrow-left.svg";
import arrowRight from "@/assets/images/arrow-right.svg";

export default function Converter() {
  return (
    <section className="flex flex-col items-center h-[100vh] min-h-160 -mt-25">
      <div className="flex flex-row items-center justify-center gap-30 w-full h-full relative top-4">
        <Card
          imagePosition="left"
          imageSrc={coin1}
          currencyName="USD - Dólar Americano"
          currencySymbol="U$"
        />
        <div className="flex flex-col">
          <Image
            className="shadow-2xl rounded-full"
            src={arrowLeft}
            width={50}
            height={50}
            alt="Botão para alterar a posição das moedas selecionadas"
          />
          <Image
            className="shadow-2xl rounded-full"
            src={arrowRight}
            width={50}
            height={50}
            alt="Botão para alterar a posição das moedas selecionadas"
          />
        </div>
        <Card
          imagePosition="right"
          imageSrc={coin2}
          currencyName="BRL - Real Brasileiro"
          currencySymbol="R$"
        />
      </div>
      <span className="text-xl">
        Atualização dos valores do câmbio comercial às 06:45 UTC-3
      </span>
    </section>
  );
}
