export interface Category {
  id: number;
  created_at: string;
  name: string;
  slug: string;
  parent_id?: number | null;
}

export interface ArticleImages {
  cover: string;
  gallery?: string[];
}

export interface Article {
  id: number;
  created_at: string;
  title: string;
  slug: string;
  content: string;
  imgs_url: ArticleImages;
  cat_id: number;
  status: "draft" | "published" | "archived";
  is_published: boolean;
  is_edited?: { updated_at: string } | null;
  seo_title?: string | null;
  seo_description?: string | null;
  category?: Category;
}
