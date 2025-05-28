import "@/styles/globals.css";

import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import icoGoogle from "@/assets/images/ico-google.svg";
import icoFacebook from "@/assets/images/ico-facebook.svg";
import FormField from "@/components/common/FormField";
import DefaultButton from "@/components/common/DefaultButton";

export default function Login() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-t from-[#6DA67A] to-[#a4fbb8]">
      <aside className="relative flex h-150 w-120 flex-col rounded-l-4xl bg-[#6DA67A] px-20 py-24 shadow-2xl">
        <Link href={"/"}>
          <Image
            src={logo}
            width={30}
            alt="Logo Convert Coin"
            className="increase-scale absolute top-6 left-6"
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
          <FormField fieldId="email" inputType="email" textLabel="E-mail" />
          <FormField
            fieldId="password"
            inputType="password"
            textLabel="Senha"
          />

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

          <DefaultButton type="submit" className="w-full">
            Entrar
          </DefaultButton>
        </form>

        <div className="flex items-center gap-4">
          <div className="flex-1 border-b border-gray-300"></div>
          <span className="text-gray-400">ou</span>
          <div className="flex-1 border-b border-gray-300"></div>
        </div>

        <div className="flex justify-center gap-8">
          <Link href={"/"} target="_blank">
            <Image
              src={icoGoogle}
              width={40}
              height={40}
              alt="Login com Google"
              className="increase-scale"
            />
          </Link>
          <Link href={"/"} target="_blank">
            <Image
              src={icoFacebook}
              width={40}
              height={40}
              alt="Login com Facebook"
              className="increase-scale"
            />
          </Link>
        </div>
      </article>
    </main>
  );
}
