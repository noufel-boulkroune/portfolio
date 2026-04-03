const projects = [
  {
    title: "Amaya AG",
    category: "Agrotech Platform (3 Apps)",
    playStoreUrl:
      "https://play.google.com/store/apps/dev?id=6939592620777580916",
    appStoreUrl: null,
    description:
      "Agrotech platform — 3 interconnected Flutter apps (Advisor, Farmer, Sales) for farm and land management. Built for field use in areas with no internet connection.",
    tasks: [
      "Built offline-first map navigation (Flutter, BLoC, Freezed) with GeoJSON/MBTiles tile rendering, zoom levels 0–13, Crashlytics error tracking, and unit-tested state flows.",
      "Built a full Flutter UI system from scratch — design tokens, theme engine, and a reusable widget library covering navigation, dialogs, snackbars, bottom sheets, and app bars.",
      "Led a full redesign of the visit-report module (Flutter + BLoC) — rebuilt GPS/map flows, photo capture with annotations, multi-language localisation, and offline-safe form state handling.",
      "Optimised data loading with targeted API queries and multi-layer caching (in-memory + persistent storage), cutting page load from 60+ s to ~2 s cached or under 10 s on fresh install.",
      "Refactored shared logic into independent Dart packages (date_utils, validation_utils, network_utils); led sprint planning, task breakdown, and code reviews in an Agile workflow.",
    ],
    skills: [
      "Flutter",
      "BLoC",
      "Freezed",
      "Clean Architecture",
      "GeoJSON/MBTiles",
      "Dart Packages",
      "Unit Tests",
      "Agile",
    ],
    images: [
      "/images/amaya1.jpg",
      "/images/amaya2.jpg",
      "/images/amaya3.jpg",
      "/images/amaya4.jpg",
      "/images/amaya5.jpg",
      "/images/amaya6.jpg",
      "/images/amaya7.jpg",
      "/images/amaya8.jpg",
      "/images/amaya9.jpg",
    ],
  },
  {
    title: "Sofa",
    category: "Video Streaming Platform",
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
      "/images/sofa1.png",
      "/images/sofa2.png",
      "/images/sofa3.png",
      "/images/sofa4.png",
      "/images/sofa5.png",
      "/images/sofa6.png",
      "/images/sofa7.png",
      "/images/sofa8.png",
      "/images/sofa9.png",
      "/images/sofa10.png",
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
      "/images/azougui2.png",
      "/images/azougui1.png",
      "/images/azougui3.png",
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
      "/images/snay3i1.png",
      "/images/snay3i.jpg",
      "/images/snay3i2.png",
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
    images: ["/images/mziya1.jpg", "/images/mziya3.jpg", "/images/mziya2.jpg"],
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
      "/images/laffaiire3.png",
      "/images/laffaiire1.png",
      "/images/laffaiire2.png",
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
    images: [
      "/images/laffaiire_tech.png",
      "/images/laffaiire_tech3.png",
      "/images/laffaiire_tech2.png",
    ],
  },
];

export default projects;
