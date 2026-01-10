'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Users, Leaf, BarChart3, Book, Newspaper, Target, Sprout, TrendingUp, Lightbulb, Award, MessageSquare, FileText, BookOpen, Wrench, Briefcase, Megaphone } from 'lucide-react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import LanguageSelector from './language-selector';
import { usePathname } from 'next/navigation';

const menuItems = {
  "À Propos": [
    { title: "Vision", subtitle: "Vision continentale", icon: Target, href: "/a-propos/vision" },
    { title: "Directeur Exécutif", subtitle: "Message du leadership", icon: Users, href: "/a-propos/directeur-executif" },
    { title: "États membres", subtitle: "Légitimité panafricaine", icon: Briefcase, href: "/a-propos/etats-membres" },
    { title: "Conseil d'administration", subtitle: "Gouvernance", icon: Users, href: "/a-propos/conseil-administration" }
  ],
  "Notre Approche": [
    { title: "Développement inclusif", subtitle: "Approche inclusive", icon: Users, href: "/notre-approche/developpement-inclusif" },
    { title: "Stratégie", subtitle: "Stratégie continentale", icon: Target, href: "/notre-approche/strategie" },
    { title: "Programme ASBP", subtitle: "Mandat Union Africaine", icon: Sprout, href: "/notre-approche/programme-asbp" },
    { title: "CAADP", subtitle: "Politiques agricoles", icon: Leaf, href: "/notre-approche/caadp" },
    { title: "Partenariats", subtitle: "Réseau institutionnel", icon: Briefcase, href: "/notre-approche/partenariats" }
  ],
  "Semences": [
    { title: "Genre", subtitle: "Inclusion des femmes", icon: Users, href: "/semences/genre" },
    { title: "Jeunesse", subtitle: "Valorisation des jeunes", icon: TrendingUp, href: "/semences/jeunesse" },
    { title: "Cultures sous-utilisées", subtitle: "Biodiversité agricole", icon: Leaf, href: "/semences/cultures-sous-utilisees" },
    { title: "Biodiversité & durabilité", subtitle: "Protection génétique", icon: Sprout, href: "/semences/biodiversite-durabilite" },
    { title: "Transformation agricole", subtitle: "Productivité & développement", icon: Leaf, href: "/semences/transformation-agricole" },
    { title: "Systèmes semenciers paysans", subtitle: "Systèmes locaux", icon: Users, href: "/semences/systemes-paysans" },
    { title: "Petites entreprises", subtitle: "Soutien aux PME", icon: Briefcase, href: "/semences/petites-entreprises" }
  ],
  "Ressources": [
    { title: "Manuel de formation", subtitle: "Formation semencière", icon: BookOpen, href: "/ressources/manuel-formation" },
    { title: "Publications", subtitle: "Études officielles", icon: FileText, href: "/ressources/publications" },
    { title: "Portail de connaissances", subtitle: "Base documentaire", icon: Book, href: "/ressources/portail-connaissances" },
    { title: "Cartographie des acteurs", subtitle: "Écosystème semencier", icon: BarChart3, href: "/ressources/cartographie-acteurs" },
    { title: "Répertoire d'experts", subtitle: "Spécialistes du secteur", icon: Users, href: "/ressources/repertoire-experts" }
  ]
};

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Extraire la locale actuelle du pathname
  const getCurrentLocale = (): string => {
    const segments = pathname.split('/').filter(Boolean);
    const firstSegment = segments[0];
    const locales = ['fr', 'en', 'es', 'de'];
    return locales.includes(firstSegment) ? firstSegment : 'fr';
  };

  const locale = getCurrentLocale();

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

  const navItems = ['Accueil', 'À Propos', 'Notre Approche', 'Semences', 'Ressources', 'Actualités', 'Contact'];

  return (
    <>
        <nav
          className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300
            ${isScrolled
              ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200'
              : 'bg-white'
            }
          `}
          style={{
            WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
            backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          }}
        >

          <div className="max-w-7xl mx-auto h-full px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center flex-shrink-0">
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
                {item === 'Accueil' || item === 'Actualités' || item === 'Contact' ? (
                  <Link
                    href={item === 'Accueil' ? `/${locale}` : `/${locale}/${item === 'Actualités' ? 'actualites' : 'contact'}`}
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
                          {menuItems[item as keyof typeof menuItems]?.map((subitem, idx) => {
                            const IconComponent = subitem.icon;
                            return (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -5 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.15, delay: 0.05 * idx }}
                              >
                                <Link
                                  href={`/${locale}${subitem.href || "#"}`}
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

          {/* Language Selector - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSelector />
          </div>

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
              {item === 'Accueil' || item === 'Actualités' || item === 'Contact' ? (
                <Link
                  href={item === 'Accueil' ? `/${locale}` : `/${locale}/${item === 'Actualités' ? 'actualites' : 'contact'}`}
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
                          {menuItems[item as keyof typeof menuItems]?.map((subitem, idx) => {
                            const IconComponent = subitem.icon;
                            return (
                              <Link
                                key={idx}
                                href={`/${locale}${subitem.href || "#"}`}
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

        </div>
      </div>
    </>
  );
}