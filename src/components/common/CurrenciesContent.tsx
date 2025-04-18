import CurrencyChart from "./chart/CurrencyChart";

interface Props {
  leftCurrency: string;
  rightCurrency: string;
  leftCurrencyBase: number;
  rightCurrencyBase: number;
  leftCurrencyValuePrev: number;
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
  leftCurrencyValuePrev,
  variation,
  leftCurrencyName,
  rightCurrencyName,
  leftCurrencySymbol,
  rightCurrencySymbol,
}: Props) {
  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-3xl text-green-700 font-extrabold">
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
        relação ao valor de ontem é de {variation.toFixed(2)}%. A conversão está
        atualizada em {"todayDate"}, garantindo precisão nas suas transações
        internacionais.
      </p>

      <div>
        <h2 className="text-2xl text-green-700 font-extrabold">Resumo</h2>
        <p>
          Valor hoje: {leftCurrencySymbol}1,00 = {rightCurrencySymbol}
          {rightCurrencyBase}
        </p>
        <p>
          Valor ontem: {leftCurrencySymbol}1,00 = {rightCurrencySymbol}
          {leftCurrencyValuePrev.toFixed(4)}
        </p>
        <p>Variação: {variation.toFixed(4)}%</p>
      </div>
    </section>
  );
}
