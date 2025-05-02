import CurrencyChart from "./chart/CurrencyChart";
import CurrenciesTable from "./CurrenciesTable";
import Image from "next/image";
import daily from "@/assets/images/daily.svg";
import weekly from "@/assets/images/weekly.svg";
import monthly from "@/assets/images/monthly.svg";
import rise from "@/assets/images/rise.svg";
import fall from "@/assets/images/fall.svg";

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
          <p className="text-lg">
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
          <div className="flex w-full justify-around">
            <div className="relative flex w-1/4 flex-col items-center gap-4 text-center">
              <Image src={daily} width={60} height={60} alt="" />
              <Image
                src={rightCurrencyValuePrev > rightCurrencyBase ? fall : rise}
                width={40}
                height={40}
                alt=""
                className="absolute top-8 right-28"
              />
              <h3 className="text-lg font-semibold">Variação diária</h3>
              <p className="text-sm">
                A variação diária de {leftCurrency} para {rightCurrency} é de{" "}
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
              </p>
            </div>
            <div className="relative flex w-1/4 flex-col items-center gap-4 text-center">
              <Image src={weekly} width={60} height={60} alt="" />
              <Image
                src={valueWeekAgo > rightCurrencyBase ? fall : rise}
                width={40}
                height={40}
                alt=""
                className="absolute top-8 right-28"
              />
              <h3 className="text-lg font-semibold">Variação semanal</h3>
              <p className="text-sm">
                A variação semanal de {leftCurrency} para {rightCurrency} é de{" "}
                <span
                  className={
                    valueWeekAgo > rightCurrencyBase
                      ? "text-red-700"
                      : "text-green-700"
                  }
                >
                  {valueWeekAgo > rightCurrencyBase ? "" : "+"}
                  {variationWeekly.toFixed(4)}%
                </span>
              </p>
            </div>
            <div className="relative flex w-1/4 flex-col items-center gap-4 text-center">
              <Image src={monthly} width={60} height={60} alt="" />
              <Image
                src={valueMonthAgo > rightCurrencyBase ? fall : rise}
                width={40}
                height={40}
                alt=""
                className="absolute top-10 right-26"
              />
              <h3 className="text-lg font-semibold">Variação mensal</h3>
              <p className="text-sm">
                A variação mensal de {leftCurrency} para {rightCurrency} é de{" "}
                <span
                  className={
                    valueMonthAgo > rightCurrencyBase
                      ? "text-red-700"
                      : "text-green-700"
                  }
                >
                  {valueMonthAgo > rightCurrencyBase ? "" : "+"}
                  {variationMonthly.toFixed(4)}%
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIVISÂO AQUI */}

      <section className="w-364 bg-amber-400">
        <div className="mt-28 flex items-center justify-between">
          <div className="flex flex-col gap-4 text-xl">
            <h3 className="mb-4 text-4xl font-extrabold text-[#6DA67A]">
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
                {variationDaily.toLocaleString("pt-BR", {
                  minimumFractionDigits: 4,
                })}
                %
              </span>
            </p>{" "}
            <p>
              <strong>Variação semanal:</strong>{" "}
              <span
                className={
                  valueWeekAgo > rightCurrencyBase
                    ? "text-red-700"
                    : "text-green-700"
                }
              >
                {valueWeekAgo > rightCurrencyBase ? "" : "+"}
                {variationWeekly.toLocaleString("pt-BR", {
                  minimumFractionDigits: 4,
                })}
                %
              </span>
            </p>{" "}
            <p>
              <strong>Variação mensal:</strong>{" "}
              <span
                className={
                  valueMonthAgo > rightCurrencyBase
                    ? "text-red-700"
                    : "text-green-700"
                }
              >
                {valueMonthAgo > rightCurrencyBase ? "" : "+"}
                {variationMonthly.toLocaleString("pt-BR", {
                  minimumFractionDigits: 4,
                })}
                %
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
    </>
  );
}
