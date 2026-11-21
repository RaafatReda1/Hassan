import Image from "next/image";
import type { OptimizedImageProps } from "./types";

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  className = "",
}: OptimizedImageProps) {
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`object-cover ${className}`}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width || 600}
      height={height || 400}
      priority={priority}
      sizes={sizes}
      className={className}
    />
  );
}
