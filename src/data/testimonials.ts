// ============================================================
// TESTIMONIALS DATA
// ============================================================

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  university: string;
  country: string;
  countryCode: string;
  quote: string;
  avatar?: string;
  rating: number;
  featured: boolean;
  gradient: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Ahmed Al-Rashid",
    role: "Computer Science Graduate",
    university: "University of Melbourne",
    country: "Australia",
    countryCode: "🇦🇺",
    quote:
      "ILMORA didn't just help me get into university — they transformed my entire perspective on what was possible. From day one, I felt like I had a team of experts dedicated to my success.",
    rating: 5,
    featured: true,
    gradient: "from-violet-500 to-indigo-500",
  },
  {
    id: "t2",
    name: "Priya Sharma",
    role: "MBA Student",
    university: "London Business School",
    country: "United Kingdom",
    countryCode: "🇬🇧",
    quote:
      "The visa process was something I was terrified about. ILMORA handled everything seamlessly. Their expertise and attention to detail made what seemed impossible feel effortless.",
    rating: 5,
    featured: true,
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    id: "t3",
    name: "Mohammed Al-Ketbi",
    role: "Engineering Student",
    university: "Technical University of Munich",
    country: "Germany",
    countryCode: "🇩🇪",
    quote:
      "What sets ILMORA apart is their genuine care for each student. They took the time to understand my goals and mapped out a journey that led me to my dream program in Germany.",
    rating: 5,
    featured: false,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "t4",
    name: "Fatima Al-Zaabi",
    role: "Medical Student",
    university: "Charles University",
    country: "Czech Republic",
    countryCode: "🇨🇿",
    quote:
      "Getting my UAE equivalency was a complex process, but ILMORA's team knew exactly what was needed. Their expertise saved me months of confusion and uncertainty.",
    rating: 5,
    featured: true,
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    id: "t5",
    name: "Raj Patel",
    role: "Data Science Graduate",
    university: "University of Toronto",
    country: "Canada",
    countryCode: "🇨🇦",
    quote:
      "The scholarship I received through ILMORA's guidance changed everything. They helped me secure funding I didn't even know existed. Truly life-changing support.",
    rating: 5,
    featured: false,
    gradient: "from-emerald-500 to-green-500",
  },
  {
    id: "t6",
    name: "Sara Al-Mansoori",
    role: "Architecture Student",
    university: "Politecnico di Milano",
    country: "Italy",
    countryCode: "🇮🇹",
    quote:
      "ILMORA felt like a premium experience from start to finish. Every interaction was thoughtful, every recommendation was strategic. They treated my future with the importance it deserved.",
    rating: 5,
    featured: true,
    gradient: "from-rose-500 to-pink-500",
  },
];
