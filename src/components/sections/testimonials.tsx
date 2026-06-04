"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { FadeIn, TextReveal } from "@/components/animations/text-reveal";
import { GradientMesh, FloatingOrbs, GlowingDivider } from "@/components/ui/ambient-backgrounds";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

/* Gradient avatar from initials */
function AvatarCircle({ name, gradient }: { name: string; gradient: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);
  return (
    <div
      className={`w-14 h-14 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
    >
      {initials}
    </div>
  );
}

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);
  const featured = testimonials.filter((t) => t.featured);

  const next = () => {
    setDirection(1);
    setActive((prev) => (prev + 1) % featured.length);
  };

  const prev = () => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + featured.length) % featured.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  const current = featured[active];

  return (
    <section className="relative py-32 lg:py-40 bg-black overflow-hidden">
      <GlowingDivider color="amber" />
      <FloatingOrbs count={2} color="violet" />
      <GradientMesh variant="warm" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <span className="text-amber-400 text-sm tracking-wider uppercase font-medium">
              Testimonials
            </span>
          </FadeIn>
          <div className="mt-4">
            <TextReveal
              as="h2"
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
              delay={0.1}
            >
              Voices of Success
            </TextReveal>
          </div>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Decorative large quote mark */}
            <svg className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-32 text-violet-400/[0.07] pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
              <path d="M30 20c-11 0-20 9-20 20s9 20 20 20c2 0 4-.3 5.8-.8C33.5 68.5 27 74 20 80l5 5c12-12 25-24 25-45 0-11-9-20-20-20zm45 0c-11 0-20 9-20 20s9 20 20 20c2 0 4-.3 5.8-.8C78.5 68.5 72 74 65 80l5 5c12-12 25-24 25-45 0-11-9-20-20-20z" />
            </svg>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-center relative z-10"
              >
                {/* Avatar */}
                <div className="flex justify-center mb-6">
                  <AvatarCircle name={current.name} gradient={current.gradient} />
                </div>

                {/* Stars */}
                <div className="flex items-center justify-center gap-1 mb-6">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xl md:text-2xl lg:text-3xl text-white/80 font-light leading-relaxed mb-8">
                  &ldquo;{current.quote}&rdquo;
                </p>

                {/* Author */}
                <p className="text-white font-semibold text-lg">
                  {current.countryCode} {current.name}
                </p>
                <p className="text-white/40 text-sm">
                  {current.role} — {current.university}, {current.country}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-12">
              <button onClick={prev} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-2">
                {featured.map((_, i) => (
                  <button key={i} onClick={() => { setDirection(i > active ? 1 : -1); setActive(i); }}
                    className={`w-2 rounded-full transition-all duration-300 ${i === active ? "w-8 h-2 bg-violet-400" : "w-2 h-2 bg-white/20 hover:bg-white/40"}`} />
                ))}
              </div>
              <button onClick={next} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, i) => (
            <FadeIn key={testimonial.id} delay={i * 0.1}>
              <div className="group p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-violet-500/10 transition-all duration-500 relative overflow-hidden">
                {/* Decorative quote SVG */}
                <svg className="absolute top-4 right-4 w-8 h-8 text-violet-400/10" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M30 20c-11 0-20 9-20 20s9 20 20 20c2 0 4-.3 5.8-.8C33.5 68.5 27 74 20 80l5 5c12-12 25-24 25-45 0-11-9-20-20-20zm45 0c-11 0-20 9-20 20s9 20 20 20c2 0 4-.3 5.8-.8C78.5 68.5 72 74 65 80l5 5c12-12 25-24 25-45 0-11-9-20-20-20z" />
                </svg>

                <div className="flex items-center gap-3 mb-4">
                  <AvatarCircle name={testimonial.name} gradient={testimonial.gradient} />
                  <div>
                    <p className="text-white text-sm font-medium">{testimonial.countryCode} {testimonial.name}</p>
                    <p className="text-white/30 text-xs">{testimonial.role} — {testimonial.country}</p>
                  </div>
                </div>
                <div className="flex items-center gap-0.5 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-white/50 text-sm leading-relaxed">
                  &ldquo;{testimonial.quote.slice(0, 150)}…&rdquo;
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
