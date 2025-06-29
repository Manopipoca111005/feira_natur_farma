import React from 'react';

export default function Contactos() {
  return (
    <section id="contactos" className="py-12 px-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-green-900 mb-6">Contactos</h2>
      <ul className="text-green-900 mb-4">
        <li><strong>Localização:</strong> Santa Maria da Feira</li>
        <li><strong>Telefone:</strong> <a href="tel:915230000" className="underline">915 230 000</a></li>
        <li><strong>Email:</strong> <a href="mailto:feiranatur@gmail.com" className="underline">feiranatur@gmail.com</a></li>
      </ul>
      <p className="mb-2"><strong>Horário de Funcionamento:</strong></p>
      <ul className="text-green-900">
        <li>Segunda a Sexta: 9h00 - 19h00</li>
        <li>Sábado: 10h00 - 14h00</li>
      </ul>
    </section>
  );
}
