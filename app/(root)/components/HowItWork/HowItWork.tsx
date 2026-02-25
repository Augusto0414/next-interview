import { HowItWorkCard } from "./HowItWorkCard";
export const HowItWork = () => {
  return (
    <section className="w-full py-16 px-6 lg:px-8">
      <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12">Cómo funciona</h2>
      <article className="w-full text-center max-w-3xl mx-auto">
        <p className="text-white">Automatizamos tus entrevistas para que contrates mejor y más rápido.</p>
        <HowItWorkCard />
      </article>
    </section>
  );
};
