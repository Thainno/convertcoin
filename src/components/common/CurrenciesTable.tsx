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
      className="min-w-xl overflow-hidden rounded-2xl shadow-lg"
      aria-label="Tabela de conversão de moedas"
    >
      <thead className="bg-[#6DA67A] text-white">
        <tr className="flex h-18 items-center justify-around">
          <th scope="col" className="text-xl font-semibold">
            {leftCurrencyName}
          </th>
          <th scope="col" className="text-xl font-semibold">
            {rightCurrencyName}
          </th>
        </tr>
      </thead>
      <tbody>
        {baseValues.map((value, index) => (
          <tr
            key={`currency-row-${value}`}
            className={`flex h-16 items-center ${
              index % 2 === 0 ? "bg-white" : "bg-zinc-100"
            }`}
          >
            <td scope="row" className="flex w-1/2 justify-center py-3">
              {leftCurrencySymbol} {format(value)} ({baseValueText[index]})
            </td>
            <td
              scope="row"
              className="flex w-1/2 justify-center py-3 font-medium"
            >
              {rightCurrencySymbol} {format(value * rightCurrencyBase)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
