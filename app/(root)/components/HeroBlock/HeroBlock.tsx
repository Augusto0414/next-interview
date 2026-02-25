"use client";

import { TypeAnimation } from "react-type-animation";
import { HeroButton } from "./HeroButton";
import { HeroInfo } from "./HeroInfo";

export const HeroBlock = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center px-6 lg:px-8 bg-[#040406] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-150 h-150 bg-[#007BFF]/20 rounded-full blur-[140px]"></div>
      </div>

      <div className="relative z-10 text-center">
        <h1 className="text-5xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          <TypeAnimation
            sequence={[
              "Entrevistas impulsadas por Inteligencia Artificial",
              2000,
              "Evaluaciones objetivas en tiempo real",
              2000,
              "Analizamos habilidades técnicas y blandas",
              2000,
              "Transformando la forma de contratar talento",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="bg-linear-to-r from-[#007BFF] to-white bg-clip-text text-transparent"
          />
        </h1>
        <HeroInfo />
        <HeroButton />
      </div>
    </section>
  );
};
