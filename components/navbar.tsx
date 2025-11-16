'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'w-full rounded-none h-16'
            : 'w-[90%] mx-auto rounded-full h-16 top-4'
        } bg-white shadow-sm`}
      >
        <div className="h-full px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/assets/images/logo-africaseeds.png"
              alt="AfricaSeeds Logo"
              width={60}
              height={60}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {['Accueil', 'À Propos', 'Notre Impact', 'Ressources', 'Blog'].map(
              (item, idx) => (
                <Link
                  key={idx}
                  href="#"
                  className="transition-colors"
                  style={{ color: '#000000' }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = '#8CC53E')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = '#000000')
                  }
                >
                  {item}
                </Link>
              )
            )}
          </div>

          {/* CTA Button - Desktop */}
          <button
            className="hidden lg:block px-6 py-2 rounded-full font-medium transition-all"
            style={{ backgroundColor: '#BA8E3B', color: '#FFFFFF' }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Contactez-nous
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="lg:hidden p-2 rounded-lg transition-colors"
            style={{ color: '#000000' }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = '#f3f4f6')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = 'transparent')
            }
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Drawer Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
          onClick={() => setIsDrawerOpen(false)}
        ></div>
      )}

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-white z-50 p-6 shadow-xl transform transition-transform duration-300 lg:hidden ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg font-semibold" style={{ color: '#000000' }}>
            Menu
          </h2>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="p-2 rounded-lg"
          >
            <X size={24} style={{ color: '#000000' }} />
          </button>
        </div>

        {/* Drawer Navigation */}
        <div className="flex flex-col gap-6">
          {['Accueil', 'À Propos', 'Notre Impact', 'Ressources', 'Blog'].map(
            (item, idx) => (
              <Link
                key={idx}
                href="#"
                className="text-base font-medium transition-colors"
                style={{ color: '#000000' }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = '#8CC53E')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = '#000000')
                }
                onClick={() => setIsDrawerOpen(false)}
              >
                {item}
              </Link>
            )
          )}

          {/* CTA Button Mobile */}
          <button
            className="w-full mt-4 px-6 py-3 rounded-full font-medium transition-all"
            style={{ backgroundColor: '#BA8E3B', color: '#FFFFFF' }}
          >
            Contactez-nous
          </button>
        </div>
      </div>
    </>
  );
}
