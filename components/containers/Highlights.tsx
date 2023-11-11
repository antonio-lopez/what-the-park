import Container from "../Container";
import { Heading } from "../ui/Heading";
import ImageCardPrimary from "../ui/ImageCardPrimary";
import InfoCard from "../ui/InfoCard";

import { AiFillInfoCircle } from "react-icons/ai";
import { FaSun, FaWalking } from "react-icons/fa";

const highlightsCardInfo = [
  {
    image:
      "https://res.cloudinary.com/dloisor1x/image/upload/v1699583502/what-the-park/roger-erdvig-GPDqaWEsTxU-unsplash_la8bh1.webp",
    title: "Information",
    text: "General information, such as the hours of operation, entrance fees, and any associated costs, for national parks, providing visitors with essential details to plan their visits effectively and make informed decisions regarding their park experience.",
    icon: <AiFillInfoCircle className="h-10 w-10" />,
  },
  {
    image:
      "https://res.cloudinary.com/dloisor1x/image/upload/v1699583502/what-the-park/andrew-ling-Tm9cK8E58qA-unsplash_vnal1y.webp",
    title: "Weather",
    text: "Get a head start by checking out the weather conditions at the national park, allowing you to pack smart and guarantee a secure, and delightful outdoor experience.",
    icon: <FaSun className="h-10 w-10" />,
  },
  {
    image:
      "https://res.cloudinary.com/dloisor1x/image/upload/v1699583502/what-the-park/chris-IZ9mqQmTiAw-unsplash_covtsg.webp",
    title: "Activities",
    text: "Explore a diverse array of activities and experiences that the national park has in store for visitors, ranging from hiking, camping, wildlife observation, and educational programs to immerse yourself in the natural beauty and cultural heritage of the park.",
    icon: <FaWalking className="h-10 w-10" />,
  },
];

const Highlights = () => {
  return (
    <div className="py-20">
      <Container>
        <Heading variant={"default"}>Mastering Park Preparation</Heading>
        <div className="flex w-full items-center justify-center py-10">
          <div className="grid grid-cols-1 place-items-center gap-5 md:grid-cols-2 md:gap-12">
            <ImageCardPrimary image={highlightsCardInfo[0].image} />
            <InfoCard
              icon={highlightsCardInfo[0].icon}
              text={highlightsCardInfo[0].text}
              title={highlightsCardInfo[0].title}
            />
            <ImageCardPrimary image={highlightsCardInfo[1].image} />
            <div className="md:row-start-2">
              <InfoCard
                icon={highlightsCardInfo[1].icon}
                text={highlightsCardInfo[1].text}
                title={highlightsCardInfo[1].title}
              />
            </div>
            <ImageCardPrimary image={highlightsCardInfo[2].image} />
            <InfoCard
              icon={highlightsCardInfo[2].icon}
              text={highlightsCardInfo[2].text}
              title={highlightsCardInfo[2].title}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Highlights;
