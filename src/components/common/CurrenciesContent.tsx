import CurrencyChart from "./chart/CurrencyChart";

interface Props {
  leftCurrency: string;
  rightCurrency: string;
  rightCurrencyBase: number;
  rightCurrencyValuePrev: number;
  variation: number;
  leftCurrencyName: string;
  rightCurrencyName: string;
  leftCurrencySymbol: string;
  rightCurrencySymbol: string;
}

export default function CurrenciesContent({
  leftCurrency,
  rightCurrency,
  rightCurrencyBase,
  rightCurrencyValuePrev,
  variation,
  leftCurrencyName,
  rightCurrencyName,
  leftCurrencySymbol,
  rightCurrencySymbol,
}: Props) {
  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-3xl text-green-700 font-bold">
        Conversão de {leftCurrencyName} ({leftCurrency}) para{" "}
        {rightCurrencyName} ({rightCurrency})
      </h1>
      <div className="flex justify-center">
        <CurrencyChart />
      </div>

      <p className="text-xl">
        Hoje, {leftCurrencySymbol}1,00 {leftCurrencyName} equivale a{" "}
        {rightCurrencySymbol}
        {rightCurrencyBase.toFixed(2)} {rightCurrencyName}. A variação em
        relação ao valor de ontem é de{" "}
        <span
          className={
            rightCurrencyValuePrev > rightCurrencyBase
              ? "text-red-700"
              : "text-green-700"
          }
        >
          {rightCurrencyValuePrev > rightCurrencyBase ? "-" : "+"}
          {variation.toFixed(2)}%
        </span>
        . A conversão está atualizada em {"todayDate"}, garantindo precisão nas
        suas transações internacionais.
      </p>

      <div>
        <h2 className="text-2xl text-green-700 font-extrabold">Resumo</h2>
        <p>
          Valor hoje: {leftCurrencySymbol}1,00 = {rightCurrencySymbol}
          {rightCurrencyBase}
        </p>
        <p>
          Valor ontem: {leftCurrencySymbol}1,00 = {rightCurrencySymbol}
          {rightCurrencyValuePrev}
        </p>
        <p>
          Variação:{" "}
          <span
            className={
              rightCurrencyValuePrev > rightCurrencyBase
                ? "text-red-700"
                : "text-green-700"
            }
          >
            {rightCurrencyValuePrev > rightCurrencyBase ? "" : "+"}
            {variation.toFixed(2)}%
          </span>
        </p>
      </div>
    </section>
  );
}
