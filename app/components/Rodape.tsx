import React from 'react';

export default function Rodape() {
  return (
    <footer className="bg-green-900 text-green-50 py-8 px-4 mt-0 w-full flex-shrink-0">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="mb-2 md:mb-0">
          <p className="italic">"Na Feira Natur Farma, sua jornada rumo ao equilíbrio é nossa maior inspiração" <span role="img" aria-label="folha">🌱</span></p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <a href="#" className="underline">Agendamento Online</a>
          <a href="#" className="underline">Política de Privacidade</a>
          <a href="#" className="underline">Redes Sociais</a>
          <a href="#" className="underline">Certificações de Produtos</a>
        </div>
      </div>
    </footer>
  );
}
