"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site-config";
import { FadeIn, TextReveal } from "@/components/animations/text-reveal";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  ArrowRight,
  Globe,
} from "lucide-react";
import Link from "next/link";

const contactMethods = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Call Us",
    detail: siteConfig.links.phoneDisplay,
    sub: "Available Mon–Sat, 9AM–7PM GST",
    href: `tel:${siteConfig.links.phone}`,
    color: "from-violet-500/20 to-indigo-500/20",
    textColor: "text-violet-400",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Us",
    detail: siteConfig.links.email,
    sub: "We reply within 24 hours",
    href: `mailto:${siteConfig.links.email}`,
    color: "from-indigo-500/20 to-cyan-500/20",
    textColor: "text-indigo-400",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "WhatsApp",
    detail: siteConfig.links.whatsappDisplay,
    sub: "Instant chat — fastest response",
    href: siteConfig.links.whatsapp,
    color: "from-emerald-500/20 to-green-500/20",
    textColor: "text-emerald-400",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Visit Us",
    detail: "United Arab Emirates",
    sub: "India",
    href: "#locations",
    color: "from-amber-500/20 to-orange-500/20",
    textColor: "text-amber-400",
  },
];

export function ContactPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-black to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/5 rounded-full blur-[200px]" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8 text-center pt-32 pb-20">
          <FadeIn>
            <span className="text-violet-400 text-sm tracking-wider uppercase font-medium">
              Contact Us
            </span>
          </FadeIn>
          <div className="mt-4">
            <TextReveal
              as="h1"
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight"
              delay={0.2}
            >
              Let&apos;s Talk
            </TextReveal>
          </div>
          <FadeIn delay={0.5}>
            <p className="mt-6 text-white/40 text-lg md:text-xl max-w-2xl mx-auto">
              Every great journey starts with a conversation. Reach out to us
              and discover how ILMORA can transform your educational aspirations
              into reality.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <a
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group block p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 relative overflow-hidden"
                >
                  {/* Bottom glow on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center ${method.textColor} mb-4`}
                  >
                    {method.icon}
                  </div>
                  <h3 className="text-white font-semibold mb-1">
                    {method.title}
                  </h3>
                  <p className="text-white/60 text-sm font-medium">{method.detail}</p>
                  <p className="text-white/30 text-xs mt-1">{method.sub}</p>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Info */}
            <div>
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Begin Your Journey Today
                </h2>
                <p className="text-white/40 text-lg leading-relaxed mb-8">
                  Fill out the form and one of our expert counselors will get
                  back to you within 24 hours. Or reach out directly through any
                  of the methods above.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white/40">
                    <Clock className="w-4 h-4 text-violet-400" />
                    <span className="text-sm">
                      Response within 24 hours, guaranteed
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-white/40">
                    <MessageCircle className="w-4 h-4 text-violet-400" />
                    <span className="text-sm">
                      Free initial consultation — no obligations
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-white/40">
                    <MapPin className="w-4 h-4 text-violet-400" />
                    <span className="text-sm">
                      Offices in United Arab Emirates & India
                    </span>
                  </div>
                </div>

                {/* Quick WhatsApp CTA */}
                <a
                  href={siteConfig.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-3 px-6 py-4 bg-green-600/20 border border-green-500/30 text-green-400 rounded-xl hover:bg-green-600/30 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  <div>
                    <p className="text-sm font-semibold">Prefer WhatsApp?</p>
                    <p className="text-xs text-green-400/60">Chat with us instantly — {siteConfig.links.whatsappDisplay}</p>
                  </div>
                </a>
              </FadeIn>
            </div>

            {/* Form */}
            <FadeIn delay={0.2}>
              <div className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] relative overflow-hidden">
                {/* Form glow accent */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-violet-500/5 rounded-full blur-[80px]" />

                <form className="relative space-y-5" action={`mailto:${siteConfig.links.email}`} method="POST" encType="text/plain">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white/50 text-sm mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/25 transition-all"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-white/50 text-sm mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/25 transition-all"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/50 text-sm mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/25 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-white/50 text-sm mb-2">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/25 transition-all"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-white/50 text-sm mb-2">
                      Interested In
                    </label>
                    <select
                      name="service"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white/50 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/25 transition-all appearance-none"
                    >
                      <option value="">Select a service</option>
                      <option value="admissions">University Admissions</option>
                      <option value="visa">Visa Processing</option>
                      <option value="equivalency">UAE Equivalency</option>
                      <option value="career">Career Guidance</option>
                      <option value="scholarships">
                        Scholarship Assistance
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white/50 text-sm mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/25 transition-all resize-none"
                      placeholder="Tell us about your educational goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-violet-500/25 transition-all duration-500"
                  >
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="py-16 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl font-bold text-white text-center mb-12">
              Our Locations
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* UAE */}
            <FadeIn delay={0.1}>
              <div className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] text-center relative overflow-hidden group hover:border-violet-500/10 hover:bg-white/[0.04] transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-4xl mb-4">🇦🇪</div>
                <h3 className="text-xl font-bold text-white mb-2">United Arab Emirates</h3>
                <p className="text-white/40 text-sm mb-4">Headquarters</p>
                <a
                  href={`tel:${siteConfig.links.phone}`}
                  className="text-violet-400 text-sm hover:underline"
                >
                  {siteConfig.links.phoneDisplay}
                </a>
              </div>
            </FadeIn>

            {/* India */}
            <FadeIn delay={0.2}>
              <div className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] text-center relative overflow-hidden group hover:border-emerald-500/10 hover:bg-white/[0.04] transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-4xl mb-4">🇮🇳</div>
                <h3 className="text-xl font-bold text-white mb-2">India</h3>
                <p className="text-white/40 text-sm mb-4">Regional Office</p>
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="text-emerald-400 text-sm hover:underline"
                >
                  {siteConfig.links.email}
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* WhatsApp Banner */}
      <section className="py-16 bg-black">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <div className="p-8 rounded-2xl bg-gradient-to-r from-green-600/10 to-emerald-600/10 border border-green-500/10">
              <MessageCircle className="w-10 h-10 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                Fastest Way to Reach Us
              </h3>
              <p className="text-white/40 text-sm mb-6">
                Send us a WhatsApp message and get a response within minutes during business hours.
              </p>
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp Now
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Google Maps */}
      <section className="h-[450px] bg-white/5 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462118.02491053584!2d54.94755989707358!3d25.076280448121045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="ILMORA Education Group - Dubai, UAE"
        />
      </section>
    </>
  );
}
