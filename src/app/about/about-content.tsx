"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { statistics } from "@/data/statistics";
import { FadeIn, TextReveal } from "@/components/animations/text-reveal";
import { useCounter } from "@/hooks/use-interactions";
import {
  Target,
  Eye,
  Heart,
  Globe,
  Users,
  Lightbulb,
  ArrowRight,
  Rocket,
  Award,
  Sparkles,
  TrendingUp,
  Building2,
  Star,
  Zap,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";

const values = [
  { icon: <Target className="w-7 h-7" />, title: "Precision", desc: "Data-driven strategies tailored to each student's unique aspirations.", bg: "bg-violet-500/10", color: "text-violet-400" },
  { icon: <Eye className="w-7 h-7" />, title: "Transparency", desc: "Complete visibility into every process, timeline, and decision.", bg: "bg-indigo-500/10", color: "text-indigo-400" },
  { icon: <Heart className="w-7 h-7" />, title: "Dedication", desc: "Every student receives our full attention and commitment.", bg: "bg-rose-500/10", color: "text-rose-400" },
  { icon: <Globe className="w-7 h-7" />, title: "Global Mindset", desc: "International perspective combined with local expertise.", bg: "bg-cyan-500/10", color: "text-cyan-400" },
  { icon: <Users className="w-7 h-7" />, title: "Partnership", desc: "We work alongside you as partners, not just advisors.", bg: "bg-blue-500/10", color: "text-blue-400" },
  { icon: <Lightbulb className="w-7 h-7" />, title: "Innovation", desc: "Continuously evolving our processes and technology.", bg: "bg-amber-500/10", color: "text-amber-400" },
];

const timeline = [
  { year: "2019", title: "The Vision", desc: "ILMORA was founded with a clear vision to transform global education access.", icon: <Sparkles className="w-5 h-5" /> },
  { year: "2020", title: "Rapid Growth", desc: "Expanded university network to 50+ partner institutions.", icon: <TrendingUp className="w-5 h-5" /> },
  { year: "2021", title: "UAE Recognition", desc: "Received official UAE education authority recognition.", icon: <Award className="w-5 h-5" /> },
  { year: "2022", title: "Global Expansion", desc: "Partnerships across Europe, Australia, and Canada — 150+ universities.", icon: <Globe className="w-5 h-5" /> },
  { year: "2023", title: "200+ Partners", desc: "Surpassed 200 university partnerships and 1,500+ students placed.", icon: <Building2 className="w-5 h-5" /> },
  { year: "2024", title: "Innovation Era", desc: "Launched digital platform combining expert guidance with technology.", icon: <Zap className="w-5 h-5" /> },
  { year: "2025", title: "The Future", desc: "2,500+ students placed and growing. Redefining global education.", icon: <Rocket className="w-5 h-5" /> },
];

function StatBlock({ stat }: { stat: (typeof statistics)[0] }) {
  const { count, ref } = useCounter(stat.value, 2000);
  return (
    <div ref={ref} className="text-center">
      <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
        {count}{stat.suffix}
      </span>
      <p className="mt-1 text-white/50 text-sm">{stat.label}</p>
    </div>
  );
}

export function AboutPageContent() {
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-black to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/5 rounded-full blur-[200px]" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8 text-center pt-32 pb-20">
          <FadeIn><span className="text-violet-400 text-sm tracking-wider uppercase font-medium">About ILMORA</span></FadeIn>
          <div className="mt-4">
            <TextReveal as="h1" className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight" delay={0.2}>
              Built for the Future of Education
            </TextReveal>
          </div>
          <FadeIn delay={0.5}>
            <p className="mt-6 text-white/40 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              ILMORA Education Group exists at the intersection of expertise and technology.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Animated Stats */}
      <section className="py-16 bg-black border-y border-white/[0.04]">
        <div className="max-w-[1000px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {statistics.slice(0, 4).map((s) => (
            <StatBlock key={s.id} stat={s} />
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeIn>
            <div className="p-8 lg:p-10 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-violet-500/10 transition-all duration-500 relative overflow-hidden">
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-violet-500/5 rounded-full blur-xl" />
              <span className="text-violet-400 text-sm tracking-wider uppercase font-medium">Our Mission</span>
              <h3 className="mt-4 text-2xl lg:text-3xl font-bold text-white leading-tight">Making world-class education accessible</h3>
              <p className="mt-4 text-white/40 leading-relaxed">We believe talent is distributed equally but opportunity is not. ILMORA bridges that gap with expert guidance, institutional partnerships, and technology-driven processes.</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="p-8 lg:p-10 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-indigo-500/10 transition-all duration-500 relative overflow-hidden">
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-indigo-500/5 rounded-full blur-xl" />
              <span className="text-indigo-400 text-sm tracking-wider uppercase font-medium">Our Vision</span>
              <h3 className="mt-4 text-2xl lg:text-3xl font-bold text-white leading-tight">The future OS for global higher education</h3>
              <p className="mt-4 text-white/40 leading-relaxed">We envision a world where every student with ambition can access the best education on the planet — regardless of geography, background, or complexity.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-32 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn><span className="text-cyan-400 text-sm tracking-wider uppercase font-medium">Our Values</span></FadeIn>
            <TextReveal as="h2" className="mt-4 text-3xl md:text-5xl font-bold text-white tracking-tight" delay={0.1}>What Drives Us</TextReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="group p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 h-full text-center">
                  <div className={`w-16 h-16 rounded-2xl ${v.bg} flex items-center justify-center ${v.color} mx-auto mb-5`}>
                    {v.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{v.title}</h4>
                  <p className="text-white/40 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Timeline */}
      <section className="py-32 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn><span className="text-emerald-400 text-sm tracking-wider uppercase font-medium">Our Journey</span></FadeIn>
            <TextReveal as="h2" className="mt-4 text-3xl md:text-5xl font-bold text-white tracking-tight" delay={0.1}>From Vision to Impact</TextReveal>
          </div>

          <div ref={timelineRef} className="max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-[calc(50%-1px)] top-0 bottom-0 w-px bg-white/[0.06] hidden md:block" />

            {timeline.map((item, i) => (
              <motion.div
                key={i}
                className="relative flex items-start gap-6 md:gap-0 mb-12 last:mb-0"
                initial={{ opacity: 0, y: 30 }}
                animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                {/* Desktop: alternating layout */}
                <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] w-full items-start gap-6">
                  {/* Left content (even) */}
                  <div className={i % 2 === 0 ? "text-right" : ""}>
                    {i % 2 === 0 && (
                      <div className="inline-block text-left">
                        <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                        <p className="text-white/40 text-sm mt-1">{item.desc}</p>
                      </div>
                    )}
                  </div>

                  {/* Center node */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500/20 to-indigo-500/20 border-2 border-violet-500/30 flex items-center justify-center text-violet-400 z-10 relative"
                      style={{ boxShadow: "0 0 15px rgba(124,58,237,0.2)" }}>
                      {item.icon}
                    </div>
                  </div>

                  {/* Right content (odd) */}
                  <div className={i % 2 === 1 ? "" : ""}>
                    {i % 2 === 1 ? (
                      <div>
                        <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                        <p className="text-white/40 text-sm mt-1">{item.desc}</p>
                      </div>
                    ) : (
                      <div />
                    )}
                  </div>
                </div>

                {/* Mobile layout */}
                <div className="md:hidden flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-violet-400">{item.year}</span>
                    <h4 className="text-base font-semibold text-white">{item.title}</h4>
                    <p className="text-white/40 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Write Your Story?</h2>
            <p className="text-white/40 text-lg mb-8">Join thousands of students who trusted ILMORA.</p>
            <Link href="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-violet-500/25 transition-all duration-500">
              Begin Your Journey <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
