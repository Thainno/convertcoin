import Image from "next/image";
import { currencyData } from "@/lib/constants/currenciesData";
import { getCountryFlagUrl } from "@/services/API/currencyValue";
import Input from "./Input";

import search from "@/assets/images/search.svg";

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
    <div>
      <div
        className={`w-80 h-18 absolute top-28 bg-white rounded-t-2xl flex flex-row p-4 shadow-xl z-10 ${
          imagePosition === "left" ? "right-4" : "left-4"
        }`}
      >
        <Input
          className="w-full h-10 text-sm px-4"
          type={"text"}
          inputMode={"search"}
          autoComplete={"off"}
          placeholder="Pesquisar moeda..."
        />
        <div className="w-2/12 h-10 bg-[#6DA67A] rounded-r-4xl absolute flex items-center justify-center right-4 shadow-sm">
          <Image
            src={search}
            alt={"Search"}
            width={25}
            height={25}
            className="absolute mx-4"
          />
        </div>
      </div>
      <div
        className={`absolute z-10 w-80 h-80 top-46 overflow-y-scroll ${
          imagePosition === "left" ? "right-4" : "left-4"
        } w-64 bg-white rounded-b-2xl shadow-xl overflow-hidden`}
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
              <div className="flex flex-col items-start">
                <div className="font-medium">{curr}</div>
                <div className="text-sm text-gray-500">
                  {currencyInfo?.name || curr}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
