export interface Currency {
  symbol: string;
  name: string;
  codCountry: string;
  country: string;
}

export interface Currencies {
  [code: string]: Currency;
}

export interface CurrencyData {
  currencies: Currencies;
}

export const currencyData: CurrencyData = {
  currencies: {
    AUD: {
      symbol: "",
      name: "Dólar Australiano",
      codCountry: "au",
      country: "Austrália",
    },
    BGN: {
      symbol: "",
      name: "Lev Búlgaro",
      codCountry: "bg",
      country: "Bulgária",
    },
    BRL: {
      symbol: "R$",
      name: "Real Brasileiro",
      codCountry: "br",
      country: "Brasil",
    },
    CAD: {
      symbol: "",
      name: "Dólar Canadense",
      codCountry: "ca",
      country: "Canadá",
    },
    CHF: {
      symbol: "",
      name: "Franco Suíço",
      codCountry: "ch",
      country: "Suíça",
    },
    CNY: {
      symbol: "",
      name: "Yuan Chinês",
      codCountry: "cn",
      country: "China",
    },
    CZK: {
      symbol: "",
      name: "Coroa Tcheca",
      codCountry: "cz",
      country: "República Tcheca",
    },
    DKK: {
      symbol: "",
      name: "Coroa Dinamarquesa",
      codCountry: "dk",
      country: "Dinamarca",
    },
    EUR: {
      symbol: "€",
      name: "Euro",
      codCountry: "eu",
      country: "União Europeia",
    },
    GBP: {
      symbol: "£",
      name: "Libra Esterlina",
      codCountry: "gb",
      country: "Reino Unido",
    },
    HKD: {
      symbol: "",
      name: "Dólar de Hong Kong",
      codCountry: "hk",
      country: "Hong Kong",
    },
    HRK: {
      symbol: "",
      name: "Kuna Croata",
      codCountry: "hr",
      country: "Croácia",
    },
    HUF: {
      symbol: "",
      name: "Forint Húngaro",
      codCountry: "hu",
      country: "Hungria",
    },
    IDR: {
      symbol: "",
      name: "Rupia Indonésia",
      codCountry: "id",
      country: "Indonésia",
    },
    ILS: {
      symbol: "",
      name: "Novo Shekel Israelense",
      codCountry: "il",
      country: "Israel",
    },
    INR: {
      symbol: "",
      name: "Rupia Indiana",
      codCountry: "in",
      country: "Índia",
    },
    ISK: {
      symbol: "",
      name: "Coroa Islandesa",
      codCountry: "is",
      country: "Islândia",
    },
    JPY: {
      symbol: "¥",
      name: "Iene Japonês",
      codCountry: "jp",
      country: "Japão",
    },
    KRW: {
      symbol: "",
      name: "Won Sul-Coreano",
      codCountry: "kr",
      country: "Coreia do Sul",
    },
    MXN: {
      symbol: "",
      name: "Peso Mexicano",
      codCountry: "mx",
      country: "México",
    },
    MYR: {
      symbol: "",
      name: "Ringgit Malaio",
      codCountry: "my",
      country: "Malásia",
    },
    NOK: {
      symbol: "",
      name: "Coroa Norueguesa",
      codCountry: "no",
      country: "Noruega",
    },
    NZD: {
      symbol: "",
      name: "Dólar Neozelandês",
      codCountry: "nz",
      country: "Nova Zelândia",
    },
    PHP: {
      symbol: "",
      name: "Peso Filipino",
      codCountry: "ph",
      country: "Filipinas",
    },
    PLN: {
      symbol: "",
      name: "Zloty Polonês",
      codCountry: "pl",
      country: "Polônia",
    },
    RON: {
      symbol: "",
      name: "Leu Romeno",
      codCountry: "ro",
      country: "Romênia",
    },
    RUB: {
      symbol: "",
      name: "Rublo Russo",
      codCountry: "ru",
      country: "Rússia",
    },
    SEK: {
      symbol: "",
      name: "Coroa Sueca",
      codCountry: "se",
      country: "Suécia",
    },
    SGD: {
      symbol: "",
      name: "Dólar de Singapura",
      codCountry: "sg",
      country: "Singapura",
    },
    THB: {
      symbol: "",
      name: "Baht Tailandês",
      codCountry: "th",
      country: "Tailândia",
    },
    TRY: {
      symbol: "",
      name: "Lira Turca",
      codCountry: "tr",
      country: "Turquia",
    },
    USD: {
      symbol: "US$",
      name: "Dólar Americano",
      codCountry: "us",
      country: "Estados Unidos",
    },
    ZAR: {
      symbol: "",
      name: "Rand Sul-Africano",
      codCountry: "za",
      country: "África do Sul",
    },
  },
};
