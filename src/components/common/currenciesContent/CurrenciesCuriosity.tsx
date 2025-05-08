import Image from "next/image";
import littleCoin from "@/assets/images/little-coin.png";
import didYouKnow from "@/assets/images/did-you-know.svg";
import bgCuriosity from "@/assets/images/bg-curiosity.svg";

import { CurrencyProps } from "@/types/currencies";

export default function CurrenciesCuriosity({
  leftCurrencyName,
  description,
  curiosity,
  usedIn,
}: CurrencyProps) {
  return (
    <section
      className="flex min-h-screen max-w-screen items-center justify-center gap-20 bg-[#6DA67A] py-12"
      aria-labelledby="curiosity-title"
    >
      <figure className="flex flex-col items-center">
        <div className="relative flex h-72 w-5/6 items-center justify-center gap-4">
          <Image
            src={didYouKnow}
            alt="Imagem representando umm fundo decorativo"
            fill
          />
          <figcaption className="absolute flex items-center justify-center text-5xl font-bold text-[#6DA67A]">
            Você <br /> sabia
            <span className="custom-interrogation relative text-[150px] font-extrabold text-green-800">
              ?
            </span>
          </figcaption>
        </div>

        <Image
          src={littleCoin}
          width={500}
          alt="Mascote Coinzinho com olhar curioso"
        />
      </figure>

      <article className="relative h-200 w-180">
        <Image
          src={bgCuriosity}
          alt="Imagem representando umm fundo decorativo"
          fill
        />
        <div className="text-md relative flex h-full flex-col justify-center gap-12 px-24">
          <h2
            id="curiosity-title"
            className="-mb-12 text-3xl font-extrabold text-[#6DA67A]"
          >
            {`O que é o ${leftCurrencyName}`}
          </h2>
          <p>{description}</p>

          <h2 className="-mb-12 text-3xl font-extrabold text-[#6DA67A]">
            {`Curiosidade sobre o ${leftCurrencyName}`}
          </h2>
          <p>{curiosity}</p>

          <h2 className="-mb-12 text-3xl font-extrabold text-[#6DA67A]">
            {`Países que utilizam o ${leftCurrencyName}`}
          </h2>
          <ul className="list-inside list-disc columns-2">
            {usedIn.map((country, index) => (
              <li key={index}>{country}</li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
}
