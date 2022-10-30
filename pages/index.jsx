import Card from '../components/Card';

const Home = ({ parks }) => {
  console.log(parks.data);
  return (
    <section className='min-h-main bg-softWhite'>
      <div className='layout'>
        <div className='grid grid-cols-2 gap-3 py-7'>
          {parks.data.map((park) => (
            <Card key={park.id} park={park} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch(
    `https://developer.nps.gov/api/v1/parks?limit=2&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const parks = await response.json();
  return { props: { parks } };
};

export default Home;
