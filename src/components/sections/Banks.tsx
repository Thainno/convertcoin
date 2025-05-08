import Image from "next/image";
import lampTips from "@/assets/images/lampTips.svg";
import { getBankInfo } from "@/lib/constants/bankInfo";
import BankCard from "../common/BankCard";

export default function Banks() {
  const bankInfos = getBankInfo();

  return (
    <section
      className="flex min-h-screen max-w-screen flex-col items-center justify-center gap-12 py-12"
      aria-labelledby="banks-title"
    >
      <header className="flex w-5xl flex-col gap-2">
        <h2
          id="banks-title"
          className="text-center text-4xl font-extrabold text-[#6DA67A]"
        >
          Melhores bancos para você
        </h2>
        <p className="text-sm">
          Se você procura cartões de crédito com programa de pontos, conta
          digital que rende mais de 100% do CDI ao dia e transações em moedas
          estrangeiras para viagens, negócios ou investimentos, é fundamental
          escolher bem o banco. Por isso, reunimos os melhores, com foco em
          segurança, taxas competitivas, agilidade e bom suporte.
        </p>
      </header>

      <div className="flex justify-center gap-8">
        {bankInfos.map((bank, index) => (
          <BankCard key={index} {...bank} />
        ))}
      </div>

      <aside
        className="relative flex w-3xl items-center gap-4 rounded-xl bg-[#6DA67A] p-6 shadow-md"
        aria-label="Dica importante"
      >
        <Image
          className="absolute -top-10 -left-5 w-24"
          src={lampTips}
          alt="Ícone de dica"
        />
        <h3 className="absolute top-1 left-14 px-4 text-4xl font-extrabold text-[#43764E]">
          Dica:
        </h3>
        <p className="mt-4 px-8 text-lg font-semibold text-white">
          Crie uma conta em todas instituições indicadas e aproveite os
          benefícios e novidades exclusivos de cada uma!
        </p>
      </aside>
    </section>
  );
}
