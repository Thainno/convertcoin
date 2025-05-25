import Input from "@/components/common/Input";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import Link from "next/link";

export default function Login() {
  return (
    <main className="flex min-h-screen max-w-screen flex-row items-center justify-center">
      <article className="h-150 w-150 rounded-l-2xl bg-green-500">
        <Image src={logo} alt="" width={50} />
        <h1>Bem vindo de volta!</h1>
        <p>Ainda não tem uma conta ?</p>
        <Link href={"/register"}>Cadastre-se</Link>
      </article>

      <article className="h-150 w-120 rounded-r-2xl bg-red-500">
        <header>
          <h1>Login</h1>
        </header>
        <section>
          <form>
            <label>E-mail</label>
            <Input className="w-full" type="email" />
            <label>Senha</label>
            <Input className="w-full" type="password" />
            <button>Entrar</button>
          </form>
        </section>
      </article>
    </main>
  );
}
