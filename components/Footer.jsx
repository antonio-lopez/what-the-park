import { FaGithub, FaLinkedin, FaGlobeAmericas } from 'react-icons/fa/index';

const Footer = () => {
  return (
    <footer className='bg-msuGreen py-5'>
      <div className='flex flex-col items-center text-sm text-softWhite'>
        <div>
          <span>API by </span>
          <a
            className='text-red'
            href='https://www.nps.gov/subjects/developer/index.htm'
          >
            National Parks Service
          </a>
        </div>
        <span>Designed by Antonio Lopez</span>
        <div className='flex space-x-4 pt-5'>
          <a
            className='hover:text-sheenGreen'
            href='https://github.com/antonio-lopez'
            aria-label='Antonio Lopez github profile'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub className='h-7 w-7' />
          </a>
          <a
            className='hover:text-sheenGreen'
            href='https://www.linkedin.com/in/antoniolopez6/'
            aria-label='Antonio Lopez linkedin profile'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin className='h-7 w-7' />
          </a>
          <a
            className='hover:text-sheenGreen'
            href='https://www.antoniolopez.me/'
            aria-label='Antonio Lopez website'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGlobeAmericas className='h-7 w-7' />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
