import Image from "next/image";
import littleCoin from "@/assets/images/little-coin.png";
import didYouKnow from "@/assets/images/did-you-know.svg";
import bgCuriosity from "@/assets/images/bg-curiosity.svg";
import { CurrencyProps } from "@/types/currencies";

export default function CurrencyInfoSection({
  leftCurrencyName,
  description,
  curiosity,
  usedIn,
}: CurrencyProps) {
  return (
    <section className="flex min-h-screen max-w-screen items-center justify-center gap-20 bg-[#6DA67A] py-12">
      <figure>
        <Image
          src={didYouKnow}
          width={500}
          alt="Texto ilustrativo: Você sabia?"
        />
        <Image
          src={littleCoin}
          width={500}
          alt="Coinzinho, o mascote do Convert Coin"
        />
      </figure>

      <div className="relative h-200 w-180">
        <Image src={bgCuriosity} alt="Fundo ilustrtido" fill />
        <div className="relative z-10 flex h-full flex-col justify-center gap-12 px-24">
          <h2 className="-mb-12 text-3xl font-extrabold text-[#6DA67A]">
            Sobre o {leftCurrencyName}
          </h2>
          <p>{description}</p>

          <h2 className="-mb-12 text-3xl font-extrabold text-[#6DA67A]">
            Curiosidade
          </h2>
          <p>{curiosity}</p>

          <h2 className="-mb-12 text-3xl font-extrabold text-[#6DA67A]">
            Países que utilizam o {leftCurrencyName}
          </h2>
          <ul className="list-inside list-disc columns-2">
            {usedIn.map((country, index) => (
              <li key={index}>{country}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
