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
}: {
  children: React.ReactNode;
}) => {
  const [leftCurrency, setLeftCurrency] = useState("USD");
  const [rightCurrency, setRightCurrency] = useState("BRL");

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