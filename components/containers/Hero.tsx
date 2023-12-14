import Image from "next/image";
import Navbar from "../ui/Navbar";

const Hero = () => {
  return (
    <header className="relative h-[100dvh] w-full 2xl:h-[43.75rem]">
      <Image
        src={
          "https://res.cloudinary.com/dloisor1x/image/upload/v1698705215/what-the-park/dave-herring-C_A13XI4PY8-unsplash_cvm1wy.webp"
        }
        alt="hero image of national park"
        fill={true}
        className="object-cover"
        priority={true}
      />
      <div className="absolute inset-0 h-full w-full bg-foreground/30"></div>
      <Navbar />
      <div className="absolute mt-[3.75rem] flex w-full flex-col items-center space-y-3 pt-44">
        <h1>Explore National Parks</h1>
        <span className="text-xl font-semibold text-backgroundPrimary">
          From Across The United States
        </span>
      </div>
    </header>
  );
};

export default Hero;
