import CurrencyChart from "../common/CurrencyChart";

const fakeData = [
  { date: "01/04", value: 4.95 },
  { date: "02/04", value: 4.97 },
  { date: "03/04", value: 4.92 },
  { date: "04/04", value: 4.88 },
  { date: "05/04", value: 4.91 },
];

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen bg-gray-100">
      <CurrencyChart data={fakeData} />
    </main>
  );
}
