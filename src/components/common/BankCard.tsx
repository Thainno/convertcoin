import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export interface BankData {
  bankName: string;
  imgHeader: StaticImageData;
  imgHeaderAlt: string;
  imgCheck: StaticImageData;
  benefits: string[];
  bonus: string;
  affiliateLink: string;
  colorsBank: string[];
  indicationCode?: string;
}

export default function BankCard({
  bankName,
  imgHeader,
  imgHeaderAlt,
  imgCheck,
  benefits,
  bonus,
  affiliateLink,
  indicationCode,
  colorsBank,
}: BankData) {
  return (
    <article className="flex h-125 w-80 flex-col items-center gap-5 rounded-2xl bg-zinc-50 shadow-sm">
      <header>
        <Image
          className="rounded-t-2xl shadow-lg"
          src={imgHeader}
          alt={imgHeaderAlt}
        />
      </header>

      <ul
        className="flex h-36 flex-col gap-2 px-6"
        aria-label={`Benefícios do ${bankName}`}
      >
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-2 text-xs">
            <Image
              className="mt-1 w-4"
              src={imgCheck}
              alt="Ilustração de marcador de lista"
              role="presentation"
            />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>

      <p className="mx-2 flex h-24 flex-col gap-2 rounded-2xl bg-white p-4 text-xs shadow-sm">
        {bonus}
        {indicationCode && (
          <span className="block text-center text-2xl font-semibold">
            {indicationCode}
          </span>
        )}
      </p>

      <Link
        href={affiliateLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex h-10 w-60 items-center justify-center rounded-full font-semibold text-white transition duration-200 ${colorsBank[0]} ${colorsBank[1]}`}
        style={{ backgroundColor: colorsBank[0] }}
      >
        Criar conta
      </Link>
    </article>
  );
}
