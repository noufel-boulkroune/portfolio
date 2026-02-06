const projects = [
  {
    title: "Amaya AG",
    category: "Agrotech Platform (3 Apps)",
    playStoreUrl: null,
    appStoreUrl: null,
    description:
      "A comprehensive agrotech platform providing digital tools for farm and land management across three interconnected apps: Amaya Advisor, Amaya Farmer, and Amaya Sales. The platform enables farmers and advisors to manage land, track activities, and make data-driven decisions—even in rural areas with no internet connection.",
    tasks: [
      "Built offline-first map navigation using GeoJSON and MBTiles with intelligent tile generation (zoom 0-13 from single source)",
      "Implemented Clean Architecture with BLoC pattern and established design system with theme tokens across all 3 apps",
      "Led UI refactoring initiative and managed Jira workflow with sprint planning and code reviews",
      "Implemented region border repair algorithm and in-memory caching to eliminate loader flashing",
    ],
    skills: ["Clean Architecture", "BLoC", "Jira", "Theme Tokens", "GeoJSON", "MBTiles"],
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
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.qirat.sofa&hl=en",
    appStoreUrl: null,
    description:
      "A cross-platform video streaming app for an Algerian startup, built with Flutter. The app delivers a Netflix-like experience with support for mobile, tablet, and Android TV, featuring Google Cast integration, multi-language subtitles, and adaptive video quality based on network conditions.",
    tasks: [
      "Led Flutter development for cross-platform video streaming app (Android, iOS, Android TV)",
      "Reduced initial data load time from 8-10 seconds to under 1 second by optimizing API calls and implementing smart caching",
      "Built streaming features including Google Cast, subtitles, and adaptive video quality",
      "Extended platform to Android TV with optimized layouts, remote navigation, and D-pad support",
    ],
    skills: ["Flutter", "Provider", "Video Streaming", "Android TV", "Google Cast", "REST API"],
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
      "A job marketplace connecting service providers with customers for home, automotive, and professional needs. Built from scratch using Flutter and Firebase with Google Maps integration.",
    tasks: [
      "Integrated Firebase services: Realtime Database, Auth, Cloud Functions, Storage, Messaging, Crashlytics",
      "Implemented Google Maps for location-based service discovery and provider tracking",
      "Built multi-language support (English, French, Arabic) for broader market reach",
      "Created React-based back-office system for admin management",
    ],
    skills: ["Flutter", "Firebase", "Google Maps", "React", "Node.js"],
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
      "Resolved Stripe payment issue, reducing operational costs by 15%",
      "Developed Favorite Trajectory feature for efficient route management",
      "Enhanced messaging system for seamless sender-traveler communication",
      "Implemented real-time notifications for package tracking updates",
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
