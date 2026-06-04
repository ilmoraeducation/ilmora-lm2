"use client";

import { motion } from "framer-motion";
import { useMousePosition } from "@/hooks/use-interactions";

// ============================================================
// AMBIENT GRADIENT MESH BACKGROUND
// ============================================================
export function GradientMesh({ variant = "default" }: { variant?: "default" | "warm" | "cool" | "violet" | "emerald" }) {
  const gradients: Record<string, string[]> = {
    default: [
      "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(124,58,237,0.08), transparent)",
      "radial-gradient(ellipse 60% 40% at 80% 50%, rgba(79,70,229,0.05), transparent)",
      "radial-gradient(ellipse 60% 40% at 20% 80%, rgba(8,145,178,0.04), transparent)",
    ],
    warm: [
      "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(249,115,22,0.08), transparent)",
      "radial-gradient(ellipse 60% 40% at 80% 50%, rgba(239,68,68,0.05), transparent)",
      "radial-gradient(ellipse 60% 40% at 20% 80%, rgba(234,179,8,0.04), transparent)",
    ],
    cool: [
      "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(8,145,178,0.08), transparent)",
      "radial-gradient(ellipse 60% 40% at 80% 50%, rgba(79,70,229,0.05), transparent)",
      "radial-gradient(ellipse 60% 40% at 20% 80%, rgba(5,150,105,0.04), transparent)",
    ],
    violet: [
      "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(124,58,237,0.1), transparent)",
      "radial-gradient(ellipse 60% 40% at 80% 50%, rgba(139,92,246,0.06), transparent)",
      "radial-gradient(ellipse 60% 40% at 20% 80%, rgba(79,70,229,0.05), transparent)",
    ],
    emerald: [
      "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(5,150,105,0.08), transparent)",
      "radial-gradient(ellipse 60% 40% at 80% 50%, rgba(16,185,129,0.05), transparent)",
      "radial-gradient(ellipse 60% 40% at 20% 80%, rgba(20,184,166,0.04), transparent)",
    ],
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {gradients[variant].map((gradient, i) => (
        <div key={i} className="absolute inset-0" style={{ background: gradient }} />
      ))}
    </div>
  );
}

// ============================================================
// FLOATING GRID BACKGROUND
// ============================================================
export function FloatingGrid() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(124,58,237,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124,58,237,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
}

// ============================================================
// STAR FIELD BACKGROUND
// ============================================================
export function StarField() {
  const stars = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 2,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.1, 0.6, 0.1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// ============================================================
// MOUSE FOLLOWING GLOW
// ============================================================
export function MouseGlow({ color = "124,58,237" }: { color?: string }) {
  const { x, y } = useMousePosition();

  return (
    <motion.div
      className="fixed pointer-events-none z-0 w-[600px] h-[600px] rounded-full hidden lg:block"
      style={{
        background: `radial-gradient(circle, rgba(${color},0.06) 0%, transparent 70%)`,
      }}
      animate={{
        x: x - 300,
        y: y - 300,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 200,
      }}
    />
  );
}

// ============================================================
// NOISE TEXTURE OVERLAY
// ============================================================
export function NoiseTexture() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[1] opacity-[0.015] mix-blend-overlay"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "256px 256px",
      }}
    />
  );
}

// ============================================================
// ANIMATED PARTICLE FIELD
// ============================================================
export function ParticleField() {
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 8,
    duration: Math.random() * 6 + 4,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-violet-400/20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// ============================================================
// HORIZONTAL LINE DIVIDER WITH GLOW
// ============================================================
export function GlowingDivider({ color = "violet" }: { color?: string }) {
  const colorMap: Record<string, string> = {
    violet: "rgba(124,58,237,0.3)",
    indigo: "rgba(79,70,229,0.3)",
    cyan: "rgba(8,145,178,0.3)",
    emerald: "rgba(5,150,105,0.3)",
    amber: "rgba(249,115,22,0.3)",
    rose: "rgba(244,63,94,0.3)",
  };

  return (
    <div className="absolute top-0 left-0 right-0 h-px">
      <div
        className="h-full w-full"
        style={{
          background: `linear-gradient(90deg, transparent, ${colorMap[color] || colorMap.violet}, transparent)`,
        }}
      />
    </div>
  );
}

// ============================================================
// FLOATING ORBS (LARGE BLURRED CIRCLES)
// ============================================================
export function FloatingOrbs({ count = 3, color = "violet" }: { count?: number; color?: string }) {
  const colorMap: Record<string, { bg: string; shadow: string }> = {
    violet: { bg: "bg-violet-500", shadow: "shadow-violet-500/20" },
    indigo: { bg: "bg-indigo-500", shadow: "shadow-indigo-500/20" },
    cyan: { bg: "bg-cyan-500", shadow: "shadow-cyan-500/20" },
    emerald: { bg: "bg-emerald-500", shadow: "shadow-emerald-500/20" },
    amber: { bg: "bg-amber-500", shadow: "shadow-amber-500/20" },
    rose: { bg: "bg-rose-500", shadow: "shadow-rose-500/20" },
  };

  const orbs = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: 20 + Math.random() * 60,
    y: 20 + Math.random() * 60,
    size: 200 + Math.random() * 300,
    delay: Math.random() * 5,
    duration: 6 + Math.random() * 6,
  }));

  const c = colorMap[color] || colorMap.violet;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className={`absolute rounded-full ${c.bg} opacity-[0.03] blur-[100px]`}
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: orb.size,
            height: orb.size,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            delay: orb.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
