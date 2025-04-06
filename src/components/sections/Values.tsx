import CurrencyChart from "../common/CurrencyChart";

const dates = [
  { date: "01/04", valueCurrencyLeft: 1.95, valueCurrencyRight: 2 },
  { date: "02/04", valueCurrencyLeft: 2.97, valueCurrencyRight: 4 },
  { date: "03/04", valueCurrencyLeft: 3.92, valueCurrencyRight: 5 },
  { date: "04/04", valueCurrencyLeft: 4.88, valueCurrencyRight: 1 },
  { date: "05/04", valueCurrencyLeft: 2.91, valueCurrencyRight: 2 },
  { date: "05/04", valueCurrencyLeft: 4.91, valueCurrencyRight: 2 },
  { date: "05/04", valueCurrencyLeft: 1.91, valueCurrencyRight: 3 },
  { date: "05/04", valueCurrencyLeft: 3.91, valueCurrencyRight: 12 },
  { date: "05/04", valueCurrencyLeft: 4.91, valueCurrencyRight: 8 },
  { date: "05/04", valueCurrencyLeft: 3.91, valueCurrencyRight: 1 },
  { date: "05/04", valueCurrencyLeft: 0.91, valueCurrencyRight: 7 },
];

export default function Values() {
  return (
    <section className="flex justify-center h-screen -mt-24">
      <CurrencyChart data={dates} />
    </section>
  );
}
