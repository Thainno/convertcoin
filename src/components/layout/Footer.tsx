import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.svg";

export default function Footer() {
  return (
    <footer className="mt-40 flex h-96 flex-col items-center gap-8 bg-[#6DA67A] font-semibold text-white">
      <header>
        <button className="-mt-6 h-16 w-16">
          <Image src={logo} alt="teste" />
        </button>
      </header>
      <div className="flex justify-around gap-64 border-b-1 pb-6">
        <div>
          <h3 className="mb-2 text-xl font-bold">Convert Coin</h3>
          <ul>
            <li>
              <Link href={"/"} rel="">
                Sobre nós
              </Link>
            </li>
            <li>
              <Link href={"/"} rel="">
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link href={"/"} rel="">
                Termos de uso
              </Link>
            </li>
            <li>
              <Link href={"/"} rel="">
                Desenvolvedores
              </Link>
            </li>
            <li>
              <Link href={"/"} rel="">
                Apoie o projeto
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 text-xl font-bold">Suporte</h3>
          <ul>
            <li>
              <Link href={"/"} rel="">
                Como funciona
              </Link>
            </li>
            <li>
              <Link href={"/"} rel="">
                Dúvidas
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 text-xl font-bold">Fale conosco</h3>
          <ul>
            <li>
              <Link href={"/"} rel="">
                E-mail
              </Link>
            </li>
            <li>
              <Link href={"/"} rel="">
                WhatsApp
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex w-5xl items-center justify-between">
        <Image src={logo} alt="" width={50} />

        <span>© Convert Coin ® - Seu conversor de moedas</span>

        <div>ícones de rede sociais</div>
      </div>
    </footer>
  );
}
