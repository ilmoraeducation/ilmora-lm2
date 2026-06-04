"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { navigation } from "@/data/navigation";
import { FadeIn } from "@/components/animations/text-reveal";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";

const socialLinks = [
  { label: "Instagram", href: siteConfig.links.social.instagram, letter: "In", hoverColor: "hover:border-pink-500/40 hover:text-pink-400 hover:shadow-pink-500/20" },
  { label: "LinkedIn", href: siteConfig.links.social.linkedin, letter: "Li", hoverColor: "hover:border-blue-500/40 hover:text-blue-400 hover:shadow-blue-500/20" },
  { label: "Twitter", href: siteConfig.links.social.twitter, letter: "X", hoverColor: "hover:border-white/40 hover:text-white hover:shadow-white/20" },
  { label: "Facebook", href: siteConfig.links.social.facebook, letter: "Fb", hoverColor: "hover:border-blue-600/40 hover:text-blue-500 hover:shadow-blue-600/20" },
  { label: "YouTube", href: siteConfig.links.social.youtube, letter: "Yt", hoverColor: "hover:border-red-500/40 hover:text-red-400 hover:shadow-red-500/20" },
];

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/[0.06]">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-violet-950/10 to-transparent pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 lg:py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <FadeIn>
              <Link href="/" className="inline-block mb-6">
                <Image
                  src={siteConfig.logo.light}
                  alt={siteConfig.name}
                  width={160}
                  height={65}
                  className="h-10 w-auto"
                />
              </Link>
              <p className="text-white/50 text-sm leading-relaxed mb-4 max-w-xs">
                {siteConfig.tagline}
              </p>
              <p className="text-white/30 text-xs mb-6">
                Serving students across United Arab Emirates & India
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map(({ href, label, letter, hoverColor }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:shadow-lg transition-all duration-300 text-[10px] font-bold tracking-wide ${hoverColor}`}
                    aria-label={label}
                  >
                    {letter}
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Navigation Column */}
          <div>
            <FadeIn delay={0.1}>
              <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-6">
                Navigation
              </h4>
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-white/40 hover:text-white text-sm transition-colors duration-300 flex items-center gap-1 group"
                    >
                      {item.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* Services Column */}
          <div>
            <FadeIn delay={0.2}>
              <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-6">
                Services
              </h4>
              <ul className="space-y-3">
                {[
                  "University Admissions",
                  "Visa Processing",
                  "UAE Equivalency",
                  "Career Guidance",
                  "Scholarship Assistance",
                ].map((service) => (
                  <li key={service}>
                    <Link
                      href="/services"
                      className="text-white/40 hover:text-white text-sm transition-colors duration-300 flex items-center gap-1 group"
                    >
                      {service}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* Contact Column */}
          <div>
            <FadeIn delay={0.3}>
              <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-6">
                Get in Touch
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-white/40 text-sm block">United Arab Emirates</span>
                    <span className="text-white/30 text-xs block">Headquarters</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-white/40 text-sm block">India</span>
                    <span className="text-white/30 text-xs block">Regional Office</span>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-violet-400 flex-shrink-0" />
                  <a
                    href={`tel:${siteConfig.links.phone}`}
                    className="text-white/40 hover:text-white text-sm transition-colors"
                  >
                    {siteConfig.links.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-violet-400 flex-shrink-0" />
                  <a
                    href={`mailto:${siteConfig.links.email}`}
                    className="text-white/40 hover:text-white text-sm transition-colors"
                  >
                    {siteConfig.links.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <a
                    href={siteConfig.links.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400/70 hover:text-green-400 text-sm transition-colors"
                  >
                    WhatsApp Us
                  </a>
                </li>
              </ul>
            </FadeIn>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-white/30 hover:text-white/60 text-xs transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/30 hover:text-white/60 text-xs transition-colors"
            >
              Terms of Service
            </Link>
            <a
              href={siteConfig.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white/60 text-xs transition-colors flex items-center gap-1"
            >
              ilmoragroup.com
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
