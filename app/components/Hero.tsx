import React from 'react';

export default function Hero() {
    return (
        <section
            id="inicio"
            className="relative flex flex-col items-center justify-center min-h-[80vh] py-24 px-4 text-center overflow-hidden bg-gradient-to-br from-green-900 via-green-700 to-green-500"
        >
            <div className="absolute inset-0 pointer-events-none select-none opacity-60 bg-black" />
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-6 leading-tight">
                    Feira Natur Farma
                </h1>
                <h2 className='text-white font-semibold text-2xl md:text-3xl mb-4 drop-shadow'>Saúde Natural em Harmonia com a Natureza</h2>
                <span className="text-white text-lg md:text-xl mb-8 block drop-shadow">
                    Há 23 anos cuidando da comunidade com terapias integrativas e produtos naturais em Santa Maria da Feira
                </span>
                <a
                    href="#contactos"
                    className="inline-block px-10 py-4 rounded-full bg-white text-green-900 font-bold text-xl shadow-xl hover:bg-green-200 transition-colors duration-200 border-2 border-green-300"
                >
                    Agende sua consulta
                </a>
            </div>
        </section>
    );
}
