import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

// Each role: a one-line summary, then 2-3 results a recruiter can scan.
const experiences = [
  {
    title: "Mobile App Developer",
    company: "Athar",
    location: "Remote",
    type: "Freelance",
    period: "Apr 2026 – Sep 2026",
    summary: "Wisal — Quran reading-habit app with community and gamification.",
    highlights: [
      "Built the onboarding flow from scratch — personalized, animated, fully localized in Arabic, English and Urdu.",
      "Built the community system: group challenges, real-time chat over Socket.IO and reflection sharing, plus streaks and an iOS Live Activity reciter player.",
      "Owned releases and every update on the Play Store and App Store (forced updates, account deletion, iOS auth fixes).",
    ],
    tags: ["Flutter", "Riverpod", "Go Router", "Socket.IO", "Firebase", "Live Activities"],
  },
  {
    title: "Mobile App Developer",
    company: "Amaya AG",
    location: "Remote",
    type: "Full-time",
    period: "Nov 2025 – Aug 2026",
    summary: "Agrotech platform — 3 connected apps (Advisor, Farmer, Sales) for field teams.",
    highlights: [
      "Created the design system from scratch (typography, color, grid, 40+ components) and redesigned 40+ screens with it.",
      "Cut page load from ~10 s to 1–2 s (cached) with local-first sync and multi-layer caching.",
      "Built offline-first map navigation with GeoJSON / MBTiles for areas with no connection.",
      "Split shared logic into standalone Dart packages; led sprint planning, task breakdown and code reviews.",
    ],
    tags: ["Flutter", "BLoC", "Freezed", "Design Systems", "Unit Tests", "Agile"],
  },
  {
    title: "Mobile App Developer",
    company: "QIRAT",
    location: "Algeria",
    type: "Full-time",
    period: "Sep 2024 – Oct 2025",
    summary: "Sofa — video streaming app with 10k+ Play Store downloads.",
    highlights: [
      "Delivered tailored UIs for phone, tablet and Android TV (D-pad navigation, Google Cast, subtitles, adaptive streaming).",
      "Cut data load time from 8–10 s to under 1 s (80%+) through API optimization and caching.",
      "Turned every Figma screen into pixel-perfect Flutter UI.",
    ],
    tags: ["Flutter", "Provider", "REST API", "Android TV", "Google Cast"],
  },
  {
    title: "Mobile App Developer",
    company: "MSD Consulting",
    location: "Remote",
    type: "Contract",
    period: "Dec 2022 – Aug 2025",
    summary: "French startup studio — shipped 5 Flutter apps in e-commerce, logistics and jobs.",
    highlights: [
      "Built Azougui (grocery delivery) with real-time inventory and Google / Apple sign-in — live on both stores.",
      "Built Snay3i (job marketplace) with Google Maps, 3 languages, full Firebase suite and a React / Node.js admin panel.",
      "Shipped Mziya, Laffaiire and Laffaiire-Tech; migrated the codebase to Flutter 3.x with null safety.",
      "Removed Stripe platform fees by migrating to Standard accounts; added Crashlytics, Remote Config and Analytics across all apps.",
    ],
    tags: ["Flutter", "Firebase", "Google Maps", "Stripe", "GetX", "Node.js"],
  },
  {
    title: "Mobile App Developer",
    company: "Intaj Mohtawayat",
    location: "Algeria",
    type: "Full-time",
    period: "Feb 2024 – Sep 2024",
    summary: "Media company — entertainment, education and event apps.",
    highlights: [
      "Built D-Futures from scratch (Flutter, MVVM, REST) for full event lifecycle management.",
      "Improved stability of Smart Panda and Ramadan Awards through bug fixes and performance work.",
      "Mentored junior Flutter developers and led code reviews across product and QA teams.",
    ],
    tags: ["Flutter", "MVVM", "Provider", "Code Review", "Mentoring"],
  },
  {
    title: "Mobile App Developer",
    company: "SARL MCI",
    location: "Algeria",
    type: "Full-time",
    period: "Apr 2023 – Dec 2023",
    summary: "Internal app for tenders, stock tracking and workforce coordination.",
    highlights: [
      "Designed the GetX architecture and integrated REST APIs for live inventory data.",
      "Set up the team's GitHub workflow; delivered the complete business app end to end.",
    ],
    tags: ["Flutter", "GetX", "REST APIs", "GitHub"],
  },
];

const ease = [0.16, 1, 0.3, 1];

const Period = ({ experience, className = "" }) => (
  <div className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-light-300 ${className}`}>
    <span className="inline-flex items-center gap-1.5 font-mono text-[13px] font-medium text-light whitespace-nowrap">
      <Calendar className="w-4 h-4 text-primary" aria-hidden="true" />
      {experience.period}
    </span>
    <span className="inline-flex items-center gap-1.5">
      <MapPin className="w-4 h-4" aria-hidden="true" />
      {experience.location} · {experience.type}
    </span>
  </div>
);

// Desktop: zigzag around a centre line; the date sits on the opposite side.
// Mobile: a single column with the line on the left.
const ExperienceCard = ({ experience, index }) => {
  const left = index % 2 === 0;

  return (
    <li className="relative grid grid-cols-[20px,1fr] lg:grid-cols-[1fr,56px,1fr] gap-x-4 lg:gap-x-0">
      {/* Dot on the line */}
      <div className="relative flex justify-center pt-8 lg:col-start-2 lg:row-start-1">
        <motion.span
          className="w-3.5 h-3.5 rounded-full ring-4 ring-dark"
          initial={{ scale: 0.75, backgroundColor: "#C7C7CC", boxShadow: "0 0 0 0 rgba(0,113,227,0)" }}
          whileInView={{
            scale: 1,
            backgroundColor: "#0071E3",
            boxShadow: "0 0 0 6px rgba(0,113,227,0.14), 0 0 18px 2px rgba(0,113,227,0.45)",
          }}
          viewport={{ once: true, margin: "-40% 0px -40% 0px" }}
          transition={{ duration: 0.5, ease }}
          aria-hidden="true"
        />
      </div>

      {/* Date on the opposite side (desktop only) */}
      <motion.div
        className={`hidden lg:flex items-start pt-[30px] lg:row-start-1 ${
          left ? "lg:col-start-3 justify-start pl-2" : "lg:col-start-1 justify-end pr-2"
        }`}
        initial={{ opacity: 0, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease, delay: 0.1 }}
      >
        <Period experience={experience} className={left ? "" : "justify-end"} />
      </motion.div>

      {/* Card */}
      <motion.article
        className={`surface spotlight p-5 sm:p-7 lg:row-start-1 ${
          left ? "lg:col-start-1" : "lg:col-start-3"
        }`}
        initial={{ opacity: 0, x: left ? -28 : 28, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease }}
      >
        <header className="mb-3">
          <h3 className="text-xl sm:text-2xl font-bold text-light">{experience.company}</h3>
          <p className="text-sm text-light-300 mt-0.5">{experience.title}</p>
          <Period experience={experience} className="lg:hidden mt-2" />
        </header>

        <p className="text-light font-medium mb-3">{experience.summary}</p>

        <ul className="space-y-2 mb-5">
          {experience.highlights.map((item) => (
            <li key={item} className="flex gap-3 text-[15px] text-light-300 leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
          {experience.tags.map((tag) => (
            <li key={tag} className="well px-2.5 py-1 text-xs font-medium rounded-md text-light-300">
              {tag}
            </li>
          ))}
        </ul>
      </motion.article>
    </li>
  );
};

const ExperienceSection = () => {
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 65%", "end 55%"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <section id="experience" className="relative py-16 lg:py-28 bg-dark overflow-x-clip">
      <div className="container max-w-6xl">
        <SectionHeader index="01" label="Experience" title="Where I've shipped">
          6 companies across streaming, agrotech, e-commerce, media and
          logistics — most recent first.
        </SectionHeader>

        <div className="relative" ref={listRef}>
          {/* Track + scroll-driven fill */}
          <div
            className="absolute top-0 bottom-0 left-[9px] lg:left-1/2 lg:-translate-x-1/2 w-px bg-separator"
            aria-hidden="true"
          />
          <motion.div
            className="absolute top-0 bottom-0 left-[9px] lg:left-1/2 lg:-translate-x-1/2 w-[2px] origin-top bg-gradient-to-b from-primary via-secondary to-primary shadow-[0_0_12px_rgba(0,113,227,0.5)]"
            style={{ scaleY: fill }}
            aria-hidden="true"
          />

          <ol className="relative space-y-8 lg:space-y-4">
            {experiences.map((experience, index) => (
              <ExperienceCard key={experience.company} experience={experience} index={index} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
