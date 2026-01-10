'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Globe, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const languages = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
];

const defaultLocale = 'fr';

export default function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Extraire la locale actuelle du pathname
  const getCurrentLocale = (): string => {
    const segments = pathname.split('/').filter(Boolean);
    const firstSegment = segments[0];
    return languages.some(lang => lang.code === firstSegment) ? firstSegment : defaultLocale;
  };

  const locale = getCurrentLocale();
  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  const handleLanguageChange = (newLocale: string) => {
    setIsOpen(false);
    
    // Extraire le chemin sans la locale actuelle
    const segments = pathname.split('/').filter(Boolean);
    const hasLocale = languages.some(lang => lang.code === segments[0]);
    const pathWithoutLocale = hasLocale ? segments.slice(1).join('/') : segments.join('/');
    
    // Construire le nouveau chemin avec la nouvelle locale
    const newPath = pathWithoutLocale ? `/${newLocale}/${pathWithoutLocale}` : `/${newLocale}`;
    
    router.push(newPath);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all"
        style={{ 
          backgroundColor: isOpen ? '#f3f4f6' : 'transparent',
          color: '#000000'
        }}
        onMouseEnter={(e) => {
          if (!isOpen) e.currentTarget.style.backgroundColor = '#f3f4f6';
        }}
        onMouseLeave={(e) => {
          if (!isOpen) e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        <Globe className="w-5 h-5" />
        <span className="text-2xl">{currentLanguage.flag}</span>
        <span className="hidden md:inline text-sm font-medium">{currentLanguage.code.toUpperCase()}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50"
            style={{ minWidth: '200px' }}
          >
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className="w-full flex items-center gap-3 px-4 py-3 transition-colors text-left hover:bg-gray-50"
                style={{ color: '#000000' }}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-2xl">
                  {language.flag}
                </div>
                <div className="flex-1">
                  <div className="font-medium text-sm">{language.name}</div>
                  <div className="text-xs" style={{ color: '#666666' }}>{language.code.toUpperCase()}</div>
                </div>
                {locale === language.code && (
                  <Check className="w-5 h-5" style={{ color: '#8CC53E' }} />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
