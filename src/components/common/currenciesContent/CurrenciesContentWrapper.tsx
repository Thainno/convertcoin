"use client";

import { useCurrency } from "@/context/CurrencyContext";
import CurrenciesContent from "./CurrenciesContent";

export default function CurrenciesContentWrapper() {
  const {
    leftCurrency,
    rightCurrency,
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
  } = useCurrency();

  return (
    <CurrenciesContent
      leftCurrency={leftCurrency}
      rightCurrency={rightCurrency}
      rightCurrencyLatestValue={rightCurrencyLatestValue}
      rightCurrencyValuePrev={rightCurrencyValuePrev}
      valueWeekAgo={valueWeekAgo}
      valueMonthAgo={valueMonthAgo}
      leftCurrencyName={leftCurrencyName}
      rightCurrencyName={rightCurrencyName}
      leftCurrencySymbol={leftCurrencySymbol}
      rightCurrencySymbol={rightCurrencySymbol}
      description={description}
      curiosity={curiosity}
      usedIn={usedIn}
      lastDate={lastDate}
      variationDaily={variationDaily}
      variationWeekly={variationWeekly}
      variationMonthly={variationMonthly}
    />
  );
}
