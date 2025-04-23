import Home from "../page";
import { notFound } from "next/navigation";
import { currencyData } from "@/lib/constants/currenciesData";

interface Params {
  params: Promise<{
    slug: string;
  }>;
}

export default async function SlugPage(props: Params) {
  const params = await props.params;
  const [left, right] = params.slug.toUpperCase().split("-");

  const validCurrencyCodes = Object.keys(currencyData.currencies);

  //Redireciona para URL padrão caso slug esteja inválido
  if (
    !left ||
    !right ||
    !validCurrencyCodes.includes(left) ||
    !validCurrencyCodes.includes(right)
  ) {
    notFound();
  }

  return <Home initialLeft={left} initialRight={right} />;
}
