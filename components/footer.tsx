'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with blur */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(/assets/images/illustrations/page-accueil/footer-agricultural-background.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px)",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Large background text */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <h1 className="text-[200px] md:text-[280px] lg:text-[350px] font-bold text-white/10 whitespace-nowrap">
          AfricaSeeds
        </h1>
      </div>

      {/* Content */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            
            {/* À propos */}
            <div>
              <p className="text-white text-lg md:text-xl leading-relaxed mb-8 font-light">
                Renforcer le secteur semencier africain. Ancré dans la mission.
                Guidé par les résultats.
              </p>
              <a
                href="mailto:info@africaseeds.org"
                className="text-[#BA8E3B] text-base md:text-lg hover:text-white transition-colors break-all"
              >
                info@africaseeds.org
              </a>
            </div>

            {/* Liens rapides */}
            <div>
              <h3 className="text-white text-lg md:text-xl font-semibold mb-6">
                Liens rapides
              </h3>
              <ul className="space-y-4">
                {[
                  { href: "#home", label: "Accueil" },
                  { href: "#about", label: "À propos" },
                  { href: "#who-we-are", label: "Notre identité" },
                  { href: "#impact", label: "Impact" },
                  { href: "#blogs", label: "Blogs" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-white/80 hover:text-[#8CC53E] transition-colors text-base"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-white text-lg md:text-xl font-semibold mb-6">
                Newsletter
              </h3>
              <form onSubmit={handleSubscribe} className="space-y-4">
                <input
                  type="email"
                  placeholder="Entrez votre email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-white/40 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/80 transition-colors"
                />

                <button
                  type="submit"
                  className="w-full bg-[#BA8E3B] text-black font-semibold py-3 px-6 rounded-lg hover:scale-110 transition-all"
                >
                  {isSubscribed ? "Inscription confirmée !" : "S'abonner"}
                </button>
              </form>

              {isSubscribed && (
                <p className="text-[#8CC53E] text-sm mt-3">
                  Merci pour votre inscription !
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bas de page */}
        <div className="mt-8 text-center text-white/60 text-sm">
          <p>&copy; 2025 AfricaSeeds. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
