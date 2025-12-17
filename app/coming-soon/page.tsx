'use client';

import Link from 'next/link';

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-3xl text-center rounded-2xl p-12 bg-white shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#BA8E3B' }}>
          Bientôt disponible
        </h1>
        <p className="text-base md:text-lg mb-8 text-gray-700">
          Nous travaillons activement sur cette section. Revenez bientôt pour plus d'informations — vous pouvez vous inscrire pour être informé(e) dès son lancement.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="inline-block px-6 py-3 rounded-full font-medium" style={{ backgroundColor: '#BA8E3B', color: '#FFFFFF' }}>
            Retour à l'accueil
          </Link>
          <button
            className="inline-block px-6 py-3 rounded-full font-medium border"
            style={{ borderColor: '#BA8E3B', color: '#BA8E3B' }}
            onClick={() => alert('Merci ! Nous vous informerons dès le lancement.')}
          >
            Prévenez-moi
          </button>
        </div>
      </div>
    </main>
  );
}
