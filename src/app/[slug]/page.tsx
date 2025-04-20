import Home from "../page";
import { redirect } from "next/navigation";

interface Params {
  params: {
    slug: string;
  };
}

export default async function SlugPage({ params }: Params) {
  const [left, right] = params.slug.toUpperCase().split("-");

  // Redireciona para padrão caso slug esteja inválido
  if (!left || !right) {
    redirect("/usd-brl");
  }

  return <Home initialLeft={left} initialRight={right} />;
}
