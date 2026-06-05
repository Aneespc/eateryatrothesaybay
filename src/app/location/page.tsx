"use client";

import { useState } from "react";

export default function LocationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5000); // Hide success after 5s
    }, 1500);
  };

  return (
    <div className="max-w-container-max mx-auto px-6 md:px-gutter py-16">
      {/* Header Section */}
      <section className="mb-16 text-center lg:text-left">
        <h1 className="font-headline text-4xl md:text-headline-xl text-primary font-bold mb-4">
          Find Us
        </h1>
        <p className="font-body text-base md:text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Nestled in the heart of the Rothesay Bay community, we offer a tranquil escape where the coffee is always fresh and the coastal breeze is just a stroll away.
        </p>
      </section>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Map & Address Info */}
        <div className="lg:col-span-8 space-y-6">
          {/* Map Container */}
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-sm border border-outline-variant/20">
            <div className="absolute inset-0 bg-surface-container flex items-center justify-center overflow-hidden">
              <img
                className="w-full h-full object-cover filter grayscale-[20%] contrast-[110%] brightness-[95%]"
                alt="Stylized map showing eatery location"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7lmfnIDLx5_rR84syu3zdUXrzymhRtaJGgZZOM6N23OTZTuiwfPgvXPOiJCLd3z48JGy_gWRpzkSYYsmlh6SvsTlN2r4SFKVchL6Xh5O_adk5E-YFtX5FyVJ0gS9csM92fXk3Yl1Y-VOyQM31n6SFrMbFEgSD3TyqH6xCWcU5tY39d-C4qLMiL98fb22Bf8PU7llNdR8r5HbijERZMrZUaDTgnPilkd7Hxv9MPdI8exzra3bq8I-FMhctNw-ZzGYN3CDfJBbWbP8"
              />
              <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
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

          {/* Address & Directions Card */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-8 bg-surface-container-low rounded-2xl border border-outline-variant/20 gap-4">
            <div>
              <h3 className="font-headline text-xl text-primary font-bold mb-1">
                42 Bayview Avenue
              </h3>
              <p className="font-body text-sm text-on-surface-variant font-medium">
                Rothesay Bay, Auckland 0630, New Zealand
              </p>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary text-on-primary px-8 py-3 rounded-full font-body text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              <span className="material-symbols-outlined text-sm">directions</span>
              Get Directions
            </a>
          </div>
        </div>

        {/* Details Sidebar */}
        <aside className="lg:col-span-4 space-y-6">
          {/* Hours Card */}
          <div className="p-8 bg-background border border-outline-variant/20 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary text-2xl">schedule</span>
              <h3 className="font-headline text-xl text-primary font-bold">Opening Hours</h3>
            </div>
            <ul className="space-y-3 font-body text-sm text-on-surface-variant">
              <li className="flex justify-between py-2 border-b border-outline-variant/10">
                <span className="font-medium">Monday - Friday</span>
                <span className="font-bold text-primary text-right">7:00am - 9:00pm</span>
              </li>
              <li className="flex justify-between py-2 border-b border-outline-variant/10">
                <span className="font-medium">Saturday</span>
                <span className="font-bold text-primary text-right">7:00am - 9:00pm</span>
              </li>
              <li className="flex justify-between py-2">
                <span className="font-medium">Sunday</span>
                <span className="font-bold text-primary text-right">7:00am - 9:00pm</span>
              </li>
            </ul>
          </div>

          {/* Parking Card */}
          <div className="p-8 bg-primary-container text-on-primary-container rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-2xl">local_parking</span>
              <h3 className="font-headline text-xl font-bold">Parking Info</h3>
            </div>
            <p className="font-body text-sm leading-relaxed opacity-90 font-medium">
              Ample free parking is available directly in front of the eatery. For busy weekend mornings, additional street parking can be found along Beach Road and the neighboring coastal cul-de-sacs.
            </p>
          </div>

          {/* Contact Card */}
          <div className="p-8 bg-surface-container-high border border-outline-variant/20 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary text-2xl">contact_support</span>
              <h3 className="font-headline text-xl text-primary font-bold">Contact</h3>
            </div>
            <div className="space-y-4 font-body text-sm text-on-surface-variant">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">call</span>
                <span className="font-semibold">+64 9 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">mail</span>
                <span className="font-semibold">hello@rothesaybay.eatery</span>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Inquiry Form & Ambient Banner */}
      <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        <div className="relative rounded-2xl overflow-hidden min-h-[350px] group shadow-sm border border-outline-variant/10">
          <div className="absolute inset-0 bg-primary/20 z-10" />
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 absolute inset-0"
            alt="Warm atmosphere in coastal cafe"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4ULBOs0tmBcz_9A91MyGx4ViwqBcQQPPMt_mPKL51J4TAsoKMYNkhNwWq2UR_X6wz5GaBLzk4exMQyBq5Rk4H62yxupTx0gU5IiDTNYDVoLsj3EUt6m3HDzJVExHiT-KyRXBgHscDMDgcZuDUe8PVZLl3m7ERg4XzjfHYowz8NcK2poU6CXa0LuyAU3OKb1ZGL-PgdNr-mPrEv19nQf1Yn2_Gd3kRoDZxLNWyd9tJtjY5a36BQsx4jdGkaCOeBVm5lGYfESUBZzo"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 bg-gradient-to-t from-primary/50 to-transparent">
            <p className="font-headline text-2xl text-white font-medium italic leading-relaxed">
              "The perfect spot to watch the morning mist lift from the bay."
            </p>
          </div>
        </div>

        <div className="p-8 bg-background rounded-2xl border border-outline-variant/20 shadow-sm flex flex-col justify-center">
          <h2 className="font-headline text-3xl text-primary font-bold mb-3">
            Inquire with us
          </h2>
          <p className="font-body text-sm text-on-surface-variant mb-6 leading-relaxed">
            Have a question about large group bookings or special events? Send us a message.
          </p>

          {isSuccess ? (
            <div className="bg-primary/10 border border-primary/20 text-primary rounded-xl p-4 text-center font-body text-sm font-semibold animate-pulse">
              ✓ Message Sent! We will be in touch with you shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-primary mb-1 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className={`w-full bg-surface-container-low border-0 border-b ${errors.name ? "border-error" : "border-outline-variant"
                      } focus:border-primary focus:ring-0 transition-colors py-2 text-sm outline-none`}
                  />
                  {errors.name && (
                    <p className="text-error text-xs mt-1 font-semibold">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-primary mb-1 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="hello@example.com"
                    className={`w-full bg-surface-container-low border-0 border-b ${errors.email ? "border-error" : "border-outline-variant"
                      } focus:border-primary focus:ring-0 transition-colors py-2 text-sm outline-none`}
                  />
                  {errors.email && (
                    <p className="text-error text-xs mt-1 font-semibold">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-primary mb-1 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="How can we help?"
                  className={`w-full bg-surface-container-low border-0 border-b ${errors.message ? "border-error" : "border-outline-variant"
                    } focus:border-primary focus:ring-0 transition-colors py-2 text-sm outline-none resize-none`}
                />
                {errors.message && (
                  <p className="text-error text-xs mt-1 font-semibold">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-container text-on-primary-container py-3 rounded-xl font-body text-xs font-bold uppercase tracking-wider hover:opacity-90 active:translate-y-[1px] disabled:opacity-50 transition-all flex justify-center items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4 text-on-primary-container"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending Inquiry...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
