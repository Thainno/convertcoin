import { useState, useEffect } from "react";
import { fetchCurrencyRates } from "@/services/API/currencyValue";

export interface CurrencyConverterState {
  leftCurrency: string;
  rightCurrency: string;
  leftValue: string;
  rightValue: string;
  rates: Record<string, number> | null;
  activeInput: "left" | "right" | null;
  setLeftCurrency: (val: string) => void;
  setRightCurrency: (val: string) => void;
  setLeftValue: (val: string) => void;
  setRightValue: (val: string) => void;
  setActiveInput: (val: "left" | "right" | null) => void;
}

export function useCurrencyConverter(): CurrencyConverterState {
  const [leftCurrency, setLeftCurrency] = useState("USD");
  const [rightCurrency, setRightCurrency] = useState("BRL");
  const [leftValue, setLeftValue] = useState("100.00");
  const [rightValue, setRightValue] = useState("");
  const [rates, setRates] = useState<Record<string, number> | null>(null);
  const [activeInput, setActiveInput] = useState<"left" | "right" | null>(null);

  useEffect(() => {
    const loadRates = async () => {
      const data = await fetchCurrencyRates(leftCurrency);
      setRates(data.rates);

      if (data.rates[rightCurrency]) {
        const converted = parseFloat(leftValue) * data.rates[rightCurrency];
        setRightValue(converted.toFixed(2));
      }
    };
    loadRates();
  }, [leftCurrency, rightCurrency]);

  useEffect(() => {
    if (activeInput === "left" && rates?.[rightCurrency]) {
      const num = parseFloat(leftValue);
      setRightValue(!isNaN(num) ? (num * rates[rightCurrency]).toFixed(2) : "");
    }
  }, [leftValue, activeInput, rates, rightCurrency]);

  useEffect(() => {
    if (activeInput === "right" && rates?.[rightCurrency]) {
      const num = parseFloat(rightValue);
      setLeftValue(!isNaN(num) ? (num / rates[rightCurrency]).toFixed(2) : "");
    }
  }, [rightValue, activeInput, rates, rightCurrency]);

  const handleSetLeftCurrency = (val: string) => {
    const upperVal = val.toUpperCase();
    setLeftCurrency(upperVal);
  };

  const handleSetRightCurrency = (val: string) => {
    const upperVal = val.toUpperCase();
    setRightCurrency(upperVal);
  };

  return {
    leftCurrency,
    rightCurrency,
    leftValue,
    rightValue,
    rates,
    activeInput,
    setLeftCurrency: handleSetLeftCurrency,
    setRightCurrency: handleSetRightCurrency,
    setLeftValue,
    setRightValue,
    setActiveInput,
  };
}
