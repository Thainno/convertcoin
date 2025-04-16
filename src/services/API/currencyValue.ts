//Buscar as taxas de câmbio mais recentes de uma moeda base utilizando a API pública Frankfurter (https://www.frankfurter.app/)
export const fetchCurrencyRates = async (baseCurrency: string) => {
  //Faz a requisição para a API usando fetch
  const response = await fetch(
    `https://api.frankfurter.app/latest?from=${baseCurrency}`
  );

  //Verifica se a resposta da API foi bem-sucedida.
  //Caso não, lança um erro para ser tratado pelo componente que chamou essa função
  if (!response.ok) throw new Error("Failed to fetch values!");
  return response.json();
};


