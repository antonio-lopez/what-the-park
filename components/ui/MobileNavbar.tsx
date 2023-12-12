import Image from "next/image";
import React from "react";
import { Button } from "./button";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

interface ButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const MobileNavbar = ({ onClick, isOpen }: ButtonProps) => {
  return (
    <div
      className={`${
        isOpen ? "translate-y-0" : "-translate-y-full"
      } fixed left-0 right-0 top-0 z-20 min-h-screen bg-primaryLight text-backgroundPrimary drop-shadow-md transition-all duration-500 lg:hidden`}
    >
      <div className="layout py-[0.625rem] font-bold">
        <div className="mb-20 flex justify-between">
          <Image
            src={
              "https://res.cloudinary.com/dloisor1x/image/upload/v1698797666/what-the-park/logo_fe9dob.webp"
            }
            alt="what the park logo"
            width={250}
            height={40}
            style={{ width: "250px", height: "40px" }}
          />
          <Button
            onClick={onClick}
            variant="secondary"
            size="icon"
            className="md:hidden"
          >
            <IoMdClose className="h-10 w-10 text-backgroundPrimary transition-all md:hidden" />
          </Button>
        </div>
        <div className="flex flex-col items-center justify-center space-y-10 text-xl">
          <Link href="/">Home </Link>
          <Link href="/about">About </Link>
          <Link href="/parks">Search </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
