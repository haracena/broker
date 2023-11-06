import Image from "next/image";
import ContentWrapper from "./components/ContentWrapper";
import HeroLogo from "./components/HeroLogo";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Footer from "./components/Footer";
import Link from "next/link";
import TiltFrame from "./components/TiltFrame";

export default function Home() {
  return (
    <>
      <header className="relative flex justify-center items-center bg-[url('/images/hero.png')] bg-no-repeat bg-cover h-screen">
        <Navbar />
        <HeroLogo />
      </header>

      <main>
        <section
          id="mynameis"
          className="my-48 bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(10, 10, 10, 1), transparent, rgba(10, 10, 10, 1)), url('/images/mynameis-bg.png')",
          }}
        >
          <ContentWrapper
            className={
              "grid grid-cols-1 items-center justify-items-center md:grid-cols-2 gap-8"
            }
          >
            <div className="h-full flex flex-col items-center justify-center gap-8">
              <Title className={"text-center"}>My name is Broker</Title>
              <p className="max-w-[390px] text-center text-xl text-neutral-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
            <Image
              src={"/images/cuadros.png"}
              alt="conjunto de cuadros"
              width={560}
              height={510}
              className="max-w-full"
            />
          </ContentWrapper>
        </section>

        <section
          id="cuadros"
          className="my-48 p-4 bg-no-repeat bg-cover bg-center md"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(10, 10, 10, 1), transparent, rgba(10, 10, 10, 1)), url('/images/cuadros-bg.png')",
          }}
        >
          <Title className={"text-center"}>Cuadros</Title>
          <div className="mt-16 flex flex-col sm:flex-row sm:justify-center gap-12 sm:gap-24">
            <div className="flex flex-col gap-4 items-center">
              <TiltFrame>
                <Image
                  width={230}
                  height={310}
                  src={"/images/cuadro1.png"}
                  alt="cuadro"
                  className="rounded-lg"
                />
              </TiltFrame>
              <p className="text-xl">Dimensiones</p>
              <ul className="text-neutral-500">
                <li>Largo: 60cm</li>
                <li>Ancho: 30cm</li>
                <li>Grosor: 10cm</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <TiltFrame>
                <Image
                  width={230}
                  height={310}
                  src={"/images/cuadro2.png"}
                  alt="cuadro"
                  className="rounded-lg"
                />
              </TiltFrame>
              <p className="text-xl">Dimensiones</p>
              <ul className="text-neutral-500">
                <li>Largo: 60cm</li>
                <li>Ancho: 30cm</li>
                <li>Grosor: 10cm</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <TiltFrame>
                <Image
                  width={230}
                  height={310}
                  src={"/images/cuadro3.png"}
                  alt="cuadro"
                  className="rounded-lg shadow-lg"
                />
              </TiltFrame>
              <p className="text-xl">Dimensiones</p>
              <ul className="text-neutral-500">
                <li>Largo: 60cm</li>
                <li>Ancho: 30cm</li>
                <li>Grosor: 10cm</li>
              </ul>
            </div>
          </div>
        </section>

        <section
          id="contacto"
          className="mt-48 mb-12 max-w-screen-xl mx-auto flex flex-col gap-8 justify-center items-center"
        >
          <div className="ml-4 mb-8 p-4 w-[300px] h-[140px] sm:w-[430px] sm:h-[227px] flex justify-center items-center bg-[url('/images/pincelada.png')] bg-contain bg-center bg-no-repeat">
            <Title className={"-ml-4"}>Contacto</Title>
          </div>
          <Link
            href={"https://www.instagram.com/broker.7"}
            target="_blank"
            className="relative group flex flex-col gap-4 justify-center items-center transition-all duration-300 hover:scale-125 cursor-pointer text-[#DADADA] before:w-[40px] before:h-[40px] before:bg-[white] before:rounded-full before:blur-2xl before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:transition-all before:opacity-0 hover:before:opacity-100"
          >
            <svg className="w-[80px] h-[80px] fill-[currentColor] transition-colors duration-300 group-hover:text-neutral-50">
              <use href="/icons/sprite.svg#icon-instagram" />
            </svg>
            <p className="group-hover:text-neutral-50 group-hover:">Broker.7</p>
          </Link>
        </section>

        <Footer />
      </main>
    </>
  );
}
