import { PricingCard } from "./PricingCard";

export const Pricing = () => {
  return (
    <section className=" w-full pricing-section">
      <article className="w-full text-center">
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12">Precios de planes</h2>
        <p className="text-white/80 mt-4">
          Elige el plan que mejor se adapte a tus necesidades y comienza a evaluar candidatos de manera eficiente.
        </p>
      </article>
      <div className="mx-5">
        <PricingCard />
      </div>
    </section>
  );
};
