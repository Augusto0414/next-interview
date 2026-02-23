import { Logo } from "@/components/shared/Logo/Logo";
import { NavbarItem } from "./NavbarItem";
import { NavbarMovile } from "./NavbarMovile";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/6 bg-[#030304]/80 backdrop-blur-2xl backdrop-saturate-150">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <NavbarItem />
          <NavbarMovile />
        </div>
      </div>
    </nav>
  );
}
