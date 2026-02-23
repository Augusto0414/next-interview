"use client";

import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navbarData } from "../navbar.data";

export function NavbarMovile() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button
            className="inline-flex items-center justify-center rounded-lg p-2 text-white/70 transition-colors hover:bg-white/6 hover:text-white"
            aria-label="Abrir menú"
          >
            <Menu className="h-5 w-5" />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-72 border-l border-white/6 bg-[#030304]/95 backdrop-blur-2xl p-0">
          <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
          <div className="flex h-16 items-center justify-end border-b border-white/6 px-6">
            <SheetClose asChild>
              <button
                className="rounded-lg p-2 text-white/70 transition-colors hover:bg-white/6 hover:text-white"
                aria-label="Cerrar menú"
              >
                <X className="h-5 w-5" />
              </button>
            </SheetClose>
          </div>

          <nav className="flex flex-col gap-1 px-4 py-4">
            {navbarData.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center rounded-lg px-4 py-3 text-sm font-medium text-white/60 transition-colors duration-200 hover:bg-white/6 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
