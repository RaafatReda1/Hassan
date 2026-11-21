import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import type { SeoMetaOptions } from "@/types/seo";

export function buildMetadata(opts: SeoMetaOptions): Metadata {
  const url = opts.slug ? `${siteConfig.url}/${opts.slug}` : siteConfig.url;
  const image = opts.image || siteConfig.defaultOgImage;

  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    robots: opts.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: siteConfig.name,
      images: [{ url: image, width: 1200, height: 630 }],
      locale: siteConfig.locale,
      type: opts.type || "website",
      ...(opts.publishedTime && { publishedTime: opts.publishedTime }),
      ...(opts.modifiedTime && { modifiedTime: opts.modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [image],
    },
  };
}
