interface RatesResponse {
  rates: {
    [date: string]: {
      [currency: string]: number;
    };
  };
}

export async function fetchHistoricalRates(
  base: string,
  target: string,
  startDate: string,
  endDate: string
) {
  const url = `https://api.frankfurter.app/${startDate}..${endDate}?from=${base}&to=${target}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Erro ao buscar dados históricos");

  const data: RatesResponse = await res.json();

  return Object.entries(data.rates).map(([date, rate]) => ({
    date,
    value: rate[target],
  }));
}
