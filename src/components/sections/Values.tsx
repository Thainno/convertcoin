import CurrenciesContentWrapper from "../common/CurrenciesContentWrapper";

export default function Values() {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col justify-center items-center gap-12 shadow-xl w-392 bg-[#f9f9f9] rounded-4xl px-28 py-18">
        <CurrenciesContentWrapper />
      </div>
    </section>
  );
}
