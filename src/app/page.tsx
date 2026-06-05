"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useBooking } from "@/context/BookingContext";

export default function Home() {
  const { openBooking } = useBooking();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-[calc(100vh+72px)] flex items-center overflow-hidden -mt-[72px] pt-[72px]">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover object-[8%_5%]"
            alt="Warm and inviting coastal cafe interior"
            src="/hero.jpg"
          />
          {/* Smooth dark gradient fading from left (85%) to transparent on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="w-full max-w-container-max mx-auto px-6 md:px-gutter z-10 relative -top-8">
          <div
            className={`max-w-2xl text-left transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
          >
            <h1 className="font-headline text-4xl sm:text-5xl md:text-headline-xl text-white mb-6 font-bold tracking-tight drop-shadow-lg leading-tight">
              A Place to Relax, Connect & Feel at Home
            </h1>
            <p className="font-body text-base sm:text-body-lg text-white/90 mb-10 leading-relaxed drop-shadow-md font-medium">
              At the heart of our café is our community!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start items-start sm:items-center">
              <Link
                href="/menu"
                className="bg-primary text-on-primary px-8 py-4 rounded-full font-body text-sm font-bold uppercase tracking-wider hover:translate-y-[-2px] hover:shadow-md transition-all duration-200 shadow-lg cursor-pointer text-center"
              >
                Explore Menu
              </Link>
              <Link
                href="/location"
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-body text-sm font-bold uppercase tracking-wider hover:bg-white/20 hover:translate-y-[-2px] transition-all duration-200 cursor-pointer text-center"
              >
                Find Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Values */}
      <section className="py-20 px-6 md:px-gutter max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="text-center p-8 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:shadow-md transition-all duration-300">
            <span className="material-symbols-outlined text-primary text-5xl mb-4">
              desktop_access_disabled
            </span>
            <h3 className="font-headline text-xl md:text-headline-sm text-primary mb-3 font-semibold">
              No TV Policy
            </h3>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">
              We prioritize conversation and presence. A sanctuary from the digital noise, designed for real human connection.
            </p>
          </div>

          {/* Card 2 */}
          <div className="text-center p-8 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:shadow-md transition-all duration-300">
            <span className="material-symbols-outlined text-primary text-5xl mb-4">
              family_restroom
            </span>
            <h3 className="font-headline text-xl md:text-headline-sm text-primary mb-3 font-semibold">
              Family-Friendly
            </h3>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">
              Space for the whole family, with a warm atmosphere where children are welcomed and the community gathers.
            </p>
          </div>

          {/* Card 3 */}
          <div className="text-center p-8 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:shadow-md transition-all duration-300">
            <span className="material-symbols-outlined text-primary text-5xl mb-4">
              restaurant
            </span>
            <h3 className="font-headline text-xl md:text-headline-sm text-primary mb-3 font-semibold">
              Refined Presentation
            </h3>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">
              Organic ingredients served with an artisanal touch. High-quality dining without the pretension of fine dining.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Food */}
      <section className="bg-surface-container py-20">
        <div className="max-w-container-max mx-auto px-6 md:px-gutter">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
            <div className="max-w-xl">
              <span className="text-primary font-body text-xs font-bold tracking-widest uppercase mb-2 block">
                Our Kitchen
              </span>
              <h2 className="font-headline text-3xl md:text-headline-lg text-on-surface font-bold leading-tight">
                Signature Dishes
              </h2>
            </div>
            <Link
              href="/menu"
              className="flex items-center gap-2 text-primary font-body text-xs font-bold uppercase tracking-wider hover:gap-4 transition-all"
            >
              View Full Menu <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Item 1 */}
            <div className="bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="h-64 sm:h-80 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Coastal Sourdough Stack with avocado and eggs"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMYqkkQGq3gWmlNCR5myCRw7S4hCr5IrLVLRqDcXijuZ-0cLbL3JaUvF62WmxpU3TCOHY8FhmlYKoHH8CjTQJpZdVGzhzydBFoEY4xKPa6nH0QD4LD394-r-mdnhN1Rv9ArMr3OLOzHg2Jj3PLLamH74WrRRqILbMuOn5i29CtqKbKVZzDLgpHffXXPratIAtRMyRHiBJDjrGKIvTCGaThLKp6oFlGiAqIhQ5V9mb7fNQ7rZtJemiK9jmHSK3ZLoaz0pbddgMk4W8"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-headline text-xl md:text-headline-sm text-primary font-semibold">
                    Coastal Sourdough Stack
                  </h4>
                  <span className="text-primary font-headline text-lg font-bold">$24.00</span>
                </div>
                <p className="font-body text-sm text-on-surface-variant mb-6 leading-relaxed">
                  Artisanal sourdough, smashed avocado, heirloom tomatoes, and locally sourced micro-greens with a lemon-herb oil drizzle.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 border border-primary/20 rounded-full text-[10px] font-body font-bold text-primary uppercase tracking-wider">
                    Vegan Option
                  </span>
                  <span className="px-3 py-1 border border-primary/20 rounded-full text-[10px] font-body font-bold text-primary uppercase tracking-wider">
                    GF
                  </span>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="h-64 sm:h-80 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Artisanal Latte Art with freshly baked pastry"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAO4bXQFIpef8RqkOjXE6qzeHA6goeBwOdVYrccSixcsRHgHXdSObIbh6o8VNRyCKC3HC-kQ2po6ivtOYw_kflwXEct3VK77XPdPfpAbfOymGYLZQG59K6YICeJ_HNTqlLjv5nDO2LbeKiMqHHgWYo1yLTw9V-oLXV1R3kleRk9t-FNYWtxwCWjXYqu-IK-S5ZTXPvnClLhpA8K45lX5EliQKm5BR_ZtbQPuS9CbiuqtL9EyIa_obgCsnt14Zq0j3MCz4MhJuD6vWc"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-headline text-xl md:text-headline-sm text-primary font-semibold">
                    Artisanal Roast & Pastry
                  </h4>
                  <span className="text-primary font-headline text-lg font-bold">$14.00</span>
                </div>
                <p className="font-body text-sm text-on-surface-variant mb-6 leading-relaxed">
                  Single-origin beans roasted locally, served with your choice of our daily-baked house pastries. Refined and simple.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 border border-primary/20 rounded-full text-[10px] font-body font-bold text-primary uppercase tracking-wider">
                    Daily Special
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview Bento Grid */}
      <section className="py-20 px-6 md:px-gutter max-w-container-max mx-auto">
        <h2 className="font-headline text-3xl md:text-headline-lg text-center mb-12 font-bold">
          Life at Rothesay Bay
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 h-[600px] md:h-[500px]">
          {/* Main Large Image */}
          <div className="col-span-2 row-span-2 overflow-hidden rounded-2xl relative group cursor-pointer">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              alt="People talking in a sun-drenched cafe"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAblTUpM1PLjrFAViG2MsPNG3VFURjhfVR0ZWBUKJv7dKDEy_Z0GTvGmWcnEo7Ou7f6qL6MB0XQLnTG4toeHbgMJ2rIc8FN13KK6bS16QZ3pFJTnecch7bFV2pxdw3vOo_-IeVpQoYvhTXSeLiuZf5XcPNP2ESpCmtQ3zn7VcbMn9nP3SDJeoht40bc9y8jqTkwFFWOub6-QzO917zAJi9vLS23wBTBLSdnEqDcQVz9jQ0E-Msr4z-YGhrDm1v1AEZ8BMK_jhGRliM"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-on-primary font-body text-xs font-bold uppercase tracking-wider">
                Community Mornings
              </span>
            </div>
          </div>

          {/* Medium Horizontal Image */}
          <div className="col-span-2 row-span-1 overflow-hidden rounded-2xl relative group cursor-pointer">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              alt="Hands holding a warm cup of coffee"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBc7B25Ao4VEOKs0pScTR9ZT_ETR1fO83shcbmpAlCo5VU7WYT3DpVCjh7WbfCRfvzraeW7OWIWRVaaBx-G_qeQ1CjsNpEdO8dwZ2UziGllGB6bfEFjmzvjG35SZEwgS5ZBQIx3Wa3P0Ho67M0z0asgQHhqPg6qjpZfLCl6pRoflgmu7XLSEaWI9txg6fAK0DwA1AqJhMZNohnjzDMzmakWsqnPUTzjd3OucoNyxh62U_GQbd3yDuJJssRdVjy3GZmPkeIrSDbHe4"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-on-primary font-body text-xs font-bold uppercase tracking-wider">
                Tactile Rituals
              </span>
            </div>
          </div>

          {/* Small Square Image 1 */}
          <div className="col-span-1 row-span-1 overflow-hidden rounded-2xl relative group cursor-pointer">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              alt="Minimalist cafe exterior"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuAmDXvRJFKolV5DQjjgsKHOx1Kg3for9-Xgp0URZx3jybNINjZdFLeJ6zrOoUtX5nfLytgnFjhgDctkeEiJNAvCbUctyZAJRftN1g7hGthFeX4EQa_mtYAkIkV-8H0pLTWcULnuMJ6cu33V7jCUna6ZmyNNwYd_glWhDQZ1sU_pFHXrO7yp67kZdvUQqaX6pP5tcGYRJKAEefe4hfFlgmclX6KKwkN7gfoHygWaGfXf_TZtI9CYC-ZTuUyK95OtoIPsXjAi09I_M"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-on-primary font-body text-[10px] font-bold uppercase tracking-wider">
                Coastal Design
              </span>
            </div>
          </div>

          {/* Small Square Image 2 */}
          <div className="col-span-1 row-span-1 overflow-hidden rounded-2xl relative group cursor-pointer">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              alt="Fresh pastries on marble counter"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpw9BRVXd2HWfR9UGYhrzWdXlEj0Te8wdNKDYrAgmsr8kcSl-UXh8cUuX1ItVJgfrXv6wyU3RwCGZ844QbMelBu5YjNbkverWcxVQ_e5RL4gMI28ywlBlHlb-HMmGP8Rn18_qrleiyDDuDmAhokhp5H5JicMFWPY1c5cA5K27Anv4b_WJDcUWEMTl9mmmuEzEVfGFe5f95nBxf9N2eyGFHMh8Z6ZkGRszq1PAHkJT2ipAlHtyg35UAEEqok5_wXmNYocgUxmGGttk"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-on-primary font-body text-[10px] font-bold uppercase tracking-wider">
                Daily Bake
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/gallery"
            className="inline-block px-8 py-3.5 border-2 border-primary text-primary font-body text-xs font-bold uppercase tracking-wider rounded-full hover:bg-primary hover:text-on-primary transition-all duration-300"
          >
            View More Moments
          </Link>
        </div>
      </section>

      {/* Location Preview Banner */}
      <section className="py-20 bg-surface-container-low border-t border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-6 md:px-gutter grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl md:text-headline-lg text-primary font-bold leading-tight">
              Visit Us by the Bay
            </h2>
            <div className="space-y-6 font-body text-sm text-on-surface-variant">
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-primary text-2xl">
                  location_on
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
                    Address
                  </p>
                  <p className="leading-relaxed">
                    45 Rothesay Bay Road,
                    <br />
                    Auckland, New Zealand
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="material-symbols-outlined text-primary text-2xl">schedule</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
                    Hours
                  </p>
                  <ul className="space-y-1">
                    <li>Mon – Fri: 7:00am – 4:00pm</li>
                    <li>Sat – Sun: 8:00am – 3:00pm</li>
                  </ul>
                </div>
              </div>
            </div>

            <Link
              href="/location"
              className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-3 rounded-xl font-body text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Get Directions{" "}
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </Link>
          </div>

          {/* Map Image container */}
          <div className="h-80 md:h-[400px] bg-surface rounded-2xl overflow-hidden border border-outline-variant/30 relative shadow-sm">
            <div className="absolute inset-0 bg-[#f0ede9]">
              <img
                className="w-full h-full object-cover opacity-60 filter grayscale-[20%] contrast-[110%]"
                alt="Map showing Rothesay Bay location"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjhLusR9qgvn5YUOX6RpanvKMwgxciO25SKg2Wb8-QZwSVCGplao4ifB_TFFf9oZnImgeaUZwI9uUUgN9DsmIbRy4oBf2qaYq8DUzKW7Py8MMBz58Xah27P61nmAFZZ3ql3-5Q_M2hFCi5z2BAxENXAn0Tt6dZ23kZxhr_8m838zqoPnTjFPWvKu_yAn7K8adVxZNr-DE-A3-0d_H_FH6CI6ApkP95KN6cFhEnxGLZXUldEk-P5KzXupCE4BMb9kED3j4Rh1cImvU"
              />
              <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <span
                  className="material-symbols-outlined text-primary text-5xl mb-2 animate-bounce"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  location_on
                </span>
                <div className="bg-background px-4 py-2 rounded-xl shadow-md border border-primary/10">
                  <p className="font-body text-xs font-bold text-primary tracking-wide">
                    Eatery at Rothesay Bay
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
