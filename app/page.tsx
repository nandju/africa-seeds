import HeroSection from "@/components/hero-section"
import Header from "@/components/hero-section"
import ProductsSection from "@/components/products/products-section"



export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* <Header /> */}
      <HeroSection />
      <ProductsSection />
    </main>
  )
}
