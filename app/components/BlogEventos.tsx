import React from 'react';

export default function BlogEventos() {
  return (
    <section id="blog" className="flex-1 flex flex-col justify-center py-12 px-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-green-900 mb-6">Blog & Eventos</h2>
      <ul className="list-disc ml-6 text-green-900 mb-4">
        <li>GABA: O neurotransmissor do relaxamento</li>
        <li>Vitamina B12: Necessidade em dietas veganas</li>
        <li>CoQ10: Energia celular e proteção cardiovascular</li>
      </ul>
      <p className="font-semibold text-green-800">Workshop Mensal: Autocuidado com Terapias Chinesas</p>
    </section>
  );
}
