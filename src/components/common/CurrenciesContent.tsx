export default function CurrenciesContent() {
  return (
    <div>
      <h2>
        Conversão de ${leftCurrency} para ${rightCurrency} - Atualizado em $
        {todayDate}
      </h2>
      <p>
        Hoje, ${leftValue} ${currencySymbol} ${currencyName} (${currencyCountry}
        ) equivale a ${rightValue} ${currencySymbol} ${currencyName} ($
        {currencyCountry}). A variação em relação ao valor de ontem é de $
        {variation}%. A conversão está atualizada em ${todayDate}, garantindo
        precisão nas suas transações internacionais."
      </p>
    </div>
  );
}
