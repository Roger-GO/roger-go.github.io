import React from 'react';

export default function Hero() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 align-middle">
      <div className="text-center text-white z-10">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">
          Rogelio Gracia
        </h1>
        <h2 className="text-2xl md:text-4xl font-light mb-6 text-blue-200">
          Ph.D. Candidate
        </h2>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
          Computer Science & Electrical Engineering
        </p>
      </div>
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
    </div>
  );
}
