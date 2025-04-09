import "@/styles/globals.css";

import Image from "next/image";
import logo from "@/assets/images/logo.svg";

export default function Header() {
  return (
    <header className="w-full h-24 flex justify-center bg-[#6DA67A] text-white text-xl px-20 fixed top-0 z-10">
      <nav className="w-full max-w-500 min-h-20 h-24 flex flex-row justify-between items-center cursor-pointer z-10">
        <a className="relative z-20" href="###" rel="author">
          <Image src={logo} width={80} alt="Logo Convert Coin" />
        </a>
        <ul className="flex flex-row gap-16">
          <li>
            <a
              className="relative custon-link z-20 p-1"
              href="###"
              rel="author" //Validar
            >
              Sobre nós
            </a>
          </li>
          <li>
            <a
              className="relative custon-link z-20 p-1"
              href="###"
              rel="author" //Validar
            >
              Suporte
            </a>
          </li>
          <li>
            <a
              className="relative custon-link z-20 p-1"
              href="###"
              rel="author" //Validar
            >
              Apoie o projeto
            </a>
          </li>
        </ul>
        <div className="flex flex-row items-center gap-10 ">
          <a className="relative custon-link p-1">Entrar</a>
          <a className="w-32 h-12 flex justify-center items-center rounded-xl bg-green-700 ">
            Registrar
          </a>
        </div>
      </nav>
    </header>
  );
}
