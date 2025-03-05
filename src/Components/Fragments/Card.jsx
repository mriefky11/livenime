import {Link} from 'react-router-dom';
const Card = (props) => {
  const {children, id} = props;
  return (
    <div className='w-52 border border-none rounded-lg shadow-xl text-center my-3 py-2 mx-5 bg-white hover:opacity-75'>
      <Link to={`/anime/${id}`}>{children}</Link>
    </div>
  );
};

const Header = (props) => {
  const {title, type, source} = props;
  return (
    <div>
      <div className='font-bold text-blue-500'>{title.substring(0, 20)}...</div>
      <div className='text-sm mb-1'>
        ({type}) {source}
      </div>
    </div>
  );
};

const Body = (props) => {
  const {images} = props;
  return <img src={images} alt='' className='h-72 w-full' />;
};

const Footer = (props) => {
  const {score, studio} = props;
  return (
    <div>
      <div className='text-sm font-semibold mt-1 '>★ {score || '?'}/10</div>
      <div className='font-bold text-blue-500 text-sm'>{studio || '?'}</div>
    </div>
  );
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
