import "@/styles/globals.css";

import Image from "next/image";
import logo from "@/assets/images/logo.svg";

export default function Header() {
  return (
    <header className="w-full h-24 flex justify-center bg-[#6DA67A] text-white text-xl px-20 ">
      <nav className="w-full max-w-500 min-h-20 h-24 flex flex-row justify-between items-center z-10">
        <Image src={logo} width={80} alt="Logo Convert Coin" />
        <ul className="flex flex-row gap-16">
          <li>
            <a
              className="hover:underline z-20"
              href="###"
              rel="author" //Validar
            >
              Sobre nós
            </a>
          </li>
          <li>
            <a
              className="hover:underline z-20"
              href="###"
              rel="author" //Validar
            >
              Suporte
            </a>
          </li>
          <li>
            <a
              className="hover:underline z-20"
              href="###"
              rel="author" //Validar
            >
              Apoie o projeto
            </a>
          </li>
        </ul>
        <div className="flex flex-row items-center gap-10">
          <a>Entrar</a>
          <a className="w-32 h-12 flex justify-center items-center rounded-xl bg-green-700 ">
            Registrar
          </a>
        </div>
      </nav>
    </header>
  );
}
