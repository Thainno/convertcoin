import Image from "next/image";
import about from "@/assets/images/little-coin.png";

export default function SobreNos() {
  return (
    <main className="mx-auto mt-50 flex min-h-screen max-w-6xl flex-col justify-center gap-50">
      <section className="flex flex-row items-center justify-between">
        <article className="w-150">
          <h1 className="mb-8 text-4xl font-bold text-[#6DA67A]">
            Sobre o Convert Coin
          </h1>
          <p>
            O Convert Coin é uma plataforma de conversão de moedas que oferece
            informações atualizadas sobre mais de 30 das principais moedas do
            mundo com informações importantes como taxas de câmbio atualizadas
            diariamente, dados históricos e curiosidade e conteúdos relevantes
            sobre cada moeda, tudo em um só lugar.
          </p>
        </article>
        <Image src={about} alt="a" width={500} />
      </section>

      <section className="mb-40 flex flex-row items-center justify-between">
        <Image src={about} alt="a" width={500} />
        <article className="flex flex-col gap-8">
          <h2 className="text-4xl font-bold text-[#6DA67A]">
            Um pouco da nossa história
          </h2>
          <p>
            O Convert Coin nasceu com o objetivo de tornar o acesso a
            informações monetárias algo simples, direto e sem complicações. A
            ideia surgiu da percepção da ausência de uma ferramenta que reunisse
            dados cambiais e curiosidades de forma clara, acessível e que seja
            agradável de se ler.
          </p>
          <p>
            Desenvolvido por Tháinno Santana, CEO da TainuDev, o projeto foi
            criado para oferecer uma experiência intuitiva e descomplicada. Com
            poucos cliques, qualquer pessoa pode acompanhar cotações, entender o
            contexto por trás de cada moeda e até receber atualizações
            personalizadas por e-mail.
          </p>
          <p>
            Fundado em 2025, o Convert Coin já passou por diversas melhorias e
            continua evoluindo constantemente, sempre com foco em entregar
            praticidade, confiabilidade e valor real para seus usuários.
          </p>
        </article>
      </section>
    </main>
  );
}
