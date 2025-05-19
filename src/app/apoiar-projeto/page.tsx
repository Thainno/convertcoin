import Image from "next/image";
import qrCode from "@/assets/images/qr-code-pix.svg";
import icoPaypal from "@/assets/images/ico-paypal.svg";
import icoPicpay from "@/assets/images/ico-picpay.svg";
import icoPix from "@/assets/images/ico-pix.svg";

export default function ApoiarProjeto() {
  return (
    <main className="flex min-h-screen w-full">
      <section className="m-auto flex max-w-5xl flex-row gap-8">
        <div className="m-auto flex h-full w-1/2 flex-col gap-14">
          <h1 className="text-6xl font-bold text-[#6DA67A]">
            Gostou do nosso projeto?
          </h1>

          <h2 className="text-xl font-semibold">
            Ajude a manter e evoluir esse conversor com uma doação 💚
          </h2>

          <p className="text-xl">
            Com sua ajuda, podemos manter o site online, melhorar as
            funcionalidades e adicionar mais conteúdos úteis!
          </p>

          <p className="text-sm text-gray-500">
            Qualquer valor é bem-vindo e faz a diferença 💚
          </p>
        </div>

        <div className="flex w-100 flex-col items-center gap-10 rounded-3xl p-6 shadow-lg">
          <div className="flex w-full items-center justify-around">
            <ul className="space-y-4 text-left text-lg">
              <li className="flex flex-row gap-6">
                <Image src={icoPix} alt="" height={50} />
                <div>
                  <span className="font-medium">Pix (chave):</span>
                  <br />
                  apoie@meuprojeto.com.br
                </div>
              </li>
              <li className="flex flex-row gap-6">
                <Image src={icoPicpay} alt="" height={50} />
                <div>
                  <span className="font-medium">PicPay:</span>
                  <br /> @meuPicPay
                </div>
              </li>
              <li className="flex flex-row gap-6">
                <Image src={icoPaypal} alt="" height={50} />
                <div>
                  <span className="font-medium">PayPal:</span>
                  <br />
                  <a
                    className="text-blue-600 underline"
                    href="https://paypal.me/seulink"
                    target="_blank"
                  >
                    paypal.me/seulink
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <span className="block text-center text-sm font-medium">
              Ou escaneie o QR Code do Pix:
            </span>
            <div className="flex justify-center">
              <Image
                src={qrCode}
                alt="Qr code para link de pagamento via PIX"
                width={190}
              />
            </div>
          </div>
        </div>

        {/* <p className="mt-6 text-center text-sm text-gray-500">
          Qualquer valor é bem-vindo e faz a diferença 💚
        </p> */}
      </section>
    </main>
  );
}
