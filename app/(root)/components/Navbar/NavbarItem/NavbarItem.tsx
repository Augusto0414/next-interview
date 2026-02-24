import Link from "next/link";
import { navbarData } from "../navbar.data";

export function NavbarItem() {
  return (
    <ul className="hidden md:flex items-center gap-1">
      {navbarData.map((item) => (
        <li key={item.label}>
          <Link
            href={item.href}
            className="px-4 py-2 text-sm font-medium text-white/60 transition-colors duration-200 rounded-lg 
            hover:text-white hover:bg-white/6"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
