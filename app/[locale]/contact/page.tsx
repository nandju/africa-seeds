'use client';

import { useState } from 'react';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import { MapPin, Phone, Clock, Mail, Plus, Minus, Facebook, Twitter, Instagram, Linkedin, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const faqs = [
    {
      question: "Comment puis-je bénéficier de votre plateforme ?",
      answer: "AfricaSeeds offre un accès à des semences certifiées, des formations, des ressources et un réseau continental pour renforcer votre activité agricole. Vous pouvez vous inscrire sur notre plateforme pour accéder à ces services."
    },
    {
      question: "Comment puis-je contacter le support client ?",
      answer: "Vous pouvez nous contacter via le formulaire de contact sur cette page, par email à info@africaseeds.org, ou par téléphone. Notre équipe est disponible du lundi au vendredi de 9h à 17h."
    },
    {
      question: "Comment garantissez-vous la sécurité et la confidentialité des données ?",
      answer: "Nous utilisons des protocoles de sécurité avancés et respectons strictement les réglementations sur la protection des données. Toutes vos informations sont cryptées et stockées de manière sécurisée."
    },
    {
      question: "Comment puis-je commencer avec vos services ?",
      answer: "Pour commencer, créez un compte sur notre plateforme, explorez nos ressources et services disponibles, et contactez-nous si vous avez besoin d'accompagnement personnalisé."
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler l'envoi du formulaire
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <PageHero 
        title="Contactez-nous"
        description="Nous sommes là pour répondre à vos questions et vous accompagner dans votre parcours avec AfricaSeeds."
      />

      {/* Section principale - Contact */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#000000' }}>
              Connectez-vous avec notre équipe
            </h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: '#8CC53E' }}></div>
            <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: '#666666' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire de contact */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#000000' }}>
                Entrez en contact avec nous
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                      style={{ 
                        borderColor: '#e5e7eb',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#8CC53E';
                        e.currentTarget.style.boxShadow = '0 0 0 2px rgba(140, 197, 62, 0.2)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#e5e7eb';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Votre email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                      style={{ 
                        borderColor: '#e5e7eb',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#8CC53E';
                        e.currentTarget.style.boxShadow = '0 0 0 2px rgba(140, 197, 62, 0.2)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#e5e7eb';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Sujet"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none transition-all"
                    style={{ 
                      borderColor: '#e5e7eb',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#8CC53E';
                      e.currentTarget.style.boxShadow = '0 0 0 2px rgba(140, 197, 62, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#e5e7eb';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Soumettez votre demande de message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all resize-none"
                    style={{ 
                      borderColor: '#e5e7eb',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#8CC53E';
                      e.currentTarget.style.boxShadow = '0 0 0 2px rgba(140, 197, 62, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#e5e7eb';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full px-6 py-3 rounded-lg font-semibold transition-all"
                  style={{ 
                    backgroundColor: isSubmitted ? '#8CC53E' : '#000000',
                    color: '#FFFFFF'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitted) e.currentTarget.style.opacity = '0.9';
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitted) e.currentTarget.style.opacity = '1';
                  }}
                >
                  {isSubmitting ? 'Envoi en cours...' : isSubmitted ? 'Message envoyé !' : 'Envoyer le message'}
                </button>
              </form>
            </div>

            {/* Détails de contact */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#000000' }}>
                Détails de contact
              </h3>
              <p className="text-lg mb-8" style={{ color: '#666666' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>

              {/* Cartes de contact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-white rounded-xl p-6 border shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg" style={{ backgroundColor: '#E8F5E9' }}>
                      <MapPin className="w-6 h-6" style={{ color: '#8CC53E' }} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1" style={{ color: '#000000' }}>Adresse</h4>
                      <p className="text-sm" style={{ color: '#666666' }}>Siège social, Afrique</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg" style={{ backgroundColor: '#E8F5E9' }}>
                      <Phone className="w-6 h-6" style={{ color: '#8CC53E' }} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1" style={{ color: '#000000' }}>Téléphone</h4>
                      <p className="text-sm" style={{ color: '#666666' }}>+221 XX XXX XX XX</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg" style={{ backgroundColor: '#E8F5E9' }}>
                      <Clock className="w-6 h-6" style={{ color: '#8CC53E' }} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1" style={{ color: '#000000' }}>Disponibilité</h4>
                      <p className="text-sm" style={{ color: '#666666' }}>Lun - Ven, 9h - 17h</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg" style={{ backgroundColor: '#E8F5E9' }}>
                      <Mail className="w-6 h-6" style={{ color: '#8CC53E' }} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1" style={{ color: '#000000' }}>Email</h4>
                      <p className="text-sm" style={{ color: '#666666' }}>info@africaseeds.org</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div>
                <h4 className="font-semibold mb-4" style={{ color: '#000000' }}>Réseaux sociaux :</h4>
                <div className="flex gap-4">
                  <a href="#" className="p-2 rounded-lg transition-colors hover:bg-gray-100" style={{ color: '#000000' }}>
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 rounded-lg transition-colors hover:bg-gray-100" style={{ color: '#000000' }}>
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 rounded-lg transition-colors hover:bg-gray-100" style={{ color: '#000000' }}>
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 rounded-lg transition-colors hover:bg-gray-100" style={{ color: '#000000' }}>
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 rounded-lg transition-colors hover:bg-gray-100" style={{ color: '#000000' }}>
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#000000' }}>
              Vos questions fréquentes{' '}
              <span className="underline" style={{ textDecorationColor: '#8CC53E', textDecorationThickness: '3px' }}>
                répondues
              </span>{' '}
              avec des FAQ supplémentaires
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: '#666666' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* FAQ Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border p-6 transition-all"
                  style={{ borderColor: '#e5e7eb' }}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <h3 className="text-lg font-semibold pr-4" style={{ color: '#000000' }}>
                      {faq.question}
                    </h3>
                    {openFaq === index ? (
                      <Minus className="w-5 h-5 flex-shrink-0" style={{ color: '#8CC53E' }} />
                    ) : (
                      <Plus className="w-5 h-5 flex-shrink-0" style={{ color: '#8CC53E' }} />
                    )}
                  </button>
                  {openFaq === index && (
                    <p className="mt-4 text-base leading-relaxed" style={{ color: '#666666' }}>
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="hidden lg:block">
              <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden">
                <img
                  src="/assets/images/backgrounds/african-farmers-in-seed-field.jpg"
                  alt="Équipe AfricaSeeds"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
