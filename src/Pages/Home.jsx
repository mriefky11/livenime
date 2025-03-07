import Navbar from '../Components/Fragments/Navbar';
import Card from '../Components/Fragments/Card';
import Tabs from '../Components/Fragments/Tabs';
import Badge from '../Components/Elements/Bagde';
// import {getTopAnime, getPopularAnime} from '../../Services/getAnime';
import {getPopularAnime, getTopAnime} from '../Services/getAnime';
import {useEffect, useState} from 'react';
// import Footer from '../Components/Fragments/Footer';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Pagination} from 'swiper/modules';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Link} from 'react-router-dom';

const HomePage = () => {
  const [topAnime, setTopAnime] = useState([]);
  const [popularAnime, setPopularAnime] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTopAnime();
      setTopAnime(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPopularAnime();
      setPopularAnime(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{clickable: true}}
        navigation={false}
        modules={[Autoplay, Pagination]}
        className='mySwiper h-130 w-5/6 shadow-2xl rounded-b-xl'
      >
        {popularAnime.map((item, index) => (
          <SwiperSlide key={item.mal_id}>
            <div className='relative w-full h-full flex items-center justify-start text-white p-6'>
              <img
                src={item.trailer?.images?.large_image_url}
                alt={item.title}
                className='absolute top-0 left-0 w-full h-full object-cover'
              />

              <div className='absolute inset-0 bg-black opacity-70'></div>

              <div className='relative z-10 text-justify w-full lg:w-4/6 lg:ms-10'>
                <span className=' bg-sky-500 text-white px-3 py-1 rounded-lg font-bold text-lg'>
                  #{index + 1} Favorited Anime
                </span>
                <h1 className='text-5xl font-bold mt-4 text-start'>
                  {item.title}
                </h1>
                <h4 className='text-xl mt-2'>({item.title_japanese})</h4>
                <div className='flex justify-start gap-2 my-5 text-sm'>
                  {item.genres.map((g, index) => (
                    <Badge key={index}>{g.name}</Badge>
                  ))}
                </div>
                <p className='text-sm mt-2'>
                  {item.synopsis.slice(0, 300)}...{' '}
                  <Link
                    to={`${item.mal_id}`}
                    className='text-sky-500 font-bold'
                  >
                    Read More
                  </Link>
                </p>
                <div className='flex gap-7 mt-5'>
                  <p className='font-bold'>
                    <FontAwesomeIcon
                      icon={faStar}
                      className='text-sky-500 text-xl me-2'
                    />
                    {item.score} ({item.scored_by.toLocaleString('id-ID')}{' '}
                    Ratings)
                  </p>
                  <p className='font-bold'>
                    <FontAwesomeIcon
                      icon={faHeart}
                      className='text-sky-500 text-xl me-2'
                    />
                    {item.favorites.toLocaleString('id-ID')}{' '}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold text-sky-500 mt-10 border-b-3 border-sky-500'>
          Top Anime
        </h1>
        <div className='w-5/6 mt-5'>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className='mySwiper'
          >
            {topAnime.map((item) => (
              <SwiperSlide key={item.mal_id}>
                <Card id={item.mal_id}>
                  <Card.Header
                    title={item.title}
                    type={item.type}
                    source={item.source}
                  />
                  <Card.Body images={item.images.jpg.large_image_url} />
                  <Card.Footer
                    score={item.score}
                    studio={item.studios[0].name}
                  />
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <Tabs />
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
