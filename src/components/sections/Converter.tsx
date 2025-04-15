import ConverterController from "../common/ConverterController";

export default async function Converter() {

  return (
    <section className="flex flex-col items-center h-screen min-h-160">
      <ConverterController />
    </section>
  );
}