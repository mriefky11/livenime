import {useEffect, useState} from 'react';
import {getAnimeSeason} from '../../Services/getAnime';
import Card from './Card';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [animeList, setAnimelist] = useState([]);
  const [loading, setLoading] = useState(false);

  const tabs = [
    {title: 'Winter 2025', season: 'winter', year: 2025},
    {title: 'Spring 2025', season: 'spring', year: 2025},
    {title: 'Summer 2025', season: 'summer', year: 2025},
    {title: 'Fall 2025', season: 'fall', year: 2025},
  ];

  useEffect(() => {
    const getAnimeData = async () => {
      setLoading(true);
      const {season, year} = tabs[activeTab];
      const data = await getAnimeSeason(season, year);
      setAnimelist(data);
      setLoading(false);
    };
    getAnimeData();
  }, [activeTab]);

  return (
    <div className=' w-5/6 mx-auto mt-10'>
      {/* Tab Navigation */}
      <div className='flex border-b'>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex-1 py-2 text-center text-lg font-medium 
              ${
                activeTab === index
                  ? 'border-b-4 border-blue-500 text-blue-500'
                  : 'text-gray-600'
              }
              transition-all duration-300`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className='mt-2'>
        {loading ? (
          <p className='text-gray-500'>Loading...</p>
        ) : animeList.length > 0 ? (
          <div className='flex flex-wrap justify-center items-center'>
            {animeList.map((item) => (
              <Card key={item.mal_id} id={item.mal_id}>
                <Card.Header
                  title={item.title}
                  type={item.type}
                  source={item.source}
                />
                <Card.Body images={item.images.jpg.large_image_url} />
                <Card.Footer
                  score={item.score}
                  studio={
                    Array.isArray(item.studios) && item.studios.length > 0
                      ? item.studios[0].name
                      : 'Unknown Studio'
                  }
                />
              </Card>
            ))}
          </div>
        ) : (
          <p className='text-gray-500'>Tidak ada data tersedia.</p>
        )}
      </div>
    </div>
  );
};

export default Tabs;
