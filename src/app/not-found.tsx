import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-22">
      <section className="flex items-center gap-12">
        <div className="flex gap-4 text-9xl font-extrabold">
          <p>4</p>
          <Image
            className="h-auto w-30"
            src={logo}
            alt="Número zero estilizado com a logo"
          />
          <p>4</p>
        </div>

        <div className="h-32 w-1 bg-[#6DA67A]"></div>

        <div>
          <h1 className="text-4xl font-bold" role="alert">
            Oops, página não encontrada!
          </h1>
          <p className="mt-4 text-xl">
            Acho que você tentou acessar uma página que não existe!
          </p>
        </div>
      </section>

      <nav>
        <Link
          href={"/"}
          aria-label="Voltar para página inicial"
          className="flex h-12 w-100 items-center justify-center rounded-xl bg-[#6DA67A] text-white hover:bg-green-900"
        >
          Voltar para página inicial
        </Link>
      </nav>
    </main>
  );
}
