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
  showIndicationCode?: boolean;
}

export default function BankCard({
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
    <div className="flex h-125 w-80 flex-col items-center gap-5 rounded-2xl bg-zinc-50 shadow-sm">
      <Image
        className="rounded-t-2xl shadow-lg"
        src={imgHeader}
        alt={imgHeaderAlt}
      />

      <ul className="flex h-36 flex-col gap-2 px-6">
        {benefits.map((benefits, index) => (
          <li key={index} className="flex gap-2">
            <Image
              className="w-4"
              src={imgCheck}
              alt="Ilustração de marcador de lista"
            />
            <p className="text-xs">{benefits}</p>
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
        style={{ backgroundColor: colorsBank[0] }}
        className={`flex h-10 w-60 items-center justify-center rounded-lg font-semibold text-white transition duration-200 ${colorsBank[0]} ${colorsBank[1]}`}
      >
        Criar conta
      </Link>
    </div>
  );
}
