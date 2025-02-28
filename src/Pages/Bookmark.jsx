import Navbar from '../Components/Fragments/Navbar';

const BookmarkPage = () => {
  return (
    <div>
      <Navbar />
      <div className='flex flex-col justify-center items-center mt-10'>
        <h1 className='text-3xl font-bold text-sky-500'>Bookmark</h1>
        <div className='w-4/6 flex flex-wrap justify-center mt-5'></div>
      </div>
    </div>
  );
};

export default BookmarkPage;
