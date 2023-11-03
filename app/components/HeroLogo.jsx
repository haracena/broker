import React from "react";
import { smooch } from "../fonts";
import Image from "next/image";

const HeroLogo = () => {
  return (
    <div className="relative flex flex-col justify-center items-center w-full max-w-[480px]">
      <Image
        width={540}
        height={790}
        src="/images/mancha.png"
        alt="mancha graffiti"
        className="absolute top-[128px] left-0 -translate-y-1/2 opacity-90 z-10"
      />
      <h1
        className={`${smooch.className} relative z-20 text-9xl before:content-['0'] before:absolute before:top-[-64px] before:left-[50%] before:-translate-x-1/2 before:rotate-[53deg]`}
      >
        Broker
      </h1>
      <p className={`${smooch.className} text-4xl z-20 -ml-4 text-neutral-600`}>
        Street Art
      </p>
    </div>
  );
};

export default HeroLogo;
