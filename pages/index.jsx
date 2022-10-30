import Card from '../components/Card';

const Home = ({ data }) => {
  const parks = data.data;
  return (
    <section className='min-h-main bg-softWhite'>
      <div className='layout'>
        <div className='grid grid-cols-2 gap-3 py-7'>
          {parks.map((park) => (
            <Card key={park.id} park={park} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const getServerSideProps = async () => {
  try {
    const response = await fetch(
      `https://developer.nps.gov/api/v1/parks?limit=5&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const data = await response.json();
    return { props: { data } };
  } catch (err) {
    return err;
  }
};

export default Home;
