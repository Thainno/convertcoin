//Importa o tipo de estado definido no hook useCurrencyConverter
import { CurrencyConverterState } from "@/hooks/useCurrencyConverter";

//Função utilitária que inverte as moedas e os valores entre os dois lados do conversor
export function cardSwap(state: CurrencyConverterState) {
  //Desestrutura os valores e funções de atualização do estado
  const {
    leftCurrency, //Moeda selecionada no card da esquerda
    rightCurrency, //Moeda selecionada no card da direita
    leftValue, //Valor digitado no card da esquerda
    rightValue, //Valor digitado no card da direita
    setLeftCurrency, //Função para atualizar a moeda da esquerda
    setRightCurrency, //Função para atualizar a moeda da direita
    setLeftValue, // Função para atualizar o valor da esquerda
    setRightValue, //Função para atualizar o valor da direita
    activeInput, //Indica qual input está ativo ("left", "right" ou null)
    setActiveInput, // Função para atualizar o input ativo
  } = state;

  //Troca as moedas de lado
  setLeftCurrency(rightCurrency);
  setRightCurrency(leftCurrency);

  //Troca os valores digitados de lado
  setLeftValue(rightValue);
  setRightValue(leftValue);

  //Atualiza o input ativo para manter a experiência do usuário
  //Se o usuário estava digitando na esquerda, passa a digitar na direita, e vice-versa
  setActiveInput(activeInput === "left" ? "right" : "left");
}