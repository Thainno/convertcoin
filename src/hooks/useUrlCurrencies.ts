import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function useUrlCurrencies(leftCurrency: string, rightCurrency: string) {
  const router = useRouter();

  useEffect(() => {
    const formattedPath = `/${leftCurrency.toLowerCase()}-${rightCurrency.toLowerCase()}`;

    if (window.location.pathname !== formattedPath) {
      router.replace(formattedPath);
    }
  }, [leftCurrency, rightCurrency]);
}
