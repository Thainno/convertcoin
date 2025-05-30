import CurrenciesTable from "./CurrenciesTable";
import { CurrencyProps } from "@/types/currencies";

export default function CurrenciesSummary({
  leftCurrency,
  rightCurrency,
  leftCurrencyName,
  rightCurrencyName,
  leftCurrencySymbol,
  rightCurrencySymbol,
  rightCurrencyLatestValue,
  rightCurrencyValuePrev,
  valueWeekAgo,
  valueMonthAgo,
  variationDaily,
  variationWeekly,
  variationMonthly,
}: CurrencyProps) {
  const getVariationColor = (previous: number) =>
    previous > rightCurrencyLatestValue ? "text-red-700" : "text-green-700";

  const getVariationStatus = (previous: number) =>
    previous > rightCurrencyLatestValue ? "queda" : "alta";

  const test = (value: number) => {
    return value.toLocaleString("pt-BR", { maximumFractionDigits: 2 });
  };

  return (
    <section
      className="flex min-h-screen max-w-screen justify-center py-12"
      aria-labelledby="summary-title"
    >
      <div className="flex w-full max-w-7xl items-center gap-16">
        <div className="text-md flex flex-col gap-4">
          <h2
            id="summary-title"
            className="mb-4 text-4xl font-extrabold text-[#6DA67A]"
          >
            {`Resumo da cotação do ${leftCurrencyName}`}
          </h2>

          <p>
            {`O ${leftCurrencyName} apresentou variações relevantes em relação ao ${rightCurrencyName} ao longo dos últimos dias.`}
          </p>
          <p>
            {`Houve uma ${getVariationStatus(rightCurrencyValuePrev)} de `}
            <strong className={getVariationColor(rightCurrencyValuePrev)}>
              {`${test(variationDaily)}%`}
            </strong>
            {` entre ontem e hoje, uma ${getVariationStatus(valueWeekAgo)} de `}
            <strong className={getVariationColor(valueWeekAgo)}>
              {`${test(variationWeekly)}%`}
            </strong>
            {` na comparação com a semana passada e uma ${getVariationStatus(valueMonthAgo)} de `}
            <strong className={getVariationColor(valueMonthAgo)}>
              {`${test(variationMonthly)}%`}
            </strong>
            {` no período de um mês.`}
          </p>
          <p>
            Confira a tabela dos valores convertidos com base na cotação atual
            de {leftCurrency} para {rightCurrency}.
          </p>
        </div>
        <CurrenciesTable
          leftCurrencySymbol={leftCurrencySymbol}
          rightCurrencySymbol={rightCurrencySymbol}
          rightCurrencyLatestValue={rightCurrencyLatestValue}
          leftCurrencyName={leftCurrencyName}
          rightCurrencyName={rightCurrencyName}
        />
      </div>
    </section>
  );
}
