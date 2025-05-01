import Home from "../page";
import { currencyData } from "@/lib/constants/currenciesData";
import { notFound } from "next/navigation";

interface SlugProps {
  params: {
    slug: string;
  };
}

export default function DynamicConverterPage({ params }: SlugProps) {
  const [leftCurrency, rightCurrency] = params.slug.toUpperCase().split("-");

  const validCurrencies = Object.keys(currencyData.currencies);
  const isValidLeft = validCurrencies.includes(leftCurrency);
  const isValidRight = validCurrencies.includes(rightCurrency);

  if (!isValidLeft || !isValidRight) {
    return notFound();
  }

  return <Home />;
}
