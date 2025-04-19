import CurrencyChart from "./chart/CurrencyChart";
import CurrenciesTable from "./CurrenciesTable";

interface Props {
  leftCurrency: string;
  rightCurrency: string;
  rightCurrencyBase: number;
  rightCurrencyValuePrev: number;
  leftCurrencyName: string;
  rightCurrencyName: string;
  leftCurrencySymbol: string;
  rightCurrencySymbol: string;
  lastDate: string;
  variationDaily: number;
  variationWeekly: number;
  variationMonthly: number;
}

export default function CurrenciesContent({
  leftCurrency,
  rightCurrency,
  rightCurrencyBase,
  rightCurrencyValuePrev,
  leftCurrencyName,
  rightCurrencyName,
  leftCurrencySymbol,
  rightCurrencySymbol,
  lastDate,
  variationDaily,
  variationWeekly,
  variationMonthly,
}: Props) {
  return (
    <section className="flex flex-col gap-12 text-xl">
      <h1 className="text-6xl text-[#6DA67A] font-bold">
        {leftCurrencyName} para {rightCurrencyName}
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
        {rightCurrencyBase.toLocaleString("pt-BR", {
          maximumFractionDigits: 2,
        })}{" "}
        {rightCurrencyName}. A variação em relação ao valor de ontem é de{" "}
        <span
          className={
            rightCurrencyValuePrev > rightCurrencyBase
              ? "text-red-700"
              : "text-green-700"
          }
        >
          {rightCurrencyValuePrev > rightCurrencyBase ? "" : "+"}
          {variationDaily.toFixed(4)}%
        </span>
        . A atualização da conversão foi realizada em {lastDate}, garantindo
        precisão nas suas transações internacionais.
      </p>
      <div className="flex justify-between items-center mt-16">
        <div className="flex flex-col gap-4 text-xl">
          <h3 className="text-4xl text-[#6DA67A] font-extrabold mb-4">
            Resumo da cotação
          </h3>
          <p className="">
            <strong>Valor hoje</strong>: {leftCurrencySymbol}1,00 ={" "}
            {rightCurrencySymbol}
            {rightCurrencyBase.toLocaleString("pt-BR", {
              minimumFractionDigits: 4,
            })}
          </p>
          <p>
            <strong>Valor ontem:</strong> {leftCurrencySymbol}1,00 ={" "}
            {rightCurrencySymbol}
            {rightCurrencyValuePrev.toLocaleString("pt-BR", {
              minimumFractionDigits: 4,
            })}
          </p>
          <p>
            <strong>Variação diária:</strong>{" "}
            <span
              className={
                rightCurrencyValuePrev > rightCurrencyBase
                  ? "text-red-700"
                  : "text-green-700"
              }
            >
              {rightCurrencyValuePrev > rightCurrencyBase ? "" : "+"}
              {variationDaily.toFixed(4)}%
            </span>
          </p>{" "}
          <p>
            <strong>Variação semanal:</strong>{" "}
            <span
              className={
                rightCurrencyValuePrev > rightCurrencyBase
                  ? "text-red-700"
                  : "text-green-700"
              }
            >
              {rightCurrencyValuePrev > rightCurrencyBase ? "" : "+"}
              {variationWeekly.toFixed(4)}%
            </span>
          </p>{" "}
          <p>
            <strong>Variação mensal:</strong>{" "}
            <span
              className={
                rightCurrencyValuePrev > rightCurrencyBase
                  ? "text-red-700"
                  : "text-green-700"
              }
            >
              {rightCurrencyValuePrev > rightCurrencyBase ? "" : "+"}
              {variationMonthly.toFixed(4)}%
            </span>
          </p>
          <p>
            <strong>Atualização:</strong> {lastDate}
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
