"use client";

import { useSmoothScroll } from "@/hooks/use-interactions";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { MouseGlow, NoiseTexture } from "@/components/ui/ambient-backgrounds";
import { FloatingContactWidget } from "@/components/ui/contact-widget";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export function ClientWrapper() {
  useSmoothScroll();
  const pathname = usePathname();

  return (
    <>
      <ScrollProgress />
      <MouseGlow color="124,58,237" />
      <NoiseTexture />
      <FloatingContactWidget />
      {/* Page transition is handled by individual page layout — this wrapper provides global effects only */}
    </>
  );
}
