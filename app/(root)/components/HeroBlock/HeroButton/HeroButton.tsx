export const HeroButton = () => {
  return (
    <div className="mt-10 flex justify-center gap-4 flex-wrap">
      <button
        className="px-8 py-3 rounded-xl bg-[#007BFF] hover:bg-blue-600 transition-all duration-300 text-white font-semibold shadow-lg shadow-blue-500/20
        cursor-pointer
      "
      >
        Empezar ahora
      </button>

      <button
        className="px-8 py-3 rounded-xl border border-white/20 hover:border-[#007BFF] hover:text-[#007BFF] transition-all duration-300 text-white font-semibold
         cursor-pointer
      "
      >
        Ver demo
      </button>
    </div>
  );
};
