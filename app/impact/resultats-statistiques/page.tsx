'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import { BarChart3, TrendingUp, Download, FileText } from "lucide-react";

export default function ResultatsStatistiquesPage() {
  const kpis = [
    { label: "Agriculteurs impactés", value: "45 000+", trend: "+15%", color: "#8CC53E" },
    { label: "Pays d'intervention", value: "12", trend: "+2", color: "#BA8E3B" },
    { label: "Hectares couverts", value: "125 000", trend: "+20%", color: "#8CC53E" },
    { label: "Taux de satisfaction", value: "92%", trend: "+5%", color: "#BA8E3B" }
  ];

  const evolution = [
    { year: "2021", agriculteurs: 15000, hectares: 45000 },
    { year: "2022", agriculteurs: 25000, hectares: 75000 },
    { year: "2023", agriculteurs: 35000, hectares: 100000 },
    { year: "2024", agriculteurs: 45000, hectares: 125000 }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <span className="inline-block px-4 py-2 border rounded-full text-sm font-medium mb-6" style={{ borderColor: '#8CC53E', color: '#8CC53E' }}>
            NOTRE IMPACT
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#000000' }}>
            Résultats & Statistiques
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl" style={{ color: '#666666' }}>
            Des chiffres qui témoignent de notre impact réel sur le terrain et de notre contribution à la transformation du secteur semencier africain.
          </p>
        </div>
      </section>

      {/* KPIs */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#000000' }}>Indicateurs clés de performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kpis.map((kpi, index) => (
              <div key={index} className="p-8 rounded-xl border-2 text-center" style={{ borderColor: kpi.color }}>
                <div className="text-5xl font-bold mb-2" style={{ color: kpi.color }}>{kpi.value}</div>
                <p className="text-base mb-2" style={{ color: '#666666' }}>{kpi.label}</p>
                <div className="flex items-center justify-center gap-2">
                  <TrendingUp className="w-4 h-4" style={{ color: kpi.color }} />
                  <span className="text-sm font-medium" style={{ color: kpi.color }}>{kpi.trend}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Évolution annuelle */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#000000' }}>Évolution annuelle</h2>
          <div className="bg-white rounded-xl p-8 border" style={{ borderColor: '#e5e7eb' }}>
            <div className="space-y-6">
              {evolution.map((year, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-semibold" style={{ color: '#000000' }}>{year.year}</span>
                    <div className="flex gap-6">
                      <span className="text-base" style={{ color: '#666666' }}>
                        <span className="font-semibold" style={{ color: '#8CC53E' }}>{year.agriculteurs.toLocaleString()}</span> agriculteurs
                      </span>
                      <span className="text-base" style={{ color: '#666666' }}>
                        <span className="font-semibold" style={{ color: '#BA8E3B' }}>{year.hectares.toLocaleString()}</span> hectares
                      </span>
                    </div>
                  </div>
                  <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all"
                      style={{ 
                        width: `${(year.agriculteurs / 50000) * 100}%`,
                        background: 'linear-gradient(90deg, #8CC53E 0%, #BA8E3B 100%)'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tableaux & Graphiques */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#000000' }}>Données par région</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr style={{ backgroundColor: '#f9fafb' }}>
                  <th className="p-4 text-left border" style={{ borderColor: '#e5e7eb', color: '#000000' }}>Région</th>
                  <th className="p-4 text-left border" style={{ borderColor: '#e5e7eb', color: '#000000' }}>Agriculteurs</th>
                  <th className="p-4 text-left border" style={{ borderColor: '#e5e7eb', color: '#000000' }}>Hectares</th>
                  <th className="p-4 text-left border" style={{ borderColor: '#e5e7eb', color: '#000000' }}>Taux d'adoption</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { region: "Afrique de l'Ouest", agriculteurs: "18 000", hectares: "50 000", taux: "85%" },
                  { region: "Afrique Centrale", agriculteurs: "8 000", hectares: "22 000", taux: "78%" },
                  { region: "Afrique de l'Est", agriculteurs: "12 000", hectares: "35 000", taux: "82%" },
                  { region: "Afrique Australe", agriculteurs: "7 000", hectares: "18 000", taux: "75%" }
                ].map((row, index) => (
                  <tr key={index}>
                    <td className="p-4 border font-medium" style={{ borderColor: '#e5e7eb', color: '#000000' }}>{row.region}</td>
                    <td className="p-4 border" style={{ borderColor: '#e5e7eb', color: '#666666' }}>{row.agriculteurs}</td>
                    <td className="p-4 border" style={{ borderColor: '#e5e7eb', color: '#666666' }}>{row.hectares}</td>
                    <td className="p-4 border" style={{ borderColor: '#e5e7eb', color: '#8CC53E' }}>{row.taux}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Graphiques visuels */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#000000' }}>Répartition par type de culture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { culture: "Maïs", pourcentage: 35, color: "#8CC53E" },
              { culture: "Riz", pourcentage: 25, color: "#BA8E3B" },
              { culture: "Sorgho", pourcentage: 20, color: "#8CC53E" },
              { culture: "Millet", pourcentage: 20, color: "#BA8E3B" }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-white rounded-xl border" style={{ borderColor: '#e5e7eb' }}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold" style={{ color: '#000000' }}>{item.culture}</span>
                  <span className="text-2xl font-bold" style={{ color: item.color }}>{item.pourcentage}%</span>
                </div>
                <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all"
                    style={{ 
                      width: `${item.pourcentage}%`,
                      backgroundColor: item.color
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Téléchargement PDF */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <FileText className="w-16 h-16 mx-auto mb-6" style={{ color: '#8CC53E' }} />
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#000000' }}>Rapport annuel</h2>
          <p className="text-xl mb-8 leading-relaxed" style={{ color: '#666666' }}>
            Téléchargez notre rapport annuel complet avec toutes les statistiques détaillées et analyses approfondies.
          </p>
          <button className="px-8 py-4 rounded-full font-medium transition-all inline-flex items-center gap-2" style={{ backgroundColor: '#BA8E3B', color: '#FFFFFF' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
            <Download className="w-5 h-5" />
            Télécharger le rapport PDF
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
