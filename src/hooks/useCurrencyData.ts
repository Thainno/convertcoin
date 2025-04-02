export const useCurrencyData = () => {
  const currencyNames: Record<string, string> = {
    USD: "Dólar Americano",
    BRL: "Real Brasileiro",
    EUR: "Euro",
    GBP: "Libra Esterlina",
    JPY: "Iene Japonês",
  };

  const currencySymbols: Record<string, string> = {
    USD: "$",
    BRL: "R$",
    EUR: "€",
    GBP: "£",
    JPY: "¥",
  };

  return { currencyNames, currencySymbols };
};
