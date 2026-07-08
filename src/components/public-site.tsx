import {
  ArrowRight,
  ArrowUp,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChefHat,
  ChevronDown,
  FileCheck2,
  HardHat,
  HeartPulse,
  Hotel,
  MapPin,
  Menu,
  MessageCircle,
  Plane,
  Search,
  ShieldCheck,
  Star,
  Truck,
  Upload,
  Wrench,
  X,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import aboutWorkFallbackImage from "../assets/site-images/about-work.jpg";
import nicksLogo from "../assets/nicks-logo.png";
import heroConstructionFallbackImage from "../assets/site-images/hero-construction.jpg";
import heroDriverFallbackImage from "../assets/site-images/hero-driver.jpg";
import heroHealthcareFallbackImage from "../assets/site-images/hero-healthcare.jpg";
import type { FormEvent } from "react";

const whatsappNumber = "254746030545";

const heroOfficeImage = aboutWorkFallbackImage;
const heroDriverImage = heroDriverFallbackImage;
const heroHealthcareImage = heroHealthcareFallbackImage;
const heroConstructionImage = heroConstructionFallbackImage;
const aboutWorkImage = aboutWorkFallbackImage;
const hospitalityImage =
  "https://images.pexels.com/photos/30796821/pexels-photo-30796821.jpeg?auto=compress&cs=tinysrgb&w=1800";
const readinessImage =
  "https://images.pexels.com/photos/9301524/pexels-photo-9301524.jpeg?auto=compress&cs=tinysrgb&w=1800";
const homeFeatureImage =
  "https://images.pexels.com/photos/1139317/pexels-photo-1139317.jpeg?auto=compress&cs=tinysrgb&w=1800";
const homeJobsFeatureImage =
  "https://images.pexels.com/photos/9485310/pexels-photo-9485310.jpeg?auto=compress&cs=tinysrgb&w=1800";
const homeJoinImage =
  "https://images.pexels.com/photos/7793634/pexels-photo-7793634.jpeg?auto=compress&cs=tinysrgb&w=1800";
const aboutJoinImage =
  "https://images.pexels.com/photos/19616515/pexels-photo-19616515.jpeg?auto=compress&cs=tinysrgb&w=1800";
const aboutPageHeroImage =
  "https://images.pexels.com/photos/34928339/pexels-photo-34928339.jpeg?auto=compress&cs=tinysrgb&w=1800";
const contactHeroImage =
  "https://images.pexels.com/photos/5669603/pexels-photo-5669603.jpeg?auto=compress&cs=tinysrgb&w=1800";
const processBannerImage =
  "https://images.pexels.com/photos/37668424/pexels-photo-37668424.jpeg?auto=compress&cs=tinysrgb&w=1800";

const heroSlides = [
  {
    image:
      "https://images.pexels.com/photos/7688363/pexels-photo-7688363.jpeg?auto=compress&cs=tinysrgb&w=1800",
    fallback: aboutWorkFallbackImage,
    alt: "Black African professionals collaborating in a Nairobi office",
  },
  {
    image:
      "https://images.pexels.com/photos/4687853/pexels-photo-4687853.jpeg?auto=compress&cs=tinysrgb&w=1800",
    fallback: heroDriverFallbackImage,
    alt: "Kenyan truck driver at work in East Africa",
  },
  {
    image:
      "https://images.pexels.com/photos/6129506/pexels-photo-6129506.jpeg?auto=compress&cs=tinysrgb&w=1800",
    fallback: heroHealthcareFallbackImage,
    alt: "Kenyan healthcare professional in a hospital ward",
  },
  {
    image:
      "https://images.pexels.com/photos/11321792/pexels-photo-11321792.jpeg?auto=compress&cs=tinysrgb&w=1800",
    fallback: heroConstructionFallbackImage,
    alt: "Kenyan construction workers on a Nairobi worksite",
  },
];

const homeHeroSlides = [
  {
    image:
      "https://images.pexels.com/photos/36505864/pexels-photo-36505864.jpeg?auto=compress&cs=tinysrgb&w=1800",
    fallback: aboutWorkFallbackImage,
    alt: "Black professional chef preparing a dish in a modern commercial kitchen",
  },
  {
    image:
      "https://images.pexels.com/photos/8297133/pexels-photo-8297133.jpeg?auto=compress&cs=tinysrgb&w=1800",
    fallback: aboutWorkFallbackImage,
    alt: "Black professional preparing documents for an overseas opportunity",
  },
  {
    image:
      "https://images.pexels.com/photos/7540622/pexels-photo-7540622.jpeg?auto=compress&cs=tinysrgb&w=1800",
    fallback: heroConstructionFallbackImage,
    alt: "Black automotive mechanic repairing a truck in a professional garage",
  },
  {
    image:
      "https://images.pexels.com/photos/5721386/pexels-photo-5721386.jpeg?auto=compress&cs=tinysrgb&w=1800",
    fallback: heroHealthcareFallbackImage,
    alt: "Kenyan healthcare professional celebrating a new Gulf opportunity",
  },
];

const stats = [
  { value: "10,000+", label: "Successful placements" },
  { value: "500+", label: "Verified employers" },
  { value: "98%", label: "Visa success rate" },
  { value: "7+", label: "Years of experience" },
];

function StatValue({ value }: { value: string }) {
  const hasPlus = value.endsWith("+");

  return (
    <span>
      {hasPlus ? value.slice(0, -1) : value}
      {hasPlus ? <span className="text-emerald-600">+</span> : null}
    </span>
  );
}

const employers = [
  {
    name: "Emirates",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/emirates.svg",
  },
  {
    name: "Qatar Airways",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/qatarairways.svg",
  },
  {
    name: "Marriott",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/marriott.svg",
  },
  {
    name: "Hilton",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/hilton.svg",
  },
  {
    name: "Accor",
    logo: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Accor_Live_Limitless_logo.svg",
  },
  {
    name: "DHL",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/dhl.svg",
  },
  {
    name: "Aramco",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/aramco.svg",
  },
];

const jobs = [
  {
    role: "ICU Nurse",
    category: "Healthcare",
    destination: "United Arab Emirates",
    status: "Urgent",
    company: "Premium Gulf Hospital",
    location: "Abu Dhabi, UAE",
    salary: "AED 12,500",
    benefits: ["Visa included", "Accommodation", "Medical cover"],
    icon: HeartPulse,
  },
  {
    role: "Heavy Truck Driver",
    category: "Drivers",
    destination: "Qatar",
    status: "Urgent",
    company: "Logistics Partner",
    location: "Doha, Qatar",
    salary: "QAR 3,800",
    benefits: ["Food provided", "Transport", "Overtime"],
    icon: Truck,
  },
  {
    role: "Security Officer",
    category: "Security",
    destination: "Saudi Arabia",
    status: "New",
    company: "Verified Facilities Group",
    location: "Riyadh, Saudi Arabia",
    salary: "SAR 2,700",
    benefits: ["Visa support", "Medical covered", "Uniform"],
    icon: ShieldCheck,
  },
  {
    role: "Five-Star Hotel Chef",
    category: "Hospitality",
    destination: "Oman",
    status: "Closing soon",
    company: "Luxury Hotel Group",
    location: "Muscat, Oman",
    salary: "OMR 1,400",
    benefits: ["Housing", "Meals", "Contract bonus"],
    icon: ChefHat,
  },
  {
    role: "Project Engineer",
    category: "Engineering",
    destination: "United Arab Emirates",
    status: "Featured",
    company: "Gulf Construction Firm",
    location: "Dubai, UAE",
    salary: "AED 15,000",
    benefits: ["Family visa", "Annual flight", "Insurance"],
    icon: HardHat,
  },
  {
    role: "Housekeeping Supervisor",
    category: "Hospitality",
    destination: "Bahrain",
    status: "Ongoing",
    company: "Hospitality Partner",
    location: "Manama, Bahrain",
    salary: "BHD 850",
    benefits: ["Accommodation", "Meals", "Transport"],
    icon: Hotel,
  },
  {
    role: "Airport Ground Crew",
    category: "Aviation",
    destination: "Qatar",
    status: "New",
    company: "Aviation Services Partner",
    location: "Doha, Qatar",
    salary: "QAR 4,200",
    benefits: ["Visa support", "Transport", "Duty meals"],
    icon: Plane,
  },
  {
    role: "Warehouse Assistant",
    category: "Logistics",
    destination: "Kuwait",
    status: "Ongoing",
    company: "Retail Distribution Group",
    location: "Kuwait City, Kuwait",
    salary: "KWD 230",
    benefits: ["Accommodation", "Overtime", "Medical cover"],
    icon: BriefcaseBusiness,
  },
  {
    role: "Welder",
    category: "Construction",
    destination: "Saudi Arabia",
    status: "Closing soon",
    company: "Industrial Contractor",
    location: "Dammam, Saudi Arabia",
    salary: "SAR 3,600",
    benefits: ["Accommodation", "Transport", "Contract bonus"],
    icon: Wrench,
  },
];

const categories = [
  { icon: HeartPulse, label: "Healthcare", jobs: "1,240" },
  { icon: HardHat, label: "Construction", jobs: "980" },
  { icon: Truck, label: "Drivers", jobs: "760" },
  { icon: ChefHat, label: "Hospitality", jobs: "540" },
  { icon: ShieldCheck, label: "Security", jobs: "420" },
  { icon: Wrench, label: "Engineering", jobs: "310" },
  { icon: Plane, label: "Aviation", jobs: "180" },
  { icon: BriefcaseBusiness, label: "Oil & Gas", jobs: "220" },
];

const countries = [
  {
    flag: "QA",
    name: "Qatar",
    jobs: "1,250+",
    salary: "QAR 2,500",
    roles: "Drivers, security, hospitality",
  },
  {
    flag: "AE",
    name: "United Arab Emirates",
    jobs: "2,340+",
    salary: "AED 3,800",
    roles: "Nurses, engineers, hotel staff",
  },
  {
    flag: "SA",
    name: "Saudi Arabia",
    jobs: "1,890+",
    salary: "SAR 3,200",
    roles: "Construction, medical, logistics",
  },
  {
    flag: "OM",
    name: "Oman",
    jobs: "620+",
    salary: "OMR 2,400",
    roles: "Hospitality, technical, drivers",
  },
  {
    flag: "KW",
    name: "Kuwait",
    jobs: "550+",
    salary: "KWD 2,100",
    roles: "Domestic work, retail, warehouse",
  },
  {
    flag: "BH",
    name: "Bahrain",
    jobs: "310+",
    salary: "BHD 850",
    roles: "Hotel, cleaning, food service",
  },
];

const steps = [
  {
    title: "WhatsApp enquiry",
    body: "Tell us your profession, preferred country, experience, and CV status.",
  },
  {
    title: "Document review",
    body: "Our team checks your CV, passport status, certificates, and readiness.",
  },
  {
    title: "Verified matching",
    body: "You are matched only to roles with clear employer and benefit information.",
  },
  {
    title: "Interview guidance",
    body: "We help you prepare for employer conversations and next-step requirements.",
  },
  {
    title: "Visa coordination",
    body: "Medical, visa, contract, and travel steps are explained before movement.",
  },
  {
    title: "Arrival support",
    body: "Candidates receive guidance for flight, pickup, and first-week settling.",
  },
];

const aboutImpactCards = [
  {
    title: "Verified employer access",
    summary: "We connect candidates with employers that share clear role expectations.",
    image:
      "https://images.pexels.com/photos/5273651/pexels-photo-5273651.jpeg?auto=compress&cs=tinysrgb&w=1400",
    supportImage:
      "https://images.pexels.com/photos/7654491/pexels-photo-7654491.jpeg?auto=compress&cs=tinysrgb&w=1400",
    fallback: aboutWorkFallbackImage,
    detail:
      "Every opportunity is reviewed for destination, contract basics, visa path and candidate readiness before candidates are guided to the next step.",
  },
  {
    title: "Candidate preparation",
    summary: "Documents, interviews and travel steps are explained before movement.",
    image:
      "https://images.pexels.com/photos/1181438/pexels-photo-1181438.jpeg?auto=compress&cs=tinysrgb&w=1400",
    supportImage:
      "https://images.pexels.com/photos/5905445/pexels-photo-5905445.jpeg?auto=compress&cs=tinysrgb&w=1400",
    fallback: aboutWorkFallbackImage,
    detail:
      "Our team helps candidates understand CV readiness, passport status, certificates, interview expectations and the sequence from medicals to travel.",
  },
  {
    title: "Gulf sector matching",
    summary: "Roles are matched by skill, experience, destination and salary expectations.",
    image:
      "https://images.pexels.com/photos/35397476/pexels-photo-35397476.jpeg?auto=compress&cs=tinysrgb&w=1400",
    supportImage:
      "https://images.pexels.com/photos/19619013/pexels-photo-19619013.jpeg?auto=compress&cs=tinysrgb&w=1400",
    fallback: heroConstructionFallbackImage,
    detail:
      "NICKS supports practical recruitment across healthcare, drivers, hospitality, construction, security, logistics and technical fields.",
  },
  {
    title: "Ongoing support",
    summary: "Clear communication reduces confusion for candidates and families.",
    image:
      "https://images.pexels.com/photos/7874729/pexels-photo-7874729.jpeg?auto=compress&cs=tinysrgb&w=1400",
    supportImage:
      "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1400",
    fallback: heroHealthcareFallbackImage,
    detail:
      "From first enquiry through arrival preparation, candidates get plain guidance on what is required, what is pending and what happens next.",
  },
];

const candidateQualities = [
  "Updated CV and accurate work history",
  "Valid passport or clear renewal plan",
  "Certificates, licenses or trade proof where required",
  "Interview readiness and professional communication",
  "Willingness to follow verified visa and travel steps",
];

const heroSearchItems = [
  {
    title: "Services: what NICKS offers",
    description: "Recruitment services, verified roles, employer matching and candidate support.",
    answer:
      "NICKS offers recruitment support for verified Gulf opportunities, including employer matching, document readiness, interview preparation, visa-step guidance and arrival support.",
    content: [
      "NICKS connects skilled professionals with verified employers across industries, locally and globally.",
      "The agency supports practical recruitment across healthcare, drivers, hospitality, construction, security, logistics and technical roles.",
      "Each opportunity is reviewed for destination, contract basics, visa path and candidate readiness before the candidate is guided forward.",
    ],
    href: "/about#services",
    links: [
      { label: "Services", href: "/about#services" },
      { label: "Process", href: "/how-it-works" },
      { label: "Contact NICKS", href: "/contact-us" },
    ],
    keywords: "services offers what nicks offers recruitment staffing staff employers business",
  },
  {
    title: "Staffing support",
    description: "Support for employers looking for prepared staff across Gulf sectors.",
    answer:
      "For staffing needs, NICKS helps connect employers with prepared candidates across healthcare, hospitality, construction, drivers, logistics, security and technical fields.",
    content: [
      "Employers can use NICKS for access to better prepared workers across high-demand Gulf sectors.",
      "Candidate preparation includes role understanding, document checks, communication readiness and expectation setting.",
      "The team helps reduce mismatch by focusing on verified roles, clear requirements and candidate readiness.",
    ],
    href: "/contact-us",
    links: [
      { label: "Contact team", href: "/contact-us" },
      { label: "Sectors", href: "/jobs" },
      { label: "Destinations", href: "/destinations" },
    ],
    keywords: "staff staffing employer support workers hire talent recruitment services",
  },
  {
    title: "Candidate support",
    description: "CV, passport, documents, interviews, visa coordination and arrival guidance.",
    answer:
      "Candidates get practical help understanding CV readiness, passport status, certificates, interviews, medicals, visa coordination, travel steps and first-week settling.",
    content: [
      "Candidates are guided from first enquiry through arrival preparation with plain information on what is required and what is pending.",
      "Support covers CV readiness, passport status, certificates, interview expectations, medicals, visa coordination and travel steps.",
      "The goal is to help each person move with confidence and avoid confusion during the recruitment process.",
    ],
    href: "/about#candidate-support",
    links: [
      { label: "Candidate support", href: "/about#candidate-support" },
      { label: "How it works", href: "/how-it-works" },
      { label: "Open jobs", href: "/jobs" },
    ],
    keywords: "candidate support documents cv passport interview visa arrival preparation",
  },
  {
    title: "How it works",
    description: "See the step-by-step journey from WhatsApp enquiry to arrival support.",
    answer:
      "The NICKS process moves through WhatsApp enquiry, document review, verified matching, interview guidance, visa coordination and arrival support.",
    content: [
      "The journey starts with a WhatsApp enquiry where the candidate shares profession, preferred country, experience and CV status.",
      "Documents are reviewed before matching, then candidates receive interview guidance and next-step preparation.",
      "Visa, medical, contract and travel steps are explained before movement, with arrival guidance for flight, pickup and settling.",
    ],
    href: "/how-it-works",
    links: [
      { label: "Full process", href: "/how-it-works" },
      { label: "Start enquiry", href: "/contact-us" },
      { label: "Jobs", href: "/jobs" },
    ],
    keywords: "process steps how it works enquiry document matching interview visa arrival",
  },
  {
    title: "Open jobs",
    description: "Search current and recurring Gulf opportunities by role or destination.",
    answer:
      "The jobs page lists current and recurring Gulf opportunities with role, company, location, salary range, benefits and WhatsApp enquiry paths.",
    content: [
      "Open roles are grouped by sectors such as healthcare, hospitality, construction, logistics, technical work, drivers and security.",
      "Each listed opportunity shows practical information such as destination, salary range, benefits and status where available.",
      "Candidates can use job pages to compare openings and begin an enquiry for roles that match their skills.",
    ],
    href: "/jobs",
    links: [
      { label: "Search jobs", href: "/jobs" },
      { label: "Destinations", href: "/destinations" },
      { label: "Contact", href: "/contact-us" },
    ],
    keywords: "jobs vacancies roles careers work gulf opportunities salary",
  },
  {
    title: "Destinations",
    description: "Compare Gulf markets, roles and candidate readiness requirements.",
    answer:
      "NICKS supports candidates across Gulf destinations including Qatar, UAE, Saudi Arabia, Oman, Kuwait and Bahrain, with role and salary expectations shown by market.",
    content: [
      "Destination guidance helps candidates compare common roles, salary expectations and readiness requirements by country.",
      "Supported markets include Qatar, United Arab Emirates, Saudi Arabia, Oman, Kuwait and Bahrain.",
      "Candidates can review markets first, then move into jobs that match their destination preference and skills.",
    ],
    href: "/destinations",
    links: [
      { label: "View destinations", href: "/destinations" },
      { label: "Jobs by destination", href: "/jobs" },
      { label: "Readiness", href: "/about#candidate-support" },
    ],
    keywords: "destinations countries qatar uae saudi oman kuwait bahrain gulf",
  },
  {
    title: "Contact us",
    description: "Reach NICKS for candidate enquiries, staffing support and recruitment guidance.",
    answer:
      "Use the contact page to talk to NICKS about verified Gulf jobs, staffing needs, candidate support, documents, destinations or the next step in your recruitment journey.",
    content: [
      "Candidates can share their profession, preferred destination, experience level and CV status.",
      "Employers and partners can contact the team about staffing needs and recruitment support.",
      "The contact page also includes the Nairobi office map and enquiry form for direct follow-up.",
    ],
    href: "/contact-us",
    links: [
      { label: "Open contact page", href: "/contact-us" },
      { label: "Talk to our team", href: "/contact-us" },
      { label: "View jobs", href: "/jobs" },
    ],
    keywords:
      "contact contact us talk team enquiry enquiries phone whatsapp office map nairobi help",
  },
];

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "JOBS",
    href: "/jobs",
    children: [
      { label: "Destinations", href: "/destinations" },
      { label: "How It Works", href: "/how-it-works" },
    ],
  },
  { label: "Success", href: "/success" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact Us", href: "/contact-us" },
];

function whatsappUrl(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function setFallbackImage(
  event: React.SyntheticEvent<HTMLImageElement, Event>,
  fallbackImage: string,
) {
  event.currentTarget.onerror = null;

  if (event.currentTarget.src !== fallbackImage) {
    event.currentTarget.src = fallbackImage;
  }
}

function showLogoFallback(event: React.SyntheticEvent<HTMLImageElement, Event>) {
  event.currentTarget.style.display = "none";
  event.currentTarget.nextElementSibling?.classList.remove("hidden");
}

function WhatsAppIcon({ className }: React.SVGProps<SVGSVGElement>) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block shrink-0 bg-current ${className ?? ""}`}
      style={{
        WebkitMaskImage: "url(https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/whatsapp.svg)",
        maskImage: "url(https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/whatsapp.svg)",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      {children}
      <Footer />
      <FloatingActions />
    </div>
  );
}

function Nav() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);

  useEffect(() => {
    if (openMenu !== "site-menu") return;

    let lastScrollY = window.scrollY;

    const closeOnScrollUp = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY - 8) {
        setOpenMenu(null);
        setOpenMobileSubmenu(null);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", closeOnScrollUp, { passive: true });

    return () => window.removeEventListener("scroll", closeOnScrollUp);
  }, [openMenu]);

  return (
    <nav className="relative z-50 w-full border-b border-border bg-white text-primary-deep">
      <div className="relative flex min-h-24 w-full items-center gap-4 px-6 sm:px-8 lg:px-12">
        <Logo />
        <div className="hidden min-w-0 flex-1 items-center justify-center gap-6 overflow-visible text-xs font-extrabold uppercase tracking-[0.08em] text-primary-deep/76 lg:flex">
          {navItems.map((item) =>
            "children" in item ? (
              <div key={item.href} className="group relative shrink-0">
                <div className="inline-flex items-center border-b-2 border-transparent py-9 transition hover:border-primary focus-within:border-primary">
                  <a
                    href={item.href}
                    onClick={() => setOpenMenu(null)}
                    className="transition hover:text-primary focus:text-primary focus:outline-none"
                  >
                    {item.label}
                  </a>
                  <button
                    type="button"
                    onClick={() => setOpenMenu(openMenu === item.href ? null : item.href)}
                    className="ml-1 inline-flex size-7 items-center justify-center rounded-full transition hover:bg-primary/8 hover:text-primary focus:bg-primary/8 focus:text-primary focus:outline-none"
                    aria-expanded={openMenu === item.href}
                    aria-haspopup="menu"
                    aria-label={`${item.label} menu`}
                  >
                    <ChevronDown
                      className={`size-3.5 transition ${openMenu === item.href ? "rotate-180" : ""}`}
                      strokeWidth={3}
                    />
                  </button>
                </div>
                <div
                  className={`absolute right-0 top-full z-50 min-w-52 border-2 border-accent-gold bg-white p-2 text-primary-deep shadow-gold transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 ${
                    openMenu === item.href
                      ? "visible translate-y-0 opacity-100"
                      : "invisible translate-y-2 opacity-0"
                  }`}
                  role="menu"
                >
                  {[{ label: item.label, href: item.href }, ...item.children].map((child) => (
                    <a
                      key={child.href}
                      href={child.href}
                      onClick={() => setOpenMenu(null)}
                      className="block rounded-lg px-4 py-3 text-sm font-black transition hover:bg-lavender"
                      role="menuitem"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="shrink-0 border-b-2 border-transparent py-9 transition hover:border-primary hover:text-primary"
              >
                {item.label}
              </a>
            ),
          )}
        </div>
        <button
          type="button"
          onClick={() => setOpenMenu(openMenu === "site-search" ? null : "site-search")}
          className="ml-auto inline-flex size-12 items-center justify-center rounded-full text-emerald-600 transition hover:bg-emerald-50 focus:bg-emerald-50 focus:outline-none"
          aria-expanded={openMenu === "site-search"}
          aria-label="Search site content"
        >
          <Search className="size-6" strokeWidth={3} />
        </button>
        <button
          type="button"
          onClick={() => {
            setOpenMenu(openMenu === "site-menu" ? null : "site-menu");
            setOpenMobileSubmenu(null);
          }}
          className="inline-flex size-12 items-center justify-center rounded-full text-primary-deep transition hover:bg-primary/8 focus:bg-primary/8 focus:outline-none"
          aria-expanded={openMenu === "site-menu"}
          aria-label="Open navigation menu"
        >
          <Menu className="size-8" strokeWidth={2.4} />
        </button>
        <div
          className={`absolute right-6 top-full z-50 w-[min(28rem,calc(100vw-3rem))] border border-emerald-100 bg-white p-4 text-primary-deep shadow-elegant transition sm:right-8 lg:right-12 ${
            openMenu === "site-search"
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0"
          }`}
        >
          <SiteSearchPopup onNavigate={() => setOpenMenu(null)} />
        </div>
        <div
          className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto border-l border-border bg-white p-5 text-primary-deep shadow-elegant transition duration-300 sm:max-w-sm ${
            openMenu === "site-menu"
              ? "visible translate-x-0 opacity-100"
              : "invisible translate-x-full opacity-0"
          }`}
        >
          <div className="mb-5 flex items-center justify-between border-b border-border pb-4">
            <Logo />
            <button
              type="button"
              onClick={() => {
                setOpenMenu(null);
                setOpenMobileSubmenu(null);
              }}
              className="grid size-11 place-items-center rounded-full text-primary-deep transition hover:bg-primary/8 focus:bg-primary/8 focus:outline-none"
              aria-label="Close navigation menu"
            >
              <X className="size-6" strokeWidth={2.5} />
            </button>
          </div>
          {navItems.map((item) => {
            const hasChildren = "children" in item;
            const isOpen = openMobileSubmenu === item.href;

            return (
              <div key={item.href}>
                {hasChildren ? (
                  <button
                    type="button"
                    onClick={() => setOpenMobileSubmenu(isOpen ? null : item.href)}
                    className="flex w-full items-center justify-between rounded-md px-4 py-3 text-left text-sm font-black uppercase tracking-[0.08em] transition hover:bg-lavender"
                    aria-expanded={isOpen}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`size-4 transition ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => {
                      setOpenMenu(null);
                      setOpenMobileSubmenu(null);
                    }}
                    className="flex items-center justify-between rounded-md px-4 py-3 text-sm font-black uppercase tracking-[0.08em] transition hover:bg-lavender"
                  >
                    {item.label}
                  </a>
                )}
                {hasChildren && isOpen
                  ? item.children.map((child) => (
                      <a
                        key={child.href}
                        href={child.href}
                        onClick={() => {
                          setOpenMenu(null);
                          setOpenMobileSubmenu(null);
                        }}
                        className="ml-4 block rounded-md px-4 py-2 text-sm font-black uppercase tracking-[0.08em] text-primary-deep transition hover:bg-lavender hover:text-primary"
                      >
                        {child.label}
                      </a>
                    ))
                  : null}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [footerIsVisible, setFooterIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 420);
    const footer = document.querySelector("[data-site-footer]");
    const observer = footer
      ? new IntersectionObserver(([entry]) => setFooterIsVisible(entry.isIntersecting), {
          threshold: 0.01,
        })
      : null;

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    if (footer && observer) observer.observe(footer);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer?.disconnect();
    };
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 flex flex-col-reverse items-end gap-3 transition duration-300 ${
        footerIsVisible
          ? "pointer-events-none translate-y-4 opacity-0"
          : "translate-y-0 opacity-100"
      }`}
    >
      <a
        href={whatsappUrl("Hello NICKS, I would like help finding a verified Gulf job.")}
        className="inline-flex size-14 items-center justify-center rounded-md bg-primary text-white shadow-elegant transition hover:-translate-y-1 hover:bg-primary-deep"
        aria-label="Chat with NICKS on WhatsApp"
      >
        <WhatsAppIcon className="size-6" />
      </a>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`inline-flex size-12 items-center justify-center rounded-md bg-primary text-white shadow-elegant transition duration-300 hover:-translate-y-1 hover:bg-primary-deep focus:outline-none focus:ring-4 focus:ring-primary/20 ${
          showBackToTop
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="size-5" strokeWidth={3} />
      </button>
    </div>
  );
}

function Logo() {
  return (
    <a href="/" className="flex shrink-0 items-center" aria-label="NICKS Recruitment Agency home">
      <img
        src={nicksLogo}
        alt="NICKS Recruitment Agency"
        className="h-16 w-auto object-contain mix-blend-multiply sm:h-20"
      />
    </a>
  );
}

export function HomePage() {
  return (
    <PublicLayout>
      <Hero />
      <AboutFeatureImage />
      <AboutBusinessSection />
      <AboutReadinessSection />
      <AboutJoinSection image={homeJoinImage} fallback={aboutWorkFallbackImage} />
      <AboutImpactSection />
      <TrustStrip />
      <RoleCategories />
      <CTASection />
    </PublicLayout>
  );
}

function Hero() {
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [previousHeroSlide, setPreviousHeroSlide] = useState<number | null>(null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveHeroSlide((current) => {
        setPreviousHeroSlide(current);
        return (current + 1) % homeHeroSlides.length;
      });
    }, 7000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-primary-deep text-white">
      <div className="absolute inset-y-0 right-0 hidden w-[58%] lg:block">
        {homeHeroSlides.map((slide, index) => (
          <img
            key={slide.image}
            src={slide.image}
            alt={slide.alt}
            onError={(event) => setFallbackImage(event, slide.fallback)}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            className={`absolute inset-0 size-full object-cover object-[center_18%] transition-[opacity,transform] duration-[1600ms] ease-in-out will-change-[opacity,transform] [clip-path:polygon(26%_0,100%_0,100%_100%,0_100%)] ${
              index === activeHeroSlide
                ? "z-20 scale-100 opacity-100"
                : index === previousHeroSlide
                  ? "z-10 scale-[1.025] opacity-0"
                  : "z-0 scale-[1.025] opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-primary/10 [clip-path:polygon(26%_0,100%_0,100%_100%,0_100%)]" />
      </div>
      <div className="relative h-[min(72vw,22rem)] overflow-hidden sm:h-96 lg:hidden">
        {homeHeroSlides.map((slide, index) => (
          <img
            key={slide.image}
            src={slide.image}
            alt={index === activeHeroSlide ? slide.alt : ""}
            onError={(event) => setFallbackImage(event, slide.fallback)}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            className={`absolute inset-0 size-full object-cover object-[center_18%] transition-[opacity,transform] duration-[1600ms] ease-in-out will-change-[opacity,transform] ${
              index === activeHeroSlide
                ? "z-20 scale-100 opacity-100"
                : index === previousHeroSlide
                  ? "z-10 scale-[1.025] opacity-0"
                  : "z-0 scale-[1.025] opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="relative z-30 mx-auto grid min-h-[0] max-w-7xl items-center px-6 py-12 sm:px-8 sm:py-16 lg:min-h-[520px] lg:grid-cols-[0.52fr_0.48fr] lg:px-12">
        <div className="max-w-2xl">
          <h1 className="mt-3 font-display text-5xl font-black leading-[0.96] sm:text-6xl lg:text-7xl">
            Opening trusted Gulf pathways.
          </h1>
          <p className="mt-6 max-w-xl text-sm font-semibold leading-7 text-white/82 sm:text-base">
            We connect Kenyan professionals with verified employers across the Gulf through clear
            guidance, careful document review and candidate-first support from enquiry to arrival.
          </p>
          <a
            href="/about"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent-gold px-5 py-3 text-sm font-black text-primary-deep transition hover:bg-accent-gold-soft"
          >
            About us
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function PageHero({
  eyebrow,
  title,
  body,
  image,
  fallbackImage,
  cta = "Enquire on WhatsApp",
}: {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  fallbackImage?: string;
  cta?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-primary-deep text-white">
      <div className="absolute inset-y-0 right-0 hidden w-[58%] lg:block">
        <img
          src={image}
          alt=""
          onError={(event) => fallbackImage && setFallbackImage(event, fallbackImage)}
          loading="eager"
          decoding="async"
          className="size-full object-cover object-[center_18%] [clip-path:polygon(26%_0,100%_0,100%_100%,0_100%)]"
        />
        <div className="absolute inset-0 bg-primary/10 [clip-path:polygon(26%_0,100%_0,100%_100%,0_100%)]" />
      </div>
      <div className="relative h-[min(72vw,22rem)] overflow-hidden sm:h-96 lg:hidden">
        <img
          src={image}
          alt=""
          onError={(event) => fallbackImage && setFallbackImage(event, fallbackImage)}
          loading="eager"
          decoding="async"
          className="size-full object-cover object-[center_18%]"
        />
      </div>
      <div className="relative mx-auto grid min-h-[0] max-w-7xl items-center px-6 py-12 sm:px-8 sm:py-16 lg:min-h-[430px] lg:grid-cols-[0.52fr_0.48fr] lg:px-12">
        <div className="max-w-2xl">
          <div className="text-xs font-bold text-white/72">
            <a href="/" className="hover:text-accent-gold">
              Home
            </a>
            <span className="mx-2">|</span>
            <span>{eyebrow}</span>
          </div>
          <h1 className="mt-6 font-display text-5xl font-black leading-[0.96] sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-sm font-semibold leading-7 text-white/82 sm:text-base">
            {body}
          </p>
          <a
            href={whatsappUrl("Hello NICKS, I want to enquire about verified Gulf opportunities.")}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent-gold px-5 py-3 text-sm font-black text-primary-deep transition hover:bg-accent-gold-soft"
          >
            {cta}
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function SiteSearchPopup({ onNavigate }: { onNavigate?: () => void }) {
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const displayQuery = submittedQuery || query.trim();
  const results = useMemo(() => {
    if (!normalizedQuery) {
      return heroSearchItems;
    }

    return heroSearchItems
      .filter((item) =>
        [item.title, item.description, item.answer, item.content.join(" "), item.keywords]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery),
      )
      .slice(0, 6);
  }, [normalizedQuery]);
  const fallbackAnswer =
    displayQuery.length > 0
      ? `NICKS may not have a dedicated page named "${displayQuery}", but we can still help with related services: verified Gulf job matching, staffing support for employers, document checks, interview guidance, visa coordination and arrival preparation.`
      : "";

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmittedQuery(query.trim());
  };

  return (
    <div>
      <p className="mb-3 text-xs font-black uppercase tracking-[0.14em] text-primary-deep/60">
        Search NICKS
      </p>
      <form onSubmit={handleSubmit} className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-emerald-600" />
        <input
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setSubmittedQuery("");
          }}
          placeholder="Search services, staff support, jobs..."
          className="h-12 w-full rounded-full border border-emerald-100 bg-background pl-12 pr-4 text-sm font-bold text-primary-deep outline-none transition placeholder:text-primary-deep/45 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
          aria-label="Search NICKS content"
        />
      </form>
      <div className="mt-4 max-h-[70vh] space-y-3 overflow-y-auto pr-1">
        {submittedQuery ? (
          <p className="rounded-md bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-700">
            Showing related NICKS information for "{submittedQuery}". Use the links inside a result
            to open a dedicated page.
          </p>
        ) : null}
        {results.length > 0 ? (
          results.map((item) => (
            <article
              key={item.title}
              className="rounded-md border border-border bg-surface p-4 text-primary-deep"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-sm font-black">{item.title}</h3>
                  <p className="mt-1 text-xs font-semibold leading-5 text-primary-deep/62">
                    {item.description}
                  </p>
                </div>
                <Search className="mt-0.5 size-4 shrink-0 text-emerald-600" />
              </div>
              <p className="mt-3 text-sm font-semibold leading-6 text-primary-deep/78">
                {item.answer}
              </p>
              <div className="mt-3 space-y-2 border-l-2 border-emerald-100 pl-3">
                {item.content.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-xs font-semibold leading-5 text-primary-deep/68"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.links.map((link) => (
                  <a
                    key={`${item.title}-${link.label}-${link.href}`}
                    href={link.href}
                    onClick={onNavigate}
                    className="inline-flex items-center gap-1 rounded-full border border-emerald-100 bg-white px-3 py-1.5 text-[11px] font-black text-emerald-700 transition hover:border-emerald-600 hover:bg-emerald-50"
                  >
                    {link.label}
                    <ArrowRight className="size-3" />
                  </a>
                ))}
              </div>
            </article>
          ))
        ) : (
          <div className="rounded-md border border-border bg-surface p-4 text-primary-deep">
            <h3 className="text-sm font-black">Helpful NICKS information</h3>
            <p className="mt-2 text-sm font-semibold leading-6 text-primary-deep/72">
              {fallbackAnswer ||
                "Search services, staff support, jobs, visa, documents or destinations to get quick NICKS information here."}
            </p>
          </div>
        )}
        <div className="sticky bottom-0 mt-4 rounded-md border border-emerald-100 bg-white p-3 shadow-elegant">
          <p className="mb-2 text-xs font-black uppercase tracking-[0.12em] text-primary-deep/55">
            Next steps
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href="/jobs"
              onClick={onNavigate}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-xs font-black text-white transition hover:bg-emerald-700"
            >
              View jobs
              <ArrowRight className="size-3.5" />
            </a>
            <a
              href="/contact-us"
              onClick={onNavigate}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200 px-4 py-2 text-xs font-black text-emerald-700 transition hover:border-emerald-600 hover:bg-emerald-50"
            >
              Talk to our team
              <MessageCircle className="size-3.5" />
            </a>
            <a
              href="/how-it-works"
              onClick={onNavigate}
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-black text-primary-deep transition hover:bg-surface"
            >
              How it works
              <ArrowRight className="size-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  body,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  body: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <div
        className={`mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] ${dark ? "text-accent-gold" : "text-accent-red"}`}
      >
        <FileCheck2 className="size-3.5" />
        {eyebrow}
      </div>
      <h2
        className={`font-display text-4xl font-bold leading-tight sm:text-5xl ${dark ? "text-white" : "text-foreground"}`}
      >
        {title}
      </h2>
      <p className={`mt-4 leading-7 ${dark ? "text-white/64" : "text-muted-foreground"}`}>{body}</p>
    </div>
  );
}

function FeaturedInsights() {
  const items = [
    {
      tag: "Candidate readiness",
      title: "Transparent documents before interviews",
      body: "Clear review of passport, CV, certificates, medical readiness and contract basics.",
    },
    {
      tag: "Employer trust",
      title: "Roles checked before they are shared",
      body: "We prioritise vacancies with visible employer information, benefits and next steps.",
    },
    {
      tag: "Arrival support",
      title: "Guidance that continues after ticketing",
      body: "Candidates receive support for flight timing, pickup expectations and settling in.",
    },
  ];

  return (
    <section className="bg-background px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Featured"
            title="Practical recruitment support for serious candidates"
            body="The experience is designed around clarity, verified opportunities and fewer surprises."
          />
          <a
            href="/how-it-works"
            className="inline-flex items-center gap-2 font-bold text-accent-red"
          >
            See the process
            <ArrowRight className="size-4" />
          </a>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item, index) => (
            <article
              key={item.title}
              className="border border-border bg-card p-6 transition hover:border-accent-orange"
            >
              <div className="mb-8 flex items-start justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                  {item.tag}
                </span>
                <span className="grid size-9 place-items-center bg-accent-orange text-sm font-bold text-primary-deep">
                  {index + 1}
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold">{item.title}</h3>
              <p className="mt-4 leading-7 text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function JobCard({ job }: { job: (typeof jobs)[number] }) {
  const Icon = job.icon;
  const statusClass =
    {
      Urgent: "bg-red-600 text-white",
      New: "bg-primary text-white",
      "Closing soon": "bg-accent-gold text-primary-deep",
      Featured: "bg-primary text-white",
      Ongoing: "bg-sky-600 text-white",
    }[job.status] ?? "bg-muted text-foreground";

  return (
    <article className="group flex min-h-[330px] flex-col border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-accent-gold hover:shadow-elegant">
      <div className="mb-7 flex items-start justify-between gap-4">
        <IconBadge icon={Icon} />
        <div className="flex flex-wrap justify-end gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-lavender px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-primary">
            <BadgeCheck className="size-3.5" />
            Visa support
          </span>
          <span
            className={`inline-flex rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-[0.12em] ${statusClass}`}
          >
            {job.status}
          </span>
        </div>
      </div>
      <h3 className="font-display text-2xl font-bold text-foreground">{job.role}</h3>
      <p className="mt-2 text-sm font-medium text-muted-foreground">
        {job.company} | {job.location}
      </p>
      <div className="mt-6 bg-surface p-4">
        <div className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
          Monthly salary
        </div>
        <div className="mt-1 font-display text-3xl font-black text-primary">{job.salary}</div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {job.benefits.map((benefit) => (
          <span
            key={benefit}
            className="border border-border bg-background px-3 py-1.5 text-xs font-semibold text-secondary-foreground"
          >
            {benefit}
          </span>
        ))}
      </div>
      <a
        href={whatsappUrl(
          `Hello NICKS, I want to enquire about the ${job.role} job in ${job.location}.`,
        )}
        className="mt-auto inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-bold text-background transition hover:bg-accent-red"
      >
        Enquire on WhatsApp
        <WhatsAppIcon className="size-4" />
      </a>
    </article>
  );
}

function IconBadge({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="grid size-12 place-items-center bg-accent-gold text-primary-deep transition group-hover:bg-accent-orange">
      <Icon className="size-6" />
    </div>
  );
}

function RoleCategories() {
  return (
    <section
      className="relative overflow-hidden bg-primary-deep bg-cover bg-center px-6 py-20 text-white sm:px-8 lg:px-12"
      style={{ backgroundImage: `url(${processBannerImage})` }}
    >
      <div className="absolute inset-0 bg-primary-deep/80" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Capabilities"
            title="Recruitment across high-demand Gulf sectors"
            body="Candidates can explore roles by profession, salary expectations and destination readiness."
            dark
          />
          <a href="/jobs" className="inline-flex items-center gap-2 font-bold text-accent-gold">
            Browse roles
            <ArrowRight className="size-4" />
          </a>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-px sm:overflow-hidden sm:border sm:border-white/15 sm:bg-white/15 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <a
                key={category.label}
                href="/jobs"
                className="group border border-white/20 bg-primary-deep/55 p-6 backdrop-blur-[1px] transition hover:bg-white hover:text-primary-deep sm:border-0 sm:bg-primary-deep/70"
              >
                <Icon className="size-7 text-accent-gold transition group-hover:text-accent-red" />
                <h3 className="mt-8 font-display text-2xl font-bold">{category.label}</h3>
                <p className="mt-2 text-sm font-medium text-white/85 transition group-hover:text-primary-deep/70">
                  {category.jobs} active and recurring openings
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DestinationGrid() {
  return (
    <section className="bg-surface px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Destinations"
          title="Gulf markets with clear candidate pathways"
          body="Compare common roles, starting salary expectations and the markets where NICKS regularly supports candidates."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {countries.map((country) => (
            <a
              key={country.name}
              href={`/jobs?destination=${encodeURIComponent(country.name)}`}
              className="group border border-border bg-background p-6 transition hover:-translate-y-1 hover:border-accent-gold hover:shadow-gold"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-12 place-items-center rounded-full bg-primary-deep font-bold text-white">
                  {country.flag}
                </span>
                <MapPin className="size-5 text-primary transition group-hover:text-accent-gold" />
              </div>
              <h3 className="mt-7 font-display text-2xl font-bold">{country.name}</h3>
              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-muted-foreground">Jobs</p>
                  <p className="font-bold">{country.jobs}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">From</p>
                  <p className="font-bold">{country.salary}</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-6 text-muted-foreground">{country.roles}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-primary">
                View jobs
                <ArrowRight className="size-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const processIcons = [WhatsAppIcon, FileCheck2, ShieldCheck, BriefcaseBusiness, Upload, Plane];

  return (
    <section className="bg-background px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="How it works"
          title="A guided process from enquiry to arrival"
          body="Every stage is explained in plain language so candidates know what is needed before travel."
        />
        <div className="relative mt-12 overflow-hidden rounded-md bg-lavender/55 px-4 py-8 sm:px-8 lg:px-12">
          <div className="absolute inset-x-0 bottom-0 h-24 bg-accent-gold/20" />
          <div className="absolute left-1/2 top-16 hidden h-[calc(100%-8rem)] -translate-x-1/2 border-l-2 border-dashed border-primary/35 lg:block" />
          <div className="relative mx-auto max-w-5xl space-y-6">
            {steps.map((step, index) => {
              const Icon = processIcons[index] ?? CheckCircle2;
              const isYellow = index % 2 === 1;

              return (
                <div
                  key={step.title}
                  className={`relative flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <article className="relative grid w-full max-w-xl grid-cols-[5.75rem_1fr] overflow-hidden rounded-md bg-white shadow-elegant">
                    <div
                      className={`grid place-items-center ${
                        isYellow ? "bg-accent-gold text-primary-deep" : "bg-primary-deep text-white"
                      }`}
                    >
                      <Icon className="size-8" strokeWidth={2.6} />
                    </div>
                    <div className="flex min-h-24 items-center gap-5 px-5 py-4">
                      <span
                        className={`font-display text-2xl font-black ${
                          isYellow ? "text-accent-gold" : "text-primary"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-black text-primary-deep">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-xs font-semibold leading-5 text-primary-deep/62">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  </article>
                  {index < steps.length - 1 ? (
                    <div
                      className={`absolute top-full hidden h-6 w-24 border-b-2 border-dashed border-primary/35 lg:block ${
                        index % 2 === 0
                          ? "left-[calc(50%-2rem)] rounded-bl-full border-l-2"
                          : "right-[calc(50%-2rem)] rounded-br-full border-r-2"
                      }`}
                    />
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  const [flippedStory, setFlippedStory] = useState<string | null>(null);
  const stories = [
    {
      sector: "Healthcare",
      title: "Nurses placed into UAE hospital teams",
      body: "Document preparation, interview coaching and visa guidance helped candidates move with confidence.",
      detail:
        "Candidates received support checking professional documents, preparing for hospital interviews and understanding each visa milestone before travel.",
      tone: "border-sky-300/45 bg-sky-400/12",
    },
    {
      sector: "Construction",
      title: "Skilled trades matched with Qatar contractors",
      body: "Verified project roles gave candidates clear contract expectations before mobilisation.",
      detail:
        "Trade experience was matched to specific project needs, with salary, accommodation and mobilisation requirements explained before commitment.",
      tone: "border-amber-300/45 bg-amber-300/12",
    },
    {
      sector: "Hospitality",
      title: "Hotel teams staffed for premium Gulf properties",
      body: "Food service, housekeeping and kitchen candidates were screened for role fit and readiness.",
      detail:
        "Candidates were guided through practical role expectations, presentation standards and employer interviews for premium hospitality teams.",
      tone: "border-violet-300/45 bg-violet-300/12",
    },
  ];

  return (
    <section className="bg-primary-deep px-6 py-20 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Success"
          title="Momentum that matters for candidates and employers"
          body="NICKS focuses on practical outcomes: matched skills, clear communication and supported movement."
          dark
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {stories.map((story) => {
            const isFlipped = flippedStory === story.title;
            return (
              <article key={story.title} className="min-h-80 [perspective:1000px]">
                <div
                  className="relative size-full min-h-80 transition-transform duration-500 [transform-style:preserve-3d]"
                  style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
                >
                  <div
                    className={`absolute inset-0 border p-6 [backface-visibility:hidden] ${story.tone}`}
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-gold">
                      {story.sector}
                    </p>
                    <h3 className="mt-8 font-display text-2xl font-bold">{story.title}</h3>
                    <p className="mt-4 leading-7 text-white/70">{story.body}</p>
                    <button
                      type="button"
                      onClick={() => setFlippedStory(story.title)}
                      className="mt-8 inline-flex items-center gap-2 font-bold text-accent-gold"
                    >
                      Read more <ArrowRight className="size-4" />
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => setFlippedStory(null)}
                    className={`absolute inset-0 border p-6 text-left [backface-visibility:hidden] [transform:rotateY(180deg)] ${story.tone}`}
                    aria-label={`Show less about ${story.title}`}
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-gold">
                      More information
                    </p>
                    <h3 className="mt-6 font-display text-2xl font-bold">{story.title}</h3>
                    <p className="mt-4 leading-7 text-white/85">{story.detail}</p>
                    <span className="mt-8 inline-flex font-bold text-accent-gold">
                      Tap to return
                    </span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function KuwaitSuccessStory() {
  return (
    <section className="bg-background px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl px-0 sm:px-6 lg:px-10">
        <div className="relative overflow-hidden bg-white py-4">
          <div className="flex items-start gap-5 sm:gap-7">
            <span className="font-display text-5xl font-black leading-none text-primary-deep sm:text-6xl">
              &quot;
            </span>
            <div className="min-w-0 flex-1">
              <p className="max-w-5xl font-display text-xl font-medium leading-relaxed text-primary-deep sm:text-2xl lg:text-3xl">
                NICKS helped me secure a verified job in Kuwait when I needed a clear and honest
                process. Since I travelled, I have been able to support my family, invest back home,
                and start building a permanent house. Their guidance gave me confidence from
                documents to arrival.
              </p>

              <div className="mt-12 flex items-center justify-between gap-4 sm:gap-8">
                <div className="flex items-center gap-4">
                  <div className="grid size-16 shrink-0 place-items-center rounded-full bg-primary text-base font-black text-white">
                    JM
                  </div>
                  <div>
                    <p className="font-display text-lg font-black text-primary-deep">
                      James Mwangi
                    </p>
                    <p className="mt-1 text-sm font-semibold text-primary-deep/78">
                      Logistics worker, Kuwait
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 items-center justify-end">
                  <img
                    src={nicksLogo}
                    alt="NICKS Recruitment Agency"
                    onError={showLogoFallback}
                    loading="lazy"
                    decoding="async"
                    className="h-12 w-auto object-contain sm:h-20"
                  />
                  <span className="hidden font-display text-2xl font-black text-primary">
                    NICKS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SuccessGallery() {
  const gallery = [
    {
      image: "https://www.diaspora.go.ke/admin/postimages/67bf824c351a7.jpeg",
      alt: "Kenyan candidates taking part in an overseas employment interview",
      position: "center 18%",
    },
    {
      image:
        "https://images.pexels.com/photos/6303650/pexels-photo-6303650.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Black healthcare professional supporting a patient at work",
      position: "center 16%",
    },
    {
      image:
        "https://images.pexels.com/photos/7464679/pexels-photo-7464679.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Black professional moving into a new home",
      position: "center 18%",
    },
    {
      image:
        "https://images.pexels.com/photos/3770110/pexels-photo-3770110.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Black hospitality professional providing hotel room service",
      position: "center 16%",
    },
    {
      image:
        "https://images.pexels.com/photos/10202856/pexels-photo-10202856.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Black African construction professionals working on site",
      position: "center 18%",
    },
    {
      image:
        "https://images.pexels.com/photos/4173191/pexels-photo-4173191.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Black customer receiving keys to a newly purchased car",
      position: "center 20%",
    },
    {
      image:
        "https://images.pexels.com/photos/7579205/pexels-photo-7579205.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Black homeowner celebrating a new home purchase",
      position: "center 18%",
    },
    {
      image:
        "https://images.pexels.com/photos/3872380/pexels-photo-3872380.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Black African professional operating equipment at work",
      position: "center 18%",
    },
  ];

  return (
    <section className="bg-background px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-primary">
            Real journeys. Real progress.
          </p>
          <h2 className="mt-3 font-display text-4xl font-black text-foreground sm:text-5xl">
            Success Gallery
          </h2>
          <p className="mt-4 text-sm font-semibold leading-7 text-muted-foreground sm:text-base">
            A glimpse of what NICKS has helped many achieve: safe journeys, dignified work, growing
            careers and confident new beginnings.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((item, index) => (
            <article key={item.image} className="relative aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={item.image}
                alt={item.alt}
                style={{ objectPosition: item.position }}
                loading={index < 4 ? "eager" : "lazy"}
                decoding="async"
                className="size-full object-cover"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function JobsPage({ initialDestination = "" }: { initialDestination?: string }) {
  return (
    <PublicLayout>
      <PageHero
        eyebrow="Open roles"
        title="Verified Jobs Abroad"
        body="Explore current and recurring opportunities with salary ranges, benefits and WhatsApp enquiry paths."
        image={heroSlides[1].image}
      />
      <section className="bg-background px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Jobs"
            title="Featured opportunities"
            body="These roles represent the types of verified openings NICKS supports across the Gulf."
          />
          <JobExplorer initialDestination={initialDestination} />
        </div>
      </section>
      <CTASection />
    </PublicLayout>
  );
}

function JobExplorer({ initialDestination }: { initialDestination: string }) {
  const [query, setQuery] = useState("");
  const [destination, setDestination] = useState(initialDestination);
  const [category, setCategory] = useState("");

  const destinations = useMemo(
    () => Array.from(new Set(jobs.map((job) => job.destination))).sort(),
    [],
  );
  const categoriesList = useMemo(
    () => Array.from(new Set(jobs.map((job) => job.category))).sort(),
    [],
  );

  const filteredJobs = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return jobs.filter((job) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        [job.role, job.company, job.location, job.destination, job.category, job.status]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);
      const matchesDestination = destination.length === 0 || job.destination === destination;
      const matchesCategory = category.length === 0 || job.category === category;

      return matchesQuery && matchesDestination && matchesCategory;
    });
  }, [category, destination, query]);

  return (
    <div className="mt-10">
      <div className="grid grid-cols-2 gap-3 border-2 border-primary/12 bg-surface p-4 md:grid-cols-[1fr_220px_220px_auto]">
        <label className="relative col-span-2 block md:col-span-1">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-primary" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search role, company, city or status"
            className="h-12 w-full rounded-full border border-border bg-background pl-12 pr-4 text-sm font-semibold outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
          />
        </label>
        <select
          value={destination}
          onChange={(event) => setDestination(event.target.value)}
          className="h-12 min-w-0 w-full rounded-full border border-border bg-background px-3 text-sm font-bold outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10 sm:px-4"
          aria-label="Filter by destination"
        >
          <option value="">All destinations</option>
          {destinations.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="h-12 min-w-0 w-full rounded-full border border-border bg-background px-3 text-sm font-bold outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10 sm:px-4"
          aria-label="Filter by sector"
        >
          <option value="">All sectors</option>
          {categoriesList.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={() => {
            setQuery("");
            setDestination("");
            setCategory("");
          }}
          className="col-span-2 h-12 w-fit min-w-28 justify-self-center rounded-full bg-primary px-5 text-sm font-black text-white transition hover:bg-primary-deep md:col-span-1 md:w-auto md:min-w-0 md:justify-self-stretch"
        >
          Clear
        </button>
      </div>
      <div className="mt-5 flex items-center justify-between gap-4 text-sm font-bold text-muted-foreground">
        <p>
          Showing <span className="text-primary">{filteredJobs.length}</span> of {jobs.length} jobs
          {destination ? ` in ${destination}` : ""}
        </p>
        {destination ? (
          <a href="/destinations" className="text-primary hover:text-primary-deep">
            Change destination
          </a>
        ) : null}
      </div>
      {filteredJobs.length > 0 ? (
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredJobs.map((job) => (
            <JobCard key={`${job.role}-${job.location}`} job={job} />
          ))}
        </div>
      ) : (
        <div className="mt-8 border-2 border-dashed border-primary/20 bg-background p-10 text-center">
          <h3 className="font-display text-2xl font-black">No jobs match those filters</h3>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Try a different destination, sector, or search term. You can also message NICKS for
            current vacancies that are not listed yet.
          </p>
        </div>
      )}
    </div>
  );
}

export function AboutPage() {
  return (
    <PublicLayout>
      <PageHero
        eyebrow="About us"
        title="Powering Possibilities"
        body="Connecting skilled professionals with opportunities across industries, locally and globally."
        image={aboutPageHeroImage}
        fallbackImage={aboutWorkFallbackImage}
        cta="Ask us"
      />
      <AboutPageIntro />
      <AboutPageFeature />
      <AboutPageMetrics />
      <AboutPageBusiness />
      <AboutPageOperate />
      <AboutJoinSection image={aboutJoinImage} fallback={aboutWorkFallbackImage} />
      <CTASection />
    </PublicLayout>
  );
}

function AboutPageIntro() {
  return (
    <section className="bg-background px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.48fr_0.52fr] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-primary">
            NICKS at a glance
          </p>
          <h2 className="mt-4 font-display text-4xl font-black leading-tight text-foreground sm:text-5xl">
            Opening trusted Gulf pathways for Kenyan professionals.
          </h2>
          <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-muted-foreground">
            NICKS Recruitment Agency connects prepared candidates with verified Gulf employers
            through document readiness, interview guidance, contract clarity, visa coordination and
            arrival preparation.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-[0.8fr_1.2fr] sm:items-end">
          <img
            src={readinessImage}
            alt="NICKS team supporting candidates with recruitment guidance"
            onError={(event) => setFallbackImage(event, aboutWorkFallbackImage)}
            loading="eager"
            decoding="async"
            className="h-56 w-full object-cover object-[center_16%]"
          />
          <img
            src={hospitalityImage}
            alt="African creative professional preparing for an international opportunity"
            onError={(event) => setFallbackImage(event, heroHealthcareFallbackImage)}
            loading="eager"
            decoding="async"
            className="h-72 w-full object-cover object-[center_16%]"
          />
        </div>
      </div>
    </section>
  );
}

function AboutPageFeature() {
  return (
    <section className="bg-background px-6 pb-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden bg-primary-deep">
          <img
            src={homeFeatureImage}
            alt="African professionals celebrating successful preparation and placement"
            onError={(event) => setFallbackImage(event, aboutWorkFallbackImage)}
            loading="lazy"
            decoding="async"
            className="aspect-[16/8] w-full object-cover object-[center_18%] opacity-90"
          />
          <div className="absolute bottom-0 right-0 max-w-xs bg-white p-5 text-primary-deep shadow-elegant">
            <p className="text-sm font-bold">NICKS Recruitment Agency</p>
            <p className="mt-1 text-xs font-semibold text-muted-foreground">
              Candidate-first recruitment support
            </p>
            <div className="absolute inset-y-0 right-0 w-2 bg-primary" />
          </div>
        </div>
        <div className="mt-4 flex items-center gap-3 text-sm font-bold text-primary">
          <span className="grid size-5 place-items-center rounded-full bg-primary text-xs text-white">
            1
          </span>
          Clear guidance from enquiry to arrival
        </div>
        <p className="mt-3 max-w-3xl text-sm font-semibold leading-7 text-muted-foreground">
          From the first conversation, we help candidates understand the documents, timelines,
          employer expectations and preparation steps involved in moving into a verified role. Our
          team keeps the process practical and transparent so each person knows what is required,
          what is pending and how to get ready with confidence.
        </p>
      </div>
    </section>
  );
}

function AboutPageMetrics() {
  return (
    <section className="bg-surface px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold leading-7 text-muted-foreground">
            The recruitment journey can feel complex without structure. Our role is to make each
            step clearer: what documents are needed, which employers are verified, what the contract
            says, and how candidates should prepare before travel.
          </p>
          <p className="mt-5 text-sm font-semibold leading-7 text-muted-foreground">
            Candidates and employers get practical coordination, realistic expectations and a simple
            path for moving from interest to readiness.
          </p>
          <a
            href="/how-it-works"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-black text-white transition hover:bg-primary-deep"
          >
            Download profile
            <ArrowRight className="size-4" />
          </a>
        </div>
        <div>
          <h2 className="font-display text-3xl font-bold text-foreground">Key facts</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="mx-auto flex aspect-square w-full max-w-32 flex-col items-center justify-center rounded-full border border-primary bg-background p-3 text-center sm:max-w-36"
              >
                <div className="font-display text-xl font-black text-primary sm:text-2xl">
                  <StatValue value={stat.value} />
                </div>
                <p className="mt-1 max-w-28 text-xs font-semibold leading-tight text-foreground/75">
                  {stat.label}
                </p>
              </div>
            ))}
            <div className="mx-auto flex aspect-square w-full max-w-32 flex-col items-center justify-center rounded-full border border-primary bg-background p-3 text-center sm:max-w-36">
              <div className="font-display text-xl font-black text-primary sm:text-2xl">6</div>
              <p className="mt-1 max-w-28 text-xs font-semibold leading-tight text-foreground/75">
                Gulf destinations
              </p>
            </div>
            <div className="mx-auto flex aspect-square w-full max-w-32 flex-col items-center justify-center rounded-full border border-primary bg-background p-3 text-center sm:max-w-36">
              <div className="font-display text-xl font-black text-primary sm:text-2xl">24/7</div>
              <p className="mt-1 max-w-28 text-xs font-semibold leading-tight text-foreground/75">
                WhatsApp enquiry path
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutPageBusiness() {
  return (
    <section id="services" className="bg-background px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
        <img
          src={heroConstructionImage}
          alt="Skilled workers preparing for Gulf construction opportunities"
          onError={(event) => setFallbackImage(event, heroConstructionFallbackImage)}
          loading="lazy"
          decoding="async"
          className="h-80 w-full object-cover object-[center_18%]"
        />
        <div>
          <h2 className="font-display text-4xl font-black text-foreground">Our business</h2>
          <p className="mt-5 max-w-3xl text-sm font-semibold leading-7 text-muted-foreground">
            We manage practical recruitment support across high-demand Gulf sectors, helping
            candidates understand role requirements while giving employers better prepared talent.
          </p>
          <a
            href={whatsappUrl(
              "Hello NICKS, I would like to learn more about your recruitment services.",
            )}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-black text-white transition hover:bg-primary-deep"
          >
            About our services
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function AboutPageOperate() {
  return (
    <section className="grid bg-primary-deep text-white lg:grid-cols-[0.62fr_0.38fr]">
      <div className="flex items-center px-6 py-16 sm:px-8 lg:px-16">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl font-black">Where we operate</h2>
          <p className="mt-5 text-sm font-semibold leading-7 text-white/72">
            Our work focuses on Gulf destinations where candidate preparation, verified contracts
            and clear employer requirements matter most.
          </p>
          <a
            href="/destinations"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-primary-deep transition hover:bg-lavender"
          >
            Where we operate
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
      <img
        src={heroDriverImage}
        alt="Driver preparing for logistics work"
        onError={(event) => setFallbackImage(event, heroDriverFallbackImage)}
        loading="lazy"
        decoding="async"
        className="order-first h-80 w-full object-cover object-[center_18%] lg:order-none lg:h-full"
      />
    </section>
  );
}

function AboutFeatureImage() {
  return (
    <section id="candidate-support" className="bg-background px-6 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden bg-primary-deep shadow-elegant">
          <img
            src={aboutWorkImage}
            alt="African professionals celebrating successful preparation and placement"
            onError={(event) => setFallbackImage(event, aboutWorkFallbackImage)}
            loading="lazy"
            decoding="async"
            className="aspect-[16/8] w-full object-cover object-[center_18%]"
          />
          <div className="grid gap-4 bg-primary-deep p-6 text-white sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-gold">
                NICKS Recruitment Agency
              </p>
              <h2 className="mt-2 max-w-2xl font-display text-2xl font-black leading-tight sm:text-3xl">
                Understanding every candidate&apos;s next step clearly.
              </h2>
            </div>
            <a
              href="/how-it-works"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-accent-gold px-4 py-2 text-xs font-black text-primary-deep"
            >
              Our process
              <ArrowRight className="size-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutBusinessSection() {
  return (
    <section className="bg-surface px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold leading-tight text-foreground">
            Our work
          </h2>
          <p className="mt-5 text-sm font-medium leading-7 text-foreground/78">
            NICKS supports candidates through document readiness, employer matching, interviews,
            visa steps and arrival preparation.
          </p>
        </div>
      </div>
    </section>
  );
}

function AboutReadinessSection() {
  const [destinationIndex, setDestinationIndex] = useState(0);
  const [supportIndex, setSupportIndex] = useState(0);
  const [flippedSupportCard, setFlippedSupportCard] = useState<string | null>(null);
  const visibleDestination = countries[destinationIndex];
  const visibleSupportCard = aboutImpactCards[supportIndex];

  const showPreviousDestinations = () => {
    setDestinationIndex((current) => (current - 1 + countries.length) % countries.length);
  };

  const showNextDestinations = () => {
    setDestinationIndex((current) => (current + 1) % countries.length);
  };

  const showPreviousSupportCards = () => {
    setFlippedSupportCard(null);
    setSupportIndex((current) => (current - 1 + aboutImpactCards.length) % aboutImpactCards.length);
  };

  const showNextSupportCards = () => {
    setFlippedSupportCard(null);
    setSupportIndex((current) => (current + 1) % aboutImpactCards.length);
  };

  return (
    <section className="bg-background px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <div className="mb-8">
            <h3 className="font-display text-3xl font-bold text-foreground">Where we operate</h3>
            <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
              We focus on Gulf destinations where candidate preparation, verified contracts and
              clear employer requirements matter most.
            </p>
            <a
              href="/destinations"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-black text-white transition hover:bg-primary-deep"
            >
              Find out where
              <ArrowRight className="size-4" />
            </a>
          </div>
          <div className="relative h-64 overflow-hidden bg-surface">
            <div className="absolute left-8 top-8 size-24 rounded-full bg-accent-gold-soft" />
            <div className="absolute right-10 top-10 size-16 rounded-full bg-lavender" />
            <div className="absolute bottom-8 left-28 size-20 rounded-full bg-primary/16" />
            <div className="absolute inset-0 grid grid-cols-3 gap-3 p-8 text-center text-xs font-black uppercase tracking-[0.1em] text-primary-deep/62">
              {countries.map((country) => (
                <a
                  key={country.name}
                  href={`/jobs?destination=${encodeURIComponent(country.name)}`}
                  title={country.name}
                  aria-label={`View jobs in ${country.name}`}
                  className="group grid place-items-center rounded-full bg-white/72 px-3 py-2 transition hover:bg-primary hover:text-white focus:bg-primary focus:text-white focus:outline-none"
                >
                  <span className="group-hover:hidden group-focus:hidden">{country.flag}</span>
                  <span className="hidden text-[10px] leading-tight group-hover:block group-focus:block">
                    {country.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
          <a
            href="/jobs"
            className="group relative mt-5 block min-h-72 overflow-hidden bg-primary-deep shadow-elegant"
            aria-label="Explore open Gulf jobs"
          >
            <img
              src={homeJobsFeatureImage}
              alt="Construction professionals ready for Gulf job opportunities"
              onError={(event) => setFallbackImage(event, heroConstructionFallbackImage)}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 size-full object-cover object-[center_18%] transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/35 to-transparent" />
            <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-accent-gold px-4 py-2 text-[11px] font-black uppercase tracking-[0.12em] text-primary-deep shadow-gold">
              <BriefcaseBusiness className="size-3.5" />
              New opportunities
            </div>
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-6 text-white">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent-gold">
                  Your next role starts here
                </p>
                <h4 className="mt-2 max-w-sm font-display text-2xl font-black leading-tight">
                  Verified jobs across the Gulf
                </h4>
              </div>
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-white text-primary-deep transition group-hover:-rotate-45 group-hover:bg-accent-gold">
                <ArrowRight className="size-5" />
              </span>
            </div>
          </a>
        </div>
        <div>
          <h3 className="font-display text-3xl font-bold text-foreground">Key facts</h3>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="mx-auto flex aspect-square w-full max-w-32 flex-col items-center justify-center rounded-full border border-primary bg-background p-3 text-center sm:max-w-36"
              >
                <div className="font-display text-xl font-black text-primary sm:text-2xl">
                  <StatValue value={stat.value} />
                </div>
                <p className="mt-1 max-w-28 text-xs font-semibold leading-tight text-foreground/75 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-display text-3xl font-bold text-foreground">Destinations</h3>
              <div className="hidden gap-3 text-primary sm:flex">
                <button
                  type="button"
                  onClick={showPreviousDestinations}
                  className="grid size-9 place-items-center rounded-full border border-primary/25 transition hover:bg-primary hover:text-white"
                  aria-label="Previous destinations"
                >
                  <ChevronDown className="size-4 rotate-90" />
                </button>
                <button
                  type="button"
                  onClick={showNextDestinations}
                  className="grid size-9 place-items-center rounded-full border border-primary/25 transition hover:bg-primary hover:text-white"
                  aria-label="Next destinations"
                >
                  <ChevronDown className="size-4 -rotate-90" />
                </button>
              </div>
            </div>
            <div className="mt-6">
              <a
                key={visibleDestination.name}
                href={`/jobs?destination=${encodeURIComponent(visibleDestination.name)}`}
                className="group block border border-border bg-surface p-6 transition hover:-translate-y-1 hover:border-accent-gold hover:shadow-gold"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-full bg-primary-deep font-bold text-white">
                    {visibleDestination.flag}
                  </span>
                  <MapPin className="size-5 text-primary transition group-hover:text-accent-gold" />
                </div>
                <h4 className="mt-6 font-display text-2xl font-bold">{visibleDestination.name}</h4>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  {visibleDestination.roles}
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-muted-foreground">Jobs</p>
                    <p className="font-bold">{visibleDestination.jobs}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">From</p>
                    <p className="font-bold">{visibleDestination.salary}</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="mt-6 flex justify-center gap-4 text-primary sm:hidden">
              <button
                type="button"
                onClick={showPreviousDestinations}
                className="grid size-12 place-items-center rounded-full border border-primary/25"
                aria-label="Previous destinations"
              >
                <ChevronDown className="size-5 rotate-90" />
              </button>
              <button
                type="button"
                onClick={showNextDestinations}
                className="grid size-12 place-items-center rounded-full border border-primary/25"
                aria-label="Next destinations"
              >
                <ChevronDown className="size-5 -rotate-90" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <h2 className="font-display text-4xl font-bold leading-tight text-foreground">
            Why trust us
          </h2>
          <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-muted-foreground">
            Our process works best when candidates are honest about experience, documents,
            destination preferences and timing.
          </p>
          <ul className="mt-6 space-y-2 text-sm leading-6 text-primary-deep/80">
            {candidateQualities.slice(0, 4).map((quality) => (
              <li key={quality} className="flex gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{quality}</span>
              </li>
            ))}
          </ul>
          <a
            href="/how-it-works"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-black text-white transition hover:bg-primary-deep"
          >
            Find out more
            <ArrowRight className="size-4" />
          </a>
        </div>
        <div>
          <div>
            {(() => {
              const card = visibleSupportCard;
              const isFlipped = flippedSupportCard === card.title;
              return (
                <article key={card.title} className="min-h-80 [perspective:1000px]">
                  <div
                    className="relative size-full min-h-80 transition-transform duration-500 [transform-style:preserve-3d]"
                    style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
                  >
                    <div className="absolute inset-0 border border-border bg-background [backface-visibility:hidden]">
                      <img
                        src={card.supportImage}
                        alt=""
                        onError={(event) => setFallbackImage(event, card.fallback)}
                        loading="lazy"
                        decoding="async"
                        className="h-44 w-full object-cover object-[center_16%]"
                      />
                      <div className="p-5">
                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
                          Candidate support
                        </p>
                        <h3 className="mt-3 font-display text-xl font-bold leading-tight">
                          {card.title}
                        </h3>
                        <button
                          type="button"
                          onClick={() => setFlippedSupportCard(card.title)}
                          className="mt-4 inline-flex items-center gap-2 text-sm font-black text-primary"
                        >
                          Read more <ArrowRight className="size-4" />
                        </button>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setFlippedSupportCard(null)}
                      className="absolute inset-0 border border-primary/25 bg-primary-deep p-6 text-left text-white [backface-visibility:hidden] [transform:rotateY(180deg)]"
                      aria-label={`Show less about ${card.title}`}
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent-gold">
                        Candidate support
                      </p>
                      <h3 className="mt-5 font-display text-2xl font-bold">{card.title}</h3>
                      <p className="mt-5 leading-7 text-white/85">{card.detail}</p>
                      <span className="mt-7 inline-flex text-sm font-black text-accent-gold">
                        Tap to return
                      </span>
                    </button>
                  </div>
                </article>
              );
            })()}
          </div>
          <div className="mt-6 flex items-center gap-4 text-primary">
            <button
              type="button"
              onClick={showPreviousSupportCards}
              className="grid size-8 place-items-center rounded-full border border-primary/25"
              aria-label="Previous story"
            >
              <ChevronDown className="size-4 rotate-90" />
            </button>
            <button
              type="button"
              onClick={showNextSupportCards}
              className="grid size-8 place-items-center rounded-full border border-primary/25"
              aria-label="Next story"
            >
              <ChevronDown className="size-4 -rotate-90" />
            </button>
            <div className="ml-8 h-px w-24 bg-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutJoinSection({ image, fallback }: { image: string; fallback: string }) {
  return (
    <section className="grid bg-primary-deep text-white lg:grid-cols-[0.44fr_0.56fr]">
      <img
        src={image}
        alt="NICKS candidates celebrating after a successful recruitment process"
        onError={(event) => setFallbackImage(event, fallback)}
        loading="lazy"
        decoding="async"
        className="h-80 w-full object-cover object-[center_16%] lg:h-full"
      />
      <div className="flex items-center px-6 py-14 sm:px-8 lg:px-16">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl font-bold">What we look for</h2>
          <p className="mt-5 text-sm font-medium leading-7 text-white/78">
            We are a clear, people-first recruitment partner. Candidates get practical guidance,
            verified role information and step-by-step support before movement.
          </p>
          <a
            href={whatsappUrl("Hello NICKS, I want to join your candidate list.")}
            className="mt-7 inline-flex items-center rounded-full bg-accent-gold px-6 py-3 text-sm font-black text-primary-deep transition hover:bg-accent-gold-soft"
          >
            Join us
          </a>
        </div>
      </div>
    </section>
  );
}

function AboutImpactSection() {
  const [impactIndex, setImpactIndex] = useState(0);
  const [flippedImpactCard, setFlippedImpactCard] = useState<string | null>(null);
  const orderedImpactCards = aboutImpactCards.map(
    (_, offset) => aboutImpactCards[(impactIndex + offset) % aboutImpactCards.length],
  );

  return (
    <section className="bg-background px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between gap-6">
          <h2 className="font-display text-3xl font-bold text-foreground">Our impact</h2>
          <div className="hidden items-center gap-4 text-primary lg:flex">
            <button
              type="button"
              onClick={() => {
                setFlippedImpactCard(null);
                setImpactIndex(
                  (current) => (current - 1 + aboutImpactCards.length) % aboutImpactCards.length,
                );
              }}
              className="grid size-10 place-items-center rounded-full border border-primary/25"
              aria-label="Previous impact story"
            >
              <ChevronDown className="size-4 rotate-90" />
            </button>
            <button
              type="button"
              onClick={() => {
                setFlippedImpactCard(null);
                setImpactIndex((current) => (current + 1) % aboutImpactCards.length);
              }}
              className="grid size-10 place-items-center rounded-full border border-primary/25"
              aria-label="Next impact story"
            >
              <ChevronDown className="size-4 -rotate-90" />
            </button>
            <div className="ml-3 h-px w-24 bg-primary" />
          </div>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {orderedImpactCards.map((card) => {
            const isFlipped = flippedImpactCard === card.title;
            return (
              <article key={card.title} className="min-h-80 [perspective:1000px]">
                <div
                  className="relative size-full min-h-80 transition-transform duration-500 [transform-style:preserve-3d]"
                  style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
                >
                  <div className="absolute inset-0 border border-border bg-surface [backface-visibility:hidden]">
                    <img
                      src={card.image}
                      alt=""
                      onError={(event) => setFallbackImage(event, card.fallback)}
                      loading="lazy"
                      decoding="async"
                      className="h-40 w-full object-cover object-[center_16%]"
                    />
                    <div className="p-5">
                      <p className="text-[11px] font-black uppercase tracking-[0.14em] text-primary">
                        NICKS News
                      </p>
                      <h3 className="mt-3 min-h-16 font-display text-xl font-bold leading-tight text-foreground">
                        {card.summary}
                      </h3>
                      <button
                        type="button"
                        onClick={() => setFlippedImpactCard(card.title)}
                        className="mt-5 inline-flex items-center gap-2 text-sm font-black text-primary"
                      >
                        Read more <ArrowRight className="size-4" />
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setFlippedImpactCard(null)}
                    className="absolute inset-0 border border-primary/25 bg-primary-deep p-6 text-left text-white [backface-visibility:hidden] [transform:rotateY(180deg)]"
                    aria-label={`Show less about ${card.title}`}
                  >
                    <p className="text-[11px] font-black uppercase tracking-[0.14em] text-accent-gold">
                      Our impact
                    </p>
                    <h3 className="mt-5 font-display text-2xl font-bold">{card.title}</h3>
                    <p className="mt-5 leading-7 text-white/85">{card.detail}</p>
                    <span className="mt-7 inline-flex text-sm font-black text-accent-gold">
                      Tap to return
                    </span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
        <div className="mt-8 flex items-center justify-center gap-4 text-primary lg:hidden">
          <button
            type="button"
            onClick={() => {
              setFlippedImpactCard(null);
              setImpactIndex(
                (current) => (current - 1 + aboutImpactCards.length) % aboutImpactCards.length,
              );
            }}
            className="grid size-8 place-items-center rounded-full border border-primary/25"
            aria-label="Previous impact story"
          >
            <ChevronDown className="size-4 rotate-90" />
          </button>
          <button
            type="button"
            onClick={() => {
              setFlippedImpactCard(null);
              setImpactIndex((current) => (current + 1) % aboutImpactCards.length);
            }}
            className="grid size-8 place-items-center rounded-full border border-primary/25"
            aria-label="Next impact story"
          >
            <ChevronDown className="size-4 -rotate-90" />
          </button>
        </div>
      </div>
    </section>
  );
}

export function DestinationsPage() {
  return (
    <PublicLayout>
      <PageHero
        eyebrow="Destinations"
        title="Choose the Gulf market that fits your profession."
        body="Compare countries by common roles, salary expectations and candidate readiness requirements."
        image={heroSlides[2].image}
      />
      <DestinationGrid />
      <CTASection />
    </PublicLayout>
  );
}

export function HowItWorksPage() {
  return (
    <PublicLayout>
      <PageHero
        eyebrow="How it works"
        title="Guiding You Every Step."
        body="Understand each step before you begin, from document review to interviews, visa coordination and arrival support."
        image={heroSlides[3].image}
      />
      <ProcessSection />
      <section className="bg-surface px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {[
            {
              icon: Upload,
              title: "Prepare documents",
              body: "Share CV, passport status and certificates for review.",
            },
            {
              icon: Building2,
              title: "Meet employers",
              body: "Interview only for roles with clear employer information.",
            },
            {
              icon: CheckCircle2,
              title: "Move with support",
              body: "Get guidance through visa, travel and first-week steps.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="border border-border bg-background p-6">
                <Icon className="size-7 text-accent-red" />
                <h3 className="mt-8 font-display text-2xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{item.body}</p>
              </article>
            );
          })}
        </div>
      </section>
      <CTASection />
    </PublicLayout>
  );
}

export function SuccessPage() {
  return (
    <PublicLayout>
      <PageHero
        eyebrow="Success"
        title="Building Success Stories."
        body="Stories from sectors where clear preparation and verified matching make movement smoother."
        image={heroSlides[0].image}
      />
      <CaseStudies />
      <KuwaitSuccessStory />
      <SuccessGallery />
      <TrustStrip />
      <CTASection />
    </PublicLayout>
  );
}

export function FaqsPage() {
  return (
    <PublicLayout>
      <PageHero
        eyebrow="FAQs"
        title="Answers before you begin."
        body="Find quick answers about NICKS services, candidate support, jobs, destinations and the recruitment process."
        image={readinessImage}
        fallbackImage={aboutWorkFallbackImage}
      />
      <section className="bg-background px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2">
            {heroSearchItems.map((item) => (
              <article key={item.title} className="border border-border bg-surface p-6">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
                  {item.description}
                </p>
                <h2 className="mt-4 font-display text-2xl font-bold text-foreground">
                  {item.title}
                </h2>
                <p className="mt-4 text-sm font-semibold leading-7 text-muted-foreground">
                  {item.answer}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.links.map((link) => (
                    <a
                      key={`${item.title}-${link.href}-${link.label}`}
                      href={link.href}
                      className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-4 py-2 text-xs font-black text-primary transition hover:bg-primary hover:text-white"
                    >
                      {link.label}
                      <ArrowRight className="size-3.5" />
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </PublicLayout>
  );
}

export function ContactPage() {
  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const enquiryType = String(formData.get("enquiryType") || "").trim();
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const enquiryMessage = [
      "Hello NICKS, I would like help with a recruitment enquiry.",
      enquiryType ? `Enquiry type: ${enquiryType}` : "",
      name ? `Name: ${name}` : "",
      email ? `Email: ${email}` : "",
      message ? `Message: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = whatsappUrl(enquiryMessage);
  };

  return (
    <PublicLayout>
      <section className="relative overflow-hidden bg-primary-deep text-white">
        <div className="absolute inset-y-0 right-0 hidden w-[44%] lg:block">
          <img
            src={contactHeroImage}
            alt=""
            onError={(event) => setFallbackImage(event, aboutWorkFallbackImage)}
            loading="eager"
            decoding="async"
            className="size-full object-cover object-[center_16%] [clip-path:polygon(22%_0,100%_0,100%_100%,0_100%)]"
          />
        </div>
        <div className="relative h-[min(72vw,22rem)] overflow-hidden sm:h-96 lg:hidden">
          <img
            src={contactHeroImage}
            alt="NICKS recruitment support team"
            onError={(event) => setFallbackImage(event, aboutWorkFallbackImage)}
            loading="eager"
            decoding="async"
            className="size-full object-cover object-[center_16%]"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
          <div className="text-xs font-bold text-white/72">
            <a href="/" className="hover:text-accent-gold">
              Home
            </a>
            <span className="mx-2">|</span>
            <span>Contact us</span>
          </div>
          <h1 className="mt-8 font-display text-5xl font-black leading-tight">Contact us</h1>
          <p className="mt-4 max-w-2xl text-sm font-semibold leading-7 text-white/72">
            Start with your profession, preferred destination, experience level and CV status.
          </p>
        </div>
      </section>
      <section className="bg-background px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.58fr_0.42fr]">
          <div>
            <form className="grid gap-4" onSubmit={handleContactSubmit}>
              <label className="sr-only" htmlFor="enquiry-type">
                Enquiry type
              </label>
              <input
                id="enquiry-type"
                name="enquiryType"
                type="text"
                placeholder="Enquiry Type"
                className="h-12 border border-border bg-background px-4 text-sm font-semibold text-primary-deep outline-none transition focus:border-primary"
              />

              <label className="sr-only" htmlFor="name">
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                className="h-12 border border-border bg-background px-4 text-sm font-semibold text-primary-deep outline-none transition placeholder:text-muted-foreground focus:border-primary"
              />

              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                className="h-12 border border-border bg-background px-4 text-sm font-semibold text-primary-deep outline-none transition placeholder:text-muted-foreground focus:border-primary"
              />

              <label className="sr-only" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows={7}
                className="resize-none border border-border bg-background px-4 py-3 text-sm font-semibold text-primary-deep outline-none transition placeholder:text-muted-foreground focus:border-primary"
              />

              <button
                type="submit"
                className="mt-2 inline-flex h-12 w-fit items-center justify-center rounded-md bg-primary px-9 text-sm font-black text-white transition hover:bg-primary-deep"
              >
                Submit
              </button>
            </form>

            <p className="mt-10 text-sm font-semibold text-primary-deep/75">
              If you are looking for contacts within a specific country or market{" "}
              <a
                href="/destinations"
                className="font-black text-primary underline-offset-4 hover:underline"
              >
                click here
              </a>
              .
            </p>
          </div>

          <div className="bg-surface">
            <div className="relative h-full min-h-[520px] overflow-hidden border border-border">
              <iframe
                title="Map showing Twiga Towers, Moi Avenue, Nairobi"
                src="https://www.google.com/maps?q=Twiga%20Towers%2C%20Moi%20Avenue%2C%20Nairobi%2C%20Kenya&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="size-full border-0"
              />
              <div className="pointer-events-none absolute left-5 top-5 max-w-xs bg-white p-4 text-sm font-bold text-primary-deep shadow-elegant">
                <MapPin className="mb-2 size-5 text-primary" />
                Twiga Towers, Room 405
              </div>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}

function TrustStrip() {
  const [mobileEmployerStart, setMobileEmployerStart] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setMobileEmployerStart((current) => (current + 1) % employers.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);

  const mobileEmployers = [0, 1, 2].map(
    (offset) => employers[(mobileEmployerStart + offset) % employers.length],
  );

  return (
    <section className="border-y border-border bg-surface py-12">
      <p className="mb-8 text-center text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
        Trusted by leading Gulf enterprises
      </p>
      <div className="relative overflow-hidden">
        <div
          key={mobileEmployerStart}
          className="trust-mobile-slide grid grid-cols-3 gap-2 px-4 sm:hidden"
        >
          {mobileEmployers.map((employer) => (
            <a
              key={employer.name}
              href="/jobs"
              className="grid h-16 min-w-0 place-items-center border border-border bg-background px-2"
              aria-label={`${employer.name} opportunities`}
            >
              <img
                src={employer.logo}
                alt={employer.name}
                loading="lazy"
                decoding="async"
                onError={showLogoFallback}
                className="max-h-8 max-w-full object-contain grayscale"
              />
              <span className="hidden text-center font-display text-xs font-black text-primary-deep/55">
                {employer.name}
              </span>
            </a>
          ))}
        </div>
        <div className="animate-marquee hidden w-max gap-6 whitespace-nowrap px-8 sm:flex">
          {[...employers, ...employers].map((employer, i) => (
            <a
              key={`${employer.name}-${i}`}
              href="/jobs"
              className="grid h-20 w-44 place-items-center border border-border bg-background px-6 transition hover:border-primary hover:shadow-gold"
              aria-label={`${employer.name} opportunities`}
            >
              <img
                src={employer.logo}
                alt={employer.name}
                loading="lazy"
                decoding="async"
                onError={showLogoFallback}
                className="max-h-10 max-w-32 object-contain grayscale transition hover:grayscale-0"
              />
              <span className="hidden font-display text-lg font-black tracking-[0.08em] text-primary-deep/55">
                {employer.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-background px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-8 bg-primary-deep p-8 text-white md:grid-cols-[1fr_auto] md:items-center lg:p-12">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em]">Ready to begin?</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl">
            Send your profession, preferred country and CV status.
          </h2>
        </div>
        <div className="flex flex-nowrap gap-2 sm:gap-3">
          <a
            href={whatsappUrl("Hello NICKS, I am ready to start my Gulf job application.")}
            className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-bold text-primary-deep transition hover:bg-surface sm:px-6"
          >
            Enquire
            <WhatsAppIcon className="size-4" />
          </a>
          <a
            href="/jobs"
            className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/10 px-4 py-3 text-sm font-bold text-white transition hover:bg-white/20 sm:px-6"
          >
            View Jobs
            <Search className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const footerCountries = [
    "Qatar",
    "United Arab Emirates",
    "Saudi Arabia",
    "Oman",
    "Kuwait",
    "Bahrain",
    "Kenya",
    "United Kingdom",
    "South Africa",
    "India",
    "Pakistan",
    "Philippines",
  ];

  return (
    <footer data-site-footer className="bg-surface text-primary-deep">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-12 sm:px-8 lg:grid-cols-[0.65fr_1.35fr] lg:px-12">
        <div className="border-r-0 border-primary/30 lg:border-r lg:pr-12">
          <h4 className="font-display text-lg font-bold">Contact us</h4>
          <ul className="mt-6 space-y-3 text-sm font-semibold text-primary-deep/72">
            {[
              ["For latest vacancies", "/jobs"],
              ["General enquiries", "/contact-us"],
              ["Specific country contacts", "/destinations"],
              ["Register as potential supplier", "/contact-us"],
              ["Submit a candidate application request", "/contact-us"],
            ].map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  className="inline-flex items-center gap-2 transition hover:text-primary"
                >
                  {label}
                  <ArrowRight className="size-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-r-0 border-primary/30 lg:border-r lg:pr-12">
          <h4 className="font-display text-lg font-bold">Where we operate</h4>
          <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-2 text-sm font-semibold text-primary-deep/72 sm:grid-cols-3">
            {footerCountries.map((country) => (
              <a
                key={country}
                href={`/jobs?destination=${encodeURIComponent(country)}`}
                className="transition hover:text-primary"
              >
                {country}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-primary-deep px-6 py-4 text-white sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-xs font-bold sm:flex-row sm:items-center sm:justify-between">
          <a
            href={whatsappUrl("Hello NICKS, I want to enquire now.")}
            className="inline-flex items-center gap-2"
          >
            Job vacancies? WhatsApp now
            <ArrowRight className="size-3.5" />
          </a>
          <div className="flex gap-5 text-white/84">
            <a href="/about" className="hover:text-accent-gold">
              About
            </a>
            <a href="/jobs" className="hover:text-accent-gold">
              Jobs
            </a>
            <a href="/contact-us" className="hover:text-accent-gold">
              Contact
            </a>
          </div>
        </div>
      </div>
      <div className="bg-background px-6 py-5 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-x-8 gap-y-3 text-[11px] font-bold text-primary-deep/70">
          {[
            "Privacy policy",
            "Terms",
            "Candidate guidance",
            "Employer services",
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
          <a href={`tel:+${whatsappNumber}`} className="transition hover:text-primary">
            Call: +254 746 030 545
          </a>
          <span className="ml-auto">{"\u00a9"} Nicks Agency 2026</span>
        </div>
      </div>
    </footer>
  );
}

function StarRating() {
  return (
    <div className="flex gap-1 text-accent-gold">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-5 fill-current" />
      ))}
    </div>
  );
}
