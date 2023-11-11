import Image from "next/image";
import { Card } from "./card";

interface ParkProps {
  title: string;
  image: string;
}

const ParkCardPrimary = ({ title, image }: ParkProps) => {
  return (
    <Card className="relative h-[15rem] w-full lg:h-[23.125rem]">
      <Image
        src={image}
        alt={title}
        fill={true}
        className="object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 h-full w-full bg-foreground/30"></div>
      <div className="absolute flex h-full w-full items-center justify-center text-backgroundPrimary">
        <div className="flex h-[4.375rem] w-[7.245625rem] items-center justify-center p-1 text-center ring ring-backgroundPrimary md:w-[10.75rem]">
          <p className="font-semibold lg:text-xl lg:font-bold">{title}</p>
        </div>
      </div>
    </Card>
  );
};

export default ParkCardPrimary;
