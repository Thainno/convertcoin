import { getCountryFlagUrl } from "@/services/API/currencyValue";
import { currencyData } from "@/lib/constants/currenciesData";
import { useDropdown } from "@/hooks/useDropdown";

import Image from "next/image";
import downArrow from "@/assets/images/down-arrow.svg";
import Input from "../common/Input";
import CurrencyDropdown from "../common/CurrencyDropdown";

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
  const { showDropdown, toggleDropdown, closeDropdown } = useDropdown();

  const availableCurrencies = rates ? Object.keys(rates) : ["USD", "BRL"];
  const flag = getCountryFlagUrl(currency);

  return (
    <article className={className}>
      <header
        className={`flex ${
          imagePosition === "left" ? "flex-row" : "flex-row-reverse text-right"
        } items-center p-8`}
      >
        <figure
          className={`w-16 h-16 rounded-full overflow-hidden ${
            imagePosition === "left" ? "mr-4" : "ml-4"
          }`}
        >
          <Image
            src={flag}
            width={80}
            height={80}
            alt={`Símbolo da moeda ${currency}`}
            className="object-cover w-full h-full cursor-pointer"
          />
        </figure>

        <h2 className="text-3xl w-4/5">
          {currencyData.currencies[currency]?.name}
        </h2>

        <button
          type="button"
          onClick={toggleDropdown}
          className="cursor-pointer"
          aria-label="Selecionar moeda"
        >
          <Image
            src={downArrow}
            width={30}
            height={30}
            alt="Selecionar moeda"
            className="cursor-pointer"
          />
        </button>

        {showDropdown && (
          <CurrencyDropdown
            currencies={availableCurrencies.filter(
              (c) => c !== currency && c !== otherCurrency
            )}
            imagePosition={imagePosition}
            onSelectCurrency={(selectedCurrency) => {
              onCurrencyChange(selectedCurrency);
              onValueChange(value);
            }}
            closeDropdown={closeDropdown}
          />
        )}
      </header>

      <form className="p-8 w-full h-36 relative">
        <label className="w-24 h-16 flex items-center justify-center text-4xl absolute left-8 top-8 rounded-l-4xl bg-white">
          {currencyData.currencies[currency]?.symbol || currency}
        </label>
        <Input
          value={value}
          onValueChange={onValueChange}
          isActive={isActive}
          className="w-full h-16 text-end px-8 outline-none"
          maxLength={20}
        />
      </form>
    </article>
  );
}
