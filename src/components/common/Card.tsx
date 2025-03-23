import Image from "next/image";
import testSymbol from "@/assets/images/ico-coin-1.svg";

export default function Card() {
  return (
    <div className="w-160 h-80 rounded-4xl relative top-16 bg-[#f9f9f9] shadow-xl">
      <div className="flex flex-row items-center p-8 gap-10">
        <Image
          src={testSymbol}
          width={110}
          height={110}
          alt="Símbolo da moeda tal"
          className="rounded-full"
        />
        <h2 className="text-3xl">USD - Dolar americano</h2>
      </div>
      <div className="p-8 w-full h-36 relative">
        <label className="text-4xl absolute left-14 top-10">R$</label>
        <input
          type="number"
          id="value"
          name="value"
          value="20.00"
          className="w-full h-16 rounded-4xl px-8 text-right text-4xl bg-[#fff] shadow-sm"
        ></input>
      </div>
    </div>
  );
}
