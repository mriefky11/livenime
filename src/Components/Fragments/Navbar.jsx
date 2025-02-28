import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-36 py-3 bg-sky-500 text-white'>
      <div className='font-bold'>LiveNime</div>
      <div className='font-semibold text-sm'>
        <ul className='flex items-center '>
          <li className='me-5'>
            <Link to='/anime' className='hover:text-white/80'>
              Anime
            </Link>
          </li>
          <li className='me-5'>
            <Link to='/genre' className='hover:text-white/80'>
              Genre
            </Link>
          </li>
          <li className='me-5'>
            <Link to='/bookmark' className='hover:text-white/80'>
              Bookmark
            </Link>
          </li>
          <li className=''>
            <Link to='/search' className='hover:text-white/80'>
              Search
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
