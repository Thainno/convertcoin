export const fetchCurrencyRates = async (baseCurrency: string = "USD") => {
  const response = await fetch(
    `https://api.frankfurter.app/latest?from=${baseCurrency}`
  );
  if (!response.ok) throw new Error("Falha ao buscar valores!");
  return response.json();
};

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
  const countryCode = countryMap[currencyCode] || "un"; // 'un' para Nações Unidas como fallback

  return `https://flagcdn.com/48x36/${countryCode.toLowerCase()}.png`;
};

// const currencySymbols: Record<string, string> = {
//   USD: '$',
//   BRL: 'R$',
//   EUR: '€',
//   GBP: '£',
//   JPY: '¥',
//   // Adicione outros símbolos conforme necessário
// };

// // Mapeamento de nomes completos das moedas
// const currencyNames: Record<string, string> = {
//   USD: "Dólar Americano",
//   BRL: "Real Brasileiro",
//   EUR: "Euro",
//   GBP: "Libra Esterlina",
//   JPY: "Iene Japonês",
//   // Adicione outras moedas conforme necessário
// };
