export const siteConfig = {
  name: "حسن الفرحات الجنيدي",
  titleTemplate: "%s | حسن الفرحات الجنيدي",
  defaultTitle: "حسن الفرحات الجنيدي | الأمين العام لرئاسة الإمارة الجنيدية",
  description:
    "الموقع الرسمي للأمين العام لرئاسة الإمارة الجنيدية في العراق، حسن الفرحات الجنيدي.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://hassan-elgnedy.com",
  defaultOgImage: "/og-image.jpg",
  locale: "ar_IQ",
  author: {
    name: "حسن الفرحات الجنيدي",
    role: "الأمين العام لرئاسة الإمارة الجنيدية",
    location: "العراق - البغدادية",
    birthYear: 1991,
    url: "https://hassan-elgnedy.com",
  },
  verification: {
    google: "GOOGLE_SEARCH_CONSOLE_VERIFICATION_TOKEN",
  },
};
