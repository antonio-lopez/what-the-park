import ParkCardPrimary from "../ui/ParkCardPrimary";

const exploreParks = [
  {
    title: "Grand Canyon National Park",
    image:
      "https://res.cloudinary.com/dloisor1x/image/upload/v1699491028/what-the-park/1_vuqnm8.webp",
  },
  {
    title: "Yellowstone National Park",
    image:
      "https://res.cloudinary.com/dloisor1x/image/upload/v1699491033/what-the-park/2_n9m5ir.webp",
  },
  {
    title: "Yosemite National Park",
    image:
      "https://res.cloudinary.com/dloisor1x/image/upload/v1699491029/what-the-park/3_hpppbe.webp",
  },
  {
    title: "Zion National Park",
    image:
      "https://res.cloudinary.com/dloisor1x/image/upload/v1699491028/what-the-park/4_dfardy.webp",
  },
];

const ExploreParks = () => {
  return exploreParks.map((park) => (
    <ParkCardPrimary key={park.title} image={park.image} title={park.title} />
  ));
};

export default ExploreParks;
