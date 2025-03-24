import Image, { StaticImageData } from "next/image";

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
    <div className="w-160 h-80 rounded-4xl relative top-16 bg-[#f9f9f9] shadow-xl">
      <div
        className={`flex ${
          imagePosition === "left" ? "flex-row" : "flex-row-reverse"
        } items-center p-8 gap-10`}
      >
        <Image
          src={imageSrc}
          width={110}
          height={110}
          alt="Símbolo da moeda tal"
          className="rounded-full"
        />
        <h2 className="text-3xl">{currencyName}</h2>
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
          className="w-full h-16 rounded-4xl px-8 text-right text-4xl bg-[#fff] shadow-sm"
        ></input>
      </div>
    </div>
  );
}
