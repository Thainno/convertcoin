import daily from "@/assets/images/daily.svg";
import weekly from "@/assets/images/weekly.svg";
import monthly from "@/assets/images/monthly.svg";

interface CurrencyDataItem {
  title: string;
  description: string;
  image: string;
  value: number;
}

export function getCurrenciesContentData(
  leftCurrencyName: string,
  rightCurrencyBase: number,
  valueWeekAgo: number,
  valueMonthAgo: number,
): CurrencyDataItem[] {
  return [
    {
      title: `${leftCurrencyName} hoje`,
      description: `Hoje, o ${leftCurrencyName} está cotado em `,
      image: daily,
      value: rightCurrencyBase,
    },
    {
      title: `${leftCurrencyName} há uma semana`,
      description: `Na semana passada, o ${leftCurrencyName} estava cotado em `,
      image: weekly,
      value: valueWeekAgo,
    },
    {
      title: `${leftCurrencyName} há um mês`,
      description: `No mês passado, o ${leftCurrencyName} estava cotado em `,
      image: monthly,
      value: valueMonthAgo,
    },
  ];
}
