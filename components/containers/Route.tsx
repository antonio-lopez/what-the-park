import { Address } from "@/lib/interface";
import Container from "../Container";
import { Heading } from "../ui/Heading";
import { useMemo } from "react";
import dynamic from "next/dynamic";

interface RouteProps {
  latitude: string;
  longitude: string;
  latLong: string;
  directionsInfo: string;
  directionsUrl: string;
  addresses: Address[];
}

const Route = ({
  latitude,
  longitude,
  latLong,
  directionsInfo,
  directionsUrl,
  addresses,
}: RouteProps) => {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/ui/Map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    [],
  );

  const address =
    addresses[0].line1 +
    " " +
    addresses[0]?.line2 +
    " " +
    addresses[0]?.line3 +
    addresses[0].city +
    " " +
    addresses[0].stateCode +
    " " +
    addresses[0].postalCode;

  return (
    <section className="py-20">
      <Container>
        <Heading className="mb-10 md:justify-start">Directions</Heading>
        <div className="flex flex-col space-y-10">
          <p>{directionsInfo}</p>
          <div className="flex flex-col space-y-1">
            <p>Address: {address}</p>
            <p>{latLong}</p>
            <span>
              <a
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
                href={directionsUrl}
              >
                More information
              </a>
            </span>
          </div>
          <Map latitude={latitude} longitude={longitude} address={address} />
        </div>
      </Container>
    </section>
  );
};

export default Route;
