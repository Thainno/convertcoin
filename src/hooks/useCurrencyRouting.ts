"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { CurrencyConverterState } from "@/hooks/useCurrencyConverter";

export const useCurrencyRouting = (currencyState: CurrencyConverterState) => {
  const router = useRouter();

  useEffect(() => {
    if (currencyState.leftCurrency && currencyState.rightCurrency) {
      const slug = `${currencyState.leftCurrency.toLowerCase()}-${currencyState.rightCurrency.toLowerCase()}`;
      router.replace(`/${slug}`);
    }
  }, [currencyState.leftCurrency, currencyState.rightCurrency]);
};
