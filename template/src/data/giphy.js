import { API_KEY } from '../common/constants.js';

// Giphy API
export const getTrending = async (limit = 10, offset = 0) => {
  const response = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=' + API_KEY + '&limit=' + limit + '&offset=' + offset);

  return await response.json();
};

export const searchGifs = async (query, limit = 25, offset = 0) => {
  const response = await fetch('https://api.giphy.com/v1/gifs/search?api_key=' + API_KEY + '&q=' + query + '&limit=' + limit + '&offset=' + offset);

  return await response.json();
};

export const getGifById = async (id) => {
  const response = await fetch('https://api.giphy.com/v1/gifs/' + id + '?api_key=' + API_KEY);

  return await response.json();
};

export const getGifsByIds = async (ids) => {
  const response = await fetch('https://api.giphy.com/v1/gifs?api_key=' + API_KEY + '&ids=' + ids.join(','));

  return await response.json();
};

export const getRandomGif = async () => {
  const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=' + API_KEY);

  return await response.json();
};


