"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { currencyData } from "@/lib/constants/currenciesData";
import { getCountryFlagUrl } from "@/services/API/currencyValue";
import Input from "./Input";
import search from "@/assets/images/search.svg";
import downArrow from "@/assets/images/down-arrow.svg";

interface CurrencyDropdownProps {
  currencies: string[];
  imagePosition: "left" | "right";
  onSelectCurrency: (currency: string) => void;
}

export default function CurrencyDropdown({
  currencies,
  imagePosition,
  onSelectCurrency,
}: CurrencyDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const closeDropdown = () => setIsOpen(false);

  const filteredCurrencies = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return currencies.filter((code) => {
      const name = currencyData?.currencies[code]?.name?.toLowerCase() || "";
      return code.toLowerCase().includes(term) || name.includes(term);
    });
  }, [searchTerm, currencies]);

  return (
    <>
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

      {isOpen && (
        <>
          <div
            className={`w-80 h-18 absolute top-10 bg-white rounded-t-2xl flex flex-row p-4 shadow-xl z-10 ${
              imagePosition === "left" ? "right-4" : "left-4"
            }`}
          >
            <Input
              className="w-full h-10 text-sm px-4"
              type="text"
              inputMode="search"
              autoComplete="off"
              placeholder="Pesquisar moeda..."
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="w-2/12 h-10 bg-[#6DA67A] rounded-r-4xl absolute flex items-center justify-center right-4 shadow-sm">
              <Image
                src={search}
                alt="Search"
                width={25}
                height={25}
                className="absolute mx-4"
              />
            </div>
          </div>

          <div
            className={`absolute z-10 w-80 h-80 top-28 overflow-y-scroll ${
              imagePosition === "left" ? "right-4" : "left-4"
            } w-64 bg-white rounded-b-2xl shadow-xl`}
          >
            {filteredCurrencies.map((curr) => {
              const currencyInfo = currencyData?.currencies[curr];

              return (
                <div
                  key={curr}
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectCurrency(curr);
                    closeDropdown();
                  }}
                  className="flex items-center px-6 pb-2 hover:bg-gray-100 cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-4">
                    <Image
                      src={getCountryFlagUrl(curr)}
                      alt={curr}
                      width={40}
                      height={40}
                      className="w-full h-full mr-4 object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="font-medium">{curr}</div>
                    <div className="text-sm text-gray-500">
                      {currencyInfo?.name}
                    </div>
                  </div>
                </div>
              );
            })}
            {filteredCurrencies.length === 0 && (
              <div className="text-center p-4 text-gray-500">
                Nenhuma moeda encontrada
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}
