"use client";

import { useCurrencyConverter } from "@/hooks/useCurrencyConverter";
import { useCurrency } from "@/context/CurrencyContext";
import { swapCurrencies } from "@/lib/utils/swapUtils";
import { useEffect, useState } from "react";
import Card from "./currencyCard/Card";
import Image from "next/image";
import arrowLeft from "@/assets/images/arrow-left.svg";
import arrowRight from "@/assets/images/arrow-right.svg";

export default function ConverterController() {
  const localState = useCurrencyConverter();
  const { setLeftCurrency, setRightCurrency } = useCurrency();
  const [isSwapping, setIsSwapping] = useState(false);
  const [showInfo, setShowInfo] = useState(true);

  useEffect(() => {
    setLeftCurrency(localState.leftCurrency);
    setRightCurrency(localState.rightCurrency);
  }, [localState.leftCurrency, localState.rightCurrency]);

  useEffect(() => {
    const handleScroll = () => setShowInfo(window.scrollY < 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSwapCards = () => {
    setIsSwapping(true);
    setTimeout(() => {
      swapCurrencies(localState);
      setLeftCurrency(localState.leftCurrency);
      setRightCurrency(localState.rightCurrency);
      setIsSwapping(false);
    }, 250);
  };

  return (
    <>
      <article className="flex flex-row items-center justify-center gap-30 w-full h-full relative top-4">
        <Card
          className={`relative w-160 h-80 rounded-4xl bg-[#f9f9f9] shadow-xl flex flex-col justify-center transition-all ${
            isSwapping
              ? "translate-x-40 opacity-0"
              : "translate-x-0 opacity-100"
          }`}
          currency={localState.leftCurrency}
          value={localState.leftValue}
          onCurrencyChange={(val) => {
            localState.setLeftCurrency(val);
            setLeftCurrency(val);
          }}
          onValueChange={(val) => {
            localState.setLeftValue(val);
            localState.setActiveInput("left");
          }}
          rates={localState.rates}
          imagePosition="left"
          isActive={localState.activeInput === "left"}
          otherCurrency={localState.rightCurrency}
        />

        <button
          className="flex flex-col cursor-pointer group z-10"
          onClick={handleSwapCards}
          aria-label="Trocar moedas"
        >
          <Image
            className="w-12 h-8 transition-transform group-hover:-translate-x-2"
            src={arrowLeft}
            alt=""
          />
          <Image
            className="w-12 h-8 transition-transform group-hover:translate-x-2"
            src={arrowRight}
            alt=""
          />
        </button>

        <Card
          className={`relative w-160 h-80 rounded-4xl bg-[#f9f9f9] shadow-xl flex flex-col justify-center transition-all ${
            isSwapping
              ? "-translate-x-40 opacity-0"
              : "translate-x-0 opacity-100"
          }`}
          currency={localState.rightCurrency}
          value={localState.rightValue}
          onCurrencyChange={(val) => {
            localState.setRightCurrency(val);
            setRightCurrency(val);
          }}
          onValueChange={(val) => {
            localState.setRightValue(val);
            localState.setActiveInput("right");
          }}
          rates={localState.rates}
          imagePosition="right"
          isActive={localState.activeInput === "right"}
          otherCurrency={localState.leftCurrency}
        />
      </article>

      <span
        className={`text-sm transition-opacity duration-500 ${
          showInfo ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        Atualização dos valores às 11:00 UTC-3 Horário de Brasília
      </span>
    </>
  );
}
