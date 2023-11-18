import Explore from "@/components/containers/Explore";
import Hero from "@/components/containers/Hero";
import Highlights from "@/components/containers/Highlights";
import Directions from "@/components/containers/Directions";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Explore />
      <Highlights />
      <Directions />
      <Footer />
    </>
  );
}
