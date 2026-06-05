"use client";

import { useState, useEffect } from "react";

interface GalleryItem {
  id: number;
  title: string;
  category: "interior" | "food" | "community";
  size: "tall" | "medium" | "short";
  src: string;
}

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 0,
      title: "Interior Detail",
      category: "interior",
      size: "tall",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6NESK2kH6bhj3gENXxxv-2ALSp1m-fW04euR1rR5O1RkR13HugErLf8yXCNVs1BykgY52pMZkrql5i0qZN4FBapyUfOoOsg4VDUzivHPjwLwRkcML0ouuMYHU_xVwDnpEmVvmCqvjjz_lpTTDnYNZ7z532ZdMCDBG8GJdoXbln6PtKzClz1F8g64gl_EktVbt7SnZ98MY_1SyS3YKBwF5jGEwYCRKUA1obvLPFzANz_gQZ3CvYn8uz3WATf9QsxHB0V4_5Vwi8KA",
    },
    {
      id: 1,
      title: "Artisanal Brew",
      category: "food",
      size: "medium",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD72upsRXGN6EnpXuLUXI1OrK1I_GcqT0tO9eMf4im-qPrjXYJZPlhfU_GAnScg2wEdJtE8CH_gJoaTS9oZvbKeEDPux4MPSbCLg2YJVC9novZelePX8TC79HYITejmGSHolL411k0Hd4YRtwYo04rYgRulkQos-1_eOMImOKl54D4jKjXGWjpHJQaEJWSdFDEtbshI4uxAej8eY_EqKLDkYzo9GNuljlnCTW-I6uycUPm3K4TRHtbC9lvxzSzXM_Sh7wMD7L-76fo",
    },
    {
      id: 2,
      title: "Daily Bake",
      category: "food",
      size: "short",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTT548jKudR_SNCDjUNM3e_Di9Rofwvwpbw7ifTO_-mQr4MKGDMJDVovLulVNumkQUeuhKDnGAK6jtm_072YovP_16bCGrSfj6x_UNgnFOAsPP0TmuPE4fX3mLOz-LbSLjZUOacIjAqpJYXUV5hbpuTpIhPvF0_ftfGj6ezMU7P5ger8xRysGL61Fn-0Jnes2Mrhsq-aVxUkD0JM0vSMTDoW1-6gsoYUJnMIbbdYrUKCLoGCnEymOMZiGaREUFEUTob5k9VrdL7P8",
    },
    {
      id: 3,
      title: "Our People",
      category: "community",
      size: "tall",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6zQ7ImhooY93zBY3TzOPNQ4cwG-cvl0WwGtuH_z96j8Hv1RbE9KVtc-G04bZIRQAEMXmAO2KJJNDuPuZ9ycljseK9qDYyfgvUScRu3Gs77ej7Deenwi-hcD8KDLMMhU2-xEtKW6A_PbTdB3EFqw6fffTmgIgXWNW1nsnJ2vtmUoyvV1T3uHNBVosCbBZT1tjOJ44vtz3nCEc1cfbLBU9XhRjZ253fXA0EbEUC0mJfbtK__wjEhBzMsXUBmgkkuTwltzDBmboCPdc",
    },
    {
      id: 4,
      title: "The Bay View",
      category: "interior",
      size: "medium",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDF8Uj2gJXD-0ZL02zQE9qN0OU4NxOcnbAmA5bJYsGQ4g1P6Rrv9rSEhgdUpw6yrGftHsKQioZAK3TBsm5jh7S9ARXEl28sDC_5BgV7dpzGNGNQ1Qxkb3BJSJWw9PwgrMCz8YWqLfx-gpxOYX0vdB8baUS15EkNZGlVsA1bnUiU1W6hW7lahYvtDyiyy8FuUHDXCvqppCvBGQRYpqLY0MErijxj7SbpM2tRKvcaK7gF1ML09ZMU1c893KHqs7MMIXtPgjr9l2p6BoQ",
    },
    {
      id: 5,
      title: "Seasonal Special",
      category: "food",
      size: "medium",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1rAa6QMGqQN-bu9P7nNrx5sRMESsphS3yGkI8zVzK3sL3wnmNmSWLiMFR8pAuw6RbYx6ZisB2-sAmNhghAH1PAvhBWAHVoJCZtLn_pc6W5WIojhUFCHp8kd2DmwTvXgUxe4nJ9K5k-XPUmeCLCQXhYGxmFBop3dSq4ExOmz8TA1lwkEDGad1V0tgtx-Msd1lyg4no0oiM-5NfGYfJzrMQwmB4VRAJb46vERE3KfYbBjFORbfA3ub4RXyExMefXmWlmsOJGLjJdWQ",
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null));
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredItems]);

  const openLightbox = (id: number) => {
    const index = filteredItems.findIndex((item) => item.id === id);
    if (index !== -1) {
      setLightboxIndex(index);
    }
  };

  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div className="max-w-container-max mx-auto px-6 md:px-gutter py-16">
      {/* Header */}
      <header className="text-center mb-16 max-w-2xl mx-auto">
        <h1 className="font-headline text-4xl md:text-headline-xl text-primary font-bold mb-4">
          Visual Stories
        </h1>
        <p className="font-body text-base text-on-surface-variant leading-relaxed">
          A glimpse into the warmth of Rothesay Bay. From our artisanal organic brews to the community that makes this café a home.
        </p>
      </header>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {[
          { label: "All", value: "all" },
          { label: "Interior", value: "interior" },
          { label: "Food & Drink", value: "food" },
          { label: "Community", value: "community" },
        ].map((btn) => {
          const isActive = selectedCategory === btn.value;
          return (
            <button
              key={btn.value}
              onClick={() => {
                setSelectedCategory(btn.value);
                setLightboxIndex(null);
              }}
              className={`px-6 py-2 rounded-full border text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                isActive
                  ? "bg-primary border-primary text-on-primary shadow-sm"
                  : "border-outline text-on-surface-variant hover:border-primary hover:text-primary"
              }`}
            >
              {btn.label}
            </button>
          );
        })}
      </div>

      {/* Masonry Bento Grid */}
      <div className="masonry-grid min-h-[600px] transition-all duration-500">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => openLightbox(item.id)}
            className={`masonry-item ${item.size} group cursor-pointer overflow-hidden rounded-2xl bg-surface-container relative image-zoom border border-outline-variant/20 hover:shadow-md transition-all duration-300`}
          >
            <img
              className="w-full h-full object-cover transition-transform duration-700"
              alt={item.title}
              src={item.src}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-on-primary font-body text-xs font-bold uppercase tracking-wider">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-on-surface/95 backdrop-blur-md flex flex-col items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-background hover:text-primary p-2 rounded-full bg-on-surface/50 hover:bg-background transition-all"
            onClick={closeLightbox}
            aria-label="Close Lightbox"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>

          {/* Image Navigator */}
          <div className="relative max-w-5xl w-full h-[75vh] flex items-center justify-center">
            {/* Left Button */}
            <button
              className="absolute left-4 z-10 text-background hover:text-primary p-3 rounded-full bg-on-surface/50 hover:bg-background transition-colors"
              onClick={prevImage}
              aria-label="Previous Image"
            >
              <span className="material-symbols-outlined text-3xl">chevron_left</span>
            </button>

            {/* Main Lightbox Image */}
            <img
              alt={filteredItems[lightboxIndex].title}
              className="max-h-full max-w-full object-contain rounded-xl shadow-2xl transition-opacity duration-300 select-none"
              src={filteredItems[lightboxIndex].src}
            />

            {/* Right Button */}
            <button
              className="absolute right-4 z-10 text-background hover:text-primary p-3 rounded-full bg-on-surface/50 hover:bg-background transition-colors"
              onClick={nextImage}
              aria-label="Next Image"
            >
              <span className="material-symbols-outlined text-3xl">chevron_right</span>
            </button>
          </div>

          {/* Caption */}
          <div className="mt-6 text-background text-center max-w-xl">
            <h3 className="font-headline text-2xl font-bold tracking-wide">
              {filteredItems[lightboxIndex].title}
            </h3>
            <p className="font-body text-xs uppercase tracking-widest text-background/60 mt-1">
              Category: {filteredItems[lightboxIndex].category}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
