import Image from "next/image";
import { Card } from "./card";
import { Address, Images } from "@/lib/interface";

interface ParkProps {
  parkCode: String;
  addresses: Address[];
  images: Images[];
  name: string;
}

const ParkCardSeconday = ({ parkCode, addresses, images, name }: ParkProps) => {
  const location = addresses[0].city + ", " + addresses[0].stateCode;

  return (
    <Card className="h-[23.625rem] w-full rounded-md bg-white p-6 lg:h-[23.625rem] lg:w-[24.5625rem]">
      <div className="relative mb-6 h-[15.625rem] w-full">
        <Image
          src={images[0]?.url}
          alt={images[0]?.altText}
          fill={true}
          className="rounded-md object-cover"
          sizes="(max-width: 900px) 33vw, 100vw"
        />
      </div>
      <div>
        <p className="mb-2 text-lg font-semibold">{name}</p>
        <p className="text-sm font-medium text-slate-500">{location}</p>
      </div>
    </Card>
  );
};

export default ParkCardSeconday;
