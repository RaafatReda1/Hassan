import type { Article } from "@/types/article";

export interface ArticleViewProps {
  article: Article;
  related: Article[];
}
