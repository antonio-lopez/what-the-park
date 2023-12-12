import Image from "next/image";
import Container from "../Container";
import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";
import { useState, lazy, Suspense } from "react";
import { Button } from "./button";

const LazyLoadMobileNavbar = lazy(() => import("./MobileNavbar"));

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((open) => !open);
  };

  return (
    <nav className="absolute h-[3.75rem] w-full bg-foreground/40">
      <Container>
        <div className="flex h-full items-center justify-between py-[0.625rem]">
          <Link href={"/"}>
            <Image
              src={
                "https://res.cloudinary.com/dloisor1x/image/upload/v1698797666/what-the-park/logo_fe9dob.webp"
              }
              alt="what the park logo"
              width={250}
              height={40}
              style={{ width: "250px", height: "40px" }}
            />
          </Link>
          <ul className="hidden space-x-7 text-xl text-backgroundPrimary md:flex">
            <li className="hover:underline hover:underline-offset-8">
              <Link href={"/"}>Home </Link>
            </li>
            <li className="hover:underline hover:underline-offset-8">
              <Link href={"/about"}>About </Link>
            </li>
            <li className="hover:underline hover:underline-offset-8">
              <Link href={"/parks"}>Search </Link>
            </li>
          </ul>

          <Button
            onClick={handleClick}
            variant="secondary"
            size="icon"
            className="md:hidden"
            aria-label="menu open"
          >
            <BiMenuAltRight className="h-10 w-10 text-backgroundPrimary transition-all md:hidden" />
          </Button>
        </div>
      </Container>

      <Suspense fallback={null}>
        <LazyLoadMobileNavbar onClick={handleClick} isOpen={isOpen} />
      </Suspense>
    </nav>
  );
};

export default Navbar;
