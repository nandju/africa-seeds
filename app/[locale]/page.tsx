import AboutSection from "@/components/about/about-section"
import AgriculturePartnerSection from "@/components/agriculture-partner/agriculture-partner-section"
import BenefitsSection from "@/components/benefits/benefits-section"
import BlogSection from "@/components/blog/blog-section"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import Navbar from "@/components/navbar"
import ProductsSection from "@/components/products/products-section"
import TestimonialsSection from "@/components/testimonials/testimonials-section"
import TrustedSolutionsSection from "@/components/trusted-solutions/trusted-solutions-section"
import AnimatedSection from "@/components/animated-section"


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* <Header /> */}
      <Navbar />
      {/* <HeroSection /> */}
      <HeroSection />
      <AnimatedSection>
        <ProductsSection />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <BenefitsSection />
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <AboutSection />
      </AnimatedSection>
      <AnimatedSection delay={0.3}>
        <BlogSection />
      </AnimatedSection>
      <AnimatedSection delay={0.4}>
        <AgriculturePartnerSection />
      </AnimatedSection>
      <AnimatedSection delay={0.5}>
        <TrustedSolutionsSection />
      </AnimatedSection>
      <AnimatedSection delay={0.6}>
        <TestimonialsSection />
      </AnimatedSection>
      <Footer />
    </main>
  )
}
