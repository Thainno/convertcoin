"use client";

import { useEffect, useState } from "react";
import { fetchHistoricalRates } from "@/services/API/chartData";
import { getStartDateFromFilter } from "@/lib/utils/chartDate";

export function useHistoricalRates(base: string, target: string, days: number) {
  const [data, setData] = useState<{ date: string; value: number }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const endDate = new Date().toISOString().split("T")[0];
        const startDate = getStartDateFromFilter(days);

        const rates = await fetchHistoricalRates(
          base,
          target,
          startDate,
          endDate
        );

        // MANTÉM O FORMATO ORIGINAL DA DATA yyyy-MM-dd
        setData(
          rates.map((entry) => ({
            date: entry.date,
            value: entry.value,
          }))
        );
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [base, target, days]);

  return { data, loading };
}
