"use client";

import { LineChart, Line, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface CurrencyChartProps {
  data: {
    date: string;
    valueCurrencyLeft: number;
    valueCurrencyRight: number;
  }[];
}

export default function CurrencyChart({ data }: CurrencyChartProps) {
  const hasData = Array.isArray(data) && data.length > 0;

  return (
    <div className="w-300 h-64 p-4 bg-white shadow-md rounded-xl">
      {hasData ? (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <YAxis stroke="#6DA67A" orientation="right" />
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
      ) : (
        <p className="text-sm text-gray-500">Sem dados para exibir.</p>
      )}
    </div>
  );
}
