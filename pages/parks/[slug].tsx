import type { GetServerSidePropsContext } from "next";
import { ParksList } from "@/lib/interface";
import Header from "@/components/parks/Header";
import GeneralInfo from "@/components/containers/GeneralInfo";
import MoreInfo from "@/components/containers/MoreInfo";
import Route from "@/components/containers/Route";
import Footer from "@/components/ui/Footer";

const Park = ({ parks }: ParksList) => {
  const {
    images,
    fullName,
    contacts,
    addresses,
    description,
    weatherInfo,
    activities,
    topics,
    entranceFees,
    directionsInfo,
    directionsUrl,
    latitude,
    longitude,
    latLong,
  } = parks[0];
  return (
    <>
      <Header
        images={images}
        fullName={fullName}
        contacts={contacts}
        address={addresses}
      />
      <GeneralInfo
        images={images}
        description={description}
        weatherInfo={weatherInfo}
      />
      <MoreInfo
        activities={activities}
        topics={topics}
        entranceFees={entranceFees}
      />
      <Route
        directionsInfo={directionsInfo}
        directionsUrl={directionsUrl}
        latitude={latitude}
        longitude={longitude}
        latLong={latLong}
        addresses={addresses}
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
