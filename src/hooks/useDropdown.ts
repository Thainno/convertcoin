import { useState } from "react";

//Controlar a abertura e fechamento do dropdown de seleção das moedas
export function useDropdown(): {
  showDropdown: boolean;
  toggleDropdown: () => void;
  closeDropdown: () => void;
} {
  //Estado que indica se o dropdown está visível
  const [showDropdown, setShowDropdown] = useState(false);

  //Alterna entre exibir e esconder o dropdown
  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  //Fecha o dropdown
  const closeDropdown = () => setShowDropdown(false);

  //Retorna o estado atual e as funções de controle
  return { showDropdown, toggleDropdown, closeDropdown };
}
