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
  const rawDate = payload[0].payload.date;
  const parsedDate = parseISO(rawDate);

  const formattedDate = format(parsedDate, "dd 'de' MMM 'de' yyyy", {
    locale: ptBR,
  });

  return (
    <div className="rounded bg-white p-2 text-sm text-gray-700 shadow-sm">
      <p>{`1 ${base} = ${value?.toFixed(4)} ${target}`}</p>
      <p className="text-gray-500">{formattedDate}</p>
    </div>
  );
}
