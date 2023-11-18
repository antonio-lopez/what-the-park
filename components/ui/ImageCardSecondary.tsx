import Image from "next/image";
import { Card } from "./card";

interface ImageCardProps {
  image: string;
  title: string;
}

const ImageCardSecondary = ({ image, title }: ImageCardProps) => {
  return (
    <Card className="relative h-[15.625rem] w-[22.3125rem] lg:h-[26.875rem] lg:w-[40.625rem]">
      <Image
        src={image}
        alt={title}
        fill={true}
        className="object-cover"
        loading="lazy"
        sizes="(max-width: 900px) 33vw, 100vw"
      />
    </Card>
  );
};

export default ImageCardSecondary;
