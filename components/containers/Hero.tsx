import Image from "next/image";
import Navbar from "../ui/Navbar";

const Hero = () => {
  return (
    <header className="relative h-[43.75rem] w-full">
      <Image
        src={
          "https://res.cloudinary.com/dloisor1x/image/upload/v1698705215/what-the-park/dave-herring-C_A13XI4PY8-unsplash_cvm1wy.webp"
        }
        alt=""
        fill={true}
        objectFit="cover"
      />
      <div className="absolute inset-0 h-full w-full bg-foreground/30"></div>
      <Navbar />
    </header>
  );
};

export default Hero;
