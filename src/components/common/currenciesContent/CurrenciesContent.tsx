import CurrencyOverviewSection from "./CurrenciesOverview";
import CurrencySummarySection from "./CurrenciesSummary";
import CurrencyInfoSection from "./CurrenciesCuriosity";
import { CurrencyProps } from "@/types/currencies";

export default function CurrenciesContent(props: CurrencyProps) {
  return (
    <>
      <CurrencyOverviewSection {...props} />
      <CurrencySummarySection {...props} />
      <CurrencyInfoSection {...props} />
    </>
  );
}
