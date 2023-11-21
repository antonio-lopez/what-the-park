import Image from "next/image";
import { Card } from "./card";

interface ImageCardProps {
  url: string;
  altText: string;
}

const ImageCardTertiary = ({ url, altText }: ImageCardProps) => {
  return (
    <Card className="relative h-[15.625rem] w-[22.3125rem] lg:h-[18.75rem] lg:w-[28.125rem]">
      <Image
        src={url}
        alt={altText}
        fill={true}
        className="object-cover"
        loading="lazy"
        sizes="(max-width: 900px) 33vw, 100vw"
      />
    </Card>
  );
};

export default ImageCardTertiary;
