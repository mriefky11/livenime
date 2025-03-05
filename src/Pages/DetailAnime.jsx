import Navbar from '../Components/Fragments/Navbar';
import Badge from '../Components/Elements/Bagde';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {getDetailAnime} from '../Services/getAnime';

const DetailAnime = () => {
  const {id} = useParams();
  const [detailAnime, setDetailAnime] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDetailAnime(id);
      setDetailAnime(data);
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <Navbar />

      <div className='flex flex-col min-h-screen mt-10'>
        <div className='bg-white w-5/6 flex mx-auto rounded-2xl shadow-2xl p-10'>
          <div className='w-1/4 px-3'>
            <img
              src={detailAnime.images?.jpg?.large_image_url}
              className='w-60 rounded-lg'
            />
            <table>
              <tbody>
                <tr>
                  <td className='font-bold'>Rank</td>
                  <td className='p-2 text-sky-500 font-semibold'>
                    : #{detailAnime.rank || 'N/A'}
                  </td>
                </tr>
                <tr>
                  <td className='font-bold'>Score</td>
                  <td className='p-2'>
                    : {detailAnime.score || 'N/A'}/10 (
                    {detailAnime.scored_by?.toLocaleString()})
                  </td>
                </tr>
                <tr>
                  <td className='font-bold'>Season</td>
                  <td className='p-2'>
                    : {detailAnime.season || 'N/A'} {detailAnime.year || 'N/A'}
                  </td>
                </tr>
                <tr>
                  <td className='font-bold'>Release</td>
                  <td className='p-2'>
                    : {detailAnime.aired?.string || 'N/A'}
                  </td>
                </tr>
                <tr>
                  <td className='font-bold'>Status</td>
                  <td className='p-2'>: {detailAnime.status || 'N/A'}</td>
                </tr>
                <tr>
                  <td className='font-bold'>Studio</td>
                  <td className='p-2'>
                    : {detailAnime.studios?.[0]?.name || 'N/A'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='w-3/4 px-3'>
            <h1 className='text-3xl font-bold text-sky-500'>
              {detailAnime.title}
            </h1>
            <div className='my-5'>
              <table className='w-full'>
                <thead>
                  <tr>
                    <td className='p-2 w-1/6 text-center text-gray-500'>
                      Episode
                    </td>
                    <td className='p-2 w-1/6 text-center text-gray-500'>
                      Format
                    </td>
                    <td className='p-2 w-1/6 text-center text-gray-500'>
                      Source
                    </td>
                    <td className='p-2 w-1/6 text-center text-gray-500'>
                      Duration
                    </td>
                    <td className='p-2 w-2/6 text-center text-gray-500'>
                      Rating
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='p-2 w-1/6 text-center'>
                      {detailAnime.episodes || 'N/A'}
                    </td>
                    <td className='p-2 w-1/6 text-center'>
                      {detailAnime.type || 'N/A'}
                    </td>
                    <td className='p-2 w-1/6 text-center'>
                      {detailAnime.source || 'N/A'}
                    </td>
                    <td className='p-2 w-1/6 text-center'>
                      {detailAnime.duration || 'N/A'}
                    </td>
                    <td className='p-2 w-2/6 text-center'>
                      {detailAnime.rating || 'N/A'}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className='text-justify'>{detailAnime.synopsis}</p>
            <h2 className='text-xl font-semibold  mt-5'>Genre</h2>
            <ul className='flex mt-3 gap-2'>
              {detailAnime.genres?.map((genre, index) => (
                <Badge key={index}>{genre.name}</Badge>
              ))}
            </ul>
            <h2 className='text-xl font-semibold  mt-5'>Trailer</h2>
            <iframe
              className='w-3/4 aspect-video mt-3'
              src={detailAnime.trailer?.embed_url}
              title='YouTube video player'
              allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailAnime;
