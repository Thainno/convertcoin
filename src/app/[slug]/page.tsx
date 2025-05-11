import Home from "../page";
import { currencyData } from "@/lib/constants/currenciesData";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface SlugProps {
  params: Promise<{
    slug: string;
  }>;
}

function getSlug(slug: string): {
  leftCurrency: string;
  rightCurrency: string;
  isValid: boolean;
} {
  const [leftCurrency, rightCurrency] = slug.toUpperCase().split("-");
  const validCurrencies = Object.keys(currencyData.currencies);
  const isValid =
    validCurrencies.includes(leftCurrency) &&
    validCurrencies.includes(rightCurrency);

  return { leftCurrency, rightCurrency, isValid };
}

export async function generateMetadata(props: SlugProps): Promise<Metadata> {
  const { slug } = await props.params;
  const { leftCurrency, rightCurrency, isValid } = getSlug(slug);

  if (!isValid) {
    return {
      title: "Convert Coin | Conversor de Moedas",
      description:
        "Conversor de moedas online gratuito e fácil de usar. Converta dólar para real, euro para libra e muito mais com taxas de câmbio atualizadas em tempo real. Suporta mais de 150 moedas internacionais. Ideal para viagens, negócios e investimentos.",
    };
  }

  const leftName = currencyData.currencies[leftCurrency].name;
  const rightName = currencyData.currencies[rightCurrency].name;

  return {
    title: `Convert Coin | Conversão de ${leftName} para ${rightName}`,
    description: `Converta ${leftName} para ${rightName} online e de forma gratuita, com taxas atualizadas diariamente.`,
  };
}

export default async function dynamicConverterPage(props: SlugProps) {
  const { slug } = await props.params;
  const { isValid } = getSlug(slug);

  if (!isValid) {
    return notFound();
  }

  return <Home />;
}
