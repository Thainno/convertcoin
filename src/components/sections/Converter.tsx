"use client";

import { useState } from "react";
import Image from "next/image";

import Card from "../ui/Card";
import arrowLeft from "@/assets/images/arrow-left.svg";
import arrowRight from "@/assets/images/arrow-right.svg";

import { useCurrencyConverter } from "@/hooks/useCurrencyConverter";
import { swapCurrencies } from "@/lib/utils/swapUtils";

export default function Converter() {
  const state = useCurrencyConverter(); // Agora vem tudo agrupado!
  const [isSwapping, setIsSwapping] = useState(false);

  const handleSwapCards = () => {
    setIsSwapping(true);
    setTimeout(() => {
      swapCurrencies(state);
      setIsSwapping(false);
    }, 250);
  };

  return (
    <section className="flex flex-col items-center h-screen min-h-160 -mt-25">
      <div className="flex flex-row items-center justify-center gap-30 w-full h-full relative top-4">
        {/* Card Esquerdo */}
        <div
          className={`transition-all ${
            isSwapping
              ? "translate-x-40 opacity-0"
              : "translate-x-0 opacity-100"
          }`}
        >
          <Card
            currency={state.leftCurrency}
            value={state.leftValue}
            onCurrencyChange={state.setLeftCurrency}
            onValueChange={(val) => {
              state.setLeftValue(val);
              state.setActiveInput("left");
            }}
            rates={state.rates}
            imagePosition="left"
            isActive={state.activeInput === "left"}
            otherCurrency={state.rightCurrency}
          />
        </div>

        {/* Botões */}
        <div
          className="flex flex-col cursor-pointer z-20 group"
          onClick={handleSwapCards}
        >
          <Image
            className="shadow-2xl rounded-full transition-transform duration-300 group-hover:-translate-x-2"
            src={arrowLeft}
            width={50}
            height={50}
            alt="Swap moedas"
          />
          <Image
            className="shadow-2xl rounded-full transition-transform duration-300 group-hover:translate-x-2"
            src={arrowRight}
            width={50}
            height={50}
            alt="Swap moedas"
          />
        </div>

        {/* Card Direito */}
        <div
          className={`transition-all ${
            isSwapping
              ? "-translate-x-40 opacity-0"
              : "translate-x-0 opacity-100"
          }`}
        >
          <Card
            currency={state.rightCurrency}
            value={state.rightValue}
            onCurrencyChange={state.setRightCurrency}
            onValueChange={(val) => {
              state.setRightValue(val);
              state.setActiveInput("right");
            }}
            rates={state.rates}
            imagePosition="right"
            isActive={state.activeInput === "right"}
            otherCurrency={state.leftCurrency}
          />
        </div>
      </div>
      <span className="text-sm">
        Atualização dos valores às 11:00 UTC-3 Horário de Brasília
      </span>
    </section>
  );
}
