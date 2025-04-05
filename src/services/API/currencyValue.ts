//Buscar as taxas de câmbio mais recentes de uma moeda base utilizando a API pública Frankfurter (https://www.frankfurter.app/)
export const fetchCurrencyRates = async (baseCurrency: string = "USD") => {
  //Faz a requisição para a API usando fetch. A moeda base padrão é "USD" caso nenhuma seja passada.
  const response = await fetch(
    `https://api.frankfurter.app/latest?from=${baseCurrency}`
  );

  //Verifica se a resposta da API foi bem-sucedida.
  //Caso não, lança um erro para ser tratado pelo componente que chamou essa função
  if (!response.ok) throw new Error("Failed to fetch values!");
  return response.json();
};

//Função utilitária que retorna a URL da bandeira do país correspondente a um código de moeda (como "USD", "BRL", etc.)
export const getCountryFlagUrl = (currencyCode: string): string => {
  const countryMap: Record<string, string> = {
    AUD: "au", // Austrália
    BGN: "bg", // Bulgária
    BRL: "br", // Brasil
    CAD: "ca", // Canadá
    CHF: "ch", // Suíça
    CNY: "cn", // China
    CZK: "cz", // República Tcheca
    DKK: "dk", // Dinamarca
    EUR: "eu", // União Europeia (uso 'eu' para a bandeira da UE)
    GBP: "gb", // Reino Unido
    HKD: "hk", // Hong Kong
    HRK: "hr", // Croácia
    HUF: "hu", // Hungria
    IDR: "id", // Indonésia
    ILS: "il", // Israel
    INR: "in", // Índia
    ISK: "is", // Islândia
    JPY: "jp", // Japão
    KRW: "kr", // Coreia do Sul
    MXN: "mx", // México
    MYR: "my", // Malásia
    NOK: "no", // Noruega
    NZD: "nz", // Nova Zelândia
    PHP: "ph", // Filipinas
    PLN: "pl", // Polônia
    RON: "ro", // Romênia
    RUB: "ru", // Rússia
    SEK: "se", // Suécia
    SGD: "sg", // Singapura
    THB: "th", // Tailândia
    TRY: "tr", // Turquia
    USD: "us", // Estados Unidos
    ZAR: "za", // África do Sul
  };

  // Padrão de fallback para moedas não mapeadas (mostra bandeira genérica)
  const countryCode = countryMap[currencyCode] || "br"; // 'br' para Brasil como fallback

  return `https://flagcdn.com/48x36/${countryCode}.png`;
};
