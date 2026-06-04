"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { journeySteps } from "@/data/success-stories";
import { FadeIn, TextReveal } from "@/components/animations/text-reveal";
import { GradientMesh, FloatingOrbs, GlowingDivider } from "@/components/ui/ambient-backgrounds";
import { Sparkles, Map, FileText, Trophy, Plane, GraduationCap, Rocket } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  sparkles: <Sparkles className="w-5 h-5" />,
  map: <Map className="w-5 h-5" />,
  "file-text": <FileText className="w-5 h-5" />,
  trophy: <Trophy className="w-5 h-5" />,
  plane: <Plane className="w-5 h-5" />,
  "graduation-cap": <GraduationCap className="w-5 h-5" />,
  rocket: <Rocket className="w-5 h-5" />,
};

const gradients = [
  "from-violet-500 to-indigo-500",
  "from-indigo-500 to-blue-500",
  "from-blue-500 to-cyan-500",
  "from-cyan-500 to-teal-500",
  "from-teal-500 to-emerald-500",
  "from-emerald-500 to-green-500",
  "from-green-500 to-lime-500",
];

export function StudentJourney() {
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 lg:py-40 bg-black overflow-hidden">
      <GlowingDivider color="cyan" />
      <FloatingOrbs count={2} color="indigo" />
      <GradientMesh variant="cool" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn><span className="text-cyan-400 text-sm tracking-wider uppercase font-medium">Your Journey</span></FadeIn>
          <div className="mt-4">
            <TextReveal as="h2" className="text-3xl md:text-5xl font-bold text-white tracking-tight" delay={0.1}>
              From Dream to Reality
            </TextReveal>
          </div>
          <FadeIn delay={0.3}>
            <p className="mt-4 text-white/40 text-lg max-w-xl mx-auto">
              Every great achievement follows a journey. We guide every milestone.
            </p>
          </FadeIn>
        </div>

        {/* ── Horizontal Timeline ── */}
        <div ref={timelineRef} className="relative overflow-x-auto pb-4 -mx-6 px-6 lg:mx-0 lg:px-0">
          <div className="flex items-start gap-0 min-w-[900px] lg:min-w-0 relative">

            {/* Animated connecting line */}
            <div className="absolute top-7 left-0 right-0 h-px bg-white/[0.06]">
              <motion.div
                className="h-full bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-500"
                initial={{ width: "0%" }}
                animate={isInView ? { width: "100%" } : {}}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </div>

            {journeySteps.map((step, i) => (
              <motion.div
                key={step.step}
                className="flex-1 relative flex flex-col items-center text-center px-3"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
              >
                {/* Node circle */}
                <div className={`relative z-10 w-14 h-14 rounded-full bg-gradient-to-br ${gradients[i]} flex items-center justify-center text-white shadow-lg mb-6`}
                  style={{ boxShadow: isInView ? `0 0 20px rgba(124,58,237,0.3)` : "none" }}>
                  {iconMap[step.icon]}
                </div>

                {/* Step number */}
                <span className="text-xs font-bold text-white/30 mb-1">Step {step.step}</span>
                {/* Phase label */}
                <span className={`text-xs font-semibold tracking-wider uppercase bg-gradient-to-r ${gradients[i]} bg-clip-text text-transparent mb-2`}>
                  {step.phase}
                </span>
                <h4 className="text-sm font-semibold text-white mb-1">{step.title}</h4>
                <p className="text-white/40 text-xs leading-relaxed max-w-[140px]">{step.description.slice(0, 80)}…</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quote card below */}
        <FadeIn delay={0.5}>
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] relative overflow-hidden">
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl" />
              <p className="relative text-white/50 text-sm italic leading-relaxed">
                &quot;The journey of a thousand miles begins with a single step. We make sure that step — and every step after — is in the right direction.&quot;
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
