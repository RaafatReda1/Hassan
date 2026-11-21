export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface SeoMetaOptions {
  title: string;
  description: string;
  slug?: string;
  image?: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
}
