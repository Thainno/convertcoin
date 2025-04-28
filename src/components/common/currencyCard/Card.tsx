import { getCountryFlagUrl } from "@/services/API/currencyFlags";
import { currencyData } from "@/lib/constants/currenciesData";

import Image from "next/image";
import CurrencyDropdown from "./CurrencyDropdown";
import CurrencyInput from "./CurrencyInput";

interface CardProps {
  imagePosition: "left" | "right";
  currency: string;
  value: string;
  onCurrencyChange: (currency: string) => void;
  onValueChange: (value: string) => void;
  rates: Record<string, number> | null;
  isActive: boolean;
  otherCurrency: string;
  className: string;
}

export default function Card({
  imagePosition,
  currency,
  value,
  onCurrencyChange,
  onValueChange,
  rates,
  isActive,
  otherCurrency,
  className,
}: CardProps) {
  const availableCurrencies = rates
    ? Object.keys(rates).filter((c) => c !== otherCurrency)
    : ["USD", "BRL"];
  const flag = getCountryFlagUrl(currency);

  return (
    <article className={className}>
      <header
        className={`flex ${imagePosition === "left" ? "flex-row" : "flex-row-reverse text-right"} items-center p-8`}
      >
        <figure
          className={`h-16 w-16 overflow-hidden rounded-full ${imagePosition === "left" ? "mr-4" : "ml-4"}`}
        >
          <Image
            className="h-full w-full object-cover"
            src={flag}
            width={0}
            height={0}
            alt={`Símbolo da moeda ${currency}`}
          />
        </figure>

        <h2 className="w-4/5 text-3xl">
          {currencyData.currencies[currency]?.name}
        </h2>

        <CurrencyDropdown
          currencies={availableCurrencies.filter(
            (c) => c !== currency && c !== otherCurrency,
          )}
          imagePosition={imagePosition}
          onSelectCurrency={(selectedCurrency) => {
            onCurrencyChange(selectedCurrency);
            onValueChange(value);
          }}
        />
      </header>

      <form className="relative h-36 w-full p-8">
        <label className="absolute top-8 left-8 flex h-16 w-24 items-center justify-center rounded-l-4xl bg-white text-4xl">
          {currencyData.currencies[currency]?.symbol || currency}
        </label>

        <CurrencyInput
          value={value}
          onValueChange={onValueChange}
          isActive={isActive}
          className="h-16 w-full px-8 text-end outline-none"
          maxLength={20}
        />
      </form>
    </article>
  );
}
