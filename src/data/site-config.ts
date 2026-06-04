// ============================================================
// ILMORA EDUCATION GROUP — CMS-READY SITE CONFIGURATION
// ============================================================

export const siteConfig = {
  name: "ILMORA Education Group",
  shortName: "ILMORA",
  tagline: "The Future Operating System for Global Higher Education",
  description:
    "ILMORA Education Group transforms the way students access global higher education. From university selection to graduation, we provide a comprehensive, technology-driven platform that guides every step of the academic journey.",
  url: "https://ilmoragroup.com",
  ogImage: "/images/og-image.jpg",
  links: {
    whatsapp: "https://wa.me/971529682123",
    whatsappDisplay: "+971 52 968 2123",
    phone: "+971529682123",
    phoneDisplay: "+971 52 968 2123",
    email: "ilmoraeducationgroup@gmail.com",
    emailAdmissions: "ilmoraeducationgroup@gmail.com",
    address: {
      street: "",
      area: "",
      city: "",
      country: "United Arab Emirates",
      full: "United Arab Emirates & India",
    },
    social: {
      instagram: "https://instagram.com/ilmora_education",
      linkedin: "https://linkedin.com/company/ilmoraeducation",
      twitter: "https://twitter.com/ilmoraedu",
      facebook: "https://facebook.com/ilmoraeducation",
      youtube: "https://youtube.com/@ilmoraeducation",
    },
  },
  seo: {
    title: "ILMORA Education Group — Global Higher Education Reimagined",
    metaDescription:
      "Transform your future with ILMORA Education Group. Expert guidance for university admissions, visa processing, UAE equivalency, and global career pathways. Your journey to world-class education starts here.",
    keywords: [
      "ILMORA Education",
      "study abroad",
      "university admissions",
      "UAE education",
      "Dubai education consultancy",
      "higher education",
      "international universities",
      "student visa",
      "UAE equivalency",
      "global education platform",
      "ILMORA Education Group",
      "education UAE India",
    ],
    ogTitle: "ILMORA — The Future of Global Higher Education",
    ogDescription:
      "Experience the next generation of education guidance. ILMORA transforms how students connect with world-class universities worldwide.",
  },
  logo: {
    primary: "/images/brands/ilmora-dark.png",
    light: "/images/brands/ilmora-white.png",
    width: 180,
    height: 73,
  },
  contact: {
    ctaText: "Begin Your Journey",
    ctaLink: "/contact",
    secondaryCta: "Explore Universities",
    secondaryLink: "/universities",
  },
} as const;

export type SiteConfig = typeof siteConfig;
