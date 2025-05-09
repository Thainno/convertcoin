export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterDiv {
  title: string;
  links: FooterLink[];
}

export const footerLinks: FooterDiv[] = [
  {
    title: "Convert Coin",
    links: [
      {
        label: "Sobre nós",
        href: "/sobre-nos",
      },
      {
        label: "Política de privacidade",
        href: "/politica-de-privacidade",
      },
      {
        label: "Termos de uso",
        href: "/termos-de-uso",
      },
      {
        label: "Desenvolvedores",
        href: "/desenvolvedores",
      },
      {
        label: "Apoie o projeto",
        href: "/apoie-o-projeto",
      },
    ],
  },
  {
    title: "Suporte",
    links: [
      {
        label: "Como funciona",
        href: "/como-funciona",
      },
      {
        label: "Dúvidas",
        href: "/duvidas",
      },
    ],
  },
  {
    title: "Fale Conosco",
    links: [
      {
        label: "E-mail",
        href: "mailto:thainnosv@gmail.com",
        external: true,
      },
      {
        label: "WhatsApp",
        href: "https://wa.me/5527996131388?text=Ol%C3%A1%2C%20vim%20por%20meio%20do%20Convert%20Coin%20e%20gostaria%20de%20entrar%20em%20contato%20com%20os%20desenvolvedores.",
        external: true,
      },
    ],
  },
];
