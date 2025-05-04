import CurrencyChart from "../chart/CurrencyChart";
import CurrenciesTable from "./CurrenciesTable";

import Image from "next/image";
import littleCoin from "@/assets/images/little-coin.png";
import didYouKnow from "@/assets/images/did-you-know.svg";
import bgCuriosity from "@/assets/images/bg-curiosity.svg";

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
  description: string;
  curiosity: string;
  usedIn: string[];
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
  description,
  curiosity,
  usedIn,
}: Props) {
  const currenciesContentData = getCurrenciesContentData(
    leftCurrencyName,
    rightCurrencyBase,
    valueWeekAgo,
    valueMonthAgo,
  );

  const getVariationColor = (previous: number) =>
    previous > rightCurrencyBase ? "text-red-700" : "text-green-700";

  const getVariationStatus = (previous: number) =>
    previous > rightCurrencyBase ? "queda" : "alta";

  return (
    <>
      <section className="flex min-h-screen w-full items-center justify-center bg-zinc-100 py-12">
        <div className="flex w-7xl flex-col gap-12">
          <header>
            <h1 className="text-5xl font-extrabold text-[#6DA67A]">
              {leftCurrencyName} para {rightCurrencyName}
            </h1>
          </header>

          <article className="h-100">
            <h2 className="text-sm font-semibold">
              Gráfico histórico de {leftCurrencyName} ({leftCurrency}) para{" "}
              {rightCurrencyName} ({rightCurrency})
            </h2>
            <CurrencyChart />
          </article>

          <p className="text-lg leading-relaxed">
            Hoje, {leftCurrencySymbol}1,00 {leftCurrencyName} equivale a{" "}
            {rightCurrencySymbol}
            {rightCurrencyBase.toLocaleString("pt-BR", {
              maximumFractionDigits: 2,
            })}{" "}
            {rightCurrencyName}. A variação em relação ao valor de ontem é de{" "}
            <span className={getVariationColor(rightCurrencyValuePrev)}>
              {rightCurrencyValuePrev > rightCurrencyBase ? "" : "+"}
              {variationDaily.toFixed(4)}%
            </span>
            . A atualização da conversão foi realizada em {lastDate}.
          </p>

          <div className="flex justify-around gap-12">
            {currenciesContentData.map(
              ({ title, description, image, value }, index) => (
                <article
                  key={index}
                  className="flex w-1/3 flex-col items-center gap-4 text-center"
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
                    <span>
                      {rightCurrencySymbol}
                      {value.toLocaleString("pt-BR", {
                        minimumFractionDigits: 4,
                      })}
                    </span>{" "}
                    {rightCurrencyName}
                  </p>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="flex min-h-screen w-full justify-center py-12">
        <div className="flex w-full max-w-7xl items-center gap-16">
          <div className="flex flex-col gap-4 text-xl">
            <h2 className="mb-4 text-5xl font-extrabold text-[#6DA67A]">
              Resumo da cotação
            </h2>
            <p>
              O {leftCurrencyName} apresentou variações relevantes em relação ao{" "}
              {rightCurrencyName} ao longo dos últimos dias.
              <br />
              <br />
              Houve uma {getVariationStatus(rightCurrencyValuePrev)} de{" "}
              <span className={getVariationColor(rightCurrencyValuePrev)}>
                {variationDaily.toLocaleString("pt-BR", {
                  maximumFractionDigits: 2,
                })}
                %
              </span>{" "}
              entre ontem e hoje, uma {getVariationStatus(valueWeekAgo)} de{" "}
              <span className={getVariationColor(valueWeekAgo)}>
                {variationWeekly.toLocaleString("pt-BR", {
                  maximumFractionDigits: 2,
                })}
                %
              </span>{" "}
              na comparação com a semana passada e uma{" "}
              {getVariationStatus(valueMonthAgo)} de{" "}
              <span className={getVariationColor(valueMonthAgo)}>
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
        </div>
      </section>

      <section className="flex min-h-screen w-full items-center justify-center gap-20 bg-[#6DA67A] py-12">
        <figure>
          <Image
            src={didYouKnow}
            width={500}
            alt="Texto ilustrativo: Você sabia?"
          />
          <Image
            src={littleCoin}
            width={500}
            alt="Coinzinho, o mascote do Convert Coin"
          />
        </figure>

        <div className="relative h-200 w-180">
          <Image src={bgCuriosity} alt="Fundo ilustrtido" fill />
          <div className="relative z-10 flex h-full flex-col justify-center gap-12 px-24">
            <h2 className="-mb-12 text-3xl font-extrabold text-[#6DA67A]">
              Sobre o {leftCurrencyName}
            </h2>
            <p>{description}</p>

            <h2 className="-mb-12 text-3xl font-extrabold text-[#6DA67A]">
              Curiosidade
            </h2>
            <p>{curiosity}</p>

            <h2 className="-mb-12 text-3xl font-extrabold text-[#6DA67A]">
              Países que utilizam o {leftCurrencyName}
            </h2>
            <ul className="list-inside list-disc columns-2">
              {usedIn.map((country, index) => (
                <li key={index}>{country}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
