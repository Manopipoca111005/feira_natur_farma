import { FaLeaf } from 'react-icons/fa';
import React from 'react';

export default function SobreNos() {
  return (
    <section id="sobre" className="relative flex flex-col items-center justify-center min-h-[80vh] py-24 px-4 text-center overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-green-900 animate-fade-in rounded-2xl">
      <div className="relative bg-green-900 rounded-2xl shadow-2xl backdrop-blur-md border border-green-800 p-8">
        <h2 className="text-3xl font-extrabold text-white mb-6 flex items-center gap-2">
          <FaLeaf className="text-green-300 text-2xl" /> Sobre Nós
        </h2>
        <p className="mb-4 text-green-100 text-lg leading-relaxed">Bem-vindo à Clinica Life e Feira Natur! 🌿 Tudo começou há 23 anos quando o meu pai abriu a Feira Natur, uma ervanária, e a Clinica Life, onde dava consultas de acupuntura, osteopatia e naturopatia. Desde pequena que cresci dentro das áreas naturais, e então desenvolvi paixão pelas terapias holísticas. Em 2014, decidi fazer o curso de Medicina Tradicional Chinesa, fascinada pelo poder de ajudar pessoas. Unimo-nos então num projeto familiar, dedicando-nos a melhorar a qualidade de vida da nossa comunidade através de conhecimentos tradicionais e científicos.</p>
        <h3 className="font-bold text-green-200 mt-6">Missão</h3>
        <p className="mb-2 text-green-100">A nossa missão é ajudar-vos a alcançar uma vida saudável e equilibrada, utilizando terapias naturais que respeitam a sabedoria do corpo e a força da natureza. Acreditamos no poder curativo da terra e em tratar a raiz dos problemas, não apenas os sintomas. Oferecemos um atendimento acolhedor, com foco na saúde integral.</p>
        <h3 className="font-bold text-green-200 mt-6">Visão</h3>
        <p className="text-green-100">Ser referência em saúde natural em Portugal, promovendo equilíbrio entre corpo, mente e meio ambiente.</p>
      </div>
    </section>
  );
}
