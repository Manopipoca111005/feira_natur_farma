import { FaUserMd, FaUserNurse } from 'react-icons/fa';
import React from 'react';

export default function Equipa() {
  return (
    <section id="equipa" className="relative flex flex-col items-center justify-center min-h-[80vh] py-24 px-4 text-center overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-green-900 animate-fade-in rounded-2xl">
      <div className="relative bg-green-900 rounded-2xl shadow-2xl backdrop-blur-md border border-green-800 p-8">
        <h2 className="text-3xl font-extrabold text-white mb-8 flex items-center gap-2">
          <FaUserMd className="text-green-300 text-2xl" /> Equipa
        </h2>
        <div className="mb-6 flex items-start gap-4">
          <FaUserMd className="text-green-200 text-3xl mt-1" />
          <div>
            <h3 className="font-bold text-green-200">Fundador</h3>
            <ul className="list-disc ml-6 text-green-100">
              <li>Especialista em Acupuntura, Osteopatia e Naturopatia</li>
              <li>23 anos de experiência</li>
            </ul>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <FaUserNurse className="text-green-200 text-3xl mt-1" />
          <div>
            <h3 className="font-bold text-green-200">Cofundadora</h3>
            <ul className="list-disc ml-6 text-green-100">
              <li>Terapeuta de Medicina Tradicional Chinesa</li>
              <li>Formada desde 2014</li>
              <li>Abordagem integrada de tratamentos</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
