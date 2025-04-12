"use client";

import {
  LineChart,
  Line,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useState } from "react";
import { chartFilters } from "@/lib/constants/chartFilter";
import { useHistoricalRates } from "@/hooks/useHistoricalRates";
import { CustomTooltip } from "./CustomTooltip";

interface Props {
  base: string;
  target: string;
}

export default function CurrencyChart({ base, target }: Props) {
  const [filter, setFilter] = useState("1w");
  const { days } = chartFilters.find((f) => f.value === filter)!;

  const { data, loading } = useHistoricalRates(base, target, days);

  const values = data.map((item) => item.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const padding = (max - min) * 0.1 || 1;
  const adjustedMax = max + padding;
  const step = (adjustedMax - min) / 4;

  const rawTicks = Array.from({ length: 5 }, (_, i) =>
    Number((min + step * i).toFixed(4))
  );

  const ticks = Array.from(new Set(rawTicks));

  return (
    <div className="w-300 h-100 p-4 bg-white shadow-md rounded-xl">
      <div className="flex gap-2 mb-4">
        {chartFilters.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`px-3 py-1 rounded text-sm shadow-sm ${
              filter === f.value
                ? "bg-green-700 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="text-sm text-gray-500">Carregando dados...</p>
      ) : (
        <ResponsiveContainer width="100%" height="85%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" horizontal vertical={false} />
            <YAxis
              stroke="#0d6759"
              orientation="right"
              tick={{ fill: "#0d6759" }}
              ticks={ticks}
              domain={[min, adjustedMax]}
            />
            <Tooltip content={<CustomTooltip base={base} target={target} />} />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#6DA67A"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
