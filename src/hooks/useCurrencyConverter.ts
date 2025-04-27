import { useState, useEffect } from "react";
import { fetchCurrencyRates } from "@/services/API/currencyValue";
import { useCurrency } from "@/context/CurrencyContext";

//Interface que define o formato do estado do conversor de moedas
export interface CurrencyConverterState {
  leftCurrency: string; //Moeda selecionada no card da esquerda
  rightCurrency: string; //Moeda selecionada no card da direita
  leftValue: string; // Valor digitado no card da esquerda
  rightValue: string; //Valor convertido (ou digitado) no card da direita
  rates: Record<string, number> | null; //Objeto com taxas de conversão
  activeInput: "left" | "right" | null; //Define qual input está ativo no momento
  setLeftCurrency: (val: string) => void; //Atualiza moeda da esquerda
  setRightCurrency: (val: string) => void; //Atualiza moeda da direita
  setLeftValue: (val: string) => void; //Atualiza valor da esquerda
  setRightValue: (val: string) => void; //Atualiza valor da direita
  setActiveInput: (val: "left" | "right" | null) => void; // Atualiza o input ativo
}

// Interface para representar o retorno da API de taxas de câmbio
export interface CurrencyRatesResponse {
  amount: number;
  base: string;
  date: string;
  rates: Record<string, number>;
}

//Hook para gerenciar lógica do conversor de moedas
export function useCurrencyConverter(): CurrencyConverterState {
  const { leftCurrency, rightCurrency, setLeftCurrency, setRightCurrency } =
    useCurrency();
  const [leftValue, setLeftValue] = useState("100.00");
  const [rightValue, setRightValue] = useState("");
  const [rates, setRates] = useState<Record<string, number> | null>(null);
  const [activeInput, setActiveInput] = useState<"left" | "right" | null>(null);

  console.log()

  //Atualiza as moedas ao trocar a moeda da esquerda
  useEffect(() => {
    const loadRates = async () => {
      //Sempre usa a moeda da esquerda como base para buscar os valores
      const data: CurrencyRatesResponse =
        await fetchCurrencyRates(leftCurrency);
      setRates(data.rates);

      //Verifica se a moeda da direita está disponível nas taxas retornadas
      if (data.rates[rightCurrency]) {
        const converted = parseFloat(leftValue) * data.rates[rightCurrency];
        setRightValue(converted.toFixed(2));
      }
    };
    loadRates();
  }, [leftCurrency, rightCurrency]);

  //Converte valor do card da DIREITA com base no valor digitado no card da ESQUERDA
  useEffect(() => {
    if (activeInput === "left" && rates?.[rightCurrency]) {
      //Converte o valor de texto para número (pois o input é do tipo text)
      const num = parseFloat(leftValue);
      //Atualiza o valor da direita se ofr um número válido
      setRightValue(!isNaN(num) ? (num * rates[rightCurrency]).toFixed(2) : "");
    }
  }, [leftValue, rightCurrency, rates, activeInput]);

  //Converte valor do card da ESQUERDA com base no valor digitado no card da DIREITA
  useEffect(() => {
    if (activeInput === "right" && rates?.[rightCurrency]) {
      //Converte o valor de texto para número (pois o input é do tipo text)
      const num = parseFloat(rightValue);
      //Atualiza o valor da esquerda se for um número válido
      setLeftValue(!isNaN(num) ? (num / rates[rightCurrency]).toFixed(2) : "");
    }
  }, [rightValue, activeInput, rates, rightCurrency]);

  //Retorna o estado completo e suas funções para uso externo
  return {
    leftCurrency,
    rightCurrency,
    leftValue,
    rightValue,
    rates,
    activeInput,
    setLeftCurrency,
    setRightCurrency,
    setLeftValue,
    setRightValue,
    setActiveInput,
  };
}
