"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  daysAgo: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Les semences de qualité d'AfricaSeeds ont transformé nos pratiques agricoles. Nos cultures sont plus saines et la productivité s'est considérablement améliorée.",
    author: "Jean Kouassi",
    daysAgo: 2,
  },
  {
    id: 2,
    quote: "Leurs produits sont fiables et faciles à utiliser. Nous avons constaté une croissance notable et une meilleure résilience dans nos champs.",
    author: "Sophie Diallo",
    daysAgo: 4,
  },
  {
    id: 3,
    quote: "Travailler avec AfricaSeeds ressemble à un véritable partenariat. Leur soutien et leur expertise nous aident à obtenir des résultats cohérents année après année.",
    author: "David Mensah",
    daysAgo: 7,
  },
  {
    id: 4,
    quote: "Les programmes de formation complets ont doté notre équipe des connaissances nécessaires pour maximiser les rendements tout en maintenant la durabilité.",
    author: "Amara Okonkwo",
    daysAgo: 5,
  },
  {
    id: 5,
    quote: "L'accès à des semences de qualité via AfricaSeeds a ouvert de nouvelles opportunités commerciales pour notre coopérative et amélioré les moyens de subsistance de nos membres.",
    author: "Ibrahim Hassan",
    daysAgo: 3,
  },
  {
    id: 6,
    quote: "Leur engagement envers la gestion environnementale s'aligne parfaitement avec nos valeurs. Nous sommes fiers de nous associer à une organisation qui privilégie la santé des sols.",
    author: "Zainab Mohammed",
    daysAgo: 6,
  },
  {
    id: 7,
    quote: "Le portail de connaissances semencières a été inestimable pour rester informé des meilleures pratiques et des nouvelles variétés de semences adaptées à notre région.",
    author: "Kwame Asante",
    daysAgo: 8,
  },
  {
    id: 8,
    quote: "Des rendements améliorés aux coûts d'intrants réduits, AfricaSeeds s'est révélé être un véritable changement pour notre entreprise agricole.",
    author: "Fatima Abdallah",
    daysAgo: 1,
  },
];


export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const handlePrev = () => setCurrentIndex(Math.max(0, currentIndex - 1));
  const handleNext = () => setCurrentIndex(Math.min(maxIndex, currentIndex + 1));

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          <button
            className="px-3 sm:px-4 py-2 border rounded-full text-xs sm:text-sm font-medium transition-colors"
            style={{
              borderColor: "rgba(186,142,59,0.5)",
              color: "#BA8E3B",
            }}
          >
            RETOURS CLIENTS
          </button>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight text-black">
            De vrais agriculteurs,<br />De vraies réussites
          </h2>
        </div>

        <div className="relative w-full">
          {/* Carousel */}
          <div className="overflow-hidden w-full">
            <div
              className="flex gap-4 sm:gap-6 transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerView + 0.5)
                }%)`,
              }}
            >
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="flex-shrink-0"
                  style={{ width: `calc(${100 / itemsPerView}% - 0.5rem)` }}
                >
                  <div className="rounded-lg p-4 sm:p-6 lg:p-8 h-full flex flex-col justify-between bg-gradient-to-br from-green-50 to-yellow-50 border border-green-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <p className="italic text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 text-gray-700">
                      "{t.quote}"
                    </p>
                    <div>
                      <p className="font-semibold text-sm sm:text-base text-black">
                        — {t.author}
                      </p>
                      <p className="text-xs sm:text-sm mt-1 text-gray-500">
                        Il y a {t.daysAgo} jour{t.daysAgo !== 1 ? "s" : ""}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute top-1/2 -translate-y-1/2 z-10 p-2 rounded-full border bg-white transition-all disabled:opacity-30 disabled:cursor-not-allowed left-2 sm:left-0"
            aria-label="Précédent"
          >
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-green-600" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            className="absolute top-1/2 -translate-y-1/2 z-10 p-2 rounded-full border bg-white transition-all disabled:opacity-30 disabled:cursor-not-allowed right-2 sm:right-0"
            aria-label="Suivant"
          >
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-green-600" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8 sm:mt-10 lg:mt-12">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`rounded-full transition-all`}
              style={{
                width: index === currentIndex ? "24px" : "8px",
                height: "8px",
                backgroundColor: index === currentIndex ? "#8CC53E" : "#d1d5db",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
