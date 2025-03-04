import Navbar from '../Components/Fragments/Navbar';
import Badge from '../Components/Elements/Bagde';
const DetailAnime = () => {
  return (
    <div>
      <Navbar />
      <div className='flex flex-col min-h-screen mt-10'>
        <div className='bg-white w-5/6 flex mx-auto rounded-2xl shadow-2xl p-10'>
          <div className='w-1/4 px-3'>
            <img src='/img/onepiece.jpg' className='w-60 rounded-lg' />
            <table>
              <tbody>
                <tr>
                  <td className='font-bold'>Rank</td>
                  <td className='p-2 text-sky-500 font-semibold'>: #1</td>
                </tr>
                <tr>
                  <td className='font-bold'>Score</td>
                  <td className='p-2'>: 8.73 (1.418.151)</td>
                </tr>
                <tr>
                  <td className='font-bold'>Season</td>
                  <td className='p-2'>: Fall 1999</td>
                </tr>
                <tr>
                  <td className='font-bold'>Release</td>
                  <td className='p-2'>: Oct 20, 1999 to ?</td>
                </tr>
                <tr>
                  <td className='font-bold'>Status</td>
                  <td className='p-2'>: Currently Airing</td>
                </tr>
                <tr>
                  <td className='font-bold'>Studio</td>
                  <td className='p-2'>: Toei Animation</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='w-3/4 px-3'>
            <h1 className='text-3xl font-bold text-sky-500'>One Piece</h1>
            <div className='my-5'>
              <table className='w-ful'>
                <thead>
                  <tr className=''>
                    <th className='p-2 w-1/4 text-center'>Format</th>
                    <th className='p-2 w-1/4 text-center'>Source</th>
                    <th className='p-2 w-1/4 text-center'>Duration</th>
                    <th className='p-2 w-1/4 text-center'>Rating</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='p-2 w-1/4 text-center'>TV</td>
                    <td className='p-2 w-1/4 text-center'>Manga</td>
                    <td className='p-2 w-1/4 text-center'>24 min</td>
                    <td className='p-2 w-1/4 text-center'>
                      PG-13 - Teens 13 or older
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className='text-justify'>
              Barely surviving in a barrel after passing through a terrible
              whirlpool at sea, carefree Monkey D. Luffy ends up aboard a ship
              under attack by fearsome pirates. Despite being a naive-looking
              teenager, he is not to be underestimated. Unmatched in battle,
              Luffy is a pirate himself who resolutely pursues the coveted One
              Piece treasure and the King of the Pirates title that comes with
              it.\n\nThe late King of the Pirates, Gol D. Roger, stirred up the
              world before his death by disclosing the whereabouts of his hoard
              of riches and daring everyone to obtain it. Ever since then,
              countless powerful pirates have sailed dangerous seas for the
              prized One Piece only to never return. Although Luffy lacks a crew
              and a proper ship, he is endowed with a superhuman ability and an
              unbreakable spirit that make him not only a formidable adversary
              but also an inspiration to many.\n\nAs he faces numerous
              challenges with a big smile on his face, Luffy gathers
              one-of-a-kind companions to join him in his ambitious endeavor,
              together embracing perils and wonders on their once-in-a-lifetime
              adventure.\n\n[Written by MAL Rewrite]
            </p>
            <h2 className='text-xl font-semibold  mt-5'>Genre</h2>
            <ul className='flex mt-3 gap-2'>
              <Badge key='1'>Action</Badge>
              <Badge key='2'>Adventure</Badge>
              <Badge key='3'>Fantasy</Badge>
            </ul>
            <h2 className='text-xl font-semibold  mt-5'>Trailer</h2>
            <iframe
              className='w-3/4 aspect-video mt-3'
              src='https://www.youtube.com/embed/-tviZNY6CSw'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailAnime;
