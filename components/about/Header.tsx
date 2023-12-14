import Navbar from "@/components/ui/Navbar";
import Image from "next/image";

const Header = () => {
  return (
    <header className="h-fallback-screen relative w-full 2xl:h-[43.75rem]">
      <Image
        src={
          "https://res.cloudinary.com/dloisor1x/image/upload/v1700337540/what-the-park/joshua-gresham-hb2nxexIy2k-unsplash_ixqyxr.webp"
        }
        alt="national park mountains"
        fill={true}
        className="object-cover"
        priority={true}
      />
      <div className="absolute inset-0 h-full w-full bg-foreground/30"></div>
      <Navbar />
      <div className="absolute mt-[3.75rem] flex w-full flex-col items-center space-y-3 pt-44">
        <h1>About</h1>
      </div>
    </header>
  );
};

export default Header;
