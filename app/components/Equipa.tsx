import React from 'react';

export default function Equipa() {
  return (
    <section id="equipa" className="py-12 px-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-green-900 mb-6">Equipa</h2>
      <div className="mb-4">
        <h3 className="font-semibold text-green-800">Fundador</h3>
        <ul className="list-disc ml-6 text-green-900">
          <li>Especialista em Acupuntura, Osteopatia e Naturopatia</li>
          <li>23 anos de experiência</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold text-green-800">Cofundadora</h3>
        <ul className="list-disc ml-6 text-green-900">
          <li>Terapeuta de Medicina Tradicional Chinesa</li>
          <li>Formada desde 2014</li>
          <li>Abordagem integrada de tratamentos</li>
        </ul>
      </div>
    </section>
  );
}
