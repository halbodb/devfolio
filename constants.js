export const METADATA = {
  title: "Portfolio | Muhammad Sharjeel",
  description:
    "Muhammad Sharjeel is a Full Stack Developer from Pakistan, interested in crafting beautiful and functional applications. Sharjeel is pursuing his career in tech domain.",
  // siteUrl: "https://shubhporwal.com/",
  // twitterHandle: "@shubh731",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A pragmatic Full Stack Developer",
  "I build things for the mobile",
  "I create aesthetic and modern apps",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: sharjeelwaheed125@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/muhammad-sharjeel-7a540a1b7",
  },
  {
    name: "github",
    url: "https://github.com/sharjeel125",
  },
  {
    name: "instagram",
    url: "https://instagram.com/muhammad_sharjeel_?igshid=ZDc4ODBmNjlmNQ==",
  },
  {
    name: "twitter",
    url: "https://twitter.com/MASharjeel1",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "sass",
    // "cpp",
    // "java",
    "python",
    "firebase",
    // "moralis",
    "stripe",
    // "figma"
  ],
  librariesAndFrameworks: [
    "react",
    "redux",
    "nextjs",
    "tailwindcss",
    "styledcomponents",
    "antdesign",
    "chakra-ui",
  ],
  databases: [
    "mysql",
    "mongodb",
    "postgresql"
  ],
  other: ["nodejs", "git", "sanity-io"],
};

export const PROJECTS = [
  {
    name: "AgriTech",
    image: "/projects/agridunya.webp",
    blurImage: "/projects/blur/agridunya-blur.webp",
    description: "AgriTech app using React Native + Node JS 🍀",
    gradient: ["#56ab2f", "#a8e063"],
    url: "https://play.google.com/store/apps/details?id=com.agridunya.agridunya&hl=en&gl=US&pli=1",
    tech: ["typescript","react","redux", "nodejs","mysql" ],
  },
  {
    name: "Tesla",
    image: "/projects/tesla.webp",
    blurImage: "/projects/blur/tesla-blur.webp",
    description: "A Tesla React Native App 🏎️",
    gradient: ["#142D46", "#2E4964"],
    url: "https://github.com/sharjeel125/tesla",
    tech: ["react"],
  },
  {
    name: "Livestock Digitals",
    image: "/projects/lsd.webp",
    blurImage: "/projects/blur/lsd-blur.webp",
    description: "Livestock Digitals using React Native + Node JS 🐏",
    gradient: ["#000046", "#1CB5E0"],
    url: "https://play.google.com/store/apps/details?id=com.livestockdigi&hl=en&gl=US",
    tech: ["react", "nodejs","mongodb"],
  },
  {
    name: "Alabaster",
    image: "/projects/alabaster.png",
    blurImage: "/projects/blur/alabaster-blur.png",
    description:
      "Alabaster is janitorial/cleaning service providers,self-contractor app 🧹",
      gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://play.google.com/store/apps/details?id=com.app.alabaster&hl=en&gl=US",
    tech: ["typescript","react","redux"],
  },

];

export const WORK = [
  {
    company: "Chaos Corporation",
    title: "Full Stack Mobile Engineer",
    location: "Karachi, Pakistan",
    range: "April 2023 - Present",
    responsibilities: [
      "Managed a comprehensive upgrade of the entire mobile application's Full Stack architecture.",
      "Enabled seamless integration of REST APIs, Google Maps, User Authentication, Stripe, and other frameworks within the app.",
      "Implemented essential functionality for creating, reading, updating, and deleting data across all services and providers."
    ],
    url: "https://chaoscorporated.com/",
  },
  {
    company: "AgriDunya Technologies",
    title: "React Native Engineer",
    location: "Karachi, Pakistan",
    range: "October 2022 - April 2023",
    responsibilities: [
      "Migrating the  Agridunya E-commerce mobile app from expo to react native cli to enhance features.",
      "Deep linking and Share Link: Enabled users to directly access specific app content or share links to specific app screens, improving user engagement and facilitating seamless navigation.",
      "Push notification: Implemented push notifications to deliver timely and relevant updates, promotions, and notifications to users, driving user engagement and increasing conversion rates.",
      "Easypaisa Payment Integration: Integrated Easypaisa payment system to provide users with a convenient and secure payment method, enhancing the app's usability and facilitating smooth transactions.",
      "These features collectively aimed at boosting sales, improving user engagement, and providing a seamless and enjoyable experience for app users."
    ],
    url: "https://www.agridunya.com/",
  },
  {
    company: "Appicoders Inc",
    title: "React Native Engineer",
    location: "Karachi, Pakistan",
    range: "August 2022 - October 2022",
    responsibilities: [
      "Successfully delivered end-to-end projects from inception to completion by closely collaborating with team members, ensuring effective coordination and timely execution.",
      "Developed and implemented React Native components in the Alabaster mobile app, ensuring alignment with user flow and enhancing overall user experience.",
      "Published the Alabaster mobile app on both Google Play Store and Apple App Store, ensuring it met the respective platform guidelines and requirements. Additionally, provided regular updates and bug fixes to continuously improve app performance, user satisfaction, and compatibility with the latest operating systems.",
    ],
    url: "https://appicoders.com/",
  },
  {
    company: "Livestock Smart (Private) Ltd",
    title: "Full Stack Web & Mobile App Developer",
    location: "Karachi, Pakistan",
    range: "December 2021 - August 2022",
    responsibilities: [
      "Revamp the web and mobile app user interface according to the given mockups",
      "Developed the backend API for the form and seamlessly integrated it into the React Native frontend of the mobile app.",
      "Designed and implemented a user-friendly form in the app, ensuring smooth data input and submission process.",
      "Published the frontend build of the mobile app on the Google Play Store, ensuring compliance with store guidelines and maintaining a smooth release process.",
      "Deployed the updated server code  to cloud using WinSCP and Putty, ensuring secure file transfer and maintaining server stability.",
      "Successfully restarted the server after deploying the backend code, ensuring proper functionality and availability of the app's backend services.",
    ],
    url: "http://livestocksmart.com/",
  },
];

export const GTAG = "G-5HCTL2TJ5W";
