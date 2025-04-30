import downArrow from "@/assets/images/down-arrow.svg";
import Image from "next/image";

export default function Content() {
  return (
    <section className="flex justify-center">
      <div className="relative h-24 w-392 overflow-hidden rounded-4xl bg-[#fcfcfc] px-28 shadow-md">
        <div className="absolute left-0 h-full w-4 bg-emerald-600"></div>
        <h3 className="py-7 text-4xl font-semibold">Teste</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sunt
          distinctio corrupti iusto quae error magni ab, debitis dolores
          suscipit? Unde nisi perferendis facilis vel adipisci esse ipsum.
          Sequi, rerum.
        </p>
        <button className="absolute top-12 right-12 h-8 w-8">
          <Image src={downArrow} width={0} height={0} alt="test" />
        </button>
      </div>
    </section>
  );
}
