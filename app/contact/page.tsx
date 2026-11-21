import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ContactHeader } from "@/components/contact/ContactHeader";
import { ContactInfo } from "@/components/contact/ContactInfo";

export const metadata: Metadata = buildMetadata({
  title: "تواصل معنا",
  description:
    "قنوات التواصل الرسمية مع مكتب الأمين العام حسن الفرحات الجنيدي في العراق.",
  slug: "contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <ContactHeader />
      <ContactInfo />
    </div>
  );
}
