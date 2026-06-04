"use client";

import { useCounter } from "@/hooks/use-interactions";
import { statistics, achievements } from "@/data/statistics";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/text-reveal";
import { GradientMesh, FloatingOrbs, GlowingDivider, FloatingGrid } from "@/components/ui/ambient-backgrounds";
import { motion } from "framer-motion";

function StatCard({
  stat,
}: {
  stat: (typeof statistics)[0];
}) {
  const { count, ref } = useCounter(stat.value, 2500);

  return (
    <StaggerItem>
      <div
        ref={ref}
        className="relative group p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-violet-500/20 transition-all duration-500 overflow-hidden"
      >
        {/* Pulsing glow behind number */}
        <div className="absolute top-6 left-8 w-24 h-24 rounded-full bg-violet-500/0 group-hover:bg-violet-500/10 blur-2xl transition-all duration-700" />

        <div className="relative">
          <motion.span
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent"
          >
            {count}
            {stat.suffix}
          </motion.span>
          <p className="mt-2 text-white font-medium text-lg">{stat.label}</p>
          <p className="mt-1 text-white/40 text-sm">{stat.description}</p>
        </div>

        {/* Glowing violet divider at bottom */}
        <div className="absolute bottom-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </StaggerItem>
  );
}

export function TrustSection() {
  return (
    <section className="relative py-32 lg:py-40 bg-black overflow-hidden">
      {/* Visual Background Layers */}
      <GlowingDivider color="violet" />
      <FloatingGrid />
      <GradientMesh variant="default" />
      <FloatingOrbs count={2} color="violet" />

      {/* Decorative accent lines */}
      <div className="absolute top-20 left-8 w-px h-40 bg-gradient-to-b from-violet-500/20 via-violet-500/5 to-transparent hidden lg:block" />
      <div className="absolute top-32 right-12 w-px h-32 bg-gradient-to-b from-indigo-500/20 via-indigo-500/5 to-transparent hidden lg:block" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <span className="text-violet-400 text-sm tracking-wider uppercase font-medium">
              Trust & Authority
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Numbers That Speak
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-4 text-white/40 text-lg max-w-xl mx-auto">
              Every number represents a student&apos;s dream realized, a career
              launched, a future transformed.
            </p>
          </FadeIn>
        </div>

        {/* Statistics Grid */}
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.1}
        >
          {statistics.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </StaggerContainer>

        {/* Glowing dividers between rows */}
        <div className="mt-8 flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-12 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
          ))}
        </div>

        {/* Achievements Bar */}
        <FadeIn delay={0.5}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
            {achievements.map((achievement, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.02] text-white/40 text-xs tracking-wide hover:border-emerald-500/20 hover:text-white/60 transition-all duration-300"
              >
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                {achievement}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
