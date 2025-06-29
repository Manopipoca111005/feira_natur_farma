'use client';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';
import React, { useState } from 'react';

export default function Contactos() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (nome && email && mensagem) {
      setEnviado(true);
      setNome('');
      setEmail('');
      setMensagem('');
      setTimeout(() => setEnviado(false), 3000);
    }
  }

  return (
    <section id="contactos" className="relative flex flex-col items-center justify-center min-h-[60vh] py-8 px-4 text-center overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-green-900 animate-fade-in rounded-2xl">
      <div className="relative bg-green-900 rounded-2xl shadow-2xl backdrop-blur-md border border-green-800 p-4 md:p-6">
        <h2 className="text-3xl font-extrabold text-white mb-6 flex items-center gap-2">
          <FaMapMarkerAlt className="text-green-300 text-2xl" /> Contactos
        </h2>
        <ul className="text-green-100 mb-4 space-y-1">
          <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-green-200" /><strong>Localização:</strong> Santa Maria da Feira</li>
          <li className="flex items-center gap-2"><FaPhoneAlt className="text-green-200" /><strong>Telefone:</strong> <a href="tel:915230000" className="underline">915 230 000</a></li>
          <li className="flex items-center gap-2"><FaEnvelope className="text-green-200" /><strong>Email:</strong> <a href="mailto:feiranatur@gmail.com" className="underline">feiranatur@gmail.com</a></li>
        </ul>
        <p className="mb-1 flex items-center gap-2 text-green-200"><FaClock className="text-green-200" /><strong>Horário de Funcionamento:</strong></p>
        <ul className="text-green-100 mb-4">
          <li>Segunda a Sexta: 9h00 - 19h00</li>
          <li>Sábado: 10h00 - 14h00</li>
        </ul>
        <form onSubmit={handleSubmit} className="bg-green-900/60 rounded-lg p-4 shadow space-y-2">
          <h3 className="text-xl font-bold text-green-200 flex items-center gap-2"><FaPaperPlane /> Fale Conosco</h3>
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={e => setNome(e.target.value)}
            className="w-full px-3 py-2 rounded border border-green-300 bg-green-900 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-3 py-2 rounded border border-green-300 bg-green-900 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <textarea
            placeholder="Mensagem"
            value={mensagem}
            onChange={e => setMensagem(e.target.value)}
            className="w-full px-3 py-2 rounded border border-green-300 bg-green-900 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <button type="submit" className="px-6 py-2 rounded bg-green-300 text-green-900 font-bold hover:bg-green-200 transition-colors">
            Enviar
          </button>
          {enviado && <p className="text-green-200 font-semibold mt-2">Mensagem enviada com sucesso!</p>}
        </form>
      </div>
    </section>
  );
}
