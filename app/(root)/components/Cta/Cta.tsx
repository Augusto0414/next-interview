import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { CTASection } from "./CTASection/CTASection";

export const Cta = () => {
  return (
    <section className="flex flex-col items-center">
      <CTASection />
      <Button className="mt-6 bg-[#007BFF] hover:bg-[#007BFF]/90 text-white px-6 py-5 cursor-pointer">
        Comenzar ahora
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
      <hr className="w-3/4 border-white/20 mt-10" />
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-10 w-full">
        <div className="flex flex-col items-center">
          <span className="text-white text-3xl font-bold">+500</span>
          <span className="text-white/60 text-sm">Empresas activas</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-white text-3xl font-bold">+50K</span>
          <span className="text-white/60 text-sm">Entrevistas realizadas</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-white text-3xl font-bold">98%</span>
          <span className="text-white/60 text-sm">Satisfacción</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-white text-3xl font-bold">70%</span>
          <span className="text-white/60 text-sm">Ahorro de tiempo</span>
        </div>
      </div>
    </section>
  );
};
