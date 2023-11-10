import Image from "next/image";
import { Card } from "./card";

const exploreParks = [
  {
    title: "Grand Canyon National Park",
    src: "https://res.cloudinary.com/dloisor1x/image/upload/v1699491028/what-the-park/1_vuqnm8.webp",
  },
  {
    title: "Yellowstone National Park",
    src: "https://res.cloudinary.com/dloisor1x/image/upload/v1699491033/what-the-park/2_n9m5ir.webp",
  },
  {
    title: "Yosemite National Park",
    src: "https://res.cloudinary.com/dloisor1x/image/upload/v1699491029/what-the-park/3_hpppbe.webp",
  },
  {
    title: "Zion National Park",
    src: "https://res.cloudinary.com/dloisor1x/image/upload/v1699491028/what-the-park/4_dfardy.webp",
  },
];

const ParkCardPrimary = () => {
  return exploreParks.map((park, key) => (
    <Card key={key} className="relative h-[15rem] w-full lg:h-[23.125rem]">
      <Image
        src={park.src}
        alt={park.title}
        fill={true}
        className="object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 h-full w-full bg-foreground/30"></div>
      <div className="absolute flex h-full w-full items-center justify-center text-backgroundPrimary">
        <div className="flex h-[4.375rem] w-[7.245625rem] items-center justify-center p-1 text-center ring ring-backgroundPrimary md:w-[10.75rem]">
          <p className="font-semibold lg:text-xl lg:font-bold">{park.title}</p>
        </div>
      </div>
    </Card>
  ));
};

export default ParkCardPrimary;
