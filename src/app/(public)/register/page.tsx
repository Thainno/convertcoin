'use client'

import "@/styles/globals.css";

import { FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import icoGoogle from "@/assets/images/ico-google.svg";
import icoFacebook from "@/assets/images/ico-facebook.svg";
import FormField from "@/components/common/FormField";
import DefaultButton from "@/components/common/DefaultButton";
import { useRegisterPassword } from "@/hooks/useRegisterPassword";

export default function Register() {
  const {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    errors,
    validatePasswords,
  } = useRegisterPassword();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-t from-[#6DA67A] to-[#a4fbb8]">
      <article className="flex h-[600px] w-[480px] flex-col justify-center gap-6 rounded-l-4xl bg-white px-10 py-12 shadow-2xl">
        <header>
          <h1 className="text-2xl font-semibold text-[#6DA67A]">
            Cadastrar-se
          </h1>
        </header>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <FormField fieldId="email" inputType="email" textLabel="E-mail" />
          <FormField
            fieldId="userName"
            inputType="text"
            textLabel="Nome de usuário"
          />
          <FormField
            fieldId="password"
            inputType="password"
            textLabel="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={validatePasswords}
            error={errors.password}
          />
          <FormField
            fieldId="confirmPassword"
            inputType="password"
            textLabel="Confirmar senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={validatePasswords}
            error={errors.confirmPassword}
          />

          <div className="text-sm text-gray-600">
            <label>
              <input
                type="checkbox"
                className="mr-1 accent-green-700"
                required
              />
              Li e concordo com os{" "}
              <Link
                href={"/termos-de-uso"}
                className="text-green-700 hover:underline"
              >
                Termos
              </Link>{" "}
              e a{" "}
              <Link
                href={"/politica-de-privacidade"}
                className="text-green-700 hover:underline"
              >
                Política de privacidade
              </Link>
            </label>
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

      <aside className="relative flex h-150 w-120 flex-col rounded-r-4xl bg-[#6DA67A] px-20 py-24 shadow-2xl">
        <Link href={"/"}>
          <Image
            src={logo}
            width={30}
            alt="Logo Convert Coin"
            className="increase-scale absolute top-6 right-6"
          />
        </Link>

        <h2 className="my-20 flex flex-col text-5xl leading-snug font-semibold text-white">
          <span className="font-light">Olá,</span>
          Seja bem vindo!
        </h2>

        <p className="mb-6 text-center text-white">Já possui uma conta ?</p>
        <p className="text-center">
          <Link
            className="inline-block rounded-full border border-white px-6 py-4 font-semibold text-white transition hover:bg-white hover:text-[#6DA67A]"
            href={"/login"}
          >
            Entrar
          </Link>
        </p>
      </aside>
    </main>
  );
}
