"use client"

import Image from "next/image"
import { Leaf, Users, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function Hero() {
  const router = useRouter()

  return (
    <section className="relative min-h-screen pt-20 md:pt-24 flex items-center justify-center px-6 overflow-hidden">
      {/* Fond */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFFFFF] via-[#F8FFFE] to-[#F0F9FF]" />

        <div
          className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-15 blur-3xl"
          style={{ backgroundColor: "#8CC53E" }}
        />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: "#BA8E3B" }}
        />

        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8CC53E]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#BA8E3B]/20 to-transparent" />
      </div>

      {/* Contenu */}
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center gap-8 text-center">

          {/* Logo */}
          <div className="flex flex-col items-center gap-6">
            <div
              className="relative w-28 h-28 rounded-3xl shadow-xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #8CC53E 0%, #BA8E3B 100%)",
              }}
            >
              <div className="absolute inset-2 rounded-2xl bg-white flex items-center justify-center">
                <Image
                  src="/assets/images/logo-africaseeds.png"
                  alt="AfricaSeeds Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Indicateurs */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-[#8CC53E20]">
                  <Leaf size={16} color="#8CC53E" />
                </div>
                <span className="font-medium text-black">Agriculture durable</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-[#BA8E3B20]">
                  <Users size={16} color="#BA8E3B" />
                </div>
                <span className="font-medium text-black">Acteurs du secteur</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-[#8CC53E20]">
                  <Globe size={16} color="#8CC53E" />
                </div>
                <span className="font-medium text-black">Impact panafricain</span>
              </div>
            </div>
          </div>

          {/* Titre */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-black">
            Renforcer le secteur <br />
            <span className="bg-gradient-to-r from-[#8CC53E] to-[#BA8E3B] bg-clip-text text-transparent">
              semencier africain
            </span>
          </h1>

          {/* Texte */}
          <p className="text-lg md:text-xl max-w-3xl text-[#333333] leading-relaxed">
            AfricaSeeds soutient l’accès à des semences de qualité, favorise la
            sécurité alimentaire et accompagne la transformation agricole durable
            en Afrique.
          </p>

          {/* CTA */}
          <Button
            size="lg"
            className="rounded-full px-12 py-7 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
            style={{
              backgroundColor: "#8CC53E",
              color: "#000000",
              border: "2px solid #BA8E3B",
            }}
            onClick={() => router.push("/coming-soon")}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#BA8E3B")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#8CC53E")
            }
          >
            Découvrir la plateforme
          </Button>
        </div>
      </div>
    </section>
  )
}
