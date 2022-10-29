import Image from 'next/image';

Image;
const about = () => {
  return (
    <section class='layout min-h-main flex flex-col items-center text-center'>
      <div class='py-8'>
        <h1 class='text-4xl font-bold'>About</h1>
        <div class='space-y-4 py-5'>
          <p>
            Inspired by
            <a class='text-red' href='https://airportcod.es/'>
              {' '}
              Airport Codes
            </a>
            , this website uses the
            <a
              class='text-red'
              href='https://www.nps.gov/subjects/developer/index.htm'
            >
              {' '}
              National Park Service’s API
            </a>{' '}
            (application programming interface) to fetch data from parks across
            the United States.
          </p>
          <p>
            Search for any park and access information such as address, phone
            number, email, and hours of operation.
          </p>
          <p>All photos are provided by the National Park Service.</p>
        </div>
      </div>
      <Image
        className='pt-10 pb-16'
        width={500}
        height={500}
        src='/images/NPS-Transparent-Logo.png'
        alt='National Park Service logo'
      />
    </section>
  );
};

export default about;
