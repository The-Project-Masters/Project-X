import { addFavorite, getFavorites, removeFavorite } from '../data/favorites.js';
import { qs, renderFavoriteStatus } from './helpers.js';


export const toggleFavoriteStatus = (gifId) => {
  const favorites = getFavorites();

  if (favorites.includes(gifId)) {
    removeFavorite(gifId);
  } else {
    addFavorite(gifId);
  }

  qs(`span[data-gif-id="${gifId}"]`).forEach(el => el.innerHTML = renderFavoriteStatus(gifId));
};