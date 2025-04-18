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
  lastDate: string;
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
  lastDate,
}: Props) {
  return (
    <section className="flex flex-col gap-8 text-xl">
      <h1 className="text-6xl text-green-700 font-bold">
        {leftCurrencyName} <br />
        para {rightCurrencyName}
      </h1>

      <div>
        <h2 className="text-lg font-semibold">
          Gráfico histórico de {leftCurrencyName} ({leftCurrency}) para{" "}
          {rightCurrencyName} ({rightCurrency})
        </h2>

        <div className="flex justify-center">
          <CurrencyChart />
        </div>
      </div>
      <p>
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
          {variation.toFixed(4)}%
        </span>
        . A conversão está atualizada em {lastDate}, garantindo precisão nas
        suas transações internacionais.
      </p>

      <div className="text-xl">
        <h3 className="text-2xl text-green-700 font-extrabold">
          Resumo da cotação
        </h3>
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
            {variation.toFixed(4)}%
          </span>
        </p>
      </div>
    </section>
  );
}
