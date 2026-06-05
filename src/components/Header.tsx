"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useBooking } from "@/context/BookingContext";
import BookingModal from "./BookingModal";

export default function Header() {
  const pathname = usePathname();
  const { openBooking } = useBooking();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Gallery", href: "/gallery" },
    { name: "Location", href: "/location" },
  ];

  const isDarkHeroPage = pathname === "/" || pathname === "/menu";
  const useTransparentHeader = isDarkHeroPage && !isScrolled;

  return (
    <>
      <header
        className={`sticky top-0 w-full z-50 transition-all duration-350 ${
          useTransparentHeader
            ? "bg-transparent py-4"
            : "bg-background/95 backdrop-blur-md py-2 shadow-sm border-b border-outline-variant/10"
        }`}
      >
        <nav className="flex justify-between items-center px-6 md:px-gutter max-w-container-max mx-auto">
          {/* Logo */}
          <Link
            href="/"
            className={`font-headline text-headline-sm flex items-center gap-2 group cursor-pointer transition-colors duration-300 ${
              useTransparentHeader ? "text-white" : "text-primary"
            }`}
          >
            <img
              alt="Eatery at Rothesay Bay Logo"
              className={`h-10 w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                useTransparentHeader ? "brightness-0 invert" : ""
              }`}
              src="/logo.png"
            />
            <div className="flex flex-col leading-none">
              <span className="font-headline text-headline-sm tracking-wider uppercase font-semibold">
                Eatery
              </span>
              <span className="font-body text-[10px] tracking-widest opacity-70 font-medium uppercase">
                at Rothesay Bay
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-body text-sm font-semibold tracking-wider transition-all duration-200 pb-1 ${
                    isActive
                      ? useTransparentHeader
                        ? "text-white border-b-2 border-white"
                        : "text-primary border-b-2 border-primary"
                      : useTransparentHeader
                      ? "text-white/80 hover:text-white"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Booking CTA Button (Desktop) */}
          <button
            onClick={openBooking}
            className={`hidden md:block px-6 py-2.5 rounded-full font-body text-xs font-semibold tracking-wider uppercase active:scale-95 transition-all ${
              useTransparentHeader
                ? "bg-white/20 text-white hover:bg-white/30 border border-white/30"
                : "bg-primary-container text-on-primary-container hover:opacity-85"
            }`}
          >
            Book a Table
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 focus:outline-none transition-colors duration-300 ${
              useTransparentHeader ? "text-white" : "text-primary"
            }`}
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-background border-t border-outline-variant/30 shadow-md transition-all duration-300 ease-in-out origin-top ${
            isMobileMenuOpen
              ? "opacity-100 scale-y-100 pointer-events-auto"
              : "opacity-0 scale-y-0 pointer-events-none"
          }`}
        >
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-body text-base font-semibold tracking-wider transition-colors duration-200 py-2 ${
                    isActive
                      ? "text-primary border-l-4 border-primary pl-3"
                      : "text-on-surface-variant pl-3 hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                openBooking();
              }}
              className="w-full mt-2 bg-primary text-on-primary px-6 py-3 rounded-xl font-body text-sm font-semibold tracking-wider uppercase hover:opacity-95 transition-all text-center"
            >
              Book a Table
            </button>
          </div>
        </div>
      </header>

      {/* Reservation Dialog Modal */}
      <BookingModal />
    </>
  );
}
