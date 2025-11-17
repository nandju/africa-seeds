import AboutSection from "@/components/about/about-section"
import BenefitsSection from "@/components/benefits/benefits-section"
import BlogSection from "@/components/blog/blog-section"
import HeroSection from "@/components/hero-section"
import Header from "@/components/hero-section"
import ProductsSection from "@/components/products/products-section"



export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* <Header /> */}
      <HeroSection />
      <ProductsSection />
      <BenefitsSection />
      <AboutSection />
      <BlogSection />
    </main>
  )
}
