import { HeroBlock } from "./components/HeroBlock";
import { HowItWork } from "./components/HowItWork";
import { Navbar } from "./components/Navbar";
import { Pricing } from "./components/Pricing";
export default function Home() {
  return (
    <div className="bg-[#040406] min-h-screen w-full">
      <Navbar />
      <HeroBlock />
      <HowItWork />
      <Pricing />
    </div>
  );
}
