export const useCurrencyInput = (
  onValueChange: (value: string) => void,
  isActive: boolean,
  value: string
) => {
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // Permite: números, ponto, vírgula, backspace, delete
    const isValid = /^[0-9]*[,]?[0-9]*$/.test(inputValue) || inputValue === "";

    if (isValid) {
      // Substitui vírgula por ponto para cálculo
      const normalizedValue = inputValue.replace(",", ".");
      onValueChange(normalizedValue);
    }
  };

  // Formata o valor para exibição (mantém como digitado quando ativo, formata quando inativo)
  const displayValue = isActive
    ? value.replace(".", ",")
    : value === ""
    ? ""
    : parseFloat(value).toFixed(2).replace(".", ",");

  return {
    handleValueChange,
    displayValue,
  };
};
