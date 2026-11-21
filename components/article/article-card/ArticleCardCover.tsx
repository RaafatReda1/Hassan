import Link from "next/link";
import { OptimizedImage } from "@/components/ui/optimized-image/OptimizedImage";

interface ArticleCardCoverProps {
  slug: string;
  coverUrl: string;
  title: string;
}

export function ArticleCardCover({ slug, coverUrl, title }: ArticleCardCoverProps) {
  return (
    <Link
      href={`/articles/${slug}`}
      className="group relative block aspect-[16/9] overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800"
      style={{ position: "relative", width: "100%", aspectRatio: "16 / 9" }}
    >
      <OptimizedImage
        src={coverUrl}
        alt={`Cover image for: ${title}`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="transition-transform duration-300 group-hover:scale-105"
      />
    </Link>
  );
}
