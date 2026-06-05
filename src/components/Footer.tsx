"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 5000); // Reset after 5s
  };

  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/30 py-16 w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-gutter max-w-container-max mx-auto">
        {/* Brand Column */}
        <div className="space-y-4">
          <Link
            href="/"
            className="font-headline text-headline-sm text-primary flex items-center gap-2 group cursor-pointer"
          >
            <img
              alt="Eatery Logo"
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
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
          <p className="font-body text-body-md text-on-surface-variant max-w-xs leading-relaxed">
            Your local coastal retreat for high-quality, organic food and artisanal coffee. A place where community comes first.
          </p>
          <div className="flex gap-4 pt-2">
            <a
              href="https://www.instagram.com/eatery_at_rothesay_bay/"
              className="hover:opacity-75 transition-opacity"
              aria-label="Instagram"
            >
              <svg className="h-5 w-5 text-primary fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/EateryatRothesayBay/"
              className="hover:opacity-75 transition-opacity"
              aria-label="Facebook"
            >
              <svg className="h-5 w-5 text-primary fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Links Columns */}
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h5 className="font-body text-xs font-bold text-primary uppercase tracking-widest">
              Explore
            </h5>
            <ul className="space-y-2.5 font-body text-sm text-on-surface-variant">
              <li>
                <Link href="/menu" className="hover:text-primary transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/location" className="hover:text-primary transition-colors">
                  Location
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="font-body text-xs font-bold text-primary uppercase tracking-widest">
              Legal
            </h5>
            <ul className="space-y-2.5 font-body text-sm text-on-surface-variant">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Column */}
        <div className="space-y-4">
          <h5 className="font-body text-xs font-bold text-primary uppercase tracking-widest">
            Newsletter
          </h5>
          <p className="font-body text-sm text-on-surface-variant leading-relaxed">
            Join our community for weekly specials, coastal stories, and event updates.
          </p>
          {subscribed ? (
            <div className="bg-primary/10 border border-primary/20 text-primary rounded-xl p-3 text-sm font-semibold text-center animate-pulse">
              ✓ Subscribed! Thank you for joining.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="bg-background border border-outline-variant rounded-xl w-full px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              />
              <button
                type="submit"
                className="bg-primary text-on-primary px-5 rounded-xl font-body text-xs font-bold uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all"
              >
                Join
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-6 md:px-gutter mt-12 pt-8 border-t border-outline-variant/30 text-center font-body text-xs text-on-surface-variant opacity-70">
        <p>© {new Date().getFullYear()} Eatery at Rothesay Bay. All rights reserved.</p>
      </div>
    </footer>
  );
}
