'use client';

import React from 'react';
import Link from 'next/link';

const links = [
  { href: '/', label: 'Início' },
  { href: '/sobre', label: 'Sobre Nós' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/produtos', label: 'Produtos' },
  { href: '/equipa', label: 'Equipa' },
  { href: '/blog', label: 'Blog & Eventos' },
  { href: '/contactos', label: 'Contactos' },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-green-900 text-green-50 shadow z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <span className="font-bold text-lg tracking-wide">Feira Natur Farma</span>
        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          aria-label="Abrir menu"
          onClick={() => setOpen(!open)}
        >
          <span className={`block w-6 h-0.5 bg-green-50 mb-1 transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-green-50 mb-1 transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-green-50 transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        {/* Desktop menu */}
        <ul className="hidden md:flex gap-4 text-sm md:text-base">
          {links.map(link => (
            <li key={link.href}>
              <Link href={link.href} className="hover:underline hover:text-green-200 transition-colors duration-200">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile menu dropdown */}
      {open && (
        <ul className="md:hidden flex flex-col gap-2 px-6 pb-4 bg-green-900 animate-fade-in-down">
          {links.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block py-2 text-lg hover:underline hover:text-green-200 transition-colors duration-200"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
