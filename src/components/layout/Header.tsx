import Image from "next/image";
import bgHeader from "@/assets/images/bg-header.svg";
import logo from "@/assets/images/logo.svg";
import "@/styles/components/layout/header.css";

export default function Header() {
  return (
    <header className="header">
      {/*background image*/}
      <Image
        className="bg-header"
        src={bgHeader}
        alt="Imagem de fundo do cabeçalho"
      />
      <div className="header-content">
        <Image src={logo} width={150} alt="Logo Convert Coin" />
        <nav className="nav-header">
          <ul className="flex flex-row gap-25">
            <li>
              <a className="cursor-pointer">Sobre nós</a>
            </li>
            <li>
              <a className="cursor-pointer">Apoie o projeto</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
