"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { universities, universityFilters } from "@/data/universities";
import {
  FadeIn,
  TextReveal,
} from "@/components/animations/text-reveal";
import { GradientMesh, FloatingOrbs, GlowingDivider, FloatingGrid } from "@/components/ui/ambient-backgrounds";
import { MapPin, Award, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

const marqueeStyles = `
@keyframes marqueeScroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
`;

export function UniversityNetwork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeFilter, setActiveFilter] = useState<"all" | "platinum" | "gold" | "silver" | "featured">("all");

  const filtered =
    activeFilter === "all"
      ? universities
      : activeFilter === "featured"
      ? universities.filter((u) => u.featured)
      : universities.filter((u) => u.partnershipLevel === activeFilter);

  /* Double the list for infinite loop */
  const marqueeList = [...universities, ...universities];

  return (
    <section ref={ref} className="relative py-32 lg:py-40 bg-black overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: marqueeStyles }} />
      <GlowingDivider color="indigo" />
      <FloatingOrbs count={3} color="indigo" />
      <GradientMesh variant="cool" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <span className="text-indigo-400 text-sm tracking-wider uppercase font-medium">
              University Network
            </span>
          </FadeIn>
          <div className="mt-4">
            <TextReveal
              as="h2"
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
              delay={0.1}
            >
              World-Class Partners
            </TextReveal>
          </div>
          <FadeIn delay={0.3}>
            <p className="mt-4 text-white/40 text-lg max-w-xl mx-auto">
              Our network of prestigious universities spans multiple countries,
              offering programs across every discipline.
            </p>
          </FadeIn>
        </div>

        {/* ── Marquee Logo Strip ── */}
        <FadeIn delay={0.2}>
          <div className="relative mb-20 overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

            <div
              className="flex items-center gap-8"
              style={{
                animation: "marqueeScroll 30s linear infinite",
                width: "max-content",
              }}
            >
              {marqueeList.map((uni, i) => (
                <div
                  key={`${uni.id}-${i}`}
                  className="flex-shrink-0 group"
                >
                  <div className="px-8 py-5 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] hover:border-violet-500/20 hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/10">
                    <Image
                      src={uni.logo}
                      alt={uni.name}
                      width={140}
                      height={50}
                      className="h-10 w-auto object-contain filter brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Filters */}
        <FadeIn delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {universityFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id as typeof activeFilter)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-white/10 text-white border border-white/10"
                    : "text-white/40 hover:text-white/60 border border-transparent"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* University Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((uni, i) => (
            <motion.div
              key={uni.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
            >
              <UniversityCard university={uni} />
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <FadeIn delay={0.4}>
          <div className="mt-16 text-center">
            <Link
              href="/universities"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-violet-500/25 transition-all duration-500"
            >
              Explore All Universities
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ── Individual Card ── */
const partnershipGradients: Record<string, string> = {
  platinum: "from-violet-400 to-indigo-400",
  gold: "from-amber-400 to-yellow-400",
  silver: "from-gray-300 to-gray-400",
  partner: "from-cyan-400 to-blue-400",
};

function UniversityCard({ university }: { university: (typeof universities)[0] }) {
  return (
    <div className="group relative p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 h-full flex flex-col overflow-hidden">
      {/* Hover glow */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-violet-500/0 to-indigo-500/0 group-hover:from-violet-500/5 group-hover:to-indigo-500/5 transition-all duration-500 pointer-events-none" />

      {/* Partnership Badge */}
      <div className="absolute top-4 right-4">
        <span className={`text-xs font-semibold tracking-wider uppercase bg-gradient-to-r ${partnershipGradients[university.partnershipLevel]} bg-clip-text text-transparent`}>
          {university.partnershipLevel}
        </span>
      </div>

      {/* Logo */}
      <div className="relative w-full h-16 mb-4 flex items-center">
        <Image src={university.logo} alt={university.name} width={160} height={60}
          className="max-h-12 w-auto object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity" />
      </div>

      <h3 className="text-lg font-semibold text-white mb-1">{university.name}</h3>
      <div className="flex items-center gap-2 text-white/30 text-sm mb-3">
        <MapPin className="w-3 h-3" />
        {university.location}, {university.country}
      </div>
      <p className="text-white/40 text-sm leading-relaxed mb-4 flex-1">{university.description.slice(0, 120)}…</p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {university.programs.slice(0, 3).map((p) => (
          <span key={p} className="px-2 py-0.5 text-xs bg-white/5 text-white/40 rounded-md">{p}</span>
        ))}
        {university.programs.length > 3 && (
          <span className="px-2 py-0.5 text-xs bg-white/5 text-white/30 rounded-md">+{university.programs.length - 3}</span>
        )}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
        {university.ranking && (
          <div className="flex items-center gap-1.5 text-xs text-white/30"><Award className="w-3 h-3" />{university.ranking}</div>
        )}
        <span className="text-xs text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
          View Details <ExternalLink className="w-3 h-3" />
        </span>
      </div>
    </div>
  );
}

import { useState } from "react";
