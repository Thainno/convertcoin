import CurrencyChart from "../common/CurrencyChart";

export default function Values() {
  return (
    <section className="flex justify-center h-screen -mt-24">
      <CurrencyChart base="USD" target="BRL" />
    </section>
  );
}
