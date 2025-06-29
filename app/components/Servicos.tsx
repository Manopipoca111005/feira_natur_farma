import React from 'react';

export default function Servicos() {
  return (
    <section id="servicos" className="py-12 px-4 bg-green-100">
      <h2 className="text-2xl font-bold text-green-900 mb-6">Serviços</h2>
      <ul className="space-y-2 text-green-900">
        <li><strong>Acupuntura:</strong> Tratamento de dores crônicas e desequilíbrios energéticos</li>
        <li><strong>Osteopatia:</strong> Ajustes estruturais para restabelecer função musculoesquelética</li>
        <li><strong>Naturopatia:</strong> Planos personalizados com fitoterapia e nutrição</li>
        <li><strong>Massoterapia:</strong> Massagem Relaxante, Modeladora, Drenagem Linfática, Tui Na</li>
        <li><strong>Auriculoterapia</strong></li>
        <li><strong>Reflexologia</strong></li>
      </ul>
      <h3 className="font-semibold text-green-800 mt-6">Apoio Especializado</h3>
      <ul className="list-disc ml-6 text-green-900">
        <li>Nutrição Integrativa: Acompanhamento para dietas veganas, pós-cirurgias e deficiências nutricionais</li>
        <li>Suplementação Prescrita: Orientação profissional para uso de GABA, B12 e CoQ10</li>
      </ul>
    </section>
  );
}
