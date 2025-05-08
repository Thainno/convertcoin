import CurrencyChart from "../chart/CurrencyChart";
import Image from "next/image";
import { getCurrenciesContentData } from "@/lib/constants/currenciesContentData";
import { CurrencyProps } from "@/types/currencies";

export default function CurrenciesOverview({
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
  lastDate,
  variationDaily,
}: CurrencyProps) {
  const currenciesContentData = getCurrenciesContentData(
    leftCurrencyName,
    rightCurrencyBase,
    valueWeekAgo,
    valueMonthAgo,
  );

  const getVariationColor = (previous: number) =>
    previous > rightCurrencyBase ? "text-red-700" : "text-green-700";

  const currentValue = `${rightCurrencySymbol}${rightCurrencyBase.toLocaleString(
    "pt-BR",
    {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
  )}`;

  const variation = `${rightCurrencyValuePrev > rightCurrencyBase ? "" : "+"}${variationDaily.toFixed(4)}%`;

  return (
    <section
      className="w-vw flex min-h-screen items-center justify-center bg-zinc-100 py-12"
      aria-labelledby="overview-title"
    >
      <div className="flex w-7xl flex-col gap-12">
        <header>
          <h1
            id="overview-title"
            className="text-5xl font-extrabold text-[#6DA67A]"
          >
            {`${leftCurrencyName} para ${rightCurrencyName}`}
          </h1>
        </header>

        <article className="h-100">
          <h2 className="text-sm font-semibold">
            {`Gráfico histórico de ${leftCurrencyName} (${leftCurrency}) para ${rightCurrencyName} (${rightCurrency})`}
          </h2>
          <CurrencyChart />
        </article>

        <p className="text-sm">
          {`Hoje, ${leftCurrencySymbol}1,00 ${leftCurrencyName} equivale a ${currentValue} ${rightCurrencyName}. A variação em relação ao valor de ontem é de `}
          <strong className={getVariationColor(rightCurrencyValuePrev)}>
            {variation}
          </strong>
          {`. A atualização da conversão foi realizada em ${lastDate}.`}
        </p>

        <div className="flex justify-around gap-12">
          {currenciesContentData.map(
            ({ title, description, image, value }, index) => {
              const cardText = `${rightCurrencySymbol}${value.toLocaleString("pt-BR", { minimumFractionDigits: 4 })} ${rightCurrencyName}`;
              return (
                <article
                  key={index}
                  className="card-overview-hover flex w-1/3 flex-col items-center gap-4 p-8 text-center"
                >
                  <Image
                    src={image}
                    width={60}
                    height={60}
                    alt={`Ícone representando o ${title}`}
                  />
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-sm">
                    {description}
                    <span>{cardText}</span>
                  </p>
                </article>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
}
