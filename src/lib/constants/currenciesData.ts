export interface Currency {
  symbol: string;
  name: string;
  codCountry: string;
  country: string;
  description: string;
  curiosity: string;
  usedIn: string[];
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
      description:
        "O Dólar Australiano foi introduzido em 1966, substituindo a libra australiana. É uma moeda decimal, dividida em 100 centavos, e é amplamente utilizada na região da Oceania.",
      curiosity:
        "O Dólar Australiano é conhecido por suas notas coloridas e resistentes à água, feitas de polímero, sendo uma das primeiras moedas a adotar esse material.",
      usedIn: [
        "Austrália",
        "Ilhas Christmas",
        "Ilhas Cocos (Keeling)",
        "Ilha Norfolk",
        "Kiribati",
        "Nauru",
        "Tuvalu",
      ],
    },
    BGN: {
      symbol: "лв",
      name: "Lev Búlgaro",
      codCountry: "bg",
      country: "Bulgária",
      description:
        "O Lev Búlgaro é a moeda oficial da Bulgária desde 1881. Em 1999, foi introduzido o novo lev (BGN), com uma taxa de conversão de 1.000:1 em relação ao antigo lev.",
      curiosity:
        "O nome 'lev' significa 'leão' em búlgaro, simbolizando força e coragem.",
      usedIn: ["Bulgária"],
    },
    BRL: {
      symbol: "R$",
      name: "Real Brasileiro",
      codCountry: "br",
      country: "Brasil",
      description:
        "O Real foi introduzido em 1994 como parte do Plano Real, substituindo o Cruzeiro Real. É a moeda oficial do Brasil e é subdividido em 100 centavos.",
      curiosity:
        "O nome 'Real' foi escolhido para resgatar o nome da moeda usada durante o período colonial e imperial do Brasil.",
      usedIn: ["Brasil"],
    },
    CAD: {
      symbol: "C$",
      name: "Dólar Canadense",
      codCountry: "ca",
      country: "Canadá",
      description:
        "O Dólar Canadense é a moeda oficial do Canadá desde 1858. É subdividido em 100 centavos e é conhecido por suas notas coloridas.",
      curiosity:
        "As moedas canadenses são popularmente chamadas de 'loonie' (moeda de um dólar) e 'toonie' (moeda de dois dólares) devido aos animais representados nelas.",
      usedIn: ["Canadá"],
    },
    CHF: {
      symbol: "SFr.",
      name: "Franco Suíço",
      codCountry: "ch",
      country: "Suíça",
      description:
        "O Franco Suíço é a moeda oficial da Suíça e do Liechtenstein desde 1850. É conhecido por sua estabilidade e é uma moeda de reserva popular.",
      curiosity:
        "O Franco Suíço é uma das poucas moedas europeias que não adotaram o euro, mantendo sua independência monetária.",
      usedIn: [
        "Suíça",
        "Liechtenstein",
        "Campione d'Italia (exclave italiano)",
      ],
    },
    CNY: {
      symbol: "¥",
      name: "Yuan Chinês",
      codCountry: "cn",
      country: "China",
      description:
        "O Yuan, também conhecido como Renminbi, é a moeda oficial da República Popular da China. É emitido pelo Banco Popular da China.",
      curiosity:
        "O termo 'Renminbi' significa 'moeda do povo', enquanto 'Yuan' é a unidade básica da moeda.",
      usedIn: ["China"],
    },
    CZK: {
      symbol: "Kč",
      name: "Coroa Tcheca",
      codCountry: "cz",
      country: "República Tcheca",
      description:
        "A Coroa Tcheca é a moeda oficial da República Tcheca desde 1993, após a dissolução da Tchecoslováquia.",
      curiosity:
        "Apesar de ser membro da União Europeia, a República Tcheca ainda não adotou o euro como sua moeda oficial.",
      usedIn: ["República Tcheca"],
    },
    DKK: {
      symbol: "kr",
      name: "Coroa Dinamarquesa",
      codCountry: "dk",
      country: "Dinamarca",
      description:
        "A Coroa Dinamarquesa é a moeda oficial da Dinamarca, introduzida em 1875. Também é utilizada nas Ilhas Faroé e na Groenlândia.",
      curiosity:
        "A Dinamarca optou por não adotar o euro, mantendo sua moeda nacional apesar de ser membro da União Europeia.",
      usedIn: ["Dinamarca", "Groenlândia", "Ilhas Faroé"],
    },
    EUR: {
      symbol: "€",
      name: "Euro",
      codCountry: "eu",
      country: "União Europeia",
      description:
        "O Euro é a moeda oficial de 20 dos 27 países membros da União Europeia, formando a zona do euro. Foi introduzido em 1999 para transações eletrônicas e em 2002 em forma física.",
      curiosity:
        "O Euro é a segunda moeda mais negociada no mundo, atrás apenas do Dólar Americano.",
      usedIn: [
        "Alemanha",
        "Áustria",
        "Bélgica",
        "Chipre",
        "Croácia",
        "Eslováquia",
        "Eslovênia",
        "Espanha",
        "Estônia",
        "Finlândia",
        "França",
        "Grécia",
        "Irlanda",
        "Itália",
        "Letônia",
        "Lituânia",
        "Luxemburgo",
        "Malta",
        "Países Baixos",
        "Portugal",
      ],
    },
    GBP: {
      symbol: "£",
      name: "Libra Esterlina",
      codCountry: "gb",
      country: "Reino Unido",
      description:
        "A Libra Esterlina é a moeda oficial do Reino Unido e é uma das moedas mais antigas ainda em uso, com origens que remontam ao século VIII.",
      curiosity:
        "O símbolo '£' deriva da letra 'L', representando a palavra latina 'libra', uma unidade de peso romana.",
      usedIn: [
        "Reino Unido",
        "Ilhas do Canal",
        "Ilha de Man",
        "Gibraltar",
        "Ilhas Malvinas",
        "Santa Helena",
        "Geórgia do Sul e Ilhas Sandwich do Sul",
      ],
    },
    HKD: {
      symbol: "HK$",
      name: "Dólar de Hong Kong",
      codCountry: "hk",
      country: "Hong Kong",
      description:
        "O Dólar de Hong Kong é a moeda oficial da Região Administrativa Especial de Hong Kong desde 1935. É emitido por três bancos comerciais sob supervisão do governo.",
      curiosity:
        "Apesar de ser uma região da China, Hong Kong mantém sua própria moeda e sistema financeiro sob o princípio de 'um país, dois sistemas'.",
      usedIn: ["Hong Kong"],
    },
    HRK: {
      symbol: "kn",
      name: "Kuna Croata",
      codCountry: "hr",
      country: "Croácia",
      description:
        "A Kuna foi a moeda oficial da Croácia de 1994 até 2022, quando o país adotou o euro como sua moeda oficial.",
      curiosity:
        "O nome 'Kuna' significa 'marta' em croata, um animal cuja pele era usada como unidade de troca na Idade Média.",
      usedIn: ["Croácia (até 2022)"],
    },
    HUF: {
      symbol: "Ft",
      name: "Forint Húngaro",
      codCountry: "hu",
      country: "Hungria",
      description:
        "O Forint é a moeda oficial da Hungria desde 1946, introduzido após um período de hiperinflação pós-Segunda Guerra Mundial.",
      curiosity:
        "O nome 'Forint' deriva da cidade italiana de Florença, onde moedas de ouro chamadas 'fiorino d'oro' foram cunhadas no século XIII.",
      usedIn: ["Hungria"],
    },
    IDR: {
      symbol: "Rp",
      name: "Rupia Indonésia",
      codCountry: "id",
      country: "Indonésia",
      description:
        "A Rupia é a moeda oficial da Indonésia, introduzida em 1946 após a independência do país. É subdividida em 100 sen, embora as moedas de sen não sejam mais usadas.",
      curiosity:
        "Devido à inflação, a Indonésia possui notas de alta denominação, como a de 100.000 rupias, equivalente a cerca de 7 dólares americanos.",
      usedIn: ["Indonésia"],
    },
    ILS: {
      symbol: "₪",
      name: "Novo Shekel Israelense",
      codCountry: "il",
      country: "Israel",
      description:
        "O Novo Shekel é a moeda oficial de Israel desde 1985, substituindo o antigo shekel em uma taxa de 1.000 para 1.",
      curiosity:
        "O símbolo '₪' é uma combinação das letras hebraicas 'ש' (shin) e 'ח' (chet), iniciais de 'Shekel Hadash' (Novo Shekel).",
      usedIn: ["Israel", "Territórios Palestinos"],
    },
    INR: {
      symbol: "₹",
      name: "Rupia Indiana",
      codCountry: "in",
      country: "Índia",
      description:
        "A Rupia é a moeda oficial da Índia desde o século XVI. O símbolo '₹' foi adotado oficialmente em 2010.",
      curiosity:
        "A palavra 'rupia' deriva do sânscrito 'rupyakam', que significa 'prata cunhada'.",
      usedIn: ["Índia", "Butão (junto com o Ngultrum)"],
    },
    ISK: {
      symbol: "kr",
      name: "Coroa Islandesa",
      codCountry: "is",
      country: "Islândia",
      description:
        "A Coroa Islandesa (ISK) é a moeda oficial da Islândia desde 1874, substituindo o rigsdaler dinamarquês. Em 1981, passou por uma reavaliação monetária, onde 100 coroas antigas passaram a valer 1 coroa nova. A moeda é subdividida em 100 aurar, embora essa subdivisão não seja mais utilizada.",
      curiosity:
        "As moedas islandesas apresentam animais marinhos, como bacalhau, golfinho e caranguejo, refletindo a forte ligação do país com o mar. Além disso, a Islândia é uma das sociedades mais avançadas tecnologicamente, com grande parte das transações ocorrendo de forma eletrônica.",
      usedIn: ["Islândia"],
    },
    JPY: {
      symbol: "¥",
      name: "Iene Japonês",
      codCountry: "jp",
      country: "Japão",
      description:
        "O Iene é a moeda oficial do Japão desde 1871, introduzido como parte da modernização econômica do país durante a Era Meiji. É uma das moedas mais negociadas no mercado cambial global.",
      curiosity:
        "O símbolo '¥' representa uma letra 'Y' com duas linhas horizontais, derivado da palavra japonesa 'en', que significa 'círculo', referindo-se às moedas redondas.",
      usedIn: ["Japão"],
    },
    KRW: {
      symbol: "₩",
      name: "Won Sul-Coreano",
      codCountry: "kr",
      country: "Coreia do Sul",
      description:
        "O Won é a moeda oficial da Coreia do Sul desde 1945, substituindo o iene coreano após a independência do país. É subdividido em 100 jeon, embora as moedas de jeon não sejam mais utilizadas.",
      curiosity:
        "O símbolo '₩' é uma combinação da letra 'W' com uma linha horizontal, representando a primeira letra de 'Won'.",
      usedIn: ["Coreia do Sul"],
    },
    MXN: {
      symbol: "MX$",
      name: "Peso Mexicano",
      codCountry: "mx",
      country: "México",
      description:
        "O Peso é a moeda oficial do México desde a colonização espanhola, sendo uma das moedas mais antigas ainda em uso nas Américas. É subdividido em 100 centavos.",
      curiosity:
        "O símbolo '$' foi originalmente usado para o peso mexicano antes de ser adotado pelo dólar americano.",
      usedIn: ["México"],
    },
    MYR: {
      symbol: "RM",
      name: "Ringgit Malaio",
      codCountry: "my",
      country: "Malásia",
      description:
        "O Ringgit é a moeda oficial da Malásia desde 1975, substituindo o dólar malaio. É subdividido em 100 sen.",
      curiosity:
        "O termo 'Ringgit' significa 'dentado' em malaio, referindo-se às bordas serrilhadas das moedas espanholas que circulavam na região.",
      usedIn: ["Malásia"],
    },
    NOK: {
      symbol: "kr",
      name: "Coroa Norueguesa",
      codCountry: "no",
      country: "Noruega",
      description:
        "A Coroa Norueguesa é a moeda oficial da Noruega desde 1875, quando o país aderiu à União Monetária Escandinava. É subdividida em 100 øre.",
      curiosity:
        "Apesar de ser membro do Espaço Econômico Europeu, a Noruega optou por manter sua moeda nacional em vez de adotar o euro.",
      usedIn: ["Noruega"],
    },
    NZD: {
      symbol: "NZ$",
      name: "Dólar Neozelandês",
      codCountry: "nz",
      country: "Nova Zelândia",
      description:
        "O Dólar Neozelandês é a moeda oficial da Nova Zelândia desde 1967, substituindo a libra neozelandesa. É subdividido em 100 centavos.",
      curiosity:
        "O NZD é frequentemente chamado de 'Kiwi' no mercado cambial, em referência ao pássaro símbolo nacional da Nova Zelândia.",
      usedIn: [
        "Nova Zelândia",
        "Ilhas Cook",
        "Niue",
        "Ilhas Tokelau",
        "Ilhas Pitcairn",
      ],
    },
    PHP: {
      symbol: "₱",
      name: "Peso Filipino",
      codCountry: "ph",
      country: "Filipinas",
      description:
        "O Peso é a moeda oficial das Filipinas desde a colonização espanhola. É subdividido em 100 sentimos.",
      curiosity:
        "O símbolo '₱' foi adotado em 1967 e é uma combinação da letra 'P' com duas linhas horizontais, representando o peso.",
      usedIn: ["Filipinas"],
    },
    PLN: {
      symbol: "zł",
      name: "Zloty Polonês",
      codCountry: "pl",
      country: "Polônia",
      description:
        "O Zloty é a moeda oficial da Polônia desde 1924, substituindo o marco polonês. É subdividido em 100 groszy.",
      curiosity:
        "O nome 'Zloty' significa 'dourado' em polonês, refletindo a origem da moeda como uma peça de ouro.",
      usedIn: ["Polônia"],
    },
    RON: {
      symbol: "L",
      name: "Leu Romeno",
      codCountry: "ro",
      country: "Romênia",
      description:
        "O Leu é a moeda oficial da Romênia desde 1867. Em 2005, foi introduzido o novo leu (RON), com uma taxa de conversão de 10.000:1 em relação ao antigo leu.",
      curiosity:
        "O nome 'Leu' significa 'leão' em romeno, e as moedas antigas apresentavam a imagem de um leão.",
      usedIn: ["Romênia"],
    },
    RUB: {
      symbol: "₽",
      name: "Rublo Russo",
      codCountry: "ru",
      country: "Rússia",
      description:
        "O Rublo é a moeda oficial da Rússia desde o século XIV, sendo uma das moedas mais antigas ainda em uso. É subdividido em 100 kopeks.",
      curiosity:
        "O símbolo '₽' foi oficialmente adotado em 2013 após uma votação pública promovida pelo Banco Central da Rússia.",
      usedIn: ["Rússia", "Abecásia", "Ossétia do Sul"],
    },
    SEK: {
      symbol: "kr",
      name: "Coroa Sueca",
      codCountry: "se",
      country: "Suécia",
      description:
        "A Coroa Sueca é a moeda oficial da Suécia desde 1873, quando o país aderiu à União Monetária Escandinava. É subdividida em 100 öre.",
      curiosity:
        "A Suécia é uma das sociedades mais avançadas em termos de pagamentos eletrônicos, com uma tendência crescente de se tornar uma sociedade sem dinheiro físico.",
      usedIn: ["Suécia"],
    },
    SGD: {
      symbol: "S$",
      name: "Dólar de Singapura",
      codCountry: "sg",
      country: "Singapura",
      description:
        "O Dólar de Singapura é a moeda oficial de Singapura desde 1967, substituindo o dólar malaio. É subdividido em 100 centavos.",
      curiosity:
        "Singapura possui uma política monetária única, onde o valor do dólar é gerenciado através de uma cesta de moedas, em vez de uma taxa de juros.",
      usedIn: ["Singapura", "Brunei (em paridade com o dólar de Brunei)"],
    },
    THB: {
      symbol: "฿",
      name: "Baht Tailandês",
      codCountry: "th",
      country: "Tailândia",
      description:
        "O Baht é a moeda oficial da Tailândia desde 1897, substituindo o tical. É subdividido em 100 satang.",
      curiosity:
        "As moedas e notas tailandesas apresentam a imagem do rei, e é considerado desrespeitoso pisar ou danificar o dinheiro.",
      usedIn: ["Tailândia"],
    },
    TRY: {
      symbol: "₺",
      name: "Lira Turca",
      codCountry: "tr",
      country: "Turquia",
      description:
        "A Lira é a moeda oficial da Turquia desde 1923. Em 2005, foi introduzida a nova lira turca (TRY), com uma taxa de conversão de 1.000.000:1 em relação à antiga lira.",
      curiosity:
        "O símbolo '₺' foi adotado em 2012 após um concurso nacional promovido pelo Banco Central da Turquia.",
      usedIn: ["Turquia", "República Turca do Chipre do Norte"],
    },
    USD: {
      symbol: "$",
      name: "Dólar Americano",
      codCountry: "us",
      country: "Estados Unidos",
      description:
        "O Dólar Americano é a moeda oficial dos Estados Unidos desde 1792. É a moeda de reserva mais utilizada no mundo e é subdividido em 100 centavos.",
      curiosity:
        "O termo 'buck' (gíria para dólar) originou-se do comércio de peles, onde peles de veado eram usadas como unidade de troca.",
      usedIn: [
        "Estados Unidos",
        "Porto Rico",
        "Ilhas Virgens Americanas",
        "Guam",
        "Ilhas Marianas do Norte",
        "Samoa Americana",
        "Micronésia",
        "Ilhas Marshall",
        "Palau",
        "Timor-Leste",
        "Equador",
        "El Salvador",
        "Panamá",
        "Zimbábue",
      ],
    },
    ZAR: {
      symbol: "R",
      name: "Rand Sul-Africano",
      codCountry: "za",
      country: "África do Sul",
      description:
        "O Rand é a moeda oficial da África do Sul desde 1961, ano em que o país se tornou uma república e se desvinculou da libra sul-africana. O nome 'Rand' deriva da região de Witwatersrand, que abriga vastas jazidas de ouro e foi fundamental para o desenvolvimento econômico do país.",
      curiosity:
        "As notas de Rand são conhecidas por exibirem imagens dos 'Big Five' (leão, elefante, búfalo, leopardo e rinoceronte), os cinco grandes animais selvagens africanos. Em 2012, a África do Sul lançou uma nova série de cédulas com o rosto de Nelson Mandela.",
      usedIn: [
        "África do Sul",
        "Lesoto",
        "Essuatíni",
        "Namíbia (em conjunto com o dólar namibiano)",
      ],
    },
  },
};
