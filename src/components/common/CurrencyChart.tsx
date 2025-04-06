"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

interface CurrencyChartProps {
  data: { date: string; value: number }[];
}

export default function CurrencyChart({ data }: CurrencyChartProps) {
  const hasData = Array.isArray(data) && data.length > 0;

  return (
    <div className="w-full h-64 p-4 bg-white shadow-md rounded-xl">
      <h3 className="text-lg font-semibold mb-4">Histórico de câmbio</h3>
      {hasData ? (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#6DA67A"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <p className="text-sm text-gray-500">Sem dados para exibir.</p>
      )}
    </div>
  );
}
