"use client";

import { useCurrency } from "@/context/CurrencyContext";
import CurrenciesContent from "./CurrenciesContent";

export default function CurrenciesContentWrapper() {
  const {
    leftCurrency,
    rightCurrency,
    rightCurrencyBase,
    rightCurrencyValuePrev,
    variation,
    leftCurrencyName,
    rightCurrencyName,
    leftCurrencySymbol,
    rightCurrencySymbol,
    lastDate,
  } = useCurrency();

  return (
    <CurrenciesContent
      leftCurrency={leftCurrency}
      rightCurrency={rightCurrency}
      rightCurrencyBase={rightCurrencyBase}
      rightCurrencyValuePrev={rightCurrencyValuePrev}
      variation={variation}
      leftCurrencyName={leftCurrencyName}
      rightCurrencyName={rightCurrencyName}
      leftCurrencySymbol={leftCurrencySymbol}
      rightCurrencySymbol={rightCurrencySymbol}
      lastDate={lastDate}
    />
  );
}
