import type { Article } from "@/types/article";

export interface ArticleCardProps {
  article: Article;
  headingLevel?: "h2" | "h3";
}
