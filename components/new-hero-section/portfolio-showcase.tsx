"use client"

export function PortfolioShowcase() {
  const portfolioItems = [
    { image: "/assets/images/backgrounds/hero_1.png" },
    { image: "/assets/images/backgrounds/hero_2.png" },
    { image: "/assets/images/backgrounds/hero_3.png" },
    { image: "/assets/images/backgrounds/hero_4.png" },
    { image: "/assets/images/backgrounds/hero_5.png" },
  ]

  return (
    <section className="pt-4 pb-20 overflow-hidden">
      <div className="relative w-full">
        {/* Track */}
        <div className="flex w-max animate-scroll-seamless">
          {/* Set 1 */}
          {portfolioItems.map((item, index) => (
            <div
              key={`item-1-${index}`}
              className="flex-shrink-0 w-[600px] mr-6"
            >
              <div className="relative aspect-[4/3] overflow-hidden shadow-lg">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}

          {/* Set 2 (clone) */}
          {portfolioItems.map((item, index) => (
            <div
              key={`item-2-${index}`}
              className="flex-shrink-0 w-[600px] mr-6"
              aria-hidden="true"
            >
              <div className="relative aspect-[4/3] overflow-hidden shadow-lg">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
