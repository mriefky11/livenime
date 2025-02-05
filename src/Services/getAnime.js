import axios from 'axios';

export const getTopAnime = async () => {
  try {
    const res = await axios.get('https://api.jikan.moe/v4/top/anime');
    return res.data.data;
  } catch (err) {
    console.error('error fetching data:', err);
    return [];
  }
};
