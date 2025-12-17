'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Users, Leaf, BarChart3, Book, Newspaper, Target, Sprout, TrendingUp, Lightbulb, Award, MessageSquare, FileText, BookOpen, Wrench, Briefcase, Megaphone } from 'lucide-react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

const menuItems = {
  "À Propos": [
    { title: "Qui sommes-nous", subtitle: "Découvrez notre histoire", icon: Users },
    { title: "Notre mission", subtitle: "Notre engagement", icon: Target },
    { title: "Notre vision", subtitle: "L'avenir de l'agriculture", icon: Sprout },
    { title: "Notre équipe", subtitle: "Les experts derrière le projet", icon: Users },
    { title: "Partenariats", subtitle: "Nos collaborations", icon: Briefcase }
  ],
  "Notre Impact": [
    { title: "Impact agricole", subtitle: "Transformations mesurables", icon: Leaf },
    { title: "Sécurité alimentaire", subtitle: "Pour une meilleure nutrition", icon: Award },
    { title: "Innovation semencière", subtitle: "Semences du futur", icon: Lightbulb },
    { title: "Résultats & statistiques", subtitle: "Chiffres et données", icon: BarChart3 },
    { title: "Témoignages", subtitle: "Histoires de réussite", icon: MessageSquare }
  ],
  "Ressources": [
    { title: "Publications", subtitle: "Nos travaux de recherche", icon: FileText },
    { title: "Études & rapports", subtitle: "Analyses approfondies", icon: Book },
    { title: "Guides agricoles", subtitle: "Conseils pratiques", icon: BookOpen },
    { title: "Outils & formations", subtitle: "Ressources d'apprentissage", icon: Wrench },
    { title: "Médias", subtitle: "Photos et vidéos", icon: Briefcase }
  ],
  "Blog": [
    { title: "Actualités", subtitle: "Dernières nouvelles", icon: Newspaper },
    { title: "Articles", subtitle: "Analyses et perspectives", icon: FileText },
    { title: "Histoires de terrain", subtitle: "Expériences du terrain", icon: Leaf },
    { title: "Événements", subtitle: "Nos rencontres et webinaires", icon: Megaphone },
    { title: "Communiqués", subtitle: "Annonces officielles", icon: Newspaper }
  ]
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node | null;
      if (dropdownRef.current && target && !dropdownRef.current.contains(target)) {
        setOpenDropdown(null);
      }
    };

    if (openDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown]);

  const navItems = ['Accueil', 'À Propos', 'Notre Impact', 'Ressources', 'Blog'];

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
              width={58}
              height={58}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8" ref={dropdownRef}>
            {navItems.map((item) => (
              <div key={item} className="relative group">
                {item === 'Accueil' ? (
                  <Link
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
                ) : (
                  <>
                    <button
                      className="flex items-center gap-1 transition-colors"
                      style={{ color: '#000000' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#8CC53E';
                        setOpenDropdown(item);
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#000000';
                      }}
                    >
                      {item}
                      <ChevronDown className="w-4 h-4 transition-transform" />
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {openDropdown === item && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-0 w-72 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
                          onMouseEnter={() => setOpenDropdown(item)}
                          onMouseLeave={() => setOpenDropdown(null)}
                        >
                          {menuItems[item as keyof typeof menuItems].map((subitem, idx) => {
                            const IconComponent = subitem.icon;
                            return (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -5 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.15, delay: 0.05 * idx }}
                              >
                                <Link
                                  href="#"
                                  className="block px-4 py-3 transition-all group/item"
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#f3f4f6';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                  }}
                                >
                                  <div className="flex items-start gap-3">
                                    <div
                                      className="flex-shrink-0 mt-0.5 rounded-md p-2 transition-colors"
                                      style={{ backgroundColor: '#E8F5E9' }}
                                    >
                                      <IconComponent
                                        className="w-5 h-5"
                                        style={{ color: '#8CC53E' }}
                                      />
                                    </div>
                                    <div className="flex-1">
                                      <h4
                                        className="text-sm font-semibold transition-colors group-hover/item:text-[#8CC53E]"
                                        style={{ color: '#000000' }}
                                      >
                                        {subitem.title}
                                      </h4>
                                      <p
                                        className="text-xs mt-0.5"
                                        style={{ color: '#666666' }}
                                      >
                                        {subitem.subtitle}
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              </motion.div>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </div>
            ))}
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
        <div className="flex flex-col gap-4">
          {navItems.map((item) => (
            <div key={item}>
              {item === 'Accueil' ? (
                <Link
                  href="#"
                  className="text-base font-medium transition-colors block"
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
              ) : (
                <>
                  <button
                    className="w-full text-left text-base font-medium transition-colors flex items-center justify-between"
                    style={{ color: '#000000' }}
                    onClick={() =>
                      setOpenDropdown(openDropdown === item ? null : item)
                    }
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = '#8CC53E')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = '#000000')
                    }
                  >
                    {item}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openDropdown === item ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Mobile Dropdown */}
                  <AnimatePresence>
                    {openDropdown === item && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 mt-2 space-y-3">
                          {menuItems[item as keyof typeof menuItems].map((subitem, idx) => {
                            const IconComponent = subitem.icon;
                            return (
                              <Link
                                key={idx}
                                href="#"
                                className="block transition-colors"
                                onClick={() => setIsDrawerOpen(false)}
                              >
                                <div className="flex items-start gap-2">
                                  <div
                                    className="flex-shrink-0 mt-0.5 rounded-md p-1.5 transition-colors"
                                    style={{ backgroundColor: '#E8F5E9' }}
                                  >
                                    <IconComponent
                                      className="w-4 h-4"
                                      style={{ color: '#8CC53E' }}
                                    />
                                  </div>
                                  <div className="flex-1">
                                    <h4
                                      className="text-sm font-semibold"
                                      style={{ color: '#000000' }}
                                    >
                                      {subitem.title}
                                    </h4>
                                    <p
                                      className="text-xs mt-0.5"
                                      style={{ color: '#666666' }}
                                    >
                                      {subitem.subtitle}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              )}
            </div>
          ))}

          {/* CTA Button Mobile */}
          <button
            className="w-full mt-6 px-6 py-3 rounded-full font-medium transition-all"
            style={{ backgroundColor: '#BA8E3B', color: '#FFFFFF' }}
          >
            Contactez-nous
          </button>
        </div>
      </div>
    </>
  );
}