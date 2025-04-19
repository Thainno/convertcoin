interface CurrencyTableProps {
  leftCurrencySymbol: string;
  rightCurrencySymbol: string;
  leftCurrencyName: string;
  rightCurrencyName: string;
  rightCurrencyBase: number;
}

const baseValues = [1, 2, 5, 10, 50, 100, 1000];
const baseValueText = ["um", "dois", "cinco", "dez", "cinquenta", "cem", "mil"];

export default function CurrenciesTable({
  leftCurrencySymbol,
  rightCurrencySymbol,
  rightCurrencyBase,
  leftCurrencyName,
  rightCurrencyName,
}: CurrencyTableProps) {
  const format = (value: number) =>
    value.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  return (
    <table
      className="w-full max-w-3xl shadow-md rounded-2xl overflow-hidden"
      aria-label="Tabela de conversão de moedas"
    >
      <thead className="bg-[#6DA67A] text-white">
        <tr className="flex justify-around items-center">
          <th scope="col" className="py-4 text-xl font-semibold">
            {leftCurrencyName}
          </th>
          <th scope="col" className="py-4 text-xl font-semibold">
            {rightCurrencyName}
          </th>
        </tr>
      </thead>
      <tbody>
        {baseValues.map((value, index) => (
          <tr
            key={`currency-row-${value}`}
            className={`flex items-center ${
              index % 2 === 0 ? "bg-white" : "bg-zinc-100"
            }`}
          >
            <td scope="row" className="w-1/2 py-3 flex justify-center">
              {leftCurrencySymbol} {format(value)} ({baseValueText[index]})
            </td>
            <td
              scope="row"
              className="w-1/2 py-3 font-medium  flex justify-center"
            >
              {rightCurrencySymbol} {format(value * rightCurrencyBase)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
