"use client";

import { useState, useMemo, useEffect } from "react";
import { currencyData } from "@/lib/constants/currenciesData";
import { getCountryFlagUrl } from "@/services/API/currencyFlags";
import Input from "../Input";
import search from "@/assets/images/search.svg";
import downArrow from "@/assets/images/arrow-down.svg";
import Image from "next/image";

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
  const [selectedCurrency, setSelectedCurrency] = useState<string | null>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const closeDropdown = () => setIsOpen(false);

  const filteredCurrencies = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return currencies.filter((code) => {
      const name = currencyData?.currencies[code]?.name?.toLowerCase() || "";
      return code.toLowerCase().includes(term) || name.includes(term);
    });
  }, [searchTerm, currencies]);

  useEffect(() => {
    if (selectedCurrency) {
      onSelectCurrency(selectedCurrency);
      setSelectedCurrency(null);
    }
  }, [selectedCurrency, onSelectCurrency]);

  return (
    <>
      <button
        type="button"
        onClick={toggleDropdown}
        className={`absolute right-0 flex h-8 w-32 cursor-pointer justify-center ${
          imagePosition === "left" ? "right-0" : "left-0"
        }`}
        aria-label="Selecionar moeda"
      >
        <Image src={downArrow} alt="Selecionar moeda" className="w-full" />
      </button>

      {isOpen && (
        <div>
          <header
            className={`absolute top-28 z-10 flex h-18 w-80 flex-row rounded-t-2xl bg-white p-4 shadow-xl ${
              imagePosition === "left" ? "right-4" : "left-4"
            }`}
          >
            <Input
              className="h-10 w-full px-4 text-sm"
              type="text"
              inputMode="search"
              autoComplete="off"
              placeholder="Pesquisar moeda..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute right-4 flex h-10 w-2/12 items-center justify-center rounded-r-4xl bg-[#6DA67A] shadow-sm">
              <Image
                src={search}
                alt="Search"
                width={25}
                height={25}
                className="absolute mx-4"
              />
            </div>
          </header>

          <section
            className={`absolute top-46 z-10 h-80 w-80 overflow-y-scroll ${
              imagePosition === "left" ? "right-4" : "left-4"
            } w-64 rounded-b-2xl bg-white shadow-xl`}
          >
            {filteredCurrencies.map((curr) => {
              const currencyInfo = currencyData?.currencies[curr];

              return (
                <div
                  key={curr}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCurrency(curr);
                    closeDropdown();
                  }}
                  className="flex cursor-pointer items-center px-6 pb-2 hover:bg-gray-100"
                >
                  <div className="mr-4 h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src={getCountryFlagUrl(curr)}
                      alt={curr}
                      width={40}
                      height={40}
                      className="mr-4 h-full w-full object-cover"
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
              <div className="p-4 text-center text-gray-500">
                Nenhuma moeda encontrada
              </div>
            )}
          </section>
        </div>
      )}
    </>
  );
}
