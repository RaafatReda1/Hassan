import { CrestIcon } from "@/components/ui/icons/CrestIcon";
import type { PillarItem } from "./types";

export const homePillars: PillarItem[] = [
  {
    number: "01",
    title: "رئاسة الإمارة الجنيدية",
    subtitle: "الأمانة العامة &bull; ديوان الإمارة",
    description: "قيادة شؤون العشيرة، تعزيز التآخي والسلم المجتمعي، والتنسيق لأبناء الإمارة في عموم العراق.",
    href: "/clan",
    badge: "المقام العشائري",
    icon: <CrestIcon className="h-6 w-6" />,
  },
  {
    number: "02",
    title: "ديوان الأمانة العامة",
    subtitle: "العراق - البغدادية",
    description: "استقبال الوفود، متابعة المبادرات الاجتماعية، وبناء جسور التعاون بين أطياف المجتمع العراقي.",
    href: "/profile",
    badge: "الشؤون المجتمعية",
    icon: <CrestIcon className="h-6 w-6" />,
  },
];
