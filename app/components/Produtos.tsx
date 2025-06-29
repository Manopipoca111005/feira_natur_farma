import React from 'react';

export default function Produtos() {
  return (
    <section id="produtos" className="py-12 px-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-green-900 mb-6">Produtos Feira Natur</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold text-green-800">Suplementos</h3>
          <ul className="list-disc ml-6 text-green-900">
            <li><strong>GABA (Líquido/Cápsulas):</strong> Ansiedade, stress, sono, foco mental</li>
            <li><strong>Vitamina B12 (Comprimidos):</strong> Veganos, anemia, idosos, pós-cirurgias</li>
            <li><strong>Coenzima Q10 (Cápsulas):</strong> Energia celular, apoio cardiovascular, atividade física</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-green-800">Cuidados Externos</h3>
          <ul className="list-disc ml-6 text-green-900">
            <li><strong>Bálsamo de Cavalo Quente:</strong> Dores musculares/articulares, relaxamento, rigidez muscular</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
