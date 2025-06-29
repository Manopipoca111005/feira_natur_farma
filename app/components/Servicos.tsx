import { FaLeaf, FaSpa, FaHeartbeat, FaHands, FaSeedling, FaAppleAlt, FaCapsules } from 'react-icons/fa';
import React from 'react';

export default function Servicos() {
  return (
    <section id="servicos" className="relative flex flex-col items-center justify-center min-h-[80vh] py-24 px-4 text-center overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-green-900 animate-fade-in rounded-2xl">
      <div className="relative bg-green-900 rounded-2xl shadow-2xl backdrop-blur-md border border-green-800 p-8">
        <h2 className="text-3xl font-extrabold text-white mb-8 flex items-center gap-2">
          <FaSpa className="text-green-300 text-2xl" /> Serviços
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 text-green-100">
          <li className="flex items-start gap-3"><FaHeartbeat className="text-green-200 text-xl mt-1" /><div><strong>Acupuntura:</strong> Tratamento de dores crônicas e desequilíbrios energéticos</div></li>
          <li className="flex items-start gap-3"><FaHands className="text-green-200 text-xl mt-1" /><div><strong>Osteopatia:</strong> Ajustes estruturais para restabelecer função musculoesquelética</div></li>
          <li className="flex items-start gap-3"><FaSeedling className="text-green-200 text-xl mt-1" /><div><strong>Naturopatia:</strong> Planos personalizados com fitoterapia e nutrição</div></li>
          <li className="flex items-start gap-3"><FaSpa className="text-green-200 text-xl mt-1" /><div><strong>Massoterapia:</strong> Massagem Relaxante, Modeladora, Drenagem Linfática, Tui Na</div></li>
          <li className="flex items-start gap-3"><FaAppleAlt className="text-green-200 text-xl mt-1" /><div><strong>Auriculoterapia</strong></div></li>
          <li className="flex items-start gap-3"><FaLeaf className="text-green-200 text-xl mt-1" /><div><strong>Reflexologia</strong></div></li>
        </ul>
        <h3 className="font-bold text-green-200 mt-10 mb-2 text-xl flex items-center gap-2"><FaCapsules className="text-green-300" /> Apoio Especializado</h3>
        <ul className="list-disc ml-8 text-green-100 space-y-1">
          <li>Nutrição Integrativa: Acompanhamento para dietas veganas, pós-cirurgias e deficiências nutricionais</li>
          <li>Suplementação Prescrita: Orientação profissional para uso de GABA, B12 e CoQ10</li>
        </ul>
      </div>
    </section>
  );
}
