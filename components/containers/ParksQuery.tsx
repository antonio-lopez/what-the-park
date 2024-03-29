import ParkCardSeconday from "../ui/ParkCardSeconday";

const ParksQuery = ({ parks }: any) => {
  return (
    <section className="bg-backgroundSecondary py-20">
      <div className="layout">
        <div className="grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3">
          {parks.length > 0 ? (
            parks.map((park: any) => (
              <ParkCardSeconday
                key={park.parkCode}
                name={park.name}
                addresses={park.addresses}
                images={park.images}
                parkCode={park.parkCode}
              />
            ))
          ) : (
            <p className="col-span-3 items-center text-xl font-semibold lg:text-2xl">
              No search results found
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ParksQuery;
