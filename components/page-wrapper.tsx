'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Loader from './loading/loader';

interface PageWrapperProps {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isPageReady, setIsPageReady] = useState(false);

  useEffect(() => {
    // Attendre que tous les éléments soient chargés
    const checkPageReady = () => {
      // Vérifier que le DOM est prêt
      if (document.readyState === 'complete') {
        // Vérifier les images
        const images = Array.from(document.querySelectorAll('img'));
        const videos = Array.from(document.querySelectorAll('video'));
        
        const allMediaLoaded = Promise.all([
          ...images.map(img => {
            if (img.complete) return Promise.resolve();
            return new Promise(resolve => {
              img.onload = resolve;
              img.onerror = resolve;
            });
          }),
          ...videos.map(video => {
            if (video.readyState >= 3) return Promise.resolve();
            return new Promise(resolve => {
              video.oncanplaythrough = resolve;
              video.onerror = resolve;
            });
          })
        ]);

        // Timeout de sécurité (max 6 secondes)
        const timeout = setTimeout(() => {
          setIsPageReady(true);
        }, 6000);

        allMediaLoaded.then(() => {
          clearTimeout(timeout);
          // Attendre un peu pour que tout soit vraiment prêt
          setTimeout(() => {
            setIsPageReady(true);
          }, 300);
        });
      } else {
        window.addEventListener('load', checkPageReady, { once: true });
      }
    };

    checkPageReady();
  }, []);

  useEffect(() => {
    if (isPageReady) {
      // Petit délai pour l'animation de sortie du loader
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isPageReady]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Loader />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isLoading && (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
