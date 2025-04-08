"use client";

import { useState } from "react";
import Image from "next/image";
import Card from "../ui/Card";
import arrowLeft from "@/assets/images/arrow-left.svg";
import arrowRight from "@/assets/images/arrow-right.svg";
import { useCurrencyConverter } from "@/hooks/useCurrencyConverter";
import { useCurrency } from "@/context/CurrencyContext";
import { swapCurrencies } from "@/lib/utils/swapUtils";

export default function Converter() {
  const localState = useCurrencyConverter(); // lógica de conversão local
  const { setLeftCurrency, setRightCurrency } = useCurrency(); // sincroniza com contexto global
  const [isSwapping, setIsSwapping] = useState(false);

  setLeftCurrency(localState.leftCurrency);
  setRightCurrency(localState.rightCurrency);

  const handleSwapCards = () => {
    setIsSwapping(true);
    setTimeout(() => {
      swapCurrencies(localState);
      setLeftCurrency(localState.leftCurrency);
      setRightCurrency(localState.rightCurrency);
      setIsSwapping(false);
      console.log(localState);
    }, 250);
  };

  const handleLeftChange = (currency: string) => {
    localState.setLeftCurrency(currency);
    setLeftCurrency(currency);
  };

  const handleRightChange = (currency: string) => {
    localState.setRightCurrency(currency);
    setRightCurrency(currency);
  };

  return (
    <section className="flex flex-col items-center h-screen min-h-160 -mt-25">
      <div className="flex flex-row items-center justify-center gap-30 w-full h-full relative top-4">
        <div
          className={`transition-all ${
            isSwapping
              ? "translate-x-40 opacity-0"
              : "translate-x-0 opacity-100"
          }`}
        >
          <Card
            currency={localState.leftCurrency}
            value={localState.leftValue}
            onCurrencyChange={handleLeftChange}
            onValueChange={(val) => {
              localState.setLeftValue(val);
              localState.setActiveInput("left");
            }}
            rates={localState.rates}
            imagePosition="left"
            isActive={localState.activeInput === "left"}
            otherCurrency={localState.rightCurrency}
          />
        </div>

        {/* Botão de troca */}
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

        <div
          className={`transition-all ${
            isSwapping
              ? "-translate-x-40 opacity-0"
              : "translate-x-0 opacity-100"
          }`}
        >
          <Card
            currency={localState.rightCurrency}
            value={localState.rightValue}
            onCurrencyChange={handleRightChange}
            onValueChange={(val) => {
              localState.setRightValue(val);
              localState.setActiveInput("right");
            }}
            rates={localState.rates}
            imagePosition="right"
            isActive={localState.activeInput === "right"}
            otherCurrency={localState.leftCurrency}
          />
        </div>
      </div>
      <span className="text-sm">
        Atualização dos valores às 11:00 UTC-3 Horário de Brasília
      </span>
    </section>
  );
}
