import { FaCapsules, FaLeaf, FaSpa } from 'react-icons/fa';
import React from 'react';

export default function Produtos() {
  return (
    <section id="produtos" className="relative flex flex-col items-center justify-center min-h-[80vh] py-24 px-4 text-center overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-green-900 animate-fade-in rounded-2xl">
      <div className="relative bg-green-900 rounded-2xl shadow-2xl backdrop-blur-md border border-green-800 p-8">
        <h2 className="text-3xl font-extrabold text-white mb-8 flex items-center gap-2">
          <FaCapsules className="text-green-300 text-2xl" /> Produtos Feira Natur
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-green-200 flex items-center gap-2 mb-2"><FaCapsules className="text-green-200" /> Suplementos</h3>
            <ul className="list-disc ml-6 text-green-100 space-y-2">
              <li><strong>GABA (Líquido/Cápsulas):</strong> Ansiedade, stress, sono, foco mental</li>
              <li><strong>Vitamina B12 (Comprimidos):</strong> Veganos, anemia, idosos, pós-cirurgias</li>
              <li><strong>Coenzima Q10 (Cápsulas):</strong> Energia celular, apoio cardiovascular, atividade física</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-green-200 flex items-center gap-2 mb-2"><FaSpa className="text-green-200" /> Cuidados Externos</h3>
            <ul className="list-disc ml-6 text-green-100 space-y-2">
              <li><strong>Bálsamo de Cavalo Quente:</strong> Dores musculares/articulares, relaxamento, rigidez muscular</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
