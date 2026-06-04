"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { ArrowRight, Play } from "lucide-react";
import { TextReveal, FadeIn } from "@/components/animations/text-reveal";

/* ── CSS keyframes injected once ── */
const heroStyles = `
@keyframes heroBlob1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(80px, -60px) scale(1.15); }
  50% { transform: translate(-40px, 80px) scale(0.9); }
  75% { transform: translate(60px, 40px) scale(1.1); }
}
@keyframes heroBlob2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(-70px, 50px) scale(1.1); }
  50% { transform: translate(60px, -70px) scale(0.95); }
  75% { transform: translate(-50px, -40px) scale(1.05); }
}
@keyframes heroBlob3 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(50px, 70px) scale(1.08); }
  66% { transform: translate(-60px, -30px) scale(0.92); }
}
@keyframes floatUp {
  0% { transform: translateY(0) translateX(0); opacity: 0; }
  10% { opacity: 0.6; }
  90% { opacity: 0.6; }
  100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
}
`;

export function HeroSection() {
  /* 30 floating particles with random positions and delays */
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 12,
    duration: Math.random() * 8 + 8,
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Inject keyframe styles */}
      <style dangerouslySetInnerHTML={{ __html: heroStyles }} />

      {/* ── Animated Gradient Blobs ── */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-[900px] h-[900px] rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.35) 0%, rgba(79,70,229,0.15) 40%, transparent 70%)",
            top: "-20%",
            left: "30%",
            animation: "heroBlob1 20s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[700px] h-[700px] rounded-full opacity-35"
          style={{
            background:
              "radial-gradient(circle, rgba(79,70,229,0.30) 0%, rgba(30,64,175,0.15) 40%, transparent 70%)",
            bottom: "-10%",
            right: "20%",
            animation: "heroBlob2 25s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(8,145,178,0.25) 0%, rgba(124,58,237,0.10) 40%, transparent 70%)",
            top: "40%",
            left: "-10%",
            animation: "heroBlob3 22s ease-in-out infinite",
          }}
        />
      </div>

      {/* ── Floating Particles ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-white"
            style={{
              left: p.left,
              bottom: "-10px",
              width: p.size,
              height: p.size,
              animation: `floatUp ${p.duration}s linear ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* ── Gradient Overlays ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black z-[1]" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <FadeIn delay={0.3}>
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-400/20 bg-violet-500/5 backdrop-blur-sm mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse" />
            <span className="text-violet-300/80 text-xs tracking-wider uppercase">
              The Future of Global Higher Education
            </span>
          </motion.div>
        </FadeIn>

        {/* Main Headline */}
        <div className="mb-8">
          <TextReveal
            as="h1"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tight leading-[0.95]"
            delay={0.6}
          >
            Your Future Begins Here
          </TextReveal>
        </div>

        {/* Subheadline */}
        <FadeIn delay={1.2}>
          <p className="text-lg md:text-xl lg:text-2xl text-white/50 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            ILMORA transforms the way students access world-class education.
            From dream to graduation, we guide every step.
          </p>
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={1.5}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={siteConfig.contact.ctaLink}
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-violet-500/25 transition-all duration-500"
            >
              <span className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
              <span className="relative flex items-center gap-2">
                {siteConfig.contact.ctaText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/universities"
              className="group inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-white/80 hover:text-white hover:border-white/30 hover:bg-white/5 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <Play className="w-4 h-4" />
              {siteConfig.contact.secondaryCta}
            </Link>
          </div>
        </FadeIn>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-white/30 text-xs tracking-widest uppercase">
              Scroll
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
