"use client";

import { useCurrency } from "@/context/CurrencyContext";
import CurrencyChart from "../common/CurrencyChart";

export default function Values() {
  const { leftCurrency, rightCurrency } = useCurrency();

  return (
    <section
      id="test"
      className="flex flex-col justify-center items-center gap-12"
    >
      {/* Passa as moedas ativamente do context para o gráfico */}
      <CurrencyChart base={leftCurrency} target={rightCurrency} />
    </section>
  );
}
