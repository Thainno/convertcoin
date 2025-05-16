import Image from "next/image";
import qrCode from "@/assets/images/qr-code.svg";

export default function ApoiarProjeto() {
  return (
    <main className="flex min-h-screen w-full">
      <section className="m-auto max-w-4xl">
        <h1 className="mb-4 text-6xl font-bold text-[#6DA67A]">
          Gostou do nosso projeto?
        </h1>
        <h2 className="mb-6 text-2xl font-semibold">
          Ajude a manter e evoluir esse conversor com uma doação 💚
        </h2>

        <p className="mb-6 text-xl">
          Nosso conversor de moedas traz não só cotações atualizadas, mas também
          curiosidades e histórias sobre as moedas do mundo. Com sua ajuda,
          podemos manter o site online, melhorar as funcionalidades e adicionar
          mais conteúdos úteis!
        </p>

        <div className="flex flex-col items-center rounded-3xl p-6 shadow-lg">
          <h3 className="mb-4 text-4xl font-semibold text-[#6DA67A]">
            Como apoiar?
          </h3>
          <div className="flex w-full justify-around">
            <ul className="space-y-4 text-left text-lg">
              <li>
                <a>💸</a>
                <span className="font-medium">Pix (chave):</span>
                <br />
                apoie@meuprojeto.com.br
              </li>
              <li>
                <a>📱</a>
                <span className="font-medium">PicPay:</span>
                <br /> @meuPicPay
              </li>
              <li>
                <a>🌐</a>
                <span className="font-medium">PayPal:</span>
                <br />
                <a
                  className="text-blue-600 underline"
                  href="https://paypal.me/seulink"
                  target="_blank"
                >
                  paypal.me/seulink
                </a>
              </li>
            </ul>

            <div>
              <span className="text-lg font-medium">
                Ou escaneie o QR Code do Pix:
              </span>
              <div className="flex justify-center">
                <Image
                  src={qrCode}
                  alt="Qr code para link de pagamento via PIX"
                  width={200}
                />
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          Qualquer valor é bem-vindo e faz a diferença 💚
        </p>
      </section>
    </main>
  );
}
