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
}

export default function Card({
  imagePosition,
  currency,
  value,
  onCurrencyChange,
  onValueChange,
  rates,
  isActive,
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
    <div className="w-160 h-80 rounded-4xl bg-[#f9f9f9] shadow-xl flex flex-col justify-center">
      <div
        className={`flex ${
          imagePosition === "left" ? "flex-row" : "flex-row-reverse text-right"
        } items-center p-8 gap-4`}
        onClick={toggleDropdown}
      >
        {/*Bandeira da moeda*/}
        <Image
          src={flag}
          width={90}
          height={90}
          alt={`Símbolo da moeda ${currency}`}
          className="rounded-full cursor-pointer"
        />

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
        />

        {/* Renderizar o dropdown*/}
        {showDropdown && (
          <CurrencyDropdown
            currencies={availableCurrencies} //Lista de moedas
            imagePosition={imagePosition} //Direção do elemento (esquerda ou direita)
            onSelectCurrency={onCurrencyChange} //Alterar a moeda
            closeDropdown={closeDropdown} //Fecha o dropdown após selecionar alguma moeda
          />
        )}
      </div>

      {/*Input que recebe o valor a ser convertido */}
      <div className="p-8 w-full h-36 relative">
        <label className="text-4xl absolute left-14 top-10">
          {currencyData.currencies[currency]?.symbol || currency}
        </label>
        <Input
          type="text"
          inputMode="decimal"
          autoComplete="off"
          value={displayValue} //Valor formatado pelo hook 'useCurrencyInput'
          onChange={handleValueChange} //Função que trata a mudanças dos valores
        />
      </div>
    </div>
  );
}
