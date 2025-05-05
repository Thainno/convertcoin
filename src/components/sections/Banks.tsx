import Image from "next/image";
import test from "@/assets/images/bg-tips.svg";
import headerWise from "@/assets/images/header-wise.png";
import headerInter from "@/assets/images/header-inter.png";
import headerMercadoPago from "@/assets/images/header-mercado-pago.png";
import checkWise from "@/assets/images/check-wise.svg";
import checkInter from "@/assets/images/check-inter.svg";
import checkMercadoPago from "@/assets/images/check-mercado-pago.svg";

export default function Banks() {
  return (
    <section className="flex min-h-screen max-w-screen flex-col items-center justify-center gap-12">
      <div className="flex w-6xl gap-12">
        <div className="w-7xl">
          <h2 className="mb-4 text-5xl font-extrabold text-[#6DA67A]">
            Melhores bancos
          </h2>
          <p className="text-xl">
            Se você realiza transações em moedas estrangeiras, seja para
            viagens, negócios ou investimentos, escolher o banco certo faz toda
            a diferença. Pensando nisso, reunimos uma seleção dos melhores
            bancos para operações internacionais, com foco em segurança, taxas
            competitivas, agilidade e suporte de qualidade.
          </p>
        </div>
        <div>
          <Image src={test} alt="" width={900} />
        </div>
      </div>
      <div className="flex gap-8">
        <div className="flex h-150 w-90 flex-col items-center gap-8 rounded-2xl bg-zinc-50 shadow-md">
          <Image className="rounded-t-2xl" src={headerWise} alt="" />
          <ul className="flex flex-col gap-2 px-4 text-sm">
            <li className="flex gap-2">
              <Image src={checkWise} alt="" width={15} />{" "}
              <p>Converta dinheiro para diversas moedas</p>
            </li>
            <li className="flex gap-2">
              <Image src={checkWise} alt="" width={15} />{" "}
              <p>Envie e receba pagamentos internacionais facilmente</p>
            </li>
            <li className="flex gap-2">
              <Image src={checkWise} alt="" width={15} />{" "}
              <p>Use um cartão global para compras no exterior</p>
            </li>
            <li className="flex gap-2">
              <Image src={checkWise} alt="" width={15} />{" "}
              <p>Transparência e melhores taxas do mercado</p>
            </li>
          </ul>
          <p className="mx-2 rounded-2xl bg-white p-4 text-sm">
            BÔNUS: ganhe cashback em suas primeiras conversões dentro de 15 dias
            após criar sua conta utilizando o link abaixo
          </p>
          <button className="h-10 w-60 rounded-lg bg-[#193400] font-semibold text-white">
            Criar conta
          </button>
        </div>

        <div className="flex h-150 w-90 flex-col items-center gap-8 rounded-2xl bg-zinc-50 shadow-md">
          <Image className="rounded-t-2xl" src={headerInter} alt="" />
          <ul className="flex flex-col gap-2 px-4 text-sm">
            <li className="flex gap-2">
              <Image src={checkInter} alt="" width={15} />{" "}
              <p>Conta 100% gratuita e muito fácil de usar</p>
            </li>
            <li className="flex gap-2">
              <Image src={checkInter} alt="" width={15} />{" "}
              <p>Cartão sem anuidade e com programa de pontos</p>
            </li>
            <li className="flex gap-2">
              <Image src={checkInter} alt="" width={15} />{" "}
              <p>Ganhe pontos ao usar o cartão de crédito</p>
            </li>
            <li className="flex gap-2">
              <Image src={checkInter} alt="" width={15} />{" "}
              <p>Troca de pontos por cashback direto na sua conta</p>
            </li>
          </ul>
          <div className="mx-2 flex flex-col gap-2 rounded-2xl bg-white p-4 text-sm">
            <p>
              BÔNUS: ganhe 200 pontos ao criar sua conta com o código abaixo
            </p>
            <p className="text-center text-2xl font-bold">1037D815</p>
          </div>

          <button className="h-10 w-60 rounded-lg bg-[#FF7200] font-semibold text-white">
            Criar conta
          </button>
        </div>

        <div className="flex h-150 w-90 flex-col items-center gap-8 rounded-2xl bg-zinc-50 shadow-md">
          <Image className="rounded-t-2xl" src={headerMercadoPago} alt="" />
          <ul className="flex flex-col gap-2 px-4 text-sm">
            <li className="flex gap-2">
              <Image src={checkMercadoPago} alt="" width={15} />{" "}
              <p>
                Seu dinheiro rende até 105% do CDI automaticamente diariamente
              </p>
            </li>
            <li className="flex gap-2">
              <Image src={checkMercadoPago} alt="" width={15} />{" "}
              <p>Cartão de crédito internacional e sem anuidade</p>
            </li>
            <li className="flex gap-2">
              <Image src={checkMercadoPago} alt="" width={15} />{" "}
              <p>Compre em sites do exterior com seu saldo ou cartão</p>
            </li>
            <li className="flex gap-2">
              <Image src={checkMercadoPago} alt="" width={15} />{" "}
              <p>Cashback em Meli Dólar em qualquer compra com seu cartão</p>
            </li>
          </ul>
          <div>
            <p className="mx-2 rounded-2xl bg-white p-4 text-sm">
              BÔNUS: ganhe R$20,00 ao efetuar seu primeiro pagamento de R$60,00
              ou mais dentro de 7 dias após criar sua conta pelo link abaixo
            </p>
          </div>

          <button className="h-10 w-60 rounded-lg bg-[#00AFED] font-semibold text-white">
            Criar conta
          </button>
        </div>
      </div>
    </section>
  );
}
