import type { ReactNode } from "react";

export interface PillarItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  badge: string;
  icon: ReactNode;
}
