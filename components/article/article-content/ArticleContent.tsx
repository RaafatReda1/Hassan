import type { ArticleContentProps } from "./types";

export function ArticleContent({ content }: ArticleContentProps) {
  return (
    <div className="prose prose-zinc max-w-none text-base leading-relaxed dark:prose-invert">
      <p>{content}</p>
    </div>
  );
}
