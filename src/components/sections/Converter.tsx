"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Card from "../common/currencyCard/Card";
import arrowLeft from "@/assets/images/arrow-left.svg";
import arrowRight from "@/assets/images/arrow-right.svg";
import { useCurrencyConverter } from "@/hooks/useCurrencyConverter";
import { useCurrency } from "@/context/CurrencyContext";
import { cardSwap } from "@/lib/utils/cardSwap";

export default function Converter() {
  const currencyState = useCurrencyConverter();
  const { setLeftCurrency, setRightCurrency } = useCurrency();
  const [isSwapping, setIsSwapping] = useState(false);
  const [showInfo, setShowInfo] = useState(true);

  useEffect(() => {
    setLeftCurrency(currencyState.leftCurrency);
    setRightCurrency(currencyState.rightCurrency);
  }, [currencyState.leftCurrency, currencyState.rightCurrency]);

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
    <section className="flex flex-col items-center h-screen min-h-160">
      <article className="flex flex-row items-center justify-center gap-30 w-full h-full relative top-4">
        <Card
          className={`relative w-160 h-80 rounded-4xl bg-[#f9f9f9] shadow-xl flex flex-col justify-center transition-all ${
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
          className="flex flex-col cursor-pointer group"
          onClick={handleSwapCards}
          aria-label="Trocar moedas"
        >
          <Image
            className="w-12 h-8 transition-transform group-hover:-translate-x-2"
            src={arrowLeft}
            alt=""
            role="presentation"
          />
          <Image
            className="w-12 h-8 transition-transform group-hover:translate-x-2"
            src={arrowRight}
            alt=""
            role="presentation"
          />
        </button>

        <Card
          className={`relative w-160 h-80 rounded-4xl bg-[#f9f9f9] shadow-xl flex flex-col justify-center transition-all ${
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
          showInfo ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        Atualização dos valores às 11:00 UTC-3 Horário de Brasília
      </span>
    </section>
  );
}
