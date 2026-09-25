const projects = [
  {
    title: "Wisal",
    category: "Quran Habit-Building App",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.hussam.wisal",
    appStoreUrl: "https://apps.apple.com/us/app/wisal/id6774538492",
    description:
      "A Quran reading-habit app for Athar — daily wird (reading plan) tracking, tadabbur/tafsir content, and community accountability through groups, challenges, and real-time chat.",
    tasks: [
      "Built the onboarding flow from scratch — a personalized, animated, multi-phase flow fully localized in Arabic, English, and Urdu.",
      "Built the community system: group creation and invites, group reading challenges, and real-time DM/group chat over Socket.IO.",
      "Built gamification with Riverpod state management — daily streaks, a tree-growth visualization, knowledge points, and a reading-stats chart.",
      "Added a Live Activity/Dynamic Island reciter player for background Quran audio playback on iOS.",
      "Owned the release to both the Play Store and App Store and all subsequent updates: forced/optional update flow, in-app account deletion, Sign in with Apple, and content moderation (reporting, blocking).",
    ],
    skills: [
      "Flutter",
      "Riverpod",
      "Go Router",
      "Socket.IO",
      "Firebase",
      "Live Activities",
      "Localization",
    ],
    images: [
      "/images/athar/wisal_home.webp",
      "/images/athar/wisal_mushaf_kahf.webp",
      "/images/athar/wisal_tadabbur_audio.webp",
      "/images/athar/wisal_mushaf_baqarah.webp",
      "/images/athar/wisal_wasali_xp.webp",
      "/images/athar/wisal_time_chart.webp",
      "/images/athar/wisal_community_groups.webp",
      "/images/athar/wisal_challenges.webp",
    ],
  },
  {
    title: "Amaya AG",
    category: "Agrotech Platform (3 Apps)",
    caseStudyId: "amaya-showcase",
    playStoreUrl:
      "https://play.google.com/store/apps/dev?id=6939592620777580916",
    appStoreUrl: null,
    description:
      "Agrotech platform — 3 interconnected Flutter apps (Advisor, Farmer, Sales) for farm and land management. Built for field use in areas with no internet connection.",
    tasks: [
      "Built the design system from scratch — typography, color, grid, and 40+ reusable components — then used it to redesign 50+ screens across all three apps (visit-report flows, Sales orders/invoices/home, onboarding).",
      "Built offline-first map navigation (Flutter, BLoC, Freezed) with GeoJSON/MBTiles tile rendering, zoom levels 0–13, Crashlytics error tracking, and unit-tested state flows.",
      "Led a full redesign of the visit-report module (Flutter + BLoC) — rebuilt GPS/map flows, photo capture with annotations, multi-language localisation, and offline-safe form state handling.",
      "Added local-first offline data sync (ordered sync coordinator for field data) and multi-layer caching, cutting page load from ~10 s to 1-2 s cached.",
      "Refactored shared logic into independent Dart packages (date_utils, validation_utils, network_utils); led sprint planning, task breakdown, and code reviews in an Agile workflow.",
    ],
    skills: [
      "Flutter",
      "BLoC",
      "Freezed",
      "Design Systems",
      "Clean Architecture",
      "GeoJSON/MBTiles",
      "Dart Packages",
      "Unit Tests",
      "Agile",
    ],
    images: [
      "/images/new_amaya_visit_report/1.webp",
      "/images/new_amaya_visit_report/2.webp",
      "/images/new_amaya_visit_report/3.webp",
      "/images/new_amaya_visit_report/4.webp",
      "/images/new_amaya_visit_report/5.webp",
      "/images/new_amaya_visit_report/6.webp",
      "/images/new_amaya_visit_report/8.webp",
      "/images/amaya1.webp",
      "/images/amaya2.webp",
      "/images/amaya3.webp",
      "/images/amaya4.webp",
      "/images/amaya5.webp",
      "/images/amaya6.webp",
      "/images/amaya7.webp",
      "/images/amaya8.webp",
      "/images/amaya9.webp",
    ],
  },
  {
    title: "Sofa",
    category: "Video Streaming Platform",
    caseStudyId: "sofaShowcaseSection",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.qirat.sofa&hl=en",
    appStoreUrl: null,
    description:
      "A cross-platform video streaming app for an Algerian startup, built with Flutter — 10k+ downloads on the Play Store. Delivers a Netflix-like experience across mobile, tablet, and Android TV, featuring Google Cast, multi-language subtitles, and adaptive video quality.",
    tasks: [
      "Led Flutter development for cross-platform video streaming app (Android, iOS, Android TV) — 10k+ Play Store downloads",
      "Reduced initial data load time from 8–10 seconds to under 1 second (80%+ improvement) via API optimisation and smart caching",
      "Built streaming features: Google Cast, multi-language subtitles, adaptive video quality based on network conditions",
      "Extended platform to Android TV with tailored layouts, D-pad remote navigation, and voice search support",
    ],
    skills: [
      "Flutter",
      "Provider",
      "Video Streaming",
      "Android TV",
      "Google Cast",
      "REST API",
    ],
    images: [
      "/images/sofa1.webp",
      "/images/sofa2.webp",
      "/images/sofa3.webp",
      "/images/sofa4.webp",
      "/images/sofa5.webp",
      "/images/sofa6.webp",
      "/images/sofa7.webp",
      "/images/sofa8.webp",
      "/images/sofa9.webp",
      "/images/sofa10.webp",
    ],
  },
  {
    title: "Azougui",
    category: "Grocery Delivery App",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.azougui.mrkt.app&hl=en",
    appStoreUrl: "https://apps.apple.com/dz/app/azougui/id6746276974",
    description:
      "A modern grocery shopping app built for the Mauritanian market. Users can browse products from their favorite stores and supermarkets, place orders online, and receive fast delivery at home.",
    tasks: [
      "Customized and localized the app for Mauritanian market with Arabic and French language support",
      "Implemented product filtering by store to enhance navigation and shopping experience",
      "Integrated Google and Apple authentication for secure login experience",
      "Published on both Google Play Store and Apple App Store",
    ],
    skills: ["Flutter", "Firebase", "REST API", "iOS", "Android"],
    images: [
      "/images/azougui2.webp",
      "/images/azougui1.webp",
      "/images/azougui3.webp",
    ],
  },
  {
    title: "Snay3i",
    category: "Job Marketplace App",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.snay3i.app",
    description:
      "A job marketplace connecting service providers with customers for home, automotive, and professional services. Built from scratch with Flutter, Firebase, Google Maps, and a React/Node.js back-office admin panel.",
    tasks: [
      "Integrated full Firebase suite: Realtime Database, Auth, Cloud Functions, Storage, Messaging, Crashlytics, Analytics",
      "Implemented Google Maps for location-based service discovery and real-time provider tracking",
      "Built 3-language support (Arabic, French, English) for broader market reach across North Africa",
      "Created React/Node.js back-office system for admin management and service moderation",
    ],
    skills: [
      "Flutter",
      "Firebase",
      "Google Maps",
      "React",
      "Node.js",
      "Multi-language",
    ],
    images: [
      "/images/snay3i1.webp",
      "/images/snay3i.webp",
      "/images/snay3i2.webp",
    ],
  },
  {
    title: "Mziya",
    category: "Parcel Delivery Platform",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.alamaralabs.mziya",
    description:
      "A cost-effective package delivery platform connecting shippers with travelers locally and internationally. Makes deliveries simpler, faster, and more affordable.",
    tasks: [
      "Resolved Stripe payment integration issue, reducing operational costs by 15%",
      "Developed Favourite Trajectory feature for efficient route management and repeat deliveries",
      "Enhanced in-app messaging system for seamless sender-traveller communication",
      "Implemented real-time push notifications for live package tracking updates",
    ],
    skills: ["Flutter", "Firebase", "Stripe", "Push Notifications"],
    images: ["/images/mziya1.webp", "/images/mziya3.webp", "/images/mziya2.webp"],
  },
  {
    title: "Laffaiire",
    category: "E-commerce App",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.laffaiire.app",
    description:
      "A user-friendly app for buying and selling clothing with powerful search, multi-language support (EN/FR/AR), and secure payments.",
    tasks: [
      "Migrated app to Flutter 3.x with null safety support",
      "Implemented city and town filtering for product searches",
      "Integrated secure online payments and Google authentication",
      "Launched on Play Store with separate dev/prod environments",
    ],
    skills: ["Flutter", "Firebase", "Payment Gateway", "REST API"],
    images: [
      "/images/laffaiire3.webp",
      "/images/laffaiire1.webp",
      "/images/laffaiire2.webp",
    ],
  },
  {
    title: "Laffaiire-Tech",
    category: "Tech Marketplace App",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.laffaiire.tech.app",
    description:
      "A specialized e-commerce platform for buying and selling tech devices, rebranded from Laffaiire with tech-focused identity.",
    tasks: [
      "Merged Laffaiire app into Laffaiire-Tech with updated branding",
      "Configured Flutter flavors for separate dev/prod environments",
      "Implemented Google Authentication via Firebase",
      "Published on Play Store with full documentation",
    ],
    skills: ["Flutter", "Firebase", "REST API", "CI/CD"],
    images: ["/images/laffaiire_tech.webp", "/images/laffaiire_tech3.webp"],
  },
];

export default projects;
