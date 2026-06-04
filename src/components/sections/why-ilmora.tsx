"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn, TextReveal } from "@/components/animations/text-reveal";
import { GradientMesh, FloatingOrbs, GlowingDivider, ParticleField } from "@/components/ui/ambient-backgrounds";
import { Target, Link2, Heart, CheckCircle, XCircle } from "lucide-react";

const painPoints = [
  "Complex admission requirements",
  "Visa processing nightmares",
  "Unreliable guidance",
  "Hidden scholarship opportunities",
  "Degree recognition confusion",
];

const benefits = [
  "Clear, step-by-step admissions roadmap",
  "Expert visa handling with 99% success",
  "Dedicated counselors for every student",
  "Scholarship identification & applications",
  "Full UAE equivalency support",
];

export function WhyIlmoraSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section ref={containerRef} className="relative py-32 lg:py-48 bg-black overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/10 to-black" />
        <GradientMesh variant="violet" />
        <ParticleField />
      </motion.div>
      <FloatingOrbs count={3} color="violet" />
      <GlowingDivider color="violet" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Scene 1 — The Problem */}
        <div className="max-w-4xl mx-auto text-center mb-32">
          <FadeIn>
            <span className="text-rose-400/80 text-sm tracking-wider uppercase font-medium">The Problem</span>
          </FadeIn>
          <div className="mt-8">
            <TextReveal as="h2" className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight" delay={0.2}>
              The path to global education is broken
            </TextReveal>
          </div>
          <FadeIn delay={0.6}>
            <p className="mt-8 text-xl text-white/40 leading-relaxed max-w-2xl mx-auto">
              Students face a maze of confusing requirements, endless paperwork, unreliable advice, and overwhelming choices.
            </p>
          </FadeIn>
        </div>

        {/* Scene 2 — Pain Points vs Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-32">
          {/* Before — Pain Points */}
          <FadeIn>
            <div className="relative rounded-2xl border border-rose-500/10 bg-rose-500/[0.02] p-8 overflow-hidden">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-rose-500/5 rounded-full blur-xl" />
              <h3 className="text-lg font-semibold text-rose-400 mb-6">Before ILMORA</h3>
              <div className="space-y-4">
                {painPoints.map((item, i) => (
                  <motion.div
                    key={item}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <XCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />
                    <span className="text-white/50 text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* After — Benefits */}
          <FadeIn delay={0.2}>
            <div className="relative rounded-2xl border border-emerald-500/10 bg-emerald-500/[0.02] p-8 overflow-hidden">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl" />
              <h3 className="text-lg font-semibold text-emerald-400 mb-6">With ILMORA</h3>
              <div className="space-y-4">
                {benefits.map((item, i) => (
                  <motion.div
                    key={item}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-white/50 text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Scene 3 — The Solution */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <FadeIn>
            <span className="text-emerald-400/80 text-sm tracking-wider uppercase font-medium">The Solution</span>
          </FadeIn>
          <div className="mt-8">
            <TextReveal as="h2" className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight" delay={0.2}>
              ILMORA exists to change this
            </TextReveal>
          </div>
        </div>

        {/* Mission Pillars with large icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { title: "Precision", desc: "Data-driven university matching and application strategies tailored to each student's unique profile.", icon: <Target className="w-8 h-8" />, color: "text-violet-400", bg: "bg-violet-500/10", border: "hover:border-violet-500/20", glow: "bg-violet-500/5" },
            { title: "Partnership", desc: "Direct relationships with 200+ universities across 30+ countries, ensuring the best opportunities.", icon: <Link2 className="w-8 h-8" />, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "hover:border-indigo-500/20", glow: "bg-indigo-500/5" },
            { title: "Purpose", desc: "Every decision we make is guided by the singular purpose of transforming student futures.", icon: <Heart className="w-8 h-8" />, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "hover:border-cyan-500/20", glow: "bg-cyan-500/5" },
          ].map((pillar, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className={`group relative p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] ${pillar.border} transition-all duration-500 text-center`}>
                <div className={`absolute -bottom-4 -right-4 w-20 h-20 ${pillar.glow} rounded-full blur-xl`} />
                <div className={`w-16 h-16 rounded-2xl ${pillar.bg} flex items-center justify-center ${pillar.color} mx-auto mb-5`}>
                  {pillar.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{pillar.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
