import type { Metadata } from "next";
import { getProfile } from "@/lib/data/profile";
import { AdminGuard } from "@/components/admin/AdminGuard";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { HeroEditor } from "@/components/admin/hero-editor/HeroEditor";

export const metadata: Metadata = {
  title: "لوحة التحكم | إدارة ديوان الإمارة",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  const profile = await getProfile();

  return (
    <AdminGuard>
      <div className="mx-auto max-w-5xl space-y-8 px-4 py-12 sm:px-8">
        <AdminHeader />
        <HeroEditor initialProfile={profile} />
      </div>
    </AdminGuard>
  );
}
