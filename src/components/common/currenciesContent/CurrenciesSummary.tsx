import CurrenciesTable from "./CurrenciesTable";
import { CurrencyProps } from "@/types/currencies";

export default function CurrenciesSummary({
  leftCurrency,
  rightCurrency,
  leftCurrencyName,
  rightCurrencyName,
  leftCurrencySymbol,
  rightCurrencySymbol,
  rightCurrencyBase,
  rightCurrencyValuePrev,
  valueWeekAgo,
  valueMonthAgo,
  variationDaily,
  variationWeekly,
  variationMonthly,
}: CurrencyProps) {
  const getVariationColor = (previous: number) =>
    previous > rightCurrencyBase ? "text-red-700" : "text-green-700";

  const getVariationStatus = (previous: number) =>
    previous > rightCurrencyBase ? "queda" : "alta";

  return (
    <section className="flex min-h-screen max-w-screen justify-center py-12">
      <div className="flex w-full max-w-7xl items-center gap-16">
        <div className="text-md flex flex-col gap-4">
          <h2 className="mb-4 text-4xl font-extrabold text-[#6DA67A]">
            Resumo da cotação do {leftCurrencyName}
          </h2>
          <p>
            O {leftCurrencyName} apresentou variações relevantes em relação ao{" "}
            {rightCurrencyName} ao longo dos últimos dias.
            <br />
            <br />
            Houve uma {getVariationStatus(rightCurrencyValuePrev)} de{" "}
            <span className={getVariationColor(rightCurrencyValuePrev)}>
              {variationDaily.toLocaleString("pt-BR", {
                maximumFractionDigits: 2,
              })}
              %
            </span>{" "}
            entre ontem e hoje, uma {getVariationStatus(valueWeekAgo)} de{" "}
            <span className={getVariationColor(valueWeekAgo)}>
              {variationWeekly.toLocaleString("pt-BR", {
                maximumFractionDigits: 2,
              })}
              %
            </span>{" "}
            na comparação com a semana passada e uma{" "}
            {getVariationStatus(valueMonthAgo)} de{" "}
            <span className={getVariationColor(valueMonthAgo)}>
              {variationMonthly.toLocaleString("pt-BR", {
                maximumFractionDigits: 2,
              })}
              %
            </span>{" "}
            no período de um mês.
            <br />
            <br />
            Confira a tabela dos valores convertidos com base na cotação atual
            de {leftCurrency} para {rightCurrency}.
          </p>
        </div>
        <CurrenciesTable
          leftCurrencySymbol={leftCurrencySymbol}
          rightCurrencySymbol={rightCurrencySymbol}
          rightCurrencyBase={rightCurrencyBase}
          leftCurrencyName={leftCurrencyName}
          rightCurrencyName={rightCurrencyName}
        />
      </div>
    </section>
  );
}
