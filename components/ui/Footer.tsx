import Image from "next/image";
import Container from "../Container";

const Footer = () => {
  return (
    <footer className="bg-primaryLight py-20 lg:py-10">
      <Container>
        <div className=" grid grid-cols-1 justify-items-center text-lg font-semibold text-backgroundPrimary lg:grid-cols-8 lg:justify-items-stretch">
          <div className="row-start-3 flex flex-col justify-between space-y-8 lg:col-span-2 lg:row-start-1 lg:space-y-0">
            <Image
              src={
                "https://res.cloudinary.com/dloisor1x/image/upload/v1698797666/what-the-park/logo_fe9dob.webp"
              }
              alt="what the park logo"
              width={250}
              height={40}
              style={{ width: "250px", height: "40px" }}
            />
            <p className="text-center lg:text-left">
              © Antonio Lopez {new Date().getFullYear()}
            </p>
          </div>
          <div className="flex w-full justify-between lg:col-span-2">
            <div className="flex flex-col space-y-8 lg:space-y-16">
              <p>Github</p>
              <p>Portfolio</p>
              <p>LinkedIn</p>
            </div>
            <div className="flex flex-col space-y-8 lg:space-y-16">
              <p>National Parks API</p>
              <p>National Park Service</p>
            </div>
          </div>
          <div className="relative my-10 justify-center lg:col-span-4 lg:my-0 lg:justify-self-end">
            <Image
              src={
                "https://res.cloudinary.com/dloisor1x/image/upload/v1699741446/what-the-park/NPS-Transparent-Logo_iosifv.webp"
              }
              alt="what the park logo"
              width={150}
              height={195.3}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
