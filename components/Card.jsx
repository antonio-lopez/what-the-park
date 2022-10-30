import Image from 'next/image';
import { BsBoxArrowUpRight } from 'react-icons/bs/index';

const Card = ({ park }) => {
  return (
    <div className='relative shadow-2xl'>
      {/* text box */}
      <div className='absolute bottom-0 w-full p-1 text-xs'>
        <div className='h-14 bg-white p-0.5'>
          <div className='flex h-full flex-col justify-between'>
            <h1>{park.name}</h1>
            <div className='flex justify-end'>
              <BsBoxArrowUpRight className='h-3 w-3' />
            </div>
          </div>
        </div>
      </div>
      {/* image */}
      <Image
        // className='h-40 w-full object-cover'
        src={park.images[0].url}
        alt='park cover'
        width={500}
        height={500}
      />
    </div>
  );
};

export default Card;
