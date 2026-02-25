import { howItWorkData } from "../HowItWork.data";
export const HowItWorkCard = () => {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {howItWorkData.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-4 p-6 bg-[#1A1A1D]/20 rounded-lg border border-white/10"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-[#007BFF]/20 rounded-full flex items-center justify-center">
              <item.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-bold">{item.name}</h3>
            <p className="text-white/80 text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
