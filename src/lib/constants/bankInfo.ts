import headerWise from "@/assets/images/header-wise.png";
import headerInter from "@/assets/images/header-inter.png";
import headerMercadoPago from "@/assets/images/header-mercado-pago.png";
import checkWise from "@/assets/images/check-wise.svg";
import checkInter from "@/assets/images/check-inter.svg";
import checkMercadoPago from "@/assets/images/check-mercado-pago.svg";

import { StaticImageData } from "next/image";

export interface BankData {
  bankName: string;
  imgHeader: StaticImageData;
  imgHeaderAlt: string;
  imgCheck: StaticImageData;
  benefits: string[];
  bonus: string;
  affiliateLink: string;
  indicationCode?: string;
  colorsBank: string[];
}

export function getBankInfo(): BankData[] {
  return [
    {
      bankName: "Wise",
      imgHeader: headerWise,
      imgHeaderAlt: "Banner do banco Wise",
      imgCheck: checkWise,
      benefits: [
        "Converta dinheiro para diversas moedas diferentes",
        "Envie e receba pagamentos internacionais facilmente",
        "Use um cartão global para compras no exterior",
        "Transparência e melhores taxas do mercado",
      ],
      bonus:
        "BÔNUS: Receba cashback nas suas primeiras conversões e faça uma transferência de até R$6.000 sem tarifas usando o link abaixo",
      affiliateLink: "https://wise.com/invite/drhc/thainnos",
      colorsBank: ["bg-[#193400]", "hover:bg-[#386317]"],
    },
    {
      bankName: "Inter",
      imgHeader: headerInter,
      imgHeaderAlt: "Banner do banco Inter",
      imgCheck: checkInter,
      benefits: [
        "Conta 100% gratuita e muito fácil de usar",
        "Cartão sem anuidade e com programa de pontos",
        "Ganhe pontos ao usar o cartão de crédito",
        "Troca de pontos por cashback direto na sua conta",
      ],
      bonus:
        "BÔNUS: Utilize o código abaixo na abertura da conta e receba 200 pontos",
      indicationCode: "1037D815",
      affiliateLink: "https://inter.co/",
      colorsBank: ["bg-[#FF7200]", "hover:bg-[#DE6300]"],
    },
    {
      bankName: "Mercado Pago",
      imgHeader: headerMercadoPago,
      imgHeaderAlt: "Banner do banco Mercado Pago",
      imgCheck: checkMercadoPago,
      benefits: [
        "Seu dinheiro rende até 105% do CDI automaticamente diariamente",
        "Cartão de crédito internacional e sem anuidade",
        "Compre em sites do exterior com seu saldo ou cartão",
        "Cashback em Meli Dólar em qualquer compra com seu cartão",
      ],
      bonus:
        "BÔNUS: Ganhe R$10,00 de desconto no primeiro pagamento de R$60 ou mais pelo app, válido por 7 dias após abrir sua conta pelo link abaixo",
      affiliateLink: "https://mpago.li/1gJ5arR",
      colorsBank: ["bg-[#00AFED]", "hover:bg-[#0288B8]"],
    },
  ];
}
