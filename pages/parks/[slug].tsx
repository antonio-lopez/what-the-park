import type { GetServerSidePropsContext } from "next";
import { ParksList } from "@/lib/interface";
import Header from "@/components/parks/Header";
import GeneralInfo from "@/components/containers/GeneralInfo";
import MoreInfo from "@/components/containers/MoreInfo";
import Route from "@/components/containers/Route";
import Footer from "@/components/ui/Footer";

const Park = ({ parks }: ParksList) => {
  return (
    <>
      <Header
        images={parks[0].images}
        fullName={parks[0].fullName}
        contacts={parks[0].contacts}
        address={parks[0].addresses}
      />
      <GeneralInfo
        images={parks[0].images}
        description={parks[0].description}
        weatherInfo={parks[0].weatherInfo}
      />
      <MoreInfo
        activities={parks[0].activities}
        topics={parks[0].topics}
        entranceFees={parks[0].entranceFees}
      />
      <Route
        directionsInfo={parks[0].directionsInfo}
        directionsUrl={parks[0].directionsUrl}
        latitude={parks[0].latitude}
        longitude={parks[0].longitude}
        latLong={parks[0].latLong}
        addresses={parks[0].addresses}
      />
      <Footer />
    </>
  );
};

export default Park;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const slug = context.query.slug;

  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=7200",
  );
  const data = await fetch(
    `https://developer.nps.gov/api/v1/parks?parkCode=${slug}&api_key=${process.env.NPS_API}`,
  );
  const parks = await data.json();

  return { props: { parks: parks.data } };
}
