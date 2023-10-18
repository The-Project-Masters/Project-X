import { addFavorite, getFavorites, removeFavorite } from '../data/favorites.js';
import { qs, renderFavoriteStatus } from './helpers.js';


/**
 * Toggles the favorite status of a GIF.
 *
 * @param {string} gifId - The unique identifier of the GIF.
 */
export const toggleFavoriteStatus = (gifId) => {
  const favorites = getFavorites();

  if (favorites.includes(gifId)) {
    removeFavorite(gifId);
  } else {
    addFavorite(gifId);
  }

  // Update the favorite status indicator in the DOM.
  qs(`span[data-gif-id="${gifId}"]`).forEach(el => el.innerHTML = renderFavoriteStatus(gifId));
};