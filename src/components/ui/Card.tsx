import { getCountryFlagUrl } from "@/services/API/currencyValue";
import { currencyData } from "@/lib/constants/currenciesData";
import { useCurrencyInput } from "@/hooks/useCurrencyInput";
import { useDropdown } from "@/hooks/useDropdown";

import Image from "next/image";
import downArrow from "@/assets/images/down-arrow.svg";
import Input from "../common/Input";
import CurrencyDropdown from "../common/CurrencyDropdown";

interface CardProps {
  imagePosition: "left" | "right";
  currency: string; //Moeda atual selecionada (ex: USD)
  value: string; //Valor digitado no input
  onCurrencyChange: (currency: string) => void; //Callback para trocar a moeda
  onValueChange: (value: string) => void; //Callback para trocar o valor
  rates: Record<string, number> | null; //Lista de moedas disponíveis (usada para montar o dropdown)
  isActive: boolean; //Define se este card está ativo para entrada de valor
  otherCurrency: string; //Moeda do outro card
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
}: CardProps) {
  //Hook para controle do dropdown
  const { showDropdown, toggleDropdown, closeDropdown } = useDropdown();

  //Define quais moedas estão disponíveis para lis
  const availableCurrencies = rates ? Object.keys(rates) : ["USD", "BRL"];

  //Busca a imagem através de uma API para representar a moeda escolhida
  const flag = getCountryFlagUrl(currency);

  //Hook que formata e controla a entrada de valor no input
  const { handleValueChange, displayValue } = useCurrencyInput(
    onValueChange,
    isActive,
    value
  );

  return (
    <div className="relative w-160 h-80 rounded-4xl bg-[#f9f9f9] shadow-xl flex flex-col justify-center">
      <div
        className={`flex ${
          imagePosition === "left" ? "flex-row" : "flex-row-reverse text-right"
        } items-center p-8`}
      >
        {/*Bandeira da moeda*/}
        <div
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
        </div>

        {/*Nome da moeda*/}
        <h2 className="text-3xl w-4/5">
          {currencyData.currencies[currency]?.name || currency}
        </h2>

        {/*Ícone da seta para abrir ou fechar o dropdown*/}
        <Image
          src={downArrow}
          width={30}
          height={30}
          alt="Selecionar moeda"
          className="cursor-pointer"
          onClick={toggleDropdown}
        />

        {/* Renderizar o dropdown*/}
        {showDropdown && (
          <CurrencyDropdown
            currencies={availableCurrencies.filter(
              (c) => c !== currency && c !== otherCurrency
            )} //Lista de moedas
            imagePosition={imagePosition} //Direção do elemento (esquerda ou direita)
            onSelectCurrency={(selectedCurrency) => {
              //Alterar a moeda
              onCurrencyChange(selectedCurrency);
              onValueChange(value);
            }}
            closeDropdown={closeDropdown} //Fecha o dropdown após selecionar alguma moeda
          />
        )}
      </div>

      {/*Input que recebe o valor a ser convertido */}
      <div className="p-8 w-full h-36 relative">
        <label className="w-24 h-16 flex items-center justify-center text-4xl absolute left-8 top-8 rounded-l-4xl bg-white">
          {currencyData.currencies[currency]?.symbol || currency}
        </label>
        <Input
          type="text"
          inputMode="decimal"
          autoComplete="off"
          value={displayValue} //Valor formatado pelo hook 'useCurrencyInput'
          onChange={handleValueChange} //Função que trata a mudanças dos valores
          className="w-full h-16 text-end px-8 outline-none"
        />
      </div>
    </div>
  );
}
