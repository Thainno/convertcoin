"use client";

import Image from "next/image";
import arrowTop from "@/assets/images/arrow-top.svg";

export default function BtnScrollTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      onClick={scrollToTop}
      aria-label="Ir para o topo"
      className="btn-arrow-top -mt-12 h-14 w-14 rounded-full bg-[#6DA67A] p-4 shadow-lg"
    >
      <Image src={arrowTop} alt="Ícone de seta para o topo" />
    </button>
  );
}
