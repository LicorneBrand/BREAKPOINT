import React from 'react';
import Head from 'next/head';

const BreakPointLanding = () => {
  const whatsappLink = "https://wa.me/261343212369";

  return (
    <div className="bg-[#050505] text-white font-sans selection:bg-[#C5A059] selection:text-black">
      <Head>
        <title>Break Point | Licorne - Marketing & Leadership</title>
        <meta name="description" content="Formation intensive en Marketing et Vente par Licorne" />
      </Head>

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <img src="/logo.png" alt="Licorne Logo" className="h-10 w-auto" />
        <a href={whatsappLink} className="bg-[#C5A059] hover:bg-[#d4b375] text-black font-bold py-2 px-6 rounded-full transition-all text-sm">
          CONTACTEZ PAR WHATSAPP
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/image1.png" className="w-full h-full object-cover opacity-40 scale-105" alt="Background" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl">
          <span className="text-[#C5A059] tracking-[0.3em] font-medium text-sm mb-4 block">LICORNE PRÉSENTE</span>
          <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter">BREAK POINT</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Le point de bascule de votre business. Une immersion totale dans le marketing de demain.
          </p>
          <a href="#programme" className="border border-white/20 hover:border-[#C5A059] py-4 px-10 rounded-full transition-all inline-block text-lg">
            DÉCOUVRIR LE PROGRAMME
          </a>
        </div>
      </section>

      {/* Partie 1 - Gratuite */}
      <section className="py-24 px-6 max-w-7xl mx-auto" id="programme">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <img src="/image2.png" className="rounded-2xl shadow-2xl border border-white/5" alt="Formation" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-[#C5A059] text-3xl font-bold mb-6 italic underline decoration-1 underline-offset-8">Phase d'Éveil (Gratuit)</h2>
            <p className="text-gray-400 mb-8 text-lg">Début Mai - Sessions de 9h à 12h pour poser les fondations.</p>
            <div className="space-y-4">
              {['J1 : Les nouvelles directions du Marketing', 'J2 : Les Stratégies avancées en Marketing', 'J3 : Les 11 freins du Marketing'].map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <span className="text-[#C5A059] font-mono">0{index+1}</span>
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partie 2 - Immersion */}
      <section className="py-24 bg-[#0a0a0a] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 italic">Break Point : L'Immersion</h2>
            <p className="text-[#C5A059] text-2xl font-semibold">Investissement : 2 100 000 MGA</p>
            <p className="text-gray-500 mt-2 italic">Tout inclus (hors boissons alcoolisées)</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Jour 18 Mai */}
            <div className="bg-black p-8 rounded-3xl border border-white/10 hover:border-[#C5A059]/50 transition-colors">
              <h3 className="text-2xl font-bold mb-6 pb-2 border-b border-[#C5A059]">18 MAI</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><b className="text-white">08h-12h</b> Développement de Marque</li>
                <li className="text-[#C5A059]">12h-14h Déjeuner & Networking</li>
                <li><b className="text-white">14h-16h30</b> Marketing</li>
                <li><b className="text-white">17h30-19h</b> Intro Marketing Digital</li>
                <li><b className="text-white">20h-21h</b> Leadership</li>
              </ul>
            </div>

            {/* Jour 19 Mai */}
            <div className="bg-black p-8 rounded-3xl border border-white/10 hover:border-[#C5A059]/50 transition-colors">
              <h3 className="text-2xl font-bold mb-6 pb-2 border-b border-[#C5A059]">19 MAI</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><b className="text-white">08h-12h</b> Spécialisation Digital</li>
                <li className="text-[#C5A059]">12h-14h Déjeuner & Networking</li>
                <li><b className="text-white">14h-16h30</b> Vente</li>
                <li><b className="text-white">17h30-19h</b> Closing</li>
                <li><b className="text-white">20h-21h</b> Masterclass Invité</li>
              </ul>
            </div>

            {/* Jour 20 Mai */}
            <div className="bg-black p-8 rounded-3xl border border-white/10 hover:border-[#C5A059]/50 transition-colors">
              <h3 className="text-2xl font-bold mb-6 pb-2 border-b border-[#C5A059]">20 MAI</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><b className="text-white">08h-12h</b> Pratique Marketing</li>
                <li className="text-[#C5A059]">12h-14h Déjeuner & Networking</li>
                <li><b className="text-white">14h-19h</b> Vente (Session Pratique)</li>
                <li className="text-[#C5A059] italic font-medium">20h-21h Protocole "Bas les Masques" (T. Robbins)</li>
              </ul>
            </div>

            {/* Jour 21 Mai */}
            <div className="bg-black p-8 rounded-3xl border border-white/10 hover:border-[#C5A059]/50 transition-colors">
              <h3 className="text-2xl font-bold mb-6 pb-2 border-b border-[#C5A059]">21 MAI</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><b className="text-white">08h-12h</b> Culture & Leadership</li>
                <li className="text-[#C5A059]">12h-14h Déjeuner & Networking</li>
                <li><b className="text-white">14h-16h</b> Déléguer Marketing/Vente</li>
                <li><b className="text-white font-bold text-[#C5A059]">17h-18h Remise d'attestation</b></li>
                <li className="text-white pt-2 font-bold uppercase tracking-widest">19h Fêtes & Networking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie Photos (image3 à image7) */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="/image3.png" className="rounded-xl h-64 w-full object-cover opacity-70 hover:opacity-100 transition-opacity" alt="Expérience 1" />
          <img src="/image4.png" className="rounded-xl h-64 w-full object-cover opacity-70 hover:opacity-100 transition-opacity" alt="Expérience 2" />
          <img src="/image5.png" className="rounded-xl h-64 w-full object-cover opacity-70 hover:opacity-100 transition-opacity md:col-span-2" alt="Expérience 3" />
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-20 text-center bg-[#C5A059] text-black">
        <h2 className="text-4xl font-bold mb-8 italic">Prêt pour votre Break Point ?</h2>
        <a href={whatsappLink} className="bg-black text-white text-xl font-bold py-6 px-12 rounded-full hover:scale-105 transition-transform inline-block shadow-2xl">
          CONTACTEZ PAR WHATSAPP
        </a>
        <div className="mt-12 text-sm font-medium opacity-70">
          © 2026 Licorne - Break Point Immersion
        </div>
      </footer>
    </div>
  );
};

export default BreakPointLanding;
