import CurrencyChart from "./chart/CurrencyChart";
import CurrenciesTable from "./CurrenciesTable";

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
        {rightCurrencyBase.toFixed(2)} {rightCurrencyName}. A variação em
        relação ao valor de ontem é de{" "}
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
            {rightCurrencyBase}
          </p>
          <p>
            <strong>Valor ontem:</strong> {leftCurrencySymbol}1,00 ={" "}
            {rightCurrencySymbol}
            {rightCurrencyValuePrev}
          </p>
          <p>
            <strong>Variação:</strong>{" "}
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
