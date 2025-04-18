"use client";

import { useCurrency } from "@/context/CurrencyContext";
import CurrenciesContent from "./CurrenciesContent";

export default function CurrenciesContentWrapper() {
  const {
    leftCurrency,
    rightCurrency,
    leftCurrencyBase,
    rightCurrencyBase,
    leftCurrencyValuePrev,
    variation,
    leftCurrencyName,
    rightCurrencyName,
    leftCurrencySymbol,
    rightCurrencySymbol,
  } = useCurrency();

  return (
    <CurrenciesContent
      leftCurrency={leftCurrency}
      rightCurrency={rightCurrency}
      leftCurrencyBase={leftCurrencyBase}
      rightCurrencyBase={rightCurrencyBase}
      leftCurrencyValuePrev={leftCurrencyValuePrev}
      variation={variation}
      leftCurrencyName={leftCurrencyName}
      rightCurrencyName={rightCurrencyName}
      leftCurrencySymbol={leftCurrencySymbol}
      rightCurrencySymbol={rightCurrencySymbol}
    />
  );
}