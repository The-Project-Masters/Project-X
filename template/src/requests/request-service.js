import {
    getTrending,
    searchGifs,
    getGifsByIds,
    getRandomGif,
} from '../data/giphy.js';
import { getFavorites } from '../data/favorites.js';

/**
 * Loads trending GIFs from the Giphy API.
 *
 * @param {number} limit - The maximum number of GIFs to load.
 * @param {number} offset - The offset for fetching GIFs (pagination).
 * @returns {Promise} - A promise that resolves with the fetched GIFs.
 */
export const loadTrending = async (limit, offset) => {
    const result = await getTrending(limit, offset);
    return result;
};

/**
 * Gets search results based on a query from the Giphy API.
 *
 * @param {string} query - The search query for GIFs.
 * @param {number} limit - The maximum number of GIFs to retrieve.
 * @param {number} offset - The offset for fetching GIFs (pagination).
 * @returns {Promise} - A promise that resolves with the fetched search results.
 */
export const getSearchResults = async (query, limit, offset) => {
    const result = await searchGifs(query, limit, offset);
    return result;
};

/**
 * Loads trending GIFs for the home page.
 *
 * @returns {Promise} - A promise that resolves with the fetched GIFs.
 */
export const loadHomeTrending = async () => {
    const result = await getTrending(10);
    return result;
};

/**
 * Loads favorite GIFs for the home page and, if no favorites are found, adds a random GIF as the initial favorite.
 *
 * @returns {Promise} - A promise that resolves with the fetched favorite GIFs.
 */
export const loadHomeFavorites = async () => {
    const favorites = getFavorites();

    if (!favorites.length) {
        const randomGif = await getRandomGif();
        favorites.push(randomGif.data.id);
    }

    return await getGifsByIds(favorites);
};
