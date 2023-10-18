// Favorites Management
// This module handles the management of favorite GIFs by storing them in the local storage.

// Initialize the 'favorites' array by parsing stored favorites from local storage.
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

/**
 * Add a GIF to the list of favorite GIFs.
 * @param {string} gifId - The unique identifier of the GIF to add to favorites.
 */
export const addFavorite = (gifId) => {
  if (favorites.find(id => id === gifId)) {
    return;
  }

  favorites.push(gifId);

  localStorage.setItem('favorites', JSON.stringify(favorites));
};

/**
 * Remove a GIF from the list of favorite GIFs.
 * @param {string} gifId - The unique identifier of the GIF to remove from favorites.
 */
export const removeFavorite = (gifId) => {
  favorites = favorites.filter(id => id !== gifId);

  localStorage.setItem('favorites', JSON.stringify(favorites));
};

/**
 * Get the list of favorite GIFs.
 * @returns {string[]} An array of GIF IDs representing the user's favorite GIFs.
 */
export const getFavorites = () => [...favorites];