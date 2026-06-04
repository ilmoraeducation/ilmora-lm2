"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { FadeIn, TextReveal } from "@/components/animations/text-reveal";
import { GradientMesh, StarField, GlowingDivider } from "@/components/ui/ambient-backgrounds";
import { ArrowRight, Sparkles } from "lucide-react";

const shimmerStyles = `
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
@keyframes ctaBlob1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(80px, -40px) scale(1.15); }
  66% { transform: translate(-40px, 60px) scale(0.9); }
}
@keyframes ctaBlob2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(-60px, 50px) scale(1.1); }
  66% { transform: translate(50px, -30px) scale(0.95); }
}
`;

export function CTASection() {
  return (
    <section className="relative py-32 lg:py-48 bg-black overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: shimmerStyles }} />
      <GlowingDivider color="violet" />

      {/* Animated blob backgrounds */}
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(124,58,237,0.4), transparent 70%)",
            top: "10%", left: "20%",
            animation: "ctaBlob1 18s ease-in-out infinite",
          }} />
        <div className="absolute w-[500px] h-[500px] rounded-full opacity-25"
          style={{
            background: "radial-gradient(circle, rgba(79,70,229,0.4), transparent 70%)",
            bottom: "10%", right: "15%",
            animation: "ctaBlob2 22s ease-in-out infinite",
          }} />
      </div>

      {/* Background SVG icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Graduation cap */}
        <svg className="absolute top-[15%] left-[10%] w-16 h-16 text-violet-400/[0.06] rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 10l-10-5L2 10l10 5 10-5z" />
          <path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" />
          <path d="M22 10v6" />
        </svg>
        {/* Globe */}
        <svg className="absolute bottom-[20%] right-[8%] w-20 h-20 text-indigo-400/[0.06] -rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        {/* Book */}
        <svg className="absolute top-[40%] right-[25%] w-12 h-12 text-cyan-400/[0.05] rotate-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
        {/* Stars floating */}
        <svg className="absolute top-[25%] left-[60%] w-6 h-6 text-amber-400/[0.08]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7L12 16.4 5.7 21l2.3-7L2 9.4h7.6z" />
        </svg>
        <svg className="absolute bottom-[35%] left-[30%] w-4 h-4 text-violet-400/[0.08]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7L12 16.4 5.7 21l2.3-7L2 9.4h7.6z" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-400/20 bg-violet-400/5 mb-8">
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-violet-300 text-xs tracking-wider uppercase">Begin Your Journey</span>
          </div>
        </FadeIn>

        <div className="mb-6">
          <TextReveal as="h2" className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-tight" delay={0.2}>
            Your Future is Waiting
          </TextReveal>
        </div>

        <FadeIn delay={0.6}>
          <p className="text-xl text-white/40 max-w-2xl mx-auto mb-12 leading-relaxed">
            The distance between where you are and where you want to be is shorter than you think. Let ILMORA bridge that gap.
          </p>
        </FadeIn>

        <FadeIn delay={0.8}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Shimmer CTA button */}
            <Link
              href={siteConfig.contact.ctaLink}
              className="group relative inline-flex items-center gap-2 px-10 py-5 rounded-full text-lg font-semibold text-white overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/30"
              style={{
                background: "linear-gradient(110deg, #7C3AED 0%, #4F46E5 40%, #818CF8 50%, #4F46E5 60%, #7C3AED 100%)",
                backgroundSize: "200% 100%",
                animation: "shimmer 3s ease-in-out infinite",
              }}
            >
              <span className="relative flex items-center gap-2">
                {siteConfig.contact.ctaText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <a
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-5 border border-white/15 text-white/70 hover:text-white hover:border-white/30 hover:bg-white/5 rounded-full text-lg transition-all duration-300"
            >
              Chat on WhatsApp
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
