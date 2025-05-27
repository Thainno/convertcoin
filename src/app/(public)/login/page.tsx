import Link from "next/link";
import Image from "next/image";
import Input from "@/components/common/Input";
import logo from "@/assets/images/logo.svg";
import icoGoogle from "@/assets/images/ico-google.svg";
import icoFacebook from "@/assets/images/ico-facebook.svg";

export default function Login() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-t from-[#6DA67A] to-[#a4fbb8]">
      <aside className="relative flex h-150 w-150 flex-col rounded-l-4xl bg-[#6DA67A] px-28 py-24 shadow-2xl">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="Logo Convert Coin"
            width={30}
            className="absolute top-6 left-6"
          />
        </Link>

        <h2 className="my-20 flex flex-col text-5xl leading-snug font-semibold text-white">
          <span className="font-light">Olá,</span>
          Bem vindo de volta!
        </h2>

        <p className="mb-6 text-center text-white">Ainda não tem uma conta ?</p>
        <p className="text-center">
          <Link
            className="inline-block rounded-full border border-white px-6 py-4 font-semibold text-white transition hover:bg-white hover:text-[#6DA67A]"
            href={"/register"}
          >
            Cadastre-se
          </Link>
        </p>
      </aside>

      <article className="flex h-[600px] w-[480px] flex-col justify-center gap-6 rounded-r-4xl bg-white px-10 py-12 shadow-2xl">
        <header>
          <h1 className="text-2xl font-semibold text-[#6DA67A]">Login</h1>
        </header>

        <form className="flex flex-col gap-6">
          <div>
            <label
              htmlFor="email"
              className="block font-semibold text-[#6DA67A]"
            >
              E-mail
            </label>
            <Input id="email" type="email" className="w-full rounded-md" />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block font-semibold text-[#6DA67A]"
            >
              Senha
            </label>
            <Input
              id="password"
              type="password"
              className="w-full rounded-md"
            />
          </div>

          <div className="flex justify-between text-sm text-gray-600">
            <label className="flex items-center">
              <input type="checkbox" className="mr-1 accent-green-700" />
              Manter-me conectado
            </label>
            <Link
              href={"/forgot-password"}
              className="text-[#4e7a58] hover:underline"
            >
              Esqueceu a senha?
            </Link>
          </div>

          <button
            type="submit"
            className="mt-6 h-10 w-full rounded-full bg-[#6DA67A] font-semibold text-white shadow-md transition hover:bg-[#5c926a]"
          >
            Entrar
          </button>
        </form>

        <div className="flex items-center gap-4">
          <div className="flex-1 border-b border-gray-300"></div>
          <span className="text-gray-400">ou</span>
          <div className="flex-1 border-b border-gray-300"></div>
        </div>

        <div className="flex justify-center gap-8">
          <Image
            src={icoGoogle}
            width={40}
            height={40}
            alt="Login com Google"
            className="transition-transform duration-200 ease-in-out hover:scale-125"
          />
          <Image
            src={icoFacebook}
            width={40}
            height={40}
            alt="Login com Facebook"
            className="transition-transform duration-200 ease-in-out hover:scale-125"
          />
        </div>
      </article>
    </main>
  );
}
