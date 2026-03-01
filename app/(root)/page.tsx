import { Cta } from "./components/Cta";
import { HeroBlock } from "./components/HeroBlock";
import { HowItWork } from "./components/HowItWork";
import { Navbar } from "./components/Navbar";
import { Pricing } from "./components/Pricing";
export default function Home() {
  return (
    <div className="bg-[#040406] min-h-screen w-full flex flex-col gap-20">
      <Navbar />
      <HeroBlock />
      <HowItWork />
      <Pricing />
      <Cta />
    </div>
  );
}
