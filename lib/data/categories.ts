import type { Category } from "@/types/article";

export const categories: Category[] = [
  { id: 1, created_at: "2026-01-01T00:00:00Z", name: "Engineering", slug: "engineering" },
  { id: 2, created_at: "2026-01-01T00:00:00Z", name: "Architecture", slug: "architecture" },
  { id: 3, created_at: "2026-01-01T00:00:00Z", name: "SEO & Growth", slug: "seo-growth" },
];

export async function getCategories(): Promise<Category[]> {
  return categories;
}
