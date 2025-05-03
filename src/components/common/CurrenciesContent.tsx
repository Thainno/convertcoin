import CurrencyChart from "./chart/CurrencyChart";
import CurrenciesTable from "./CurrenciesTable";
import Image from "next/image";
import { getCurrenciesContentData } from "@/lib/constants/currenciesContentData";

interface Props {
  leftCurrency: string;
  rightCurrency: string;
  rightCurrencyBase: number;
  rightCurrencyValuePrev: number;
  valueWeekAgo: number;
  valueMonthAgo: number;
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
  valueWeekAgo,
  valueMonthAgo,
  leftCurrencyName,
  rightCurrencyName,
  leftCurrencySymbol,
  rightCurrencySymbol,
  lastDate,
  variationDaily,
  variationWeekly,
  variationMonthly,
}: Props) {
  const currenciesContentData = getCurrenciesContentData(
    leftCurrencyName,
    rightCurrencyBase,
    valueWeekAgo,
    valueMonthAgo,
  );

  return (
    <>
      <section className="flex min-h-screen w-full items-center justify-center bg-zinc-100 py-18">
        <div className="flex w-300 flex-col gap-12">
          <h1 className="text-5xl font-extrabold text-[#6DA67A]">
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

          <p className="text-lg leading-relaxed">
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
          <div className="flex justify-around gap-12">
            {currenciesContentData.map(
              ({ title, description, image, value }, index) => (
                <div
                  key={index}
                  className="relative flex w-1/3 flex-col items-center gap-4 text-center"
                >
                  <Image src={image} width={60} height={60} alt="" />
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-sm">
                    {description}
                    <span>
                      {rightCurrencySymbol}
                      {value.toLocaleString("pt-BR", {
                        maximumFractionDigits: 4,
                      })}
                    </span>{" "}
                    {rightCurrencyName}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="flex min-h-screen w-300 items-center justify-center gap-16">
        <div className="flex flex-col gap-4 text-xl">
          <h2 className="mb-4 text-5xl font-extrabold text-[#6DA67A]">
            Resumo da cotação
          </h2>
          <p>
            O {leftCurrencyName} apresentou variações relevantes em relação ao{" "}
            {rightCurrencyName} ao longo dos últimos dias. <br />
            <br /> Houve uma{" "}
            {rightCurrencyValuePrev > rightCurrencyBase
              ? "queda"
              : "alta"} de{" "}
            <span
              className={
                rightCurrencyValuePrev > rightCurrencyBase
                  ? "text-red-700"
                  : "text-green-700"
              }
            >
              {variationDaily.toLocaleString("pt-BR", {
                maximumFractionDigits: 2,
              })}
              %
            </span>{" "}
            entre ontem e hoje, uma{" "}
            {valueWeekAgo > rightCurrencyBase ? "queda" : "alta"} de{" "}
            <span
              className={
                valueWeekAgo > rightCurrencyBase
                  ? "text-red-700"
                  : "text-green-700"
              }
            >
              {variationWeekly.toLocaleString("pt-BR", {
                maximumFractionDigits: 2,
              })}
              %
            </span>{" "}
            na comparação com a semana passada e uma{" "}
            {valueMonthAgo > rightCurrencyBase ? "queda" : "alta"} de{" "}
            <span
              className={
                valueMonthAgo > rightCurrencyBase
                  ? "text-red-700"
                  : "text-green-700"
              }
            >
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
      </section>
    </>
  );
}
