import Image, { StaticImageData } from "next/image";
import downArrow from "@/assets/images/down-arrow.svg";

interface CardProps {
  imagePosition: "left" | "right";
  imageSrc: string | StaticImageData;
  currencyName: string;
  currencySymbol: string;
}

export default function Card({
  imagePosition,
  imageSrc,
  currencyName,
  currencySymbol,
}: CardProps) {
  return (
    <div className="w-160 h-80 rounded-4xl bg-[#f9f9f9] shadow-xl flex flex-col justify-center">
      <div
        className={`flex ${
          imagePosition === "left" ? "flex-row" : "flex-row-reverse text-right"
        } items-center p-8 gap-4`}
      >
        <Image
          src={imageSrc}
          width={90}
          height={90}
          alt="Símbolo da moeda tal"
          className="rounded-full"
        />
        <h2 className="text-3xl w-4/5">{currencyName}</h2>
        <Image
          src={downArrow}
          width={30}
          height={30}
          alt="Campo de seleção de moedas"
          className="cursor-pointer"
        />
      </div>
      <div className="p-8 w-full h-36 relative">
        <label className="text-4xl absolute left-14 top-10">
          {currencySymbol}
        </label>
        <input
          type="number"
          id="value"
          name="value"
          defaultValue="0.00"
          min={0.00}
          step={0.01}
          className="w-full h-16 rounded-4xl px-8 text-right text-4xl bg-[#fff] shadow-sm "
        ></input>
      </div>
    </div>
  );
}
