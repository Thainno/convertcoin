"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { fetchCurrencyRates } from "@/services/API/currencyValue";

import Card from "../common/Card";
import arrowLeft from "@/assets/images/arrow-left.svg";
import arrowRight from "@/assets/images/arrow-right.svg";

export default function Converter() {
  const [leftCurrency, setLeftCurrency] = useState("USD");
  const [rightCurrency, setRightCurrency] = useState("BRL");
  const [leftValue, setLeftValue] = useState("1.00");
  const [rightValue, setRightValue] = useState("");
  const [rates, setRates] = useState<Record<string, number> | null>(null);
  const [activeInput, setActiveInput] = useState<"left" | "right" | null>(null);

  useEffect(() => {
    const loadRates = async () => {
      const data = await fetchCurrencyRates(leftCurrency);
      setRates(data.rates);

      if (data.rates[rightCurrency]) {
        const convertedValue =
          parseFloat(leftValue) * data.rates[rightCurrency];
        setRightValue(convertedValue.toFixed(2));
      }
    };
    loadRates();
  }, [leftCurrency]);

  useEffect(() => {
    if (activeInput === "left") {
      if (leftValue === "") {
        // Se o input esquerdo foi limpo, limpa o direito também
        setRightValue("");
      } else if (rates && rightCurrency && rates[rightCurrency]) {
        const numValue = parseFloat(leftValue);
        if (!isNaN(numValue)) {
          const convertedValue = numValue * rates[rightCurrency];
          setRightValue(convertedValue.toFixed(2));
        }
      }
    }
  }, [leftValue, rightCurrency, rates, activeInput]);

  useEffect(() => {
    if (activeInput === "right") {
      if (rightValue === "") {
        // Se o input direito foi limpo, limpa o esquerdo também
        setLeftValue("");
      } else if (rates && rates[rightCurrency]) {
        const numValue = parseFloat(rightValue);
        if (!isNaN(numValue)) {
          const convertedValue = numValue / rates[rightCurrency];
          setLeftValue(convertedValue.toFixed(2));
        }
      }
    }
  }, [rightValue, activeInput, rates, rightCurrency]);

  const handleLeftValueChange = (value: string) => {
    setLeftValue(value);
    setActiveInput("left");
  };

  const handleRightValueChange = (value: string) => {
    setRightValue(value);
    setActiveInput("right");
  };

  return (
    <section className="flex flex-col items-center h-[100vh] min-h-160 -mt-25">
      <div className="flex flex-row items-center justify-center gap-30 w-full h-full relative top-4">
        <Card
          currency={leftCurrency}
          value={leftValue}
          onCurrencyChange={setLeftCurrency}
          onValueChange={handleLeftValueChange}
          rates={rates}
          baseCurrency={leftCurrency}
          imagePosition="left"
          isActive={activeInput === "left"}
        />
        <div className="flex flex-col cursor-pointer">
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
          currency={rightCurrency}
          value={rightValue}
          onCurrencyChange={setRightCurrency}
          onValueChange={handleRightValueChange}
          rates={rates}
          baseCurrency={rightCurrency}
          imagePosition="right"
          isActive={activeInput === "right"}
        />
      </div>
      <span className="text-xl">
        Atualização dos valores do câmbio comercial às 06:45 UTC-3
      </span>
    </section>
  );
}
