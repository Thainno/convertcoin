"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { getCountryFlagUrl } from "@/hooks/coinValue";

import downArrow from "@/assets/images/down-arrow.svg";

interface CardProps {
  imagePosition: "left" | "right";
  currency: string;
  value: string;
  onCurrencyChange: (currency: string) => void;
  onValueChange: (value: string) => void;
  rates: Record<string, number> | null;
  baseCurrency: string;
  isActive: boolean; // Novo prop para indicar qual card está sendo editado
}

export default function Card({
  imagePosition,
  currency,
  value,
  onCurrencyChange,
  onValueChange,
  rates,
  isActive,
}: CardProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const availableCurrencies = rates ? Object.keys(rates) : ["USD", "BRL"];

  const currencyNames: Record<string, string> = {
    USD: "Dólar Americano",
    BRL: "Real Brasileiro",
    EUR: "Euro",
    GBP: "Libra Esterlina",
    JPY: "Iene Japonês",
  };

  const currencySymbols: Record<string, string> = {
    USD: "$",
    BRL: "R$",
    EUR: "€",
    GBP: "£",
    JPY: "¥",
  };

  const test = getCountryFlagUrl(currency);

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    
    // Permite: números, ponto, vírgula, backspace, delete
    const isValid = /^[0-9]*[,.]?[0-9]*$/.test(inputValue) || inputValue === '';
    
    if (isValid) {
      // Substitui vírgula por ponto para cálculo
      const normalizedValue = inputValue.replace(',', '.');
      onValueChange(normalizedValue);
    }
  };

  // Formata o valor para exibição (mantém como digitado quando ativo, formata quando inativo)
  const displayValue = isActive 
    ? value 
    : value === '' 
      ? '' 
      : parseFloat(value).toFixed(2);

  return (
    <div className="w-160 h-80 rounded-4xl bg-[#f9f9f9] shadow-xl flex flex-col justify-center">
      <div
        className={`flex ${
          imagePosition === "left" ? "flex-row" : "flex-row-reverse text-right"
        } items-center p-8 gap-4`}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <Image
          src={test}
          width={90}
          height={90}
          alt={`Símbolo da moeda ${currency}`}
          className="rounded-full cursor-pointer"
        />
        <h2 className="text-3xl w-4/5">
          {currencyNames[currency] || currency}
        </h2>
        <Image
          src={downArrow}
          width={30}
          height={30}
          alt="Selecionar moeda"
          className="cursor-pointer"
        />

        {showDropdown && (
          <div
            className={`absolute z-10 mt-40 ${
              imagePosition === "left" ? "left-20" : "right-20"
            } w-64 bg-white rounded-2xl shadow-xl overflow-hidden`}
          >
            {availableCurrencies.map((curr) => (
              <div
                key={curr}
                onClick={(e) => {
                  e.stopPropagation();
                  onCurrencyChange(curr);
                  setShowDropdown(false);
                }}
                className="flex items-center px-6 hover:bg-gray-100 cursor-pointer"
              >
                <Image
                  src={getCountryFlagUrl(curr)}
                  alt="curr"
                  width={40}
                  height={30}
                  className="rounded-full mr-4"
                />
                <div>
                  <div className="font-medium">{curr}</div>
                  <div className="text-sm text-gray-500">
                    {currencyNames[curr] || curr}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="p-8 w-full h-36 relative">
        <label className="text-4xl absolute left-14 top-10">
          {currencySymbols[currency] || currency}
        </label>
        <input
          ref={inputRef}
          type="text" // Alterado para text para melhor controle
          inputMode="decimal"
          autoComplete="off"
          value={displayValue}
          onChange={handleValueChange}
          className="w-full h-16 rounded-4xl px-8 text-right text-4xl bg-[#fff] shadow-sm"
        />
      </div>
    </div>
  );
}
