"use client";

import { createContext, useContext, useState } from "react";

interface CurrencyContextType {
  leftCurrency: string;
  rightCurrency: string;
  setLeftCurrency: (currency: string) => void;
  setRightCurrency: (currency: string) => void;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined
);

export const CurrencyProvider = ({
  children,
  initialCurrencyLeft = "USD",
  initialCurrencyRight = "BRL",
}: {
  children: React.ReactNode;
  initialCurrencyLeft?: string;
  initialCurrencyRight?: string;
}) => {
  const [leftCurrency, setLeftCurrency] = useState(initialCurrencyLeft);
  const [rightCurrency, setRightCurrency] = useState(initialCurrencyRight);

  return (
    <CurrencyContext.Provider
      value={{ leftCurrency, rightCurrency, setLeftCurrency, setRightCurrency }}
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
