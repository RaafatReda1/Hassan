export interface NavLink {
  href: string;
  label: string;
}

export const headerNavLinks: NavLink[] = [
  { href: "/", label: "الرئيسية" },
  { href: "/profile", label: "السيرة والمسيرة" },
  { href: "/clan", label: "الإمارة الجنيدية" },
  { href: "/news", label: "الأخبار والمقالات" },
  { href: "/contact", label: "تواصل معنا" },
];
