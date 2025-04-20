"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Card from "../common/currencyCard/Card";
import arrowLeft from "@/assets/images/arrow-left.svg";
import arrowRight from "@/assets/images/arrow-right.svg";
import { useCurrencyConverter } from "@/hooks/useCurrencyConverter";
import { useCurrency } from "@/context/CurrencyContext";
import { cardSwap } from "@/lib/utils/cardSwap";
import { useCurrencyRouting } from "@/hooks/useCurrencyRouting"; // Importando o novo hook

interface ConverterProps {
  initialLeft: string;
  initialRight: string;
}

export default function Converter({
  initialLeft,
  initialRight,
}: ConverterProps) {
  const currencyState = useCurrencyConverter();
  const { setLeftCurrency, setRightCurrency } = useCurrency();
  const [isSwapping, setIsSwapping] = useState(false);
  const [showInfo, setShowInfo] = useState(true);

  // Usando o hook externo para gerenciar a navegação
  useCurrencyRouting(currencyState);

  useEffect(() => {
    currencyState.setLeftCurrency(initialLeft.toUpperCase());
    currencyState.setRightCurrency(initialRight.toUpperCase());
    setLeftCurrency(initialLeft.toUpperCase());
    setRightCurrency(initialRight.toUpperCase());
  }, [initialLeft, initialRight]);

  useEffect(() => {
    const handleScroll = () => {
      setShowInfo(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSwapCards = () => {
    setIsSwapping(true);
    setTimeout(() => {
      cardSwap(currencyState);
      setLeftCurrency(currencyState.leftCurrency);
      setRightCurrency(currencyState.rightCurrency);
      setIsSwapping(false);
    }, 250);
  };

  const handleLeftChange = (currency: string) => {
    currencyState.setLeftCurrency(currency);
    setLeftCurrency(currency);
  };

  const handleRightChange = (currency: string) => {
    currencyState.setRightCurrency(currency);
    setRightCurrency(currency);
  };

  return (
    <section className="flex h-screen min-h-160 flex-col items-center">
      <article className="relative top-4 flex h-full w-full flex-row items-center justify-center gap-30">
        <Card
          className={`relative flex h-80 w-160 flex-col justify-center rounded-4xl bg-[#fcfcfc] shadow-xl transition-all ${
            isSwapping
              ? "translate-x-40 opacity-0"
              : "translate-x-0 opacity-100"
          }`}
          currency={currencyState.leftCurrency}
          value={currencyState.leftValue}
          onCurrencyChange={handleLeftChange}
          onValueChange={(val) => {
            currencyState.setLeftValue(val);
            currencyState.setActiveInput("left");
          }}
          rates={currencyState.rates}
          imagePosition="left"
          isActive={currencyState.activeInput === "left"}
          otherCurrency={currencyState.rightCurrency}
        />

        <button
          className="group flex cursor-pointer flex-col"
          onClick={handleSwapCards}
          aria-label="Trocar moedas"
        >
          <Image
            className="h-8 w-12 transition-transform group-hover:-translate-x-2"
            src={arrowLeft}
            alt=""
            role="presentation"
          />
          <Image
            className="h-8 w-12 transition-transform group-hover:translate-x-2"
            src={arrowRight}
            alt=""
            role="presentation"
          />
        </button>

        <Card
          className={`relative flex h-80 w-160 flex-col justify-center rounded-4xl bg-[#fcfcfc] shadow-xl transition-all ${
            isSwapping
              ? "-translate-x-40 opacity-0"
              : "translate-x-0 opacity-100"
          }`}
          currency={currencyState.rightCurrency}
          value={currencyState.rightValue}
          onCurrencyChange={handleRightChange}
          onValueChange={(val) => {
            currencyState.setRightValue(val);
            currencyState.setActiveInput("right");
          }}
          rates={currencyState.rates}
          imagePosition="right"
          isActive={currencyState.activeInput === "right"}
          otherCurrency={currencyState.leftCurrency}
        />
      </article>

      <span
        className={`text-sm transition-opacity duration-500 ${
          showInfo ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        Atualização dos valores às 12:00 UTC-3 Horário de Brasília
      </span>
    </section>
  );
}