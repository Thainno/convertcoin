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
      symbol: "A$",
      name: "Dólar Australiano",
      codCountry: "au",
      country: "Austrália",
    },
    BGN: {
      symbol: "лв",
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
      symbol: "C$",
      name: "Dólar Canadense",
      codCountry: "ca",
      country: "Canadá",
    },
    CHF: {
      symbol: "SFr.",
      name: "Franco Suíço",
      codCountry: "ch",
      country: "Suíça",
    },
    CNY: {
      symbol: "¥",
      name: "Yuan Chinês",
      codCountry: "cn",
      country: "China",
    },
    CZK: {
      symbol: "Kč",
      name: "Coroa Tcheca",
      codCountry: "cz",
      country: "República Tcheca",
    },
    DKK: {
      symbol: "kr",
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
      symbol: "HK$",
      name: "Dólar de Hong Kong",
      codCountry: "hk",
      country: "Hong Kong",
    },
    HRK: {
      symbol: "kn",
      name: "Kuna Croata",
      codCountry: "hr",
      country: "Croácia",
    },
    HUF: {
      symbol: "Ft",
      name: "Forint Húngaro",
      codCountry: "hu",
      country: "Hungria",
    },
    IDR: {
      symbol: "Rp",
      name: "Rupia Indonésia",
      codCountry: "id",
      country: "Indonésia",
    },
    ILS: {
      symbol: "₪",
      name: "Novo Shekel Israelense",
      codCountry: "il",
      country: "Israel",
    },
    INR: {
      symbol: "₹",
      name: "Rupia Indiana",
      codCountry: "in",
      country: "Índia",
    },
    ISK: {
      symbol: "kr",
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
      symbol: "₩",
      name: "Won Sul-Coreano",
      codCountry: "kr",
      country: "Coreia do Sul",
    },
    MXN: {
      symbol: "MX$",
      name: "Peso Mexicano",
      codCountry: "mx",
      country: "México",
    },
    MYR: {
      symbol: "RM",
      name: "Ringgit Malaio",
      codCountry: "my",
      country: "Malásia",
    },
    NOK: {
      symbol: "kr",
      name: "Coroa Norueguesa",
      codCountry: "no",
      country: "Noruega",
    },
    NZD: {
      symbol: "NZ$",
      name: "Dólar Neozelandês",
      codCountry: "nz",
      country: "Nova Zelândia",
    },
    PHP: {
      symbol: "₱",
      name: "Peso Filipino",
      codCountry: "ph",
      country: "Filipinas",
    },
    PLN: {
      symbol: "zł",
      name: "Zloty Polonês",
      codCountry: "pl",
      country: "Polônia",
    },
    RON: {
      symbol: "L",
      name: "Leu Romeno",
      codCountry: "ro",
      country: "Romênia",
    },
    RUB: {
      symbol: "₽",
      name: "Rublo Russo",
      codCountry: "ru",
      country: "Rússia",
    },
    SEK: {
      symbol: "kr",
      name: "Coroa Sueca",
      codCountry: "se",
      country: "Suécia",
    },
    SGD: {
      symbol: "S$",
      name: "Dólar de Singapura",
      codCountry: "sg",
      country: "Singapura",
    },
    THB: {
      symbol: "฿",
      name: "Baht Tailandês",
      codCountry: "th",
      country: "Tailândia",
    },
    TRY: {
      symbol: "₺",
      name: "Lira Turca",
      codCountry: "tr",
      country: "Turquia",
    },
    USD: {
      symbol: "$",
      name: "Dólar Americano",
      codCountry: "us",
      country: "Estados Unidos",
    },
    ZAR: {
      symbol: "R",
      name: "Rand Sul-Africano",
      codCountry: "za",
      country: "África do Sul",
    },
  },
};
