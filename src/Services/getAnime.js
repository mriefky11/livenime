import axios from 'axios';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getTopAnime = async () => {
  try {
    await delay(1000);
    const res = await axios.get('https://api.jikan.moe/v4/top/anime');
    return res.data.data;
  } catch (err) {
    console.error('error fetching data:', err);
    return [];
  }
};

export const getPopularAnime = async () => {
  try {
    await delay(3000);
    const res = await axios.get(
      'https://api.jikan.moe/v4/top/anime?filter=favorite&limit=5'
    );
    return res.data.data;
  } catch (err) {
    console.error('error fetching data:', err);
    return [];
  }
};
