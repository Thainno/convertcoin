export interface CurrencyProps {
  leftCurrency: string;
  rightCurrency: string;
  rightCurrencyBase: number;
  rightCurrencyValuePrev: number;
  valueWeekAgo: number;
  valueMonthAgo: number;
  leftCurrencyName: string;
  rightCurrencyName: string;
  leftCurrencySymbol: string;
  rightCurrencySymbol: string;
  lastDate: string;
  variationDaily: number;
  variationWeekly: number;
  variationMonthly: number;
  description: string;
  curiosity: string;
  usedIn: string[];
}
