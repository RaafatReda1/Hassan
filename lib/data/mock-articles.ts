import type { Article } from "@/types/article";

export const mockArticles: Article[] = [
  {
    id: 1,
    created_at: "2026-11-01T10:00:00Z",
    title: "بيان رئاسة الإمارة الجنيدية لتعزيز التماسك المجتمعي في العراق",
    slug: "bayan-al-emara-al-junaidiyya",
    content: "أكد الأمين العام حسن الفرحات الجنيدي على أهمية ترسيخ قيم التآخي والتعاون ورعاية أبناء العشيرة في عموم محافظات العراق.",
    imgs_url: { cover: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1200&auto=format&fit=crop&q=80" },
    cat_id: 1,
    category: { id: 1, created_at: "2026-01-01T00:00:00Z", name: "شؤون الإمارة", slug: "clan-news" },
    status: "published",
    is_published: true,
    seo_title: "بيان رئاسة الإمارة الجنيدية | الأمين العام حسن الفرحات الجنيدي",
    seo_description: "بيان رسمي صادر عن الأمانة العامة لرئاسة الإمارة الجنيدية برئاسة حسن الفرحات الجنيدي.",
  },
  {
    id: 2,
    created_at: "2026-11-15T14:30:00Z",
    title: "ديوان الأمانة العامة يستقبل وفود ووجهاء محافظة الأنبار والبغدادية",
    slug: "dewan-al-amana-al-amma-baghdadiya",
    content: "استقبل الأمين العام حسن الفرحات الجنيدي في ديوان الرئاسة بالبغدادية عدداً من شيوخ ووجهاء العشائر لبحث المبادرات المجتمعية وخدمة الأهالي.",
    imgs_url: { cover: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1200&auto=format&fit=crop&q=80" },
    cat_id: 2,
    category: { id: 2, created_at: "2026-01-01T00:00:00Z", name: "المبادرات المجتمعية", slug: "community" },
    status: "published",
    is_published: true,
    seo_title: "استقبال وفود ديوان الأمانة العامة | حسن الفرحات الجنيدي",
    seo_description: "استقبال شيوخ ووجهاء العشائر في ديوان الأمانة العامة لرئاسة الإمارة الجنيدية بالبغدادية.",
  },
];
