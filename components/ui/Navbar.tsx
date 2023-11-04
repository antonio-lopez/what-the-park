import Image from "next/image";
import Container from "../Container";
import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="absolute h-[3.75rem] w-full bg-foreground/40">
      <Container>
        <div className="flex h-full items-center justify-between py-[0.625rem]">
          <Image
            src={
              "https://res.cloudinary.com/dloisor1x/image/upload/v1698797666/what-the-park/logo_fe9dob.webp"
            }
            alt="what the park logo"
            width={250}
            height={40}
            className="object-cover"
          />

          <ul className="hidden space-x-7 text-xl text-backgroundPrimary lg:flex">
            <li className="hover:underline hover:underline-offset-8">
              <Link href={"/"}>Home </Link>
            </li>
            <li className="hover:underline hover:underline-offset-8">
              <Link href={"/"}>About </Link>
            </li>
            <li className="hover:underline hover:underline-offset-8">
              <Link href={"/"}>Search </Link>
            </li>
          </ul>

          <BiMenuAltRight className="h-full w-10 text-backgroundPrimary lg:hidden" />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
