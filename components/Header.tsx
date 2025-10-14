"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-primary">InvestmentsParaguay</span>
        </Link>

        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-primary font-medium hover:text-secondary transition">Inicio</Link>
          <Link href="/propiedades" className="text-primary font-medium hover:text-secondary transition">Propiedades</Link>
          <Link href="/blog" className="text-primary font-medium hover:text-secondary transition">Blog</Link>
          <Link href="/contacto" className="text-primary font-medium hover:text-secondary transition">Contacto</Link>
        </div>

        <div className="flex items-center space-x-4">
          <button
            className="language-switcher px-3 py-1 rounded-full bg-gray-100 text-primary text-sm font-medium hover:bg-secondary hover:text-white"
            onClick={() => alert("Cambiar idioma a inglés / Switch to English")}
          >
            ES/EN
          </button>
          <button className="md:hidden" onClick={() => setOpen(v => !v)} aria-label="Abrir menú">
            <Menu className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>

      {/* Mobile */}
      {open && (
        <div className="md:hidden bg-white shadow-lg" id="mobile-menu">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <Link href="/" className="py-2 text-primary font-medium hover:text-secondary transition" onClick={() => setOpen(false)}>Inicio</Link>
            <Link href="/propiedades" className="py-2 text-primary font-medium hover:text-secondary transition" onClick={() => setOpen(false)}>Propiedades</Link>
            <Link href="/blog" className="py-2 text-primary font-medium hover:text-secondary transition" onClick={() => setOpen(false)}>Blog</Link>
            <Link href="/contacto" className="py-2 text-primary font-medium hover:text-secondary transition" onClick={() => setOpen(false)}>Contacto</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
