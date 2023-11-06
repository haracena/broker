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
        className="absolute top-[80px] sm:top-[128px] left-0 -translate-y-1/2 z-10 opacity-0 animate-sprayOpacity"
        priority
      />
      <h1
        className={`${smooch.className} opacity-0 relative z-20 text-8xl sm:text-9xl before:content-['0'] before:absolute before:top-[-64px] before:left-[50%] before:-translate-x-1/2 before:rotate-[53deg] animate-[sprayOpacity_1s_ease-in_1.25s_forwards]`}
      >
        Broker
      </h1>
      <p
        className={`${smooch.className} opacity-0 text-3xl sm:text-4xl z-20 -ml-4 text-neutral-600 animate-[sprayOpacity_1s_ease-in_1.6s_forwards]`}
      >
        Street Art
      </p>
    </div>
  );
};

export default HeroLogo;
