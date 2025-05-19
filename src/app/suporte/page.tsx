import Input from "@/components/common/Input";

export default function Suport() {
  return (
    <main className="mx-auto mt-50 min-h-screen max-w-6xl">
      <header className="mb-20 text-center">
        <h1 className="mb-4 text-4xl font-semibold text-[#6DA67A]">
          Olá, como podemos te ajudar ?
        </h1>
        <Input className="h-16 w-200" />
      </header>
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-500">
          Explorar dúvidas frequêntes
        </h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-zin-50 h-50 w-80 rounded-2xl shadow-md hover:shadow-xl"></div>
          <div className="bg-zin-50 h-50 w-80 rounded-2xl shadow-md hover:shadow-xl"></div>
          <div className="bg-zin-50 h-50 w-80 rounded-2xl shadow-md hover:shadow-xl"></div>
          <div className="bg-zin-50 h-50 w-80 rounded-2xl shadow-md hover:shadow-xl"></div>
          <div className="bg-zin-50 h-50 w-80 rounded-2xl shadow-md hover:shadow-xl"></div>
        </div>
      </div>
    </main>
  );
}
