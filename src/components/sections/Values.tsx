import CurrencyChart from "../common/chart/CurrencyChart";
import CurrenciesContent from "../common/CurrenciesContent";

export default function Values() {
  return (
    <section
      id="test"
      className="flex flex-col justify-center items-center gap-12"
    >
      <CurrencyChart />
      <CurrenciesContent />
    </section>
  );
}
