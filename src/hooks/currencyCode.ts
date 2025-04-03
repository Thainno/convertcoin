import { currencyData } from "../lib/constants/currencies";

export const useCurrencyData = () => {
  const transformedData: Record<string, [string, string]> = {};

  Object.entries(currencyData.currencies).forEach(([code, currency]) => {
    transformedData[code] = [currency.name, currency.symbol];
  });

  return { currencyData: transformedData };
};
