import CurrenciesOverview from "./CurrenciesOverview";
import CurrenciesSummary from "./CurrenciesSummary";
import CurrenciesInfo from "./CurrenciesCuriosity";
import { CurrencyProps } from "@/types/currencies";

export default function CurrenciesContent(props: CurrencyProps) {
  return (
    <>
      <CurrenciesOverview {...props} />
      <CurrenciesSummary {...props} />
      <CurrenciesInfo {...props} />
    </>
  );
}
