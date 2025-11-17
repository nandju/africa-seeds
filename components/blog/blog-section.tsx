'use client';

import { useState } from 'react';

interface BlogCard {
  id: number;
  title: string;
  date: string;
  image: string;
}

const blogCards: BlogCard[] = [
  {
    id: 1,
    title: 'Renforcement des systèmes semenciers en Afrique',
    date: '15 novembre 2025',
    image: '/assets/images/illustrations/page-accueil/blog-seed-system.jpg',
  },
  {
    id: 2,
    title: 'La technologie au service de l\'innovation agricole',
    date: '10 novembre 2025',
    image: '/assets/images/illustrations/page-accueil/blog-technology-agriculture.jpg',
  },
  {
    id: 3,
    title: 'Pratiques agricoles durables pour la sécurité alimentaire',
    date: '5 novembre 2025',
    image: '/assets/images/illustrations/page-accueil/blog-sustainable-farming.jpg',
  },
];

export default function BlogSection() {
  return (
    <section className="w-full py-16 md:py-24" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="mb-8 flex justify-center">
          <div 
            className="rounded-full border px-6 py-2"
            style={{ borderColor: 'rgba(140, 197, 62, 0.5)' }}
          >
            <span 
              className="text-sm font-medium tracking-wide"
              style={{ color: '#8CC53E' }}
            >
              NOS ARTICLES
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 
          className="mb-12 text-center text-4xl md:text-5xl font-bold"
          style={{ color: '#000000' }}
        >
          <span className="text-balance">Découvrez nos dernières actualités & conseils</span>
        </h2>

        {/* Blog Cards Grid */}
        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {blogCards.map((card) => (
            <div
              key={card.id}
              className="group flex flex-col overflow-hidden rounded-xl border transition-all duration-300"
              style={{ 
                borderColor: '#e5e7eb',
                backgroundColor: '#FFFFFF',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(140, 197, 62, 0.2)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Image */}
              <div 
                className="relative h-48 overflow-hidden"
                style={{ backgroundColor: '#f3f4f6' }}
              >
                <img
                  src={card.image || "/placeholder.svg"}
                  alt={card.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-between p-6">
                {/* Date */}
                <p 
                  className="mb-3 text-sm"
                  style={{ color: '#6b7280' }}
                >
                  {card.date}
                </p>

                {/* Title */}
                <h3 
                  className="mb-6 text-xl font-bold leading-snug"
                  style={{ color: '#000000' }}
                >
                  {card.title}
                </h3>

                {/* Read More Button */}
                <button 
                  className="w-fit rounded-full border-2 px-6 py-2 text-sm font-medium transition-all duration-300"
                  style={{ 
                    borderColor: 'rgba(140, 197, 62, 0.5)',
                    color: '#8CC53E',
                    backgroundColor: 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#8CC53E';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.borderColor = '#8CC53E';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#8CC53E';
                    e.currentTarget.style.borderColor = 'rgba(140, 197, 62, 0.5)';
                  }}
                >
                  Lire la suite
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Blogs Button */}
        <div className="flex justify-center">
          <button 
            className="rounded-full px-8 py-3 text-base font-semibold transition-all duration-300"
            style={{ 
              backgroundColor: '#BA8E3B',
              color: '#FFFFFF',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(186, 142, 59, 0.4)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Voir tous les articles
          </button>
        </div>
      </div>
    </section>
  );
}