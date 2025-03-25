import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import NavHeader from "../common/NavHeader";

export default function Header() {
  return (
    <header className="w-full h-25 bg-[#6DA67A] flex flex-row justify-between items-center text-white text-xl px-20">
      <Image src={logo} width={80} alt="Logo Convert Coin" />
      <NavHeader />
      <a>oi</a>
    </header>
  );
}
