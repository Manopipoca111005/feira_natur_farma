'use client';
import { FaRegNewspaper, FaCommentDots } from 'react-icons/fa';
import React, { useState } from 'react';

export default function BlogEventos() {
  const [comments, setComments] = useState<string[]>([]);
  const [input, setInput] = useState('');

  function handleComment(e: React.FormEvent) {
    e.preventDefault();
    if (input.trim()) {
      setComments([input, ...comments]);
      setInput('');
    }
  }

  return (
    <section id="blog" className="relative flex flex-col items-center justify-center min-h-[80vh] py-24 px-4 text-center overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-green-900 animate-fade-in rounded-2xl">
      <div className="relative bg-green-900 rounded-2xl shadow-2xl backdrop-blur-md border border-green-800 p-8">
        <h2 className="text-3xl font-extrabold text-white mb-6 flex items-center gap-2">
          <FaRegNewspaper className="text-green-300 text-2xl" /> Blog & Eventos
        </h2>
        <ul className="list-disc ml-6 text-green-100 mb-4 space-y-1">
          <li>GABA: O neurotransmissor do relaxamento</li>
          <li>Vitamina B12: Necessidade em dietas veganas</li>
          <li>CoQ10: Energia celular e proteção cardiovascular</li>
        </ul>
        <p className="font-semibold text-green-200 mb-8">Workshop Mensal: Autocuidado com Terapias Chinesas</p>
        <form onSubmit={handleComment} className="flex gap-2 mb-4">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Deixe um comentário..."
            className="flex-1 px-3 py-2 rounded border border-green-300 bg-green-900 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button type="submit" className="px-4 py-2 rounded bg-green-300 text-green-900 font-bold hover:bg-green-200 transition-colors">
            <FaCommentDots /> Comentar
          </button>
        </form>
        <div className="space-y-2">
          {comments.map((c, i) => (
            <div key={i} className="bg-green-900/60 rounded px-3 py-2 shadow text-green-100 animate-fade-in">
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
