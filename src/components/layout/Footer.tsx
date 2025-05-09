import Image from "next/image";
import Link from "next/link";
import BtnScrollTop from "../common/BtnScrollTop";
import logo from "@/assets/images/logo.svg";
import icoGithub from "@/assets/images/ico-github.svg";
import icoGmail from "@/assets/images/ico-gmail.svg";
import { footerLinks, FooterDiv } from "@/lib/constants/footerLinks";

export default function Footer() {
  return (
    <footer className="mt-6 flex h-80 flex-col items-center gap-8 bg-[#6DA67A] font-semibold text-white">
      <div>
        <BtnScrollTop />
      </div>

      <nav
        className="flex w-full max-w-7xl justify-around gap-64 border-b border-white/40 pb-6"
        aria-labelledby="Links institucionais, de suporte e de contato"
      >
        {footerLinks.map((div: FooterDiv, index: number) => (
          <div key={index} aria-labelledby={`footer-${index}-title`}>
            <h3
              id={`footer-${index}-title`}
              className="mb-3 text-lg font-bold text-white"
            >
              {div.title}
            </h3>
            <ul className="text-sm font-medium">
              {div.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : "_self"}
                    rel={link.external ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div className="flex w-full max-w-7xl items-center justify-around">
        <Image src={logo} alt="Logo Convert Coin" width={24} />

        <span className="text-sm font-normal">
          © 2025 TainuDev. Convert Coin™ — Seu conversor de moedas.
        </span>

        <div className="flex gap-2">
          <Link
            href={"https://github.com/Thainno/convertcoin"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github do projeto"
          >
            <Image src={icoGithub} alt="Github" width={24} />
          </Link>
          <Link
            href={"mailto:thainnosv@gmail.com"}
            aria-label="Enviar e-mail para os desenvolvedores"
          >
            <Image src={icoGmail} alt="Gmail" width={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
