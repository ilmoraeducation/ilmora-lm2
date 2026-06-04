"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { universities, universityFilters } from "@/data/universities";
import { FadeIn, TextReveal } from "@/components/animations/text-reveal";
import { MapPin, Award, ExternalLink, Search, SlidersHorizontal, ArrowRight } from "lucide-react";
import Link from "next/link";

const partnershipGradients: Record<string, { bar: string; text: string; pill: string }> = {
  platinum: { bar: "from-violet-500 to-indigo-500", text: "text-violet-400", pill: "bg-violet-500/10 text-violet-400 border-violet-500/20" },
  gold: { bar: "from-amber-500 to-yellow-500", text: "text-amber-400", pill: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
  silver: { bar: "from-gray-400 to-gray-500", text: "text-gray-300", pill: "bg-gray-500/10 text-gray-300 border-gray-500/20" },
  partner: { bar: "from-cyan-500 to-blue-500", text: "text-cyan-400", pill: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
};

export function UniversitiesPageContent() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = universities.filter((uni) => {
    const matchesFilter = activeFilter === "all" ? true : activeFilter === "featured" ? uni.featured : uni.partnershipLevel === activeFilter;
    const matchesSearch = searchQuery === "" ||
      uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      uni.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      uni.programs.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 via-black to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[200px]" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8 text-center pt-32 pb-20">
          <FadeIn><span className="text-indigo-400 text-sm tracking-wider uppercase font-medium">University Network</span></FadeIn>
          <div className="mt-4"><TextReveal as="h1" className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight" delay={0.2}>Find Your University</TextReveal></div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-black border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <input type="text" placeholder="Search universities, programs, locations..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-violet-500/50 transition-all" />
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <SlidersHorizontal className="w-4 h-4 text-white/30 flex-shrink-0" />
              {universityFilters.map((f) => (
                <button key={f.id} onClick={() => setActiveFilter(f.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${activeFilter === f.id ? "bg-white/10 text-white" : "text-white/40 hover:text-white/60"}`}>
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <p className="text-white/30 text-sm mb-8">Showing <span className="text-white font-medium">{filtered.length}</span> universities</p>
          <AnimatePresence mode="wait">
            <motion.div key={`${activeFilter}-${searchQuery}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {filtered.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filtered.map((uni, i) => (
                    <motion.div key={uni.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                      <UniversityCard university={uni} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-white/30 text-lg">No universities found.</p>
                  <button onClick={() => { setActiveFilter("all"); setSearchQuery(""); }} className="mt-4 text-violet-400 text-sm hover:underline">Clear filters</button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}

function UniversityCard({ university }: { university: (typeof universities)[0] }) {
  const colors = partnershipGradients[university.partnershipLevel] || partnershipGradients.partner;
  const initial = university.name.charAt(0);

  return (
    <div className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 h-full flex flex-col overflow-hidden">
      {/* Gradient banner */}
      <div className={`h-2 bg-gradient-to-r ${colors.bar}`} />

      {/* Decorative large initial */}
      <div className="absolute top-8 right-4 text-8xl font-bold text-white/[0.03] leading-none select-none pointer-events-none">
        {initial}
      </div>

      <div className="p-6 flex flex-col flex-1 relative">
        {/* Partnership badge */}
        <div className="flex items-center justify-between mb-4">
          <span className={`px-2 py-0.5 text-xs font-semibold rounded-md border ${colors.pill}`}>{university.partnershipLevel}</span>
          {university.featured && <span className="px-2 py-0.5 text-xs font-medium bg-violet-500/10 text-violet-400 rounded-md">Featured</span>}
        </div>

        {/* Logo */}
        <div className="w-full h-14 flex items-center mb-4">
          <Image src={university.logo} alt={university.name} width={160} height={50} className="max-h-10 w-auto object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity" />
        </div>

        <h3 className="text-lg font-semibold text-white mb-1">{university.name}</h3>
        <div className="flex items-center gap-2 text-white/30 text-sm mb-3">
          <MapPin className="w-3 h-3" />{university.location}, {university.country}
        </div>
        <p className="text-white/40 text-sm leading-relaxed mb-4 flex-1">{university.description}</p>

        {/* Program pill badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {university.programs.slice(0, 4).map((p) => (
            <span key={p} className={`px-2.5 py-1 text-xs rounded-full border ${colors.pill}`}>{p}</span>
          ))}
          {university.programs.length > 4 && (
            <span className="px-2.5 py-1 text-xs rounded-full border border-white/5 text-white/30">+{university.programs.length - 4}</span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
          {university.ranking && <div className="flex items-center gap-1.5 text-xs text-white/30"><Award className="w-3 h-3" />{university.ranking}</div>}
          {university.website && <a href={university.website} target="_blank" rel="noopener noreferrer" className="text-xs text-violet-400 flex items-center gap-1 hover:underline">Official Site <ExternalLink className="w-3 h-3" /></a>}
        </div>

        {/* Hover overlay button */}
        <div className="absolute inset-0 rounded-b-2xl bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-semibold rounded-full hover:shadow-lg transition-all">
            View University <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
