import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  Download,
  ArrowRight,
  Mail,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import WordReveal from "./ui/WordReveal";

export const RESUME_URL = "/Doc/Mobile-dev-nawfel_boulkroune_cv.pdf";

const ease = [0.16, 1, 0.3, 1];

const stats = [
  { value: "3+", label: "Years in mobile" },
  { value: "10+", label: "Apps shipped to stores" },
  { value: "10k+", label: "Downloads on Sofa" },
  { value: "80%+", label: "Faster load on Sofa" },
  { value: "83%", label: "Faster load at Amaya" },
];

const svg = (name) => `/images/SVG/${name}.svg`;

// One list on purpose: grouping by "backend", "tooling" etc. would put the
// weight on areas outside mobile. Ordered from core to supporting skills.
const stack = [
  { name: "Flutter", icon: svg("flutter-icon") },
  { name: "Dart", icon: svg("dart-icon") },
  { name: "Kotlin", icon: svg("kotlin-icon") },
  { name: "Android", icon: svg("android-icon") },
  { name: "iOS", icon: svg("ios-icon") },
  { name: "Android TV" },
  { name: "Firebase", icon: svg("firebase-icon") },
  { name: "REST APIs", icon: svg("rest-api-icon") },
  { name: "BLoC" },
  { name: "Riverpod" },
  { name: "Provider" },
  { name: "GetX" },
  { name: "Clean Architecture" },
  { name: "MVVM" },
  { name: "Design Systems" },
  { name: "Custom Animations" },
  { name: "Responsive UI" },
  { name: "Offline Sync" },
  { name: "Google Maps" },
  { name: "Push Notifications" },
  { name: "Stripe", icon: svg("stripe-icon") },
  { name: "Google Cast" },
  { name: "Live Activities" },
  { name: "Unit Testing" },
  { name: "CI/CD" },
  { name: "Flavors", icon: svg("flavors-icon") },
  { name: "Git & GitHub", icon: svg("github-icon") },
  { name: "Figma" },
  { name: "Agile / Jira" },
  { name: "Store Publishing" },
];

const companies = ["Athar", "Amaya AG", "QIRAT", "MSD Consulting", "Intaj Mohtawayat", "SARL MCI"];

const socials = [
  { href: "https://www.linkedin.com/in/nawfelboulkroune/", icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://github.com/noufel-boulkroune", icon: FaGithub, label: "GitHub" },
  { href: "mailto:noufelboulkroune@gmail.com", icon: Mail, label: "Email" },
];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 14, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.6, ease, delay },
});

const HeroSection = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 bg-dark-100"
    >
      {/* Backdrop: dotted grid + one slow aurora, both behind everything */}
      <div className="absolute inset-0 hero-grid pointer-events-none" aria-hidden="true" />
      <div
        className="absolute -top-40 left-1/2 -ml-[380px] w-[760px] h-[760px] hero-aurora pointer-events-none"
        aria-hidden="true"
      />

      <div className="container relative">
        <div className="grid lg:grid-cols-[1.4fr,1fr] gap-10 lg:gap-16 items-center">
          {/* Text */}
          <div className="text-center lg:text-left">
            <motion.div className="lg:hidden w-28 h-28 mx-auto mb-6 rounded-full ring-glow" {...fadeUp(0)}>
              <img
                src="/images/myImage.webp"
                alt="Nawfel Boulkroune"
                width="112"
                height="112"
                className="w-full h-full rounded-full object-cover border-4 border-dark"
                fetchPriority="high"
              />
            </motion.div>

            <motion.p className="eyebrow mb-4 justify-center lg:justify-start" {...fadeUp(0.05)}>
              Mobile App Developer · Flutter
            </motion.p>

            <h1 className="text-[2.6rem] sm:text-6xl lg:text-7xl font-bold mb-5 leading-[1.02] tracking-display">
              <WordReveal text="Nawfel" delay={0.1} />{" "}
              <WordReveal text="Boulkroune" delay={0.18} className="gradient-text-static" />
            </h1>

            <motion.p
              className="text-lg sm:text-xl text-light mb-4 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              {...fadeUp(0.3)}
            >
              I'm a mobile app developer with 3+ years of experience building
              Flutter apps for iOS, Android and Android TV. I've shipped 10+
              apps to the Play Store and App Store — from a streaming platform
              with 10k+ downloads to an offline-first agrotech suite used in the
              field.
            </motion.p>

            <motion.p
              className="text-base text-light-300 mb-5 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              {...fadeUp(0.34)}
            >
              I care about the details users feel but rarely see: fast load
              times, offline support, smooth animations and architecture that
              stays clean as the app grows. I've built a design system from
              scratch, cut a product's page load by over 83%, and taken apps
              from the first commit all the way to the Play Store and App
              Store.
            </motion.p>

            <motion.p
              className="flex items-center justify-center lg:justify-start gap-1.5 text-sm text-light-300 mb-8"
              {...fadeUp(0.36)}
            >
              <MapPin className="w-4 h-4" aria-hidden="true" />
              Algiers, Algeria
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8"
              {...fadeUp(0.42)}
            >
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary gap-2"
              >
                <Download className="w-5 h-5" aria-hidden="true" />
                Download Resume
              </a>
              <a href="#experience" className="btn-secondary gap-2 group">
                See Experience
                <ArrowRight
                  className="w-5 h-5 group-hover:translate-x-0.5 transition-transform"
                  aria-hidden="true"
                />
              </a>
            </motion.div>

            <motion.div className="flex justify-center lg:justify-start gap-3" {...fadeUp(0.48)}>
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="well w-11 h-11 flex items-center justify-center rounded-full text-light-300 hover:text-primary"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Photo (desktop) */}
          <motion.div
            className="hidden lg:flex justify-end"
            initial={{ opacity: 0, scale: 0.94, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
          >
            <div className="relative w-80 h-80 xl:w-96 xl:h-96 rounded-full ring-glow">
              <img
                src="/images/myImage.webp"
                alt="Nawfel Boulkroune"
                width="384"
                height="384"
                className="w-full h-full rounded-full object-cover border-[10px] border-dark"
                fetchPriority="high"
              />
            </div>
          </motion.div>
        </div>

        {/* Key numbers */}
        <motion.ul
          className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 mt-14 lg:mt-20"
          {...fadeUp(0.55)}
        >
          {stats.map((stat) => (
            <li key={stat.label} className="glass-tile rounded-2xl p-5 text-center lg:text-left last:col-span-2 md:last:col-span-1">
              <div className="text-3xl sm:text-4xl font-bold gradient-text-static tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-light-300 mt-1 font-medium">{stat.label}</div>
            </li>
          ))}
        </motion.ul>

        {/* Stack — one list, centred */}
        <motion.div
          className="surface spotlight mt-14 p-6 sm:p-8 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease }}
        >
          <p className="eyebrow eyebrow-center mb-5">Tech stack</p>
          <ul className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
            {stack.map((item) => (
              <li
                key={item.name}
                className="well inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-light"
              >
                {item.icon && (
                  <img src={item.icon} alt="" width="16" height="16" className="w-4 h-4" />
                )}
                {item.name}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Companies */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="eyebrow eyebrow-center mb-5">Companies I've built apps for</p>
          <ul className="flex flex-wrap justify-center gap-x-10 gap-y-3">
            {companies.map((company) => (
              <li
                key={company}
                className="text-light-300 font-semibold text-lg hover:text-light transition-colors"
              >
                {company}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
