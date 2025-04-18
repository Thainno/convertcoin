"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { currencyData } from "@/lib/constants/currenciesData";
import { useHistoricalRates } from "@/hooks/useHistoricalRates";

interface CurrencyContextType {
  leftCurrency: string;
  rightCurrency: string;
  setLeftCurrency: (currency: string) => void;
  setRightCurrency: (currency: string) => void;

  rightCurrencyBase: number;
  rightCurrencyValuePrev: number;
  variation: number;

  leftCurrencyName: string;
  rightCurrencyName: string;
  leftCurrencySymbol: string;
  rightCurrencySymbol: string;

  lastDate: string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined
);

export const CurrencyProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [leftCurrency, setLeftCurrency] = useState("USD");
  const [rightCurrency, setRightCurrency] = useState("BRL");

  const [rightCurrencyBase, setRightCurrencyBase] = useState(0);
  const [rightCurrencyValuePrev, setRightCurrencyValuePrev] = useState(0);

  const [lastDate, setLastDate] = useState("00/00/000");

  const { data: historicalRates, loading } = useHistoricalRates(
    leftCurrency,
    rightCurrency,
    7
  );

  useEffect(() => {
    if (!loading && historicalRates.length > 0) {
      const sorted = [...historicalRates].sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );

      const latest = sorted[sorted.length - 1];
      const previous = sorted[sorted.length - 2];

      setRightCurrencyBase(latest?.value ?? 0);
      setRightCurrencyValuePrev(previous?.value ?? 0);

      const formatDateBR = (dateStr: string) => {
        const [year, month, day] = dateStr.split("-");
        return `${day}/${month}/${year}`;
      };

      setLastDate(formatDateBR(latest.date));
    }
  }, [historicalRates, loading]);

  const variation =
    rightCurrencyValuePrev > 0
      ? ((rightCurrencyBase - rightCurrencyValuePrev) /
          rightCurrencyValuePrev) *
        100
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
        rightCurrencyBase,
        rightCurrencyValuePrev,
        variation,
        leftCurrencyName,
        rightCurrencyName,
        leftCurrencySymbol,
        rightCurrencySymbol,
        lastDate,
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
