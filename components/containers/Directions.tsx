// https://res.cloudinary.com/dloisor1x/image/upload/v1699737761/what-the-park/joey-csunyo-NwGMe-NuDm0-unsplash_vtgosa.webp

import Image from "next/image";
import { Heading } from "../ui/Heading";
import { FaMapMarkedAlt } from "react-icons/fa";

const Directions = () => {
  return (
    <div className="layout mb-20">
      <div className="relative h-[37.5rem] w-full">
        <Image
          src="https://res.cloudinary.com/dloisor1x/image/upload/v1699737761/what-the-park/joey-csunyo-NwGMe-NuDm0-unsplash_vtgosa.webp"
          alt="united states map"
          fill={true}
          className="object-cover"
        />
        <div className="absolute inset-0 h-full w-full bg-foreground/30"></div>
        <div className="absolute flex h-full w-full flex-col items-center justify-center space-y-3 text-center text-backgroundPrimary">
          <Heading variant={"default"}>Know Where You’re Going</Heading>
          <p className="w-full px-3 md:w-[36.25rem] md:px-0">
            View directions, including driving routes, public transportation
            options, and GPS coordinates, to easily navigate your way to the
            national park, ensuring a seamless and stress-free journey to your
            destination
          </p>
          <FaMapMarkedAlt className="h-10 w-10" />
        </div>
      </div>
    </div>
  );
};

export default Directions;
