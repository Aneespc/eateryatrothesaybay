"use client";

import { useState } from "react";
import { useBooking } from "@/context/BookingContext";

export default function BookingModal() {
  const { isOpen, closeBooking } = useBooking();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    requests: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.date) newErrors.date = "Please select a date";
    if (!formData.time) newErrors.time = "Please select a time slot";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "2",
      requests: "",
    });
    setErrors({});
    setIsSuccess(false);
    closeBooking();
  };

  const timeSlots = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
  ];

  const guestOptions = ["1", "2", "3", "4", "5", "6", "7", "8+"];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-on-surface/40 backdrop-blur-sm transition-opacity duration-300"
        onClick={resetForm}
      />

      {/* Modal Container */}
      <div
        className="relative bg-background w-full max-w-lg rounded-2xl shadow-xl overflow-hidden border border-outline-variant/30 max-h-[90vh] flex flex-col z-10 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-outline-variant/30 bg-surface-container-low">
          <h2 className="font-headline text-headline-sm text-primary font-bold">
            Table Reservation
          </h2>
          <button
            onClick={resetForm}
            className="text-on-surface-variant hover:text-primary p-1 rounded-full hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="flex-grow overflow-y-auto px-6 py-6 custom-scrollbar">
          {isSuccess ? (
            /* Success State */
            <div className="text-center py-8 flex flex-col items-center">
              <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6 animate-bounce">
                <span className="material-symbols-outlined text-5xl">
                  check_circle
                </span>
              </div>
              <h3 className="font-headline text-headline-md text-primary mb-3">
                Booking Confirmed!
              </h3>
              <p className="font-body text-body-md text-on-surface-variant max-w-sm mb-6">
                Thank you, <strong className="text-on-surface">{formData.name}</strong>. Your table for{" "}
                <strong className="text-on-surface">{formData.guests}</strong> on{" "}
                <strong className="text-on-surface">{formData.date}</strong> at{" "}
                <strong className="text-on-surface">{formData.time}</strong> has been reserved. A confirmation email has been sent.
              </p>
              <div className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl p-4 mb-8 text-left space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant font-medium">Guest Name:</span>
                  <span className="text-on-surface font-semibold">{formData.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant font-medium">Party Size:</span>
                  <span className="text-on-surface font-semibold">{formData.guests} Guests</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant font-medium">Date & Time:</span>
                  <span className="text-on-surface font-semibold">
                    {formData.date} at {formData.time}
                  </span>
                </div>
                {formData.requests && (
                  <div className="pt-2 border-t border-outline-variant/30 text-xs text-on-surface-variant">
                    <strong>Special Requests:</strong> {formData.requests}
                  </div>
                )}
              </div>
              <button
                onClick={resetForm}
                className="w-full bg-primary text-on-primary py-3 rounded-xl font-body text-sm font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                Back to Website
              </button>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Contact Information */}
              <div className="space-y-4">
                <h4 className="font-body text-xs font-bold text-primary uppercase tracking-widest border-b border-outline-variant/20 pb-1">
                  Contact Details
                </h4>

                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1 uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className={`w-full bg-surface-container-low border ${
                      errors.name ? "border-error" : "border-outline-variant"
                    } rounded-xl px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all`}
                  />
                  {errors.name && (
                    <p className="text-error text-xs mt-1 font-medium">{errors.name}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-on-surface-variant mb-1 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="hello@example.com"
                      className={`w-full bg-surface-container-low border ${
                        errors.email ? "border-error" : "border-outline-variant"
                      } rounded-xl px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all`}
                    />
                    {errors.email && (
                      <p className="text-error text-xs mt-1 font-medium">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-on-surface-variant mb-1 uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+64 9 123 4567"
                      className={`w-full bg-surface-container-low border ${
                        errors.phone ? "border-error" : "border-outline-variant"
                      } rounded-xl px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all`}
                    />
                    {errors.phone && (
                      <p className="text-error text-xs mt-1 font-medium">{errors.phone}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Reservation Details */}
              <div className="space-y-4 pt-2">
                <h4 className="font-body text-xs font-bold text-primary uppercase tracking-widest border-b border-outline-variant/20 pb-1">
                  Reservation Details
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-on-surface-variant mb-1 uppercase tracking-wider">
                      Guests
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    >
                      {guestOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt} {opt === "1" ? "Guest" : "Guests"}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-on-surface-variant mb-1 uppercase tracking-wider">
                      Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split("T")[0]}
                      className={`w-full bg-surface-container-low border ${
                        errors.date ? "border-error" : "border-outline-variant"
                      } rounded-xl px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all`}
                    />
                    {errors.date && (
                      <p className="text-error text-xs mt-1 font-medium">{errors.date}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1 uppercase tracking-wider">
                    Available Time Slots *
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    {timeSlots.map((time) => {
                      const isSelected = formData.time === time;
                      return (
                        <button
                          key={time}
                          type="button"
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, time }));
                            if (errors.time) {
                              setErrors((prev) => {
                                const next = { ...prev };
                                delete next.time;
                                return next;
                              });
                            }
                          }}
                          className={`py-2 rounded-xl text-xs font-semibold transition-all border ${
                            isSelected
                              ? "bg-primary border-primary text-on-primary shadow-sm"
                              : "bg-surface-container-low border-outline-variant text-on-surface hover:border-primary hover:text-primary"
                          }`}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                  {errors.time && (
                    <p className="text-error text-xs mt-1 font-medium">{errors.time}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1 uppercase tracking-wider">
                    Special Requests
                  </label>
                  <textarea
                    name="requests"
                    value={formData.requests}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="High chair, dietary notes, window seat, etc..."
                    className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 bg-primary text-on-primary py-3.5 rounded-xl font-body text-sm font-semibold uppercase tracking-wider hover:opacity-90 active:scale-[0.99] disabled:opacity-50 transition-all flex justify-center items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                    Confirming Reservation...
                  </>
                ) : (
                  "Confirm Table Reservation"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
