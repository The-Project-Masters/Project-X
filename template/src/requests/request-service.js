import { getTrending, searchGifs, getGifsByIds, getRandomGif, } from '../data/giphy.js';
import { getFavorites } from '../data/favorites.js';

export const loadTrending = async (limit, offset) => {
  const result = await getTrending(limit, offset);
  return result;
};

export const getSearchResults = async (query, limit, offset) => {
  const result = await searchGifs(query, limit, offset);
  return result;
};

export const loadHomeTrending = async () => {
  const result = await getTrending(10);

  return result;
};

export const loadHomeFavorites = async () => {
  const favorites = getFavorites();

  if (!favorites.length)
  {
    const randomGif = await getRandomGif();
    favorites.push(randomGif.data.id);
  }
  
  return await getGifsByIds(favorites);
};