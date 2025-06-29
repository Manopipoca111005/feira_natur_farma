import React from 'react';

export default function Hero() {
    return (
        <section
            id="inicio"
            className="relative flex flex-col items-center justify-center min-h-[60vh] py-24 px-4 text-center overflow-hidden bg-gradient-to-br from-green-300 via-green-100 to-green-50"
        >
            <div className="absolute inset-0 pointer-events-none select-none opacity-30 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-400 via-green-200 to-transparent" />
            <div className="relative z-10 max-w-2xl mx-auto">
                <h1 className="text-5xl md:text-6xl font-extrabold text-green-900 leading-tight">
                    Feira Natur Farma
                </h1>
                <h2 className='text-green-700 font-semibold'>Saúde Natural em Harmonia com a Natureza</h2>
                <br />
                <span className="text-green-700">
                    Há 23 anos cuidando da comunidade com terapias integrativas e produtos naturais em Santa Maria da Feira
                </span>
            </div>
            <a
                href="/contactos"
                className="inline-block px-8 py-3 rounded-full bg-green-800 text-white font-semibold text-lg shadow-lg hover:bg-green-900 transition-colors duration-200"
            >
                Agende sua consulta
            </a>
        </section>
    );
}
