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
        "O dólar australiano é a moeda oficial da Austrália desde 14 de fevereiro de 1966, substituindo a libra australiana. A moeda é emitida pelo Reserve Bank of Australia e é dividida em 100 centavos.",
      curiosity:
        "O dólar australiano foi uma das primeiras moedas do mundo a adotar notas de polímero, introduzidas em 1988. Essas notas são mais duráveis e difíceis de falsificar em comparação com as de papel. Além disso, o design das moedas australianas apresenta uma variedade de animais nativos, como o canguru e o ornitorrinco, refletindo a rica fauna do país.",
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
        "O Lev Búlgaro é a moeda oficial da Bulgária desde 1881, substituindo o franco francês. A moeda é emitida pelo Banco Nacional da Bulgária e é dividida em 100 stotinki.",
      curiosity:
        "O nome 'lev' significa 'leão' em búlgaro, simbolizando força e coragem. Apesar de ser membro da União Europeia desde 2007, a Bulgária ainda não adotou o euro, mas o Lev tem sua taxa de câmbio fixada ao euro dentro do Mecanismo Europeu de Taxas de Câmbio.",
      usedIn: ["Bulgária"],
    },
    BRL: {
      symbol: "R$",
      name: "Real Brasileiro",
      codCountry: "br",
      country: "Brasil",
      description:
        "O Real é a moeda oficial do Brasil desde 1º de julho de 1994, substituindo o Cruzeiro Real. A moeda é emitida pelo Banco Central do Brasil e é dividida em 100 centavos.",
      curiosity:
        "As cédulas de R$1 deixaram de ser impressas em 2005, tornando-se itens de colecionador. As cédulas trazem imagens de animais da fauna brasileira, como a onça-pintada, o mico-leão-dourado, a arara-vermelha-grande e o lobo-guará. É a oitava moeda oficial do Brasil desde sua independência.",
      usedIn: ["Brasil"],
    },
    CAD: {
      symbol: "C$",
      name: "Dólar Canadense",
      codCountry: "ca",
      country: "Canadá",
      description:
        "O Dólar Canadense é a moeda oficial do Canadá desde 1858, substituindo a Libra Canadense. A moeda é emitida pelo Banco do Canadá e é dividida em 100 centavos.",
      curiosity: `As moedas canadenses são popularmente chamadas de "loonie" (moeda de C$1) e "toonie" (moeda de C$2). O "loonie" recebeu esse apelido devido à imagem de um mergulhão (loon, em inglês) em um dos lados da moeda. Quando a moeda de C$2 foi introduzida, os canadenses criaram o termo "toonie" como uma combinação de "two" (dois) e "loonie", demonstrando o senso de humor nacional.`,
      usedIn: ["Canadá"],
    },
    CHF: {
      symbol: "SFr.",
      name: "Franco Suíço",
      codCountry: "ch",
      country: "Suíça",
      description:
        "O Franco Suíço é a moeda oficial da Suíça e do Liechtenstein desde 1850, substituindo as diversas moedas cantonais. A moeda é emitida pelo Banco Nacional Suíço e é dividida em 100 centimes.",
      curiosity:
        "As notas suíças são consideradas algumas das mais seguras e sofisticadas do mundo, com design vertical exclusivo e várias tecnologias antifalsificação.",
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
        "O Yuan é a moeda oficial da China desde 1949, substituindo o fabi. A moeda é emitida pelo Banco Popular da China e é dividida em 10 jiao, cada um subdividido em 10 fen",
      curiosity:
        "O Yuan digital (e-CNY), uma versão digital oficial da moeda, está em fase avançada de testes, sendo uma das primeiras tentativas de uma moeda digital por um grande banco central.",
      usedIn: ["China"],
    },
    CZK: {
      symbol: "Kč",
      name: "Coroa Tcheca",
      codCountry: "cz",
      country: "República Tcheca",
      description:
        "A Coroa Tcheca é a moeda oficial da República Tcheca desde 1993, substituindo a Coroa Tchecoslovaca após a dissolução da Tchecoslováquia. A moeda é emitida pelo Banco Nacional Tcheco e é dividida em 100 haléřů.",
      curiosity: `O termo "koruna" significa "coroa" em tcheco, refletindo a herança monárquica da região. Curiosamente, as primeiras cédulas da Coroa Tcheca foram criadas carimbando notas antigas da Coroa Tchecoslovaca com novos valores, uma solução temporária até a emissão de uma nova série em 1993.`,
      usedIn: ["República Tcheca"],
    },
    DKK: {
      symbol: "kr",
      name: "Coroa Dinamarquesa",
      codCountry: "dk",
      country: "Dinamarca",
      description:
        "A Coroa Dinamarquesa é a moeda oficial da Dinamarca desde 1º de janeiro de 1875, substituindo o rigsdaler. A moeda é emitida pelo Danmarks Nationalbank e é dividida em 100 øre.",
      curiosity:
        "A Dinamarca optou por não adotar o euro, mantendo sua moeda nacional apesar de ser membro da União Europeia.Curiosamente, as moedas de coroa possuem um design único com buracos no centro em algumas denominações, o que além de economizar metal, também facilita o transporte e a identificação tátil.",
      usedIn: ["Dinamarca", "Groenlândia", "Ilhas Faroé"],
    },
    EUR: {
      symbol: "€",
      name: "Euro",
      codCountry: "eu",
      country: "União Europeia",
      description:
        "O Euro é a moeda oficial da União Europeia desde 1º de janeiro de 1999, substituindo a Unidade Monetária Europeia (ECU). A moeda é emitida pelo Banco Central Europeu e é dividida em 100 centavos.",
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
        "A Libra Esterlina é a moeda oficial do Reino Unido desde o século VIII, sendo uma das moedas mais antigas ainda em uso. A moeda é emitida pelo Banco da Inglaterra e é dividida em 100 pence.",
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
        "O Dólar de Hong Kong é a moeda oficial de Hong Kong desde 1863, substituindo diversas moedas estrangeiras em circulação na época. A moeda é emitida pela Autoridade Monetária de Hong Kong e é dividida em 100 centavos",
      curiosity:
        "Apesar de ser uma região da China, Hong Kong opera sua moeda sob um sistema de câmbio fixo com o dólar americano desde 1983, onde cada dólar de Hong Kong em circulação é respaldado por reservas em dólares americanos, garantindo estabilidade cambial mesmo em períodos de turbulência financeira.",
      usedIn: ["Hong Kong"],
    },
    HRK: {
      symbol: "kn",
      name: "Kuna Croata",
      codCountry: "hr",
      country: "Croácia",
      description:
        "A Kuna foi a moeda oficial da Croácia de 1994 até 31 de dezembro de 2022, substituindo o Dinar Croata. A moeda era emitida pelo Banco Nacional da Croácia e dividida em 100 lipa.",
      curiosity: `O nome "kuna" significa "marta" em croata, referindo-se ao uso histórico das peles desse animal como unidade de troca na Idade Média. Da mesma forma, "lipa" significa "tília", uma árvore comum na Croácia, cujas folhas adornavam as moedas, conectando a moeda à herança cultural e natural do país.`,
      usedIn: ["Croácia (até 2022)"],
    },
    HUF: {
      symbol: "Ft",
      name: "Forint Húngaro",
      codCountry: "hu",
      country: "Hungria",
      description:
        "O Forint é a moeda oficial da Hungria desde 1º de agosto de 1946, substituindo o Pengő após um período de hiperinflação. A moeda é emitida pelo Banco Nacional da Hungria e é dividida em 100 fillér.",
      curiosity: `O nome "Forint" deriva da cidade italiana de Florença, onde moedas de ouro chamadas "fiorino d'oro" foram cunhadas no século XIII. A Hungria adotou o termo para sua moeda no século XIV, refletindo a influência cultural e econômica italiana na Europa Central durante a Idade Média.`,
      usedIn: ["Hungria"],
    },
    IDR: {
      symbol: "Rp",
      name: "Rupia Indonésia",
      codCountry: "id",
      country: "Indonésia",
      description:
        "O Rupia Indonésia é a moeda oficial da Indonésia desde 1946, substituindo o florim das Índias Orientais Holandesas. A moeda é emitida pelo Bank Indonesia e é dividida em 100 sen.",
      curiosity:
        "Devido à inflação, a Indonésia possui notas de alta denominação, como a de 100.000 rupias, equivalente a cerca de 7 dólares americanos. Uma curiosidade marcante é que algumas notas indonésias retratam figuras nacionais acompanhadas de crianças e paisagens naturais, destacando o orgulho cultural e o desejo de promover valores educativos. Além disso, em algumas ilhas indonésias mais remotas, ainda é comum o uso de escambo e moedas locais, demonstrando a diversidade cultural e econômica do país.",
      usedIn: ["Indonésia"],
    },
    ILS: {
      symbol: "₪",
      name: "Novo Shekel Israelense",
      codCountry: "il",
      country: "Israel",
      description:
        "O Novo Shekel Israelense é a moeda oficial de Israel desde 1º de janeiro de 1986, substituindo o antigo shekel. A moeda é emitida pelo Bank of Israel e é dividida em 100 agorot.",
      curiosity: `O nome "shekel" tem origem bíblica e era uma antiga unidade de peso e moeda usada no Oriente Médio há mais de 3 mil anos. Israel foi um dos primeiros países a introduzir moedas e cédulas com inscrições em braile, refletindo seu compromisso com acessibilidade.`,
      usedIn: ["Israel", "Territórios Palestinos"],
    },
    INR: {
      symbol: "₹",
      name: "Rupia Indiana",
      codCountry: "in",
      country: "Índia",
      description:
        "A Rúpia é a moeda oficial da Índia desde 1540, mas na forma moderna é emitida pelo Reserve Bank of India desde 1935. É dividida em 100 paise.",
      curiosity: `A palavra "rupia" deriva do sânscrito "rupyakam", que significa "prata cunhada". O símbolo moderno da rúpia "₹", adotado em 2010, combina a letra "Ra" do alfabeto devanágari com o "R" romano, simbolizando a herança cultural e a modernidade econômica da Índia.`,
      usedIn: ["Índia", "Butão (junto com o Ngultrum)"],
    },
    ISK: {
      symbol: "kr",
      name: "Coroa Islandesa",
      codCountry: "is",
      country: "Islândia",
      description:
        "A Coroa Islandesa é a moeda oficial da Islândia desde 1922, substituindo a coroa dinamarquesa após a independência monetária. É emitida pelo Seðlabanki Íslands e dividida em 100 aurar (embora aurar não seja mais usado na prática).",
      curiosity:
        "As moedas islandesas apresentam animais marinhos, como bacalhau, golfinho e caranguejo e em algumas moedas retratam criaturas do folclore nórdico, como o gigante do mar e o espírito guardião do oceano refletindo a forte ligação do país com o mar.",
      usedIn: ["Islândia"],
    },
    JPY: {
      symbol: "¥",
      name: "Iene Japonês",
      codCountry: "jp",
      country: "Japão",
      description:
        "O Iene é a moeda oficial do Japão desde 1871, substituindo o sistema de mon tradicional. A moeda é emitida pelo Bank of Japan e não possui subdivisões em uso comum, embora tecnicamente seja dividida em 100 sen.",
      curiosity:
        "A moeda de 5 ienes é considerada de boa sorte no Japão. Isso porque sua pronúncia, “go-en”, também significa “destino” ou “laço” em japonês, sendo frequentemente oferecida como presente em santuários xintoístas durante orações. Além disso, o Japão é conhecido por ter algumas das notas mais avançadas do mundo em termos de segurança e design artístico, com novos modelos em constante desenvolvimento tecnológico.",
      usedIn: ["Japão"],
    },
    KRW: {
      symbol: "₩",
      name: "Won Sul-Coreano",
      codCountry: "kr",
      country: "Coreia do Sul",
      description:
        "O Won é a moeda oficial da Coreia do Sul desde 1962, substituindo o hwan. A moeda é emitida pelo Banco da Coreia e é dividida em 100 jeon, embora o jeon seja atualmente obsoleto.",
      curiosity:
        "As cédulas sul-coreanas são um reflexo da rica herança cultural do país, apresentando figuras históricas como o rei Sejong, que criou o alfabeto hangul. Um fato curioso é que a moeda de 500 won, por ter valor relativamente alto, já foi falsificada em países vizinhos como o Japão, onde ela é parecida com a moeda de 500 ienes. Esse fato levou à atualização de ambas as moedas para dificultar a falsificação.",
      usedIn: ["Coreia do Sul"],
    },
    MXN: {
      symbol: "MX$",
      name: "Peso Mexicano",
      codCountry: "mx",
      country: "México",
      description:
        "O Peso Mexicano é a moeda oficial do México desde 1821, substituindo o real colonial espanhol. A moeda é emitida pelo Banco de México e é dividida em 100 centavos.",
      curiosity: `O símbolo "$" usado globalmente para o dólar tem origem no peso mexicano. Antigamente, o peso era representado por "Ps", e com o tempo a abreviação evoluiu para o símbolo "$". Além disso, o México foi um dos primeiros países a adotar o uso de moedas decimais modernas e suas moedas foram amplamente utilizadas em comércio internacional nos séculos XVIII e XIX, inclusive na China e nos Estados Unidos.`,
      usedIn: ["México"],
    },
    MYR: {
      symbol: "RM",
      name: "Ringgit Malaio",
      codCountry: "my",
      country: "Malásia",
      description:
        "O Ringgit é a moeda oficial da Malásia desde 1967, substituindo o dólar malaio. A moeda é emitida pelo Bank Negara Malaysia e é dividida em 100 sen.",
      curiosity: `O nome “ringgit” significa “denteado” em malaio, uma referência às bordas serrilhadas das moedas espanholas de prata que circularam na região séculos atrás. A moeda também apresenta elementos de segurança avançados, como uma faixa holográfica 3D visível sob diferentes ângulos.`,
      usedIn: ["Malásia"],
    },
    NOK: {
      symbol: "kr",
      name: "Coroa Norueguesa",
      codCountry: "no",
      country: "Noruega",
      description:
        "A Coroa Norueguesa é a moeda oficial da Noruega desde 1875, substituindo o speciedaler. A moeda é emitida pelo Norges Bank e é dividida em 100 øre.",
      curiosity:
        "As moedas e cédulas norueguesas passaram por um redesenho inovador em 2017, adotando um estilo minimalista e moderno que mistura arte e abstração gráfica. A série apresenta temas marítimos, como faróis, navios e ondas pixeladas, celebrando a forte conexão da Noruega com o mar. Esse design arrojado chamou atenção internacional por sua estética única e pela ousadia em misturar tradição com design contemporâneo.",
      usedIn: ["Noruega"],
    },
    NZD: {
      symbol: "NZ$",
      name: "Dólar Neozelandês",
      codCountry: "nz",
      country: "Nova Zelândia",
      description:
        "O Dólar Neozelandês é a moeda oficial da Nova Zelândia desde 10 de julho de 1967, substituindo a libra neozelandesa. A moeda é emitida pelo Reserve Bank of New Zealand e é dividida em 100 centavos.",
      curiosity: `O dólar da Nova Zelândia é frequentemente chamado de "kiwi" no mercado financeiro internacional, em referência ao pássaro símbolo nacional. A nota de NZ$5 foi eleita a mais bonita do mundo em 2015, com uma vibrante imagem de Sir Edmund Hillary, o primeiro homem a escalar o Everest, e belas paisagens alpinas.`,
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
        "O Peso Filipino é a moeda oficial das Filipinas desde 1852, substituindo o real espanhol. É emitido pelo Bangko Sentral ng Pilipinas e é dividido em 100 sentimos.",
      curiosity: `As moedas e cédulas filipinas frequentemente homenageiam heróis nacionais, eventos históricos e monumentos. Um exemplo marcante é a nota de 500 pesos que retrata Benigno "Ninoy" Aquino Jr., cuja morte em 1983 foi um catalisador para a Revolução do Poder Popular que restaurou a democracia no país.`,
      usedIn: ["Filipinas"],
    },
    PLN: {
      symbol: "zł",
      name: "Zloty Polonês",
      codCountry: "pl",
      country: "Polônia",
      description:
        "O Złoty é a moeda oficial da Polônia desde 1995, substituindo o antigo złoty em uma reforma monetária. É emitido pelo Narodowy Bank Polski e é dividido em 100 groszy.",
      curiosity:
        "O nome “złoty” significa “dourado” em polonês, uma referência às antigas moedas de ouro usadas na região no século XV. Um fato curioso é que, embora a Polônia faça parte da União Europeia, ela manteve sua moeda nacional por decisão própria, e pesquisas mostram que a maioria dos poloneses prefere o złoty ao euro, vendo nele um símbolo de soberania e identidade nacional.",
      usedIn: ["Polônia"],
    },
    RON: {
      symbol: "L",
      name: "Leu Romeno",
      codCountry: "ro",
      country: "Romênia",
      description:
        "O Leu é a moeda oficial da Romênia desde 2005, substituindo o antigo leu na razão de 10.000 para 1. É emitido pelo Banca Națională a României e é dividido em 100 bani.",
      curiosity: `"Leu" significa "leão" em romeno, uma referência às moedas holandesas com leões que circularam na região no século XVII. Um fato curioso é que o leu moderno é uma das poucas moedas de polímero completamente plastificadas na Europa, tornando-as extremamente duráveis e à prova d'água. Além disso, as cédulas apresentam retratos de artistas e cientistas romenos, promovendo a cultura e história do país.`,
      usedIn: ["Romênia"],
    },
    RUB: {
      symbol: "₽",
      name: "Rublo Russo",
      codCountry: "ru",
      country: "Rússia",
      description:
        "O Rublo é a moeda oficial da Rússia desde o século XIV. A moeda é emitida pelo Banco da Rússia e é dividida em 100 kopeks.",
      curiosity: `O rublo é uma das moedas mais antigas ainda em uso contínuo, com registros desde o século XIII. Seu nome vem do verbo russo "rubit", que significa "cortar", referindo-se a pedaços de prata cortados de lingotes maiores.`,
      usedIn: ["Rússia", "Abecásia", "Ossétia do Sul"],
    },
    SEK: {
      symbol: "kr",
      name: "Coroa Sueca",
      codCountry: "se",
      country: "Suécia",
      description:
        "A Coroa Sueca é a moeda oficial da Suécia desde 1873, substituindo o riksdaler. É emitida pelo Sveriges Riksbank e é dividida em 100 öre.",
      curiosity:
        "A Suécia é uma das sociedades mais próximas de se tornar totalmente sem dinheiro físico, com pagamentos eletrônicos dominando o dia a dia. Embora a coroa ainda exista, muitos estabelecimentos não aceitam cédulas ou moedas.",
      usedIn: ["Suécia"],
    },
    SGD: {
      symbol: "S$",
      name: "Dólar de Singapura",
      codCountry: "sg",
      country: "Singapura",
      description:
        "O Dólar de Singapura é a moeda oficial de Singapura desde 1967, substituindo o dólar do Banco da Malásia e do Bornéu. É emitido pela Autoridade Monetária de Singapura e é dividido em 100 centavos.",
      curiosity:
        "Singapura possui uma política monetária única, onde o valor do dólar é gerenciado através de uma cesta de moedas, em vez de uma taxa de juros. Além disso, Singapura tem um acordo com Brunei que permite o uso mútuo de suas moedas em ambos os países, algo raro no mundo moderno.",
      usedIn: ["Singapura", "Brunei (em paridade com o dólar de Brunei)"],
    },
    THB: {
      symbol: "฿",
      name: "Baht Tailandês",
      codCountry: "th",
      country: "Tailândia",
      description:
        "O Baht é a moeda oficial da Tailândia desde 1897, substituindo o tical. É emitido pelo Bank of Thailand e é dividido em 100 satang.",
      curiosity:
        "As moedas e notas tailandesas retratam membros da família real, e há uma grande reverência à imagem do rei, tanto que danificar ou pisar em uma nota de baht pode ser considerado desrespeitoso e até punível. ",
      usedIn: ["Tailândia"],
    },
    TRY: {
      symbol: "₺",
      name: "Lira Turca",
      codCountry: "tr",
      country: "Turquia",
      description:
        "A Lira é a moeda oficial da Turquia desde 1923. Em 2005, foi introduzida a nova lira turca (TRY). É emitida pelo Türkiye Cumhuriyet Merkez Bankası e é dividida em 100 kuruş.",
      curiosity:
        "A antiga lira sofreu com décadas de inflação severa, levando à emissão de notas de valores como 1.000.000 de liras antes da reforma de 2005. A nova lira foi introduzida com seis zeros a menos.",
      usedIn: ["Turquia", "República Turca do Chipre do Norte"],
    },
    USD: {
      symbol: "$",
      name: "Dólar Americano",
      codCountry: "us",
      country: "Estados Unidos",
      description:
        "O Dólar Americano é a moeda oficial dos Estados Unidos desde 1792, substituindo diversas moedas coloniais. É emitido pelo Federal Reserve System e é dividido em 100 centavos.",
      curiosity: `O termo "buck" (gíria para dólar) originou-se do comércio de peles, onde peles de veado eram usadas como unidade de troca.`,
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
        "O Rand é a moeda oficial da África do Sul desde 1961, substituindo a libra sul-africana. É emitido pelo South African Reserve Bank e é dividido em 100 centavos.",
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
