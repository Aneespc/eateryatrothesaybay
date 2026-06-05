"use client";

import { useEffect, useState, useRef } from "react";

export default function MenuPage() {
  const [activeSection, setActiveSection] = useState("breakfast");
  const heroImageRef = useRef<HTMLImageElement>(null);

  // Parallax Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (heroImageRef.current) {
        heroImageRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = ["breakfast", "lunch", "dinner", "drinks", "desserts"];

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const target = document.getElementById(sectionId);
    if (target) {
      const headerOffset = 130;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      {/* Hero Header */}
      <section className="relative h-[55vh] md:h-[60vh] flex items-center justify-center overflow-hidden -mt-[72px] pt-[72px]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/25 z-10" />
          <img
            ref={heroImageRef}
            alt="Menu Hero Cover"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAreExOJVPLEiFFynSuLUsBwjMiEPc7pZXaj3clf884vgziybA0ZbEhCUNho598FshUJMD3JZJXb29oJNq6MVHld-bJvFWzCUqJ4qxfrcMjjcplnll5uo-8NXnlu7_go_MpngLJ8A-hOx8SHWHeubL7-Azz3kOazVO5XWQseUeRO3VUlS3mkSKEdx3FiswzPRL-1htEqCtz63UxA6pzMdJkJSz2rbWUwykA1etfyphJY8YRYdXa7z0iXou98nIinfq_as6hhOoGHKM"
          />
        </div>
        <div className="relative z-20 text-center px-6 max-w-2xl mt-12 md:mt-16">
          <h1 className="font-headline text-4xl md:text-headline-xl text-white mb-4 font-bold drop-shadow-lg leading-tight">
            Our Menu
          </h1>
          <p className="font-body text-base md:text-body-lg text-white max-w-xl mx-auto drop-shadow-md font-medium">
            A curated collection of coastal flavors, organic ingredients, and artisanal craftsmanship.
          </p>
        </div>
      </section>

      {/* Categories Sticky Sub Navigation */}
      <section className="sticky top-[72px] z-40 bg-surface-container-low border-b border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-6 md:px-gutter py-4 overflow-x-auto custom-scrollbar">
          <div className="flex justify-center min-w-max gap-8 md:gap-12">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={`font-body text-xs font-bold uppercase tracking-widest transition-colors duration-200 pb-1 ${
                  activeSection === section
                    ? "text-primary border-b-2 border-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Container */}
      <div className="max-w-container-max mx-auto px-6 md:px-gutter py-16 space-y-20">
        {/* Breakfast Section */}
        <section id="breakfast" className="scroll-mt-36">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="font-headline text-2xl md:text-headline-lg text-primary font-bold">
              Breakfast
            </h2>
            <div className="h-[1px] flex-grow bg-outline-variant/50" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Signature Breakfast Item */}
            <div className="col-span-1 md:col-span-2 group relative overflow-hidden rounded-2xl bg-surface border border-outline-variant/20 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row h-full">
                <div className="lg:w-1/2 h-64 lg:h-auto overflow-hidden relative">
                  <img
                    alt="Rothesay Coastal Smash Toast"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCasIKxxWCcZqUBCe3r4PW-lq1xFQz8Hc8DmbVmtF8ejdpQ9Xmw9qgFaLJFPq4ESxulYvwbk6J_8nREEhjeH8pjaPzoCMCRdJsoGVgcqO6uAddQXuLwI8aOjXdJG-OzfGwl7q1AxEu83w8Vvh4_DkIS62WaW_mIdN-Vcwkz_w-CFJ1esbYRmFCXbaVg2T9CmqZ3jOP_DmVzmt0hMDquBLOpdEICwdsfiHWRHpg_ygjh7tniRjarWMSIGc5xZvM7o1hAUbreLhkHbbw"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    Signature
                  </div>
                </div>
                <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-headline text-2xl text-on-surface font-semibold">
                      Rothesay Coastal Smash
                    </h3>
                    <span className="font-headline text-xl text-primary font-bold">$24</span>
                  </div>
                  <p className="font-body text-sm text-on-surface-variant mb-6 leading-relaxed">
                    Smashed avocado on house-made sourdough, poached organic eggs, feta, toasted pumpkin seeds, and a drizzle of chili-infused olive oil.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 border border-primary/30 rounded-full text-[10px] font-body font-bold text-primary uppercase tracking-wider">
                      Vegetarian
                    </span>
                    <span className="px-3 py-1 border border-primary/30 rounded-full text-[10px] font-body font-bold text-primary uppercase tracking-wider">
                      Organic
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Breakfast Regular Items */}
            <div className="space-y-6">
              <div className="border-b border-outline-variant/30 pb-4">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="font-headline text-lg text-on-surface font-semibold">
                    Artisanal Granola Bowl
                  </h4>
                  <span className="font-headline text-base text-primary font-bold">$18</span>
                </div>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  House-baked nutty granola, seasonal berries, coconut yogurt, and local Rothesay honey.
                </p>
              </div>

              <div className="border-b border-outline-variant/30 pb-4">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="font-headline text-lg text-on-surface font-semibold">
                    Wild Mushroom Omelette
                  </h4>
                  <span className="font-headline text-base text-primary font-bold">$22</span>
                </div>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  Three organic eggs, sautéed forest mushrooms, gruyère cheese, and fresh thyme.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-b border-outline-variant/30 pb-4">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="font-headline text-lg text-on-surface font-semibold">
                    Brioche French Toast
                  </h4>
                  <span className="font-headline text-base text-primary font-bold">$20</span>
                </div>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  Thick-cut brioche, caramelized bananas, vanilla bean mascarpone, and pure maple syrup.
                </p>
              </div>

              <div className="border-b border-outline-variant/30 pb-4">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="font-headline text-lg text-on-surface font-semibold">
                    Traditional Bay Breakfast
                  </h4>
                  <span className="font-headline text-base text-primary font-bold">$26</span>
                </div>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  Poached eggs, artisanal bacon, roasted tomatoes, field mushrooms, and toasted sourdough.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Lunch Section */}
        <section id="lunch" className="scroll-mt-36">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="font-headline text-2xl md:text-headline-lg text-primary font-bold">
              Lunch
            </h2>
            <div className="h-[1px] flex-grow bg-outline-variant/50" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured Lunch Card */}
            <div className="bg-surface border border-outline-variant/20 rounded-2xl overflow-hidden shadow-sm flex flex-col group">
              <div className="h-64 overflow-hidden relative">
                <img
                  alt="Harvest Salad Bowl"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwU5o-lBDIJM9RaxOjvHdQLjB5c8mi7oFhROHP5gDFJ4Of8eXgd_Qve0m-Wz0cjxQSfKWSLaomxvKmjJuUnnz1MjXDSA5g3KQTeFcTTFyUmMhQEBNNs4ifM04cXjSFQNGfxirgem5xRqc3bJ5cWTbRwV0WCy6xobbGBoe5JAeyX51w-ijiUbnh0n8F0M6jJFNM5GrVhLFckZrvGDHnCtPZb4ZmpnuKxJ5g81wr4ok_QYQ-7ueLb6qfuQ6wSdUq0Tyu6iPPMk26EN4"
                />
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-headline text-xl text-on-surface font-semibold">
                      Harvest Bowl
                    </h3>
                    <span className="font-headline text-lg text-primary font-bold">$21</span>
                  </div>
                  <p className="font-body text-sm text-on-surface-variant mb-6 leading-relaxed">
                    Roasted seasonal vegetables, tri-color quinoa, pickled cabbage, and creamy tahini dressing.
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 border border-primary/20 rounded-full text-[10px] font-body font-bold text-primary uppercase tracking-wider">
                    Vegan
                  </span>
                  <span className="px-3 py-1 border border-primary/20 rounded-full text-[10px] font-body font-bold text-primary uppercase tracking-wider">
                    GF
                  </span>
                </div>
              </div>
            </div>

            {/* Lunch Items Grid */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 bg-surface-container-low p-8 rounded-2xl border border-outline-variant/20">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="font-headline text-lg text-on-surface font-semibold">
                      Coastal Seafood Linguine
                    </h4>
                    <span className="text-primary font-headline text-base font-bold">$28</span>
                  </div>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                    Local mussels, prawns, garlic, chili, white wine butter sauce, and fresh parsley.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="font-headline text-lg text-on-surface font-semibold">
                      Wagyu Beef Burger
                    </h4>
                    <span className="text-primary font-headline text-base font-bold">$25</span>
                  </div>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                    Grass-fed wagyu, aged cheddar, caramelized onions, truffle aioli on a brioche bun.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="font-headline text-lg text-on-surface font-semibold">
                      Pan-Seared Snapper
                    </h4>
                    <span className="text-primary font-headline text-base font-bold">$32</span>
                  </div>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                    Fresh local snapper, lemon butter sauce, crushed baby potatoes, and grilled asparagus.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="font-headline text-lg text-on-surface font-semibold">
                      Chicken & Avocado Melt
                    </h4>
                    <span className="text-primary font-headline text-base font-bold">$23</span>
                  </div>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                    Grilled chicken breast, avocado, Swiss cheese, and pesto on toasted ciabatta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dinner Section */}
        <section id="dinner" className="scroll-mt-36">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="font-headline text-2xl md:text-headline-lg text-primary font-bold">
              Dinner
            </h2>
            <div className="h-[1px] flex-grow bg-outline-variant/50" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Dinner Items list */}
            <div className="flex flex-col justify-between space-y-6">
              <div className="group">
                <div className="flex justify-between items-baseline mb-2 border-b border-outline-variant/30 pb-3">
                  <h3 className="font-headline text-xl text-on-surface font-semibold hover:text-primary transition-colors">
                    Herb-Crusted Lamb Rack
                  </h3>
                  <span className="font-headline text-lg text-primary font-bold">$42</span>
                </div>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed italic">
                  New Zealand lamb, pea purée, roasted heritage carrots, and red wine jus.
                </p>
              </div>

              <div className="group">
                <div className="flex justify-between items-baseline mb-2 border-b border-outline-variant/30 pb-3">
                  <h3 className="font-headline text-xl text-on-surface font-semibold hover:text-primary transition-colors">
                    Mushroom & Truffle Risotto
                  </h3>
                  <span className="font-headline text-lg text-primary font-bold">$34</span>
                </div>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed italic">
                  Arborio rice, wild mushrooms, white truffle oil, and aged parmesan shavings.
                </p>
              </div>

              <div className="group">
                <div className="flex justify-between items-baseline mb-2 border-b border-outline-variant/30 pb-3">
                  <h3 className="font-headline text-xl text-on-surface font-semibold hover:text-primary transition-colors">
                    Ribeye with Bone Marrow
                  </h3>
                  <span className="font-headline text-lg text-primary font-bold">$48</span>
                </div>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed italic">
                  300g premium ribeye, roasted bone marrow, garlic butter, and hand-cut chips.
                </p>
              </div>
            </div>

            {/* Chef's selection banner card */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-outline-variant/20 relative h-72 md:h-auto min-h-[350px] group">
              <div className="absolute inset-0 bg-black/30 z-10 group-hover:bg-black/20 transition-all duration-300" />
              <img
                alt="Dinner Feature"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 absolute inset-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyVG762iMB95GHqv8kV1S3vTC3JuUKhCD0KCLObwOtXEqF-8kn-m5vHtZeaHPemD2ekaRLUEu8tHe6GdzMLwXWeHMDHtET_D6YLP_1GgPULOgE76njySTORGupDG4RnKBQ5BkBUG-LM2R6OpBJxGXyoPWoOASnllRC2NFTeiahtziezW9EspPOiFXAJ5wI6Gkez0INOUPZDzmW6JjDOCB9xG3NhGpVmkyunor9l8FSvlOk3xwAzS8jB03sNeINKjz1F1uiXJViCxs"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 text-white">
                <span className="font-body text-xs font-bold tracking-widest uppercase mb-2">
                  Chef's Selection
                </span>
                <h3 className="font-headline text-3xl font-bold leading-tight">
                  Artisanal Evening Experience
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Drinks Section */}
        <section id="drinks" className="scroll-mt-36">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="font-headline text-2xl md:text-headline-lg text-primary font-bold">
              Drinks & Spirits
            </h2>
            <div className="h-[1px] flex-grow bg-outline-variant/50" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Coffee Card */}
            <div className="p-6 bg-surface-container rounded-2xl border border-outline-variant/10">
              <h3 className="font-headline text-lg text-primary font-bold mb-4 border-b border-outline-variant/20 pb-2">
                Coffee
              </h3>
              <div className="space-y-3 font-body text-sm text-on-surface-variant">
                <div className="flex justify-between">
                  <span className="font-semibold">Flat White</span>
                  <span>$5.5</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Latte</span>
                  <span>$5.5</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Long Black</span>
                  <span>$4.5</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Cold Brew</span>
                  <span>$6.5</span>
                </div>
              </div>
            </div>

            {/* Tea Card */}
            <div className="p-6 bg-surface-container rounded-2xl border border-outline-variant/10">
              <h3 className="font-headline text-lg text-primary font-bold mb-4 border-b border-outline-variant/20 pb-2">
                Tea & Wellness
              </h3>
              <div className="space-y-3 font-body text-sm text-on-surface-variant">
                <div className="flex justify-between">
                  <span className="font-semibold">Earl Grey</span>
                  <span>$5.0</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Peppermint</span>
                  <span>$5.0</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Matcha Latte</span>
                  <span>$6.5</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Fresh Ginger</span>
                  <span>$5.5</span>
                </div>
              </div>
            </div>

            {/* Cocktails Card */}
            <div className="p-6 bg-surface-container rounded-2xl border border-outline-variant/10">
              <h3 className="font-headline text-lg text-primary font-bold mb-4 border-b border-outline-variant/20 pb-2">
                Cocktails
              </h3>
              <div className="space-y-3 font-body text-sm text-on-surface-variant">
                <div className="flex justify-between">
                  <span className="font-semibold">Bay Martini</span>
                  <span>$18</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Coastal Spritz</span>
                  <span>$16</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Old Fashioned</span>
                  <span>$20</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Negroni</span>
                  <span>$19</span>
                </div>
              </div>
            </div>

            {/* Wine Card */}
            <div className="p-6 bg-surface-container rounded-2xl border border-outline-variant/10">
              <h3 className="font-headline text-lg text-primary font-bold mb-4 border-b border-outline-variant/20 pb-2">
                Wine
              </h3>
              <div className="space-y-3 font-body text-sm text-on-surface-variant">
                <div className="flex justify-between">
                  <span className="font-semibold">Chardonnay</span>
                  <span>$14</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Pinot Noir</span>
                  <span>$15</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Sauvignon Blanc</span>
                  <span>$13</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Rosé</span>
                  <span>$14</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Desserts Section */}
        <section id="desserts" className="scroll-mt-36">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="font-headline text-2xl md:text-headline-lg text-primary font-bold">
              Desserts
            </h2>
            <div className="h-[1px] flex-grow bg-outline-variant/50" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Item 1 */}
            <div className="flex flex-col sm:flex-row items-center gap-6 bg-surface p-6 rounded-2xl border border-outline-variant/25 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-28 h-28 rounded-full overflow-hidden flex-shrink-0 relative">
                <img
                  alt="Chocolate Fondant Dessert"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyZnLZ8ZNo0ZW6DC4S4-r4MMJ_mOPCzIfWvT1MjjwqOfZK1lXLo0WZ8h1c9tpnxGUL6QgmrY_ktCOtW3BcajPFBFo-nr3ZRHPeoDiB_MJzXiJ-8QYMOMMnGa-tWgj9askcPhwURulkP4qGtWltwW0i-7r0fSn30dC_wwNrA8ADz855JVw41lqFbypDOExT_ptuQy6Hs9qzUvNXcEul247nYqcb8iAdOHpVQc1eeFhSIpJmpglWparwjRTW4suPTvockzNhL0QC6Ko"
                />
              </div>
              <div className="flex-grow text-center sm:text-left">
                <div className="flex flex-col sm:flex-row justify-between items-center sm:items-baseline mb-2">
                  <h3 className="font-headline text-xl text-on-surface font-semibold">
                    Dark Chocolate Fondant
                  </h3>
                  <span className="text-primary font-headline text-base font-bold">$16</span>
                </div>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  Warm molten center, served with vanilla bean gelato and hazelnut crumble.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col sm:flex-row items-center gap-6 bg-surface p-6 rounded-2xl border border-outline-variant/25 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-28 h-28 rounded-full overflow-hidden flex-shrink-0 relative">
                <img
                  alt="Lemon Curd Tart Dessert"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbsb_CbUHE4gkyvBMvHGmyyGin8zphZ1tX2RHXJHe-Vb2PnpKLAJYERm0Kkpu3BqRrttJhbsqIpiEBB1TjKG9bdAEPBRhvcGWKcJuUyM2-rEzGnTTfO7bpFwiVuoaTWgnEMduFnQB3Q8NS1-wYXA72HHX3DrhFX0RiginEwC-uJk2WfPuhgbEyAcDqQLFwAMZfMMXhs0OfwP-hm35-Lo3I4p3-EkZvHY6nG4sZQpDw3WGNIvbsndWvuNbrvzserk2EFIvHAYIvE4U"
                />
              </div>
              <div className="flex-grow text-center sm:text-left">
                <div className="flex flex-col sm:flex-row justify-between items-center sm:items-baseline mb-2">
                  <h3 className="font-headline text-xl text-on-surface font-semibold">
                    Lemon Curd Tart
                  </h3>
                  <span className="text-primary font-headline text-base font-bold">$14</span>
                </div>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  Buttery shortcrust pastry, tangy lemon curd, and torched meringue kisses.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
