import { API_KEY } from '../common/constants.js';

// Giphy API

/**
 * Fetch a list of trending GIFs from Giphy.
 *
 * @param {number} limit - The maximum number of GIFs to retrieve (default is 10).
 * @param {number} offset - The offset for pagination (default is 0).
 * @returns {Promise} A promise that resolves to the response data containing trending GIFs.
 */
export const getTrending = async (limit = 10, offset = 0) => {
    const response = await fetch(
        `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${limit}&offset=${offset}`
    );
    return await response.json();
};

/**
 * Search for GIFs on Giphy based on a query.
 *
 * @param {string} query - The search query.
 * @param {number} limit - The maximum number of GIFs to retrieve (default is 25).
 * @param {number} offset - The offset for pagination (default is 0).
 * @returns {Promise} A promise that resolves to the response data containing search results.
 */
export const searchGifs = async (query, limit = 25, offset = 0) => {
    const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=${limit}&offset=${offset}`
    );
    return await response.json();
};

/**
 * Get a single GIF by its ID from Giphy.
 *
 * @param {string} id - The ID of the GIF to retrieve.
 * @returns {Promise} A promise that resolves to the response data containing the GIF.
 */
export const getGifById = async (id) => {
    const response = await fetch(
        `https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`
    );
    return await response.json();
};

/**
 * Get multiple GIFs by their IDs from Giphy.
 *
 * @param {string[]} ids - An array of GIF IDs to retrieve.
 * @returns {Promise} A promise that resolves to the response data containing the GIFs.
 */
export const getGifsByIds = async (ids) => {
    const response = await fetch(
        `https://api.giphy.com/v1/gifs?api_key=${API_KEY}&ids=${ids.join(',')}`
    );
    return await response.json();
};

/**
 * Fetch a random GIF from Giphy.
 *
 * @returns {Promise} A promise that resolves to the response data containing a random GIF.
 */
export const getRandomGif = async () => {
    const response = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    );
    return await response.json();
};
