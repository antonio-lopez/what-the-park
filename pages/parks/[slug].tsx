import { NextApiResponse } from "next";
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
        images={parks[1].images}
        fullName={parks[1].fullName}
        contacts={parks[1].contacts}
        address={parks[1].addresses}
      />
      <GeneralInfo
        images={parks[1].images}
        description={parks[1].description}
        weatherInfo={parks[1].weatherInfo}
      />
      <MoreInfo
        activities={parks[1].activities}
        topics={parks[1].topics}
        entranceFees={parks[1].entranceFees}
      />
      <Route
        directionsInfo={parks[1].directionsInfo}
        directionsUrl={parks[1].directionsUrl}
        latitude={parks[1].latitude}
        longitude={parks[1].longitude}
        latLong={parks[1].latLong}
        addresses={parks[1].addresses}
      />
      <Footer />
    </>
  );
};

export default Park;

export async function getServerSideProps({ res }: { res: NextApiResponse }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=7200",
  );
  const data = await fetch(
    `https://developer.nps.gov/api/v1/parks?limit=3&api_key=YOYeLTZhyVLHKEn3uhgiGFCswEcdLSmmK632Pocw`,
  );
  const parks = await data.json();

  return { props: { parks: parks.data } };
}
