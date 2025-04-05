import Image from "next/image";
import { currencyData } from "@/lib/constants/currenciesData";
import { getCountryFlagUrl } from "@/services/API/currencyValue";

interface CurrencyDropdownProps {
  currencies: string[];
  imagePosition: "left" | "right";
  onSelectCurrency: (currency: string) => void;
  closeDropdown: () => void;
}

export default function CurrencyDropdown({
  currencies,
  imagePosition,
  onSelectCurrency,
  closeDropdown,
}: CurrencyDropdownProps) {
  return (
    <div
      className={`absolute z-10 mt-40 ${
        imagePosition === "left" ? "left-20" : "right-20"
      } w-64 bg-white rounded-2xl shadow-xl overflow-hidden`}
    >
      {/*Percorre e renderiza cada moeda na lista*/}
      {currencies.map((curr) => {
        const currencyInfo = currencyData.currencies[curr];

        return (
          <div
            key={curr}
            onClick={(e) => {
              e.stopPropagation(); //Evita o clique propragar e fechar o dropwon permaturamente ou sem querer
              onSelectCurrency(curr); //Chama função do pai para trocar a moeda
              closeDropdown(); //Fecha o dropdown após seleção de alguma moeda
            }}
            className="flex items-center px-6 hover:bg-gray-100 cursor-pointer"
          >
            <Image
              src={getCountryFlagUrl(currencyInfo?.codCountry || curr)}
              alt={curr}
              width={40}
              height={30}
              className="rounded-full mr-4"
            />
            <div>
              <div className="font-medium">{curr}</div>
              <div className="text-sm text-gray-500">
                {currencyInfo?.name || curr}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
