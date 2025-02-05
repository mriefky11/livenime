import Navbar from '../Components/Fragments/Navbar';
import Card from '../Components/Fragments/Card';
import {getTopAnime} from '../Services/GetAnime';
import {useEffect, useState} from 'react';
// import Footer from '../Components/Fragments/Footer';
const HomePage = () => {
  const [topAnime, setTopAnime] = useState([]);

  // useEffect(() => {
  //   getTopAnime((data) => {
  //     setTopAnime(data);
  //   });
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTopAnime();
      setTopAnime(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className='flex flex-col justify-start items-center'>
        <h1 className='w-4/6 text-start text-3xl font-bold text-sky-500 mt-10 sm:text-center'>
          Top Anime
        </h1>
        <div className='w-4/6 flex flex-wrap justify-center mt-5'>
          {topAnime.map((item) => (
            <Card key={item.mal_id}>
              <Card.Header
                title={item.title}
                type={item.type}
                source={item.source}
              />
              <Card.Body images={item.images.jpg.large_image_url} />
              <Card.Footer score={item.score} studio={item.studios[0].name} />
            </Card>
          ))}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
