import Image from "next/image";

interface HeroAvatarProps {
  imgUrl?: string;
  name: string;
}

export function HeroAvatar({ imgUrl, name }: HeroAvatarProps) {
  const imageSrc = imgUrl || "/HeroImg.png";

  return (
    <div className="relative flex items-center justify-center">
      <div className="relative aspect-[3/4] w-72 sm:w-80 md:w-96 lg:w-[520px]">
        <Image
          src={imageSrc}
          alt={`صورة الأمين العام ${name}`}
          fill
          priority
          sizes="(max-width: 640px) 320px, (max-width: 768px) 384px, (max-width: 1024px) 460px, (max-width: 1280px) 600px, 700px"
          className="object-contain"
        />
      </div>
    </div>
  );
}
