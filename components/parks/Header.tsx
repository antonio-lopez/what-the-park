import Navbar from "@/components/ui/Navbar";
import Image from "next/image";
import { Images, Contact, Address } from "@/lib/interface";
import { EmailCard, PhoneCard, LocationCard } from "../ui/ParkInfoCard";
import { FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

interface HeaderProps {
  images: Images[];
  fullName: string;
  contacts: Contact;
  address: Address[];
}

const Header = ({ images, fullName, contacts, address }: HeaderProps) => {
  const phoneNumber = contacts.phoneNumbers[0]?.phoneNumber.replace(
    /^(\d{3})(\d{3})(\d{4})/,
    "$1-$2-$3",
  );
  const emailAddress = contacts.emailAddresses[0].emailAddress;
  const city = address[0].city;
  const stateCode = address[0].stateCode;

  return (
    <header className="h-fallback-screen relative w-full 2xl:h-[43.75rem]">
      <Image
        src={images[0].url}
        alt={images[0].altText}
        fill={true}
        className="object-cover"
        priority={true}
      />
      <div className="absolute inset-0 h-full w-full bg-foreground/30"></div>
      <Navbar />
      <div className="absolute mt-[3.75rem] flex w-full flex-col items-center space-y-3 pt-20 lg:pt-32">
        <div className="layout">
          <h1 className="mb-10 text-center lg:mb-20">{fullName}</h1>
          <div className="grid grid-cols-1 gap-y-2 md:gap-x-5 md:px-28 lg:grid-cols-3 lg:px-12">
            <LocationCard
              icon={<FaMapMarkedAlt className="h-7 w-7" />}
              city={city}
              stateCode={stateCode}
            />
            <PhoneCard
              icon={<FaPhoneAlt className="h-7 w-7" />}
              phoneNumber={phoneNumber}
            />
            <EmailCard
              icon={<AiOutlineMail className="h-7 w-7" />}
              emailAddress={emailAddress}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
