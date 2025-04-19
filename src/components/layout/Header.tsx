import "@/styles/globals.css";

import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-24 flex justify-center bg-[#6DA67A] text-white text-xl px-20 fixed top-0 z-10">
      <nav
        className="w-full max-w-500 min-h-20 h-24 flex flex-row justify-between items-center cursor-pointer z-10"
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
              href={"/about"}
              aria-label="Sobre nós"
              className="relative custom-link p-1"
            >
              Sobre nós
            </Link>
          </li>

          <li>
            <Link
              href={"/suport"}
              aria-label="Suporte"
              className="relative custom-link p-1"
            >
              Suporte
            </Link>
          </li>

          <li>
            <Link
              href={"/helpProject"}
              aria-label="Apoie o projeto"
              className="relative custom-link p-1"
            >
              Apoie o projeto
            </Link>
          </li>
        </ul>
        <div className="flex flex-row items-center gap-10 ">
          <Link
            href={"/login"}
            aria-label="Entrar em sua conta"
            className="relative custom-link p-1"
          >
            Entrar
          </Link>
          <Link
            href={"/register"}
            aria-label="Registrar nova conta"
            className="w-32 h-12 flex justify-center items-center rounded-xl bg-green-700 hover:bg-green-800"
          >
            Registrar
          </Link>
        </div>
      </nav>
    </header>
  );
}
