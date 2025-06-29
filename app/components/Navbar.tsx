'use client';

import React from 'react';
import Link from 'next/link';
import { FaLeaf, FaBars } from 'react-icons/fa';
import { useActivePath } from './useActivePath';

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
  const pathname = useActivePath();

  return (
    <nav className="fixed top-0 left-0 w-full bg-primary text-white z-50 animate-fade-in-down">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <span className="font-bold text-lg tracking-wide flex items-center gap-2">
          <FaLeaf className="text-accent text-2xl" />
          Clinica Life & Feira Natur
        </span>
        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          aria-label="Abrir menu"
          onClick={() => setOpen(!open)}
        >
          <FaBars className="text-surface text-2xl" />
        </button>
        {/* Desktop menu */}
        <ul className="hidden md:flex gap-4 text-sm md:text-base">
          {links.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`whitespace-nowrap px-4 py-2 rounded-full font-bold transition-colors duration-200 border-2 ${
                  pathname === link.href
                    ? 'bg-white text-green-900 border-green-900 shadow'
                    : 'text-white border-transparent hover:underline hover:text-accent'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile menu dropdown */}
      {open && (
        <ul className="md:hidden flex flex-col gap-2 px-6 pb-4 bg-primary animate-fade-in-down">
          {links.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`whitespace-nowrap block py-2 text-lg px-4 rounded-full font-bold transition-colors duration-200 border-2 ${
                  pathname === link.href
                    ? 'bg-white text-green-900 border-green-900 shadow'
                    : 'text-white border-transparent hover:underline hover:text-accent'
                }`}
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
