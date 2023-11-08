import Container from "../Container";
import { Heading } from "../ui/Heading";
import { Button } from "../ui/button";

const Explore = () => {
  return (
    <section className="h-[43.75rem] w-full bg-backgroundSecondary py-20">
      <Container>
        <Heading variant={"default"}>
          Discover America&apos;s Story: The National Parks
        </Heading>
        <div className="flex w-full items-center justify-center py-10">
          <p className="text-center lg:w-3/4">
            Whether you&apos;re planning a family vacation, a solo backpacking
            expedition, or simply wish to learn more about the natural treasures
            that our nation has to offer, What The Park is your trusted
            companion on the journey to explore, appreciate, and protect these
            pristine and awe-inspiring landscapes.
          </p>
        </div>
        <div className="mb-10 flex w-full items-center justify-center">
          <Button>Explore Parks</Button>
        </div>
      </Container>
    </section>
  );
};

export default Explore;
