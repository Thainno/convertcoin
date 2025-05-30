"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { currencyData } from "@/lib/constants/currenciesData";
import { useHistoricalRates } from "@/hooks/useHistoricalRates";

interface CurrencyContextType {
  leftCurrency: string;
  rightCurrency: string;
  setLeftCurrency: (currency: string) => void;
  setRightCurrency: (currency: string) => void;

  rightCurrencyLatestValue: number;
  rightCurrencyValuePrev: number;
  valueWeekAgo: number;
  valueMonthAgo: number;

  variationDaily: number;
  variationWeekly: number;
  variationMonthly: number;

  leftCurrencyName: string;
  rightCurrencyName: string;
  leftCurrencySymbol: string;
  rightCurrencySymbol: string;

  description: string;
  curiosity: string;
  usedIn: string[];

  lastDate: string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined,
);

export const CurrencyProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [leftCurrency, setLeftCurrency] = useState("USD");
  const [rightCurrency, setRightCurrency] = useState("BRL");

  const [rightCurrencyLatestValue, setRightCurrencyLatestValue] = useState(0);
  const [rightCurrencyValuePrev, setRightCurrencyValuePrev] = useState(0);

  const [valueWeekAgo, setValueWeekAgo] = useState(0);
  const [valueMonthAgo, setValueMonthAgo] = useState(0);

  const [variationDaily, setVariationDaily] = useState(0);
  const [variationWeekly, setVariationWeekly] = useState(0);
  const [variationMonthly, setVariationMonthly] = useState(0);

  const [lastDate, setLastDate] = useState("00/00/000");

  const { data: historicalRates, loading } = useHistoricalRates(
    leftCurrency,
    rightCurrency,
    30,
  );

  useEffect(() => {
    if (!loading && historicalRates.length > 0) {
      const sorted = [...historicalRates].sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      );

      const latest = sorted[sorted.length - 1];
      const previous = sorted[sorted.length - 2];

      const oneWeekAgo = new Date(latest.date);
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

      const oneMonthAgo = new Date(latest.date);
      oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

      const getClosestValue = (targetDate: Date) => {
        const targetTime = targetDate.getTime();
        const closest = sorted.reduce((prev, curr) => {
          const currTime = new Date(curr.date).getTime();
          const prevTime = new Date(prev.date).getTime();
          return Math.abs(currTime - targetTime) <
            Math.abs(prevTime - targetTime)
            ? curr
            : prev;
        });
        return closest.value;
      };

      const valueWeekAgo = getClosestValue(oneWeekAgo);
      const valueMonthAgo = getClosestValue(oneMonthAgo);

      setValueWeekAgo(valueWeekAgo);
      setValueMonthAgo(valueMonthAgo);

      setRightCurrencyLatestValue(latest?.value ?? 0);
      setRightCurrencyValuePrev(previous?.value ?? 0);

      const formatDateBR = (dateStr: string) => {
        const [year, month, day] = dateStr.split("-");
        return `${day}/${month}/${year}`;
      };

      setLastDate(formatDateBR(latest.date));

      setVariationDaily(
        ((latest.value - previous.value) / previous.value) * 100,
      );
      setVariationWeekly(((latest.value - valueWeekAgo) / valueWeekAgo) * 100);
      setVariationMonthly(
        ((latest.value - valueMonthAgo) / valueMonthAgo) * 100,
      );
    }
  }, [historicalRates, loading]);

  const leftCurrencyData = currencyData.currencies[leftCurrency];
  const rightCurrencyData = currencyData.currencies[rightCurrency];

  const leftCurrencyName = leftCurrencyData?.name;
  const rightCurrencyName = rightCurrencyData?.name;

  const leftCurrencySymbol = leftCurrencyData?.symbol;
  const rightCurrencySymbol = rightCurrencyData?.symbol;

  const description = leftCurrencyData?.description;
  const curiosity = leftCurrencyData?.curiosity;
  const usedIn = leftCurrencyData?.usedIn;

  return (
    <CurrencyContext.Provider
      value={{
        leftCurrency,
        rightCurrency,
        setLeftCurrency,
        setRightCurrency,
        rightCurrencyLatestValue,
        rightCurrencyValuePrev,
        valueWeekAgo,
        valueMonthAgo,
        leftCurrencyName,
        rightCurrencyName,
        leftCurrencySymbol,
        rightCurrencySymbol,
        description,
        curiosity,
        usedIn,
        lastDate,
        variationDaily,
        variationWeekly,
        variationMonthly,
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
