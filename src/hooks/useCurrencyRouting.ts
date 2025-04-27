"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { CurrencyConverterState } from "@/hooks/useCurrencyConverter";

export const useCurrencyRouting = (currencyState: CurrencyConverterState) => {
  const router = useRouter();

  useEffect(() => {
    if (currencyState.leftCurrency && currencyState.rightCurrency) {
      const slug: string = `${currencyState.leftCurrency.toLowerCase()}-${currencyState.rightCurrency.toLowerCase()}`;

      const currentPath: string = window.location.pathname.slice(1);
      console.log(currentPath);
      console.log(slug);

      if (slug !== currentPath) {
        router.replace(`/${slug}`);
      }
    }
  }, [currencyState.leftCurrency, currencyState.rightCurrency]);
};
