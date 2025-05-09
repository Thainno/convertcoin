import "@/styles/globals.css";

import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 z-10 flex h-24 w-full justify-center bg-[#6DA67A] px-20 text-lg text-white">
      <nav
        className="z-10 flex h-24 min-h-20 w-full max-w-500 cursor-pointer flex-row items-center justify-between"
        aria-label="Menu principal"
      >
        <Link href={"/"} rel="author">
          <Image
            src={logo}
            width={80}
            alt="Logo Convert Coin"
            aria-label="Logo Convert Coin"
          />
        </Link>

        <ul className="flex flex-row gap-16">
          <li>
            <Link
              href={"/sobre-nos"}
              aria-label="Sobre nós"
              className="custom-link relative p-1"
            >
              Sobre nós
            </Link>
          </li>

          <li>
            <Link
              href={"/suporte"}
              aria-label="Suporte"
              className="custom-link relative p-1"
            >
              Suporte
            </Link>
          </li>

          <li>
            <Link
              href={"/apoiar-projeto"}
              aria-label="Apoie o projeto"
              className="custom-link relative p-1"
            >
              Apoie o projeto
            </Link>
          </li>
        </ul>
        <div className="flex flex-row items-center gap-10">
          <Link
            href={"/login"}
            aria-label="Entrar em sua conta"
            className="custom-link relative p-1"
          >
            Entrar
          </Link>
          <Link
            href={"/register"}
            aria-label="Registrar nova conta"
            className="flex h-12 w-32 items-center justify-center rounded-xl bg-green-700 hover:bg-green-800"
          >
            Registrar
          </Link>
        </div>
      </nav>
    </header>
  );
}
