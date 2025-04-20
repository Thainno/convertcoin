"use client";

import { useCurrency } from "@/context/CurrencyContext";
import CurrenciesContent from "./CurrenciesContent";

export default function CurrenciesContentWrapper() {
  const {
    leftCurrency,
    rightCurrency,
    rightCurrencyBase,
    rightCurrencyValuePrev,
    leftCurrencyName,
    rightCurrencyName,
    leftCurrencySymbol,
    rightCurrencySymbol,
    lastDate,
    variationDaily,
    variationWeekly,
    variationMonthly,
  } = useCurrency();

  return (
    <CurrenciesContent
      leftCurrency={leftCurrency}
      rightCurrency={rightCurrency}
      rightCurrencyBase={rightCurrencyBase}
      rightCurrencyValuePrev={rightCurrencyValuePrev}
      leftCurrencyName={leftCurrencyName}
      rightCurrencyName={rightCurrencyName}
      leftCurrencySymbol={leftCurrencySymbol}
      rightCurrencySymbol={rightCurrencySymbol}
      lastDate={lastDate}
      variationDaily={variationDaily}
      variationWeekly={variationWeekly}
      variationMonthly={variationMonthly}
    />
  );
}
