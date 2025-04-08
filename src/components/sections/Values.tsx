"use client";

import { useCurrency } from "@/context/CurrencyContext";
import CurrencyChart from "../common/CurrencyChart";

export default function Values() {
  const { leftCurrency, rightCurrency } = useCurrency();

  return (
    <section className="flex justify-center h-screen -mt-24">
      {/* Passa as moedas ativamente do context para o gráfico */}
      <CurrencyChart base={leftCurrency} target={rightCurrency} />
    </section>
  );
}
