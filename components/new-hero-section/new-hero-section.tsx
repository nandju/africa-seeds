import { Hero } from "./hero";
import { PortfolioShowcase } from "./portfolio-showcase";

export default function NewHeroSection() {
  return (
    <section className="min-h-screen">
        <Hero />
        <PortfolioShowcase />
    </section>
  )
}