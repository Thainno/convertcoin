import { TooltipProps } from "recharts";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

interface CustomTooltipProps extends TooltipProps<number, string> {
  base: string;
  target: string;
}

export function CustomTooltip({
  active,
  payload,
  base,
  target,
}: CustomTooltipProps) {
  if (!active || !payload || !payload.length) return null;

  const value = payload[0].value;
  const rawDate = payload[0].payload.date; // <-- Data real no formato yyyy-MM-dd
  const parsedDate = parseISO(rawDate);    // <-- Converte corretamente para Date

  const formattedDate = format(parsedDate, "dd 'de' MMM 'de' yyyy", {
    locale: ptBR,
  });

  return (
    <div className="bg-white p-2 border rounded shadow text-sm text-gray-700">
      <p>{`1 ${base} = ${value?.toFixed(2)} ${target}`}</p>
      <p className="text-gray-500">{formattedDate}</p>
    </div>
  );
}