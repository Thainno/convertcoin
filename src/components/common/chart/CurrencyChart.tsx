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
import { CustomTooltip } from "./ChartTooltip";

import { useCurrency } from "@/context/CurrencyContext";

export default function CurrencyChart() {
  const { leftCurrency, rightCurrency } = useCurrency();

  const [filter, setFilter] = useState("1w");
  const { days } = chartFilters.find((f) => f.value === filter)!;

  const { data, loading } = useHistoricalRates(
    leftCurrency,
    rightCurrency,
    days,
  );

  const values = data.map((item) => item.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const padding = (max - min) * 0.1 || 1;
  const adjustedMax = max + padding;
  const step = (adjustedMax - min) / 4;

  const rawTicks = Array.from({ length: 5 }, (_, i) =>
    Number((min + step * i).toFixed(4)),
  );

  const ticks = Array.from(new Set(rawTicks));

  return (
    <div className="h-100 w-full rounded-xl bg-white p-4 shadow-md">
      <div className="mb-4 flex gap-2">
        {chartFilters.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`rounded px-3 py-1 text-sm shadow-sm ${
              filter === f.value
                ? "bg-[#6DA67A] text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex h-10/12 items-center justify-center space-x-2 bg-white">
          <span className="sr-only">Loading...</span>
          <div className="h-4 w-4 animate-bounce rounded-full bg-[#6DA67A] [animation-delay:-0.3s]"></div>
          <div className="h-4 w-4 animate-bounce rounded-full bg-[#6DA67A] [animation-delay:-0.15s]"></div>
          <div className="h-4 w-4 animate-bounce rounded-full bg-[#6DA67A]"></div>
        </div>
      ) : (
        <ResponsiveContainer width="100%" height="85%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" horizontal vertical={false} />
            <YAxis
              stroke="#016630"
              orientation="right"
              tick={{ fill: "#016630" }}
              ticks={ticks}
              domain={[min, adjustedMax]}
            />
            <Tooltip
              content={
                <CustomTooltip base={leftCurrency} target={rightCurrency} />
              }
            />
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
