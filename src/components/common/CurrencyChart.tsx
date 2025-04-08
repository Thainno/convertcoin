"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

interface CurrencyChartProps {
  data: {
    date: string;
    valueCurrencyLeft: number;
    valueCurrencyRight: number;
  }[];
}

const filters = [
  { label: "1 dia", value: "1d" },
  { label: "1 semana", value: "1w" },
  { label: "1 mês", value: "1m" },
  { label: "1 ano", value: "1y" },
  { label: "5 anos", value: "5y" },
];

export default function CurrencyChart({ data }: CurrencyChartProps) {
  const [filter, setFilter] = useState("1w");

  // Função mock de filtro (ajuste com base nas datas reais depois)
  const filterData = (filter: string) => {
    switch (filter) {
      case "1d":
        return data.slice(-1);
      case "1w":
        return data.slice(-7);
      case "1m":
        return data.slice(-30);
      case "1y":
        return data.slice(-365);
      case "5y":
        return data;
      default:
        return data;
    }
  };

  const filteredData = filterData(filter);

  return (
    <div className="w-300 h-100 relative top-32 p-4 bg-white shadow-md rounded-xl">
      <div className="flex gap-2 mb-4">
        {filters.map((f) => (
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

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={filteredData}>
          <CartesianGrid strokeDasharray="3 3" horizontal vertical={false} />
          <YAxis
            stroke="#6DA67A"
            tick={{ fill: "#0d6759" }}
            orientation="right"
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="valueCurrencyLeft"
            stroke="#0d6759"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="valueCurrencyRight"
            stroke="#6DA67A"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
