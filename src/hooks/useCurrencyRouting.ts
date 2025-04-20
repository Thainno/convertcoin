"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { CurrencyConverterState } from "@/hooks/useCurrencyConverter";

export const useCurrencyRouting = (currencyState: CurrencyConverterState) => {
  const router = useRouter();

  useEffect(() => {
    if (currencyState.leftCurrency && currencyState.rightCurrency) {
      const a = `${currencyState.leftCurrency.toLowerCase()}-${currencyState.rightCurrency.toLowerCase()}`;
      router.replace(`/${a}`);
    }
  }, [currencyState.leftCurrency, currencyState.rightCurrency]);
};