import { HeroBlock } from "./components/HeroBlock";
import { Navbar } from "./components/Navbar";
export default function Home() {
  return (
    <div className="bg-[#040406] min-h-screen w-full">
      <Navbar />
      <HeroBlock />
    </div>
  );
}
