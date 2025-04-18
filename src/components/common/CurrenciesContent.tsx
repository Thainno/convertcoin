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
    <section>
      <h2>
        Gráfico histórico do {leftCurrencyName} ({leftCurrency})
      </h2>
      <CurrencyChart />
      <h2>
        Conversão de {leftCurrencyName} ({leftCurrency}) para{" "}
        {rightCurrencyName} ({rightCurrency})
      </h2>
      <p>
        Hoje, {leftCurrencySymbol}1,00 {leftCurrencyName} equivale a{" "}
        {rightCurrencySymbol}
        {rightCurrencyBase.toFixed(2)} {rightCurrencyName}. A variação em
        relação ao valor de ontem é de {variation.toFixed(2)}%. A conversão está
        atualizada em {"todayDate"}, garantindo precisão nas suas transações
        internacionais.
      </p>
      <h3>Resumo</h3>
      <p>
        Valor hoje: {leftCurrencySymbol}1,00 = {rightCurrencySymbol}{" "}
        {rightCurrencyBase}
      </p>
      <p>
        Valor ontem: {leftCurrencySymbol}1,00 = {rightCurrencySymbol}
        {leftCurrencyValuePrev.toFixed(4)}
      </p>
      <p>Variação: {variation.toFixed(4)}%</p>
    </section>
  );
}
