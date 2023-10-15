import { getTrending } from '../data/giphy.js';

export const loadTrending = async (limit,offset) => {
    const result = await getTrending(limit,offset);
    return result;
};

export const loadSearchMovies = (searchTerm = '') => {
    return searchMovies(searchTerm);
};
