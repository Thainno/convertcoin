"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { currencyData } from "@/lib/constants/currenciesData";
import { fetchCurrencyRates } from "@/services/API/currencyValue";

interface CurrencyContextType {
  leftCurrency: string;
  rightCurrency: string;
  setLeftCurrency: (currency: string) => void;
  setRightCurrency: (currency: string) => void;

  leftCurrencyBase: number;
  rightCurrencyBase: number; 
  leftCurrencyValuePrev: number; 
  variation: number;

  leftCurrencyName: string;
  rightCurrencyName: string;
  leftCurrencySymbol: string;
  rightCurrencySymbol: string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined
);

export const CurrencyProvider = ({ children }: { children: React.ReactNode }) => {
  const [leftCurrency, setLeftCurrency] = useState("USD");
  const [rightCurrency, setRightCurrency] = useState("BRL");

  const [rates, setRates] = useState<Record<string, number> | null>(null);
  const [prevRates, setPrevRates] = useState<Record<string, number> | null>(null);

  // Fixa o valor da moeda de base como "1"
  const leftCurrencyBase = 1;

  // Atualiza as taxas de câmbio sempre que a moeda da esquerda muda
  useEffect(() => {
    const loadRates = async () => {
      const today = await fetchCurrencyRates(leftCurrency); 
      const yesterday = await fetchCurrencyRates(leftCurrency);

      setRates(today.rates);
      setPrevRates(yesterday.rates);
    };

    loadRates();
  }, [leftCurrency]);

  // Retorna o valor convertido para a moeda da direita
  const rightCurrencyBase = rates?.[rightCurrency] || 0;

  // Retorna o valor anterior da moeda da direita
  const leftCurrencyValuePrev = prevRates?.[rightCurrency] || 0;

  // Cálculo da variação
  const variation =
    leftCurrencyValuePrev > 0
      ? leftCurrencyBase / leftCurrencyValuePrev
      : 0;

  const leftCurrencyName = currencyData.currencies[leftCurrency]?.name || "";
  const rightCurrencyName = currencyData.currencies[rightCurrency]?.name || "";

  const leftCurrencySymbol =
    currencyData.currencies[leftCurrency]?.symbol || leftCurrency;
  const rightCurrencySymbol =
    currencyData.currencies[rightCurrency]?.symbol || rightCurrency;

  return (
    <CurrencyContext.Provider
      value={{
        leftCurrency,
        rightCurrency,
        setLeftCurrency,
        setRightCurrency,
        leftCurrencyBase,
        rightCurrencyBase,
        leftCurrencyValuePrev,
        variation,
        leftCurrencyName,
        rightCurrencyName,
        leftCurrencySymbol,
        rightCurrencySymbol,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context)
    throw new Error("useCurrency must be used within CurrencyProvider");
  return context;
};