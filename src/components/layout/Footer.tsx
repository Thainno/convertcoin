import BtnScrollTop from "../common/BtnScrollTop";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.svg";
import icoGithub from "@/assets/images/ico-github.svg";
import icoGmail from "@/assets/images/ico-gmail.svg";

export default function Footer() {
  return (
    <footer className="mt-6 flex h-80 flex-col items-center gap-8 bg-[#6DA67A] font-semibold text-white">
      <header>
        <BtnScrollTop />
      </header>
      <div className="flex justify-around gap-64 border-b-1 pb-6">
        <div>
          <h3 className="mb-2 text-xl font-bold">Convert Coin</h3>
          <ul>
            <li>
              <Link href={"/sobre-nos"} rel="">
                Sobre nós
              </Link>
            </li>
            <li>
              <Link href={"/politica-de-privacidade"} rel="">
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link href={"/termos-de-uso"} rel="">
                Termos de uso
              </Link>
            </li>
            <li>
              <Link href={"/desenvolvedores"} rel="">
                Desenvolvedores
              </Link>
            </li>
            <li>
              <Link href={"/apoiar-projeto"} rel="">
                Apoie o projeto
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 text-xl font-bold">Suporte</h3>
          <ul>
            <li>
              <Link href={"/como-funciona"} rel="">
                Como funciona
              </Link>
            </li>
            <li>
              <Link href={"/duvidas"} rel="">
                Dúvidas
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 text-xl font-bold">Fale conosco</h3>
          <ul>
            <li>
              <Link href={"mailto:thainnosv@gmail.com"} rel="">
                E-mail
              </Link>
            </li>
            <li>
              <Link
                href={
                  "https://wa.me/5527996131388?text=Ol%C3%A1%2C%20vim%20por%20meio%20do%20Convert%20Coin%20e%20gostaria%20de%20entrar%20em%20contato%20com%20os%20desenvolvedores."
                }
                target="_blank"
                rel=""
              >
                WhatsApp
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex w-5xl items-center justify-between">
        <Image src={logo} alt="" width={30} />

        <span className="text-sm font-normal">
          © 2025 TainuDev. Convert Coin™ — Seu conversor de moedas.
        </span>

        <div className="flex gap-2">
          <Link
            href={"https://github.com/Thainno/convertcoin"}
            target="_blank"
            rel=""
          >
            <Image src={icoGithub} alt="" width={30} />
          </Link>
          <Link href={"mailto:thainnosv@gmail.com"} rel="">
            <Image src={icoGmail} alt="" width={30} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
