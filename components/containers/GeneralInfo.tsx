import Container from "../Container";
import { Heading } from "../ui/Heading";
import ImageCardTertiary from "../ui/ImageCardTertiary";
import { Images } from "@/lib/interface";

interface GeneralInfoProps {
  description: string;
  weatherInfo?: string;
  images: Images[];
}

const GeneralInfo = ({
  description,
  weatherInfo,
  images,
}: GeneralInfoProps) => {
  const parkImagePrimary = images[1];
  const parkImageSecondary = images[2];

  return (
    <section className="py-20">
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[28.125rem_,1fr]">
          <ImageCardTertiary
            url={parkImagePrimary.url}
            altText={parkImagePrimary.altText}
          />
          <div>
            <Heading className="mb-3 justify-start">About</Heading>
            <p>{description}</p>
          </div>
          <ImageCardTertiary
            url={parkImageSecondary.url}
            altText={parkImageSecondary.altText}
          />
          <div>
            <Heading className="mb-3 justify-start">Weather</Heading>
            <p>{weatherInfo}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GeneralInfo;
