"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

type LoaderProps = {
  logoSrc?: string;
  logoAlt?: string;
  primaryColor?: string;
  secondaryColor?: string;
  minShowMs?: number;
  maxWaitMs?: number;
};

export default function Loader({
  logoSrc = "/assets/images/logo-africaseeds.png",
  logoAlt = "Logo AfricaSeeds",
  primaryColor = "#8CC53E",
  secondaryColor = "#BA8E3B",
  minShowMs = 700,
  maxWaitMs = 6000,
}: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [pulseScale, setPulseScale] = useState(1);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    let raf: number | null = null;
    let finished = false;
    const start = Date.now();

    // Animation de pulsation du logo
    const pulseInterval = setInterval(() => {
      setPulseScale(prev => prev === 1 ? 1.05 : 1);
    }, 800);

    function waitForResources(timeout = maxWaitMs) {
      const nodes: (HTMLImageElement | HTMLVideoElement | HTMLSourceElement)[] = Array.from(
        document.querySelectorAll("img, video, source")
      ) as any;

      if (nodes.length === 0) return Promise.resolve();

      const checks = nodes.map((el) => {
        return new Promise<void>((resolve) => {
          if (
            (el instanceof HTMLImageElement && el.complete) ||
            (el instanceof HTMLVideoElement && el.readyState >= 3) ||
            (el instanceof HTMLSourceElement)
          ) {
            resolve();
            return;
          }

          const onLoad = () => {
            cleanup();
            resolve();
          };
          const onErr = () => {
            cleanup();
            resolve();
          };
          const cleanup = () => {
            el.removeEventListener("load", onLoad as any);
            el.removeEventListener("loadeddata", onLoad as any);
            el.removeEventListener("canplaythrough", onLoad as any);
            el.removeEventListener("error", onErr as any);
            el.removeEventListener("stalled", onErr as any);
          };

          el.addEventListener("load", onLoad as any);
          el.addEventListener("loadeddata", onLoad as any);
          el.addEventListener("canplaythrough", onLoad as any);
          el.addEventListener("error", onErr as any);
          el.addEventListener("stalled", onErr as any);
        });
      });

      const race = Promise.all(checks);
      const timer = new Promise<void>((resolve) => setTimeout(resolve, timeout));
      return Promise.race([race, timer]);
    }

    function startProgress() {
      const duration = Math.max(500, minShowMs);
      const startTime = Date.now();

      const step = () => {
        const elapsed = Date.now() - startTime;
        const pct = Math.min(98, Math.floor((elapsed / (duration + 800)) * 100));
        setProgress(pct);
        raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }

    startProgress();

    Promise.allSettled([
      new Promise<void>((res) => {
        if (document.readyState === "complete") res();
        else window.addEventListener("load", () => res(), { once: true });
      }),
      waitForResources(maxWaitMs),
    ]).then(() => {
      finished = true;
      const took = Date.now() - start;
      const remaining = Math.max(0, minShowMs - took);
      setTimeout(() => {
        setProgress(100);
        setTimeout(() => {
          setVisible(false);
          if (raf) cancelAnimationFrame(raf);
          clearInterval(pulseInterval);
        }, 250);
      }, remaining);
    });

    const forceTimeout = window.setTimeout(() => {
      if (!finished) {
        setProgress(100);

        setTimeout(() => {
          setIsFadingOut(true); // on lance l'effet de sortie

          setTimeout(() => {
            setVisible(false);
            if (raf) cancelAnimationFrame(raf);
            clearInterval(pulseInterval);
          }, 500); // durée de l’animation
        }, 250);

      }
    }, maxWaitMs + 1000);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      clearTimeout(forceTimeout);
      clearInterval(pulseInterval);
    };
  }, [minShowMs, maxWaitMs]);

  if (!visible) return null;

  return (
    <>
      <div
        aria-hidden={!visible ? true : false}
        role="status"
        className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white 
          ${isFadingOut ? "loader-exit" : ""}`}
        style={{ backgroundColor: "#FFFFFF" }}
      >
        {/* Cercles décoratifs en arrière-plan */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <div 
            style={{
              position: 'absolute',
              top: '-160px',
              left: '-160px',
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              backgroundColor: primaryColor,
              opacity: 0.2,
              filter: 'blur(80px)',
              animation: 'float 8s ease-in-out infinite',
            }}
          />
          <div 
            style={{
              position: 'absolute',
              bottom: '-160px',
              right: '-160px',
              width: '384px',
              height: '384px',
              borderRadius: '50%',
              backgroundColor: secondaryColor,
              opacity: 0.2,
              filter: 'blur(80px)',
              animation: 'float-delayed 10s ease-in-out infinite',
            }}
          />
          <div 
            style={{
              position: 'absolute',
              top: '33%',
              right: '25%',
              width: '256px',
              height: '256px',
              borderRadius: '50%',
              backgroundColor: primaryColor,
              opacity: 0.1,
              filter: 'blur(60px)',
              animation: 'float-slow 12s ease-in-out infinite',
            }}
          />
        </div>

        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>
          {/* Logo container avec effet de brillance */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                boxShadow: `0 20px 60px ${primaryColor}40, 0 8px 16px ${secondaryColor}30`,
                transform: `scale(${pulseScale})`,
                transition: 'transform 0.3s ease',
              }}
            >
              {/* Effet de brillance qui passe */}
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                  animation: 'shine 3s ease-in-out infinite',
                }}
              />
              
              <Image
                src={logoSrc}
                alt={logoAlt}
                width={72}
                height={72}
                style={{ objectFit: 'contain', position: 'relative', zIndex: 10 }}
              />
            </div>

            {/* Anneau pulsant autour du logo */}
            <div 
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: '16px',
                border: `2px solid ${primaryColor}`,
                opacity: 0.3,
                animation: 'ping-slow 2s ease-in-out infinite',
              }}
            />
          </div>

          {/* Texte de marque */}
          <div style={{ textAlign: 'center' }}>
            <h2 
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                marginBottom: '4px',
                background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              AfricaSeeds
            </h2>
            <p style={{ fontSize: '14px', color: '#6b7280', fontWeight: 500 }}>
              Renforcer le secteur semencier africain
            </p>
          </div>

          {/* Spinner moderne avec double anneau */}
          <div style={{ position: 'relative', width: '90px', height: '90px' }}>
            <svg
              width="90"
              height="90"
              viewBox="0 0 50 50"
              aria-hidden="true"
              style={{ animation: 'spin-smooth 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite' }}
            >
              <circle
                cx="25"
                cy="25"
                r="20"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="3"
              />
              <path
                d="M45 25a20 20 0 0 1-20 20"
                stroke={primaryColor}
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
                style={{
                  strokeDasharray: '125',
                  animation: 'dash 2s ease-in-out infinite',
                }}
              />
            </svg>
            
            {/* Anneau secondaire en rotation inverse */}
            <svg
              width="90"
              height="90"
              viewBox="0 0 50 50"
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                animation: 'spin-reverse 2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
              }}
            >
              <path
                d="M5 25a20 20 0 0 1 20-20"
                stroke={secondaryColor}
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                opacity="0.6"
              />
            </svg>

            {/* Pourcentage au centre */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span 
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {progress}%
              </span>
            </div>
          </div>

          {/* Barre de progression moderne */}
          <div style={{ width: '320px', position: 'relative' }}>
            <div 
              style={{
                width: '100%',
                height: '8px',
                borderRadius: '9999px',
                overflow: 'hidden',
                position: 'relative',
                backgroundColor: '#e5e7eb',
              }}
            >
              <div
                style={{
                  height: '100%',
                  borderRadius: '9999px',
                  width: `${progress}%`,
                  background: `linear-gradient(90deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                  boxShadow: `0 0 20px ${primaryColor}60`,
                  transition: 'width 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Effet de brillance sur la barre */}
                <div 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
                    animation: 'shimmer 2s ease-in-out infinite',
                  }}
                />
              </div>
            </div>

            {/* Points décoratifs */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px', padding: '0 4px' }}>
              {[0, 25, 50, 75, 100].map((mark) => (
                <div
                  key={mark}
                  style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    backgroundColor: progress >= mark ? primaryColor : '#d1d5db',
                    transform: progress >= mark ? 'scale(1.5)' : 'scale(1)',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Texte de chargement avec animation */}
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '14px', color: '#4b5563', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>Chargement en cours</span>
              <span style={{ display: 'flex', gap: '4px' }}>
                <span style={{
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  backgroundColor: '#9ca3af',
                  animation: 'bounce 1s ease-in-out infinite',
                  animationDelay: '0ms',
                }} />
                <span style={{
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  backgroundColor: '#9ca3af',
                  animation: 'bounce 1s ease-in-out infinite',
                  animationDelay: '150ms',
                }} />
                <span style={{
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  backgroundColor: '#9ca3af',
                  animation: 'bounce 1s ease-in-out infinite',
                  animationDelay: '300ms',
                }} />
              </span>
            </p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes spin-smooth {
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          to { transform: rotate(-360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(20px) scale(1.05); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(10px, -10px) scale(1.03); }
        }
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.15); opacity: 0; }
          100% { transform: scale(1); opacity: 0.3; }
        }
        @keyframes dash {
          0% { stroke-dashoffset: 125; }
          50% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -125; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </>
  );
}