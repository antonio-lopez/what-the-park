import Image from "next/image";
import { Card } from "./card";

interface ImageCardProps {
  image: string;
}

const ImageCardPrimary = ({ image }: ImageCardProps) => {
  return (
    <Card className="relative h-[20.625rem] w-[22.3125rem] lg:h-[25rem] lg:w-[28.125rem]">
      <Image
        src={image}
        alt="sdfs"
        fill={true}
        className="object-cover"
        loading="lazy"
      />
    </Card>
  );
};

export default ImageCardPrimary;
