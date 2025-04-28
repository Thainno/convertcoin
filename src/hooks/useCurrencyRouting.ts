"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { CurrencyConverterState } from "@/hooks/useCurrencyConverter";

export const useCurrencyRouting = (currencyState: CurrencyConverterState) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (currencyState.leftCurrency && currencyState.rightCurrency) {
      const slug = `${currencyState.leftCurrency.toLowerCase()}-${currencyState.rightCurrency.toLowerCase()}`;

      if (slug !== pathname.slice(1)) {
        router.replace(`/${slug}`);
      }
    }
  }, [currencyState.leftCurrency, currencyState.rightCurrency]);
};