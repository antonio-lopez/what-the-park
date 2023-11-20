import { NextApiResponse } from "next";
import { ParksList } from "@/lib/interface";
import Header from "@/components/parks/Header";

const Park = ({ parks }: ParksList) => {
  console.log(parks);
  return (
    <Header
      images={parks[0].images}
      fullName={parks[0].fullName}
      contacts={parks[0].contacts}
      address={parks[0].addresses}
    />
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
