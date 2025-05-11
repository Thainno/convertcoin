interface CurrencyTableProps {
  leftCurrencySymbol: string;
  rightCurrencySymbol: string;
  leftCurrencyName: string;
  rightCurrencyName: string;
  rightCurrencyLatestValue: number;
}

const baseValues = [1, 2, 5, 10, 50, 100, 1000];
const baseValueText = ["um", "dois", "cinco", "dez", "cinquenta", "cem", "mil"];

export default function CurrenciesTable({
  leftCurrencySymbol,
  rightCurrencySymbol,
  rightCurrencyLatestValue,
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
      aria-label={`Tabela de valores do ${leftCurrencyName}`}
    >
      <caption className="sr-only">
        {`Valores do ${leftCurrencyName} convertidos em ${rightCurrencyName}`}
      </caption>
      <thead className="bg-[#6DA67A] text-white">
        <tr>
          <th
            scope="col"
            className="px-4 py-3 text-center text-xl font-semibold"
          >
            {leftCurrencyName}
          </th>
          <th
            scope="col"
            className="px-4 py-3 text-center text-xl font-semibold"
          >
            {rightCurrencyName}
          </th>
        </tr>
      </thead>
      <tbody>
        {baseValues.map((value, index) => (
          <tr
            key={`currency-row-${value}`}
            className={index % 2 === 0 ? "bg-white" : "bg-zinc-100"}
          >
            <td scope="row" className="px-4 py-3 text-center">
              {leftCurrencySymbol} {format(value)} ({baseValueText[index]})
            </td>
            <td scope="row" className="px-4 py-3 text-center">
              {rightCurrencySymbol} {format(value * rightCurrencyLatestValue)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
