import {
    getCategories,
    getMoviesGeneralInfo,
    getMovieById,
    getCategory,
    searchMovies,
} from '../data/movies.js';

export const loadCategories = () => {
    // missing implementation
    const categories = getCategories();
    return categories;
};

export const loadCategory = (id = null) => {
    const category = getCategory(id);
    return category;
};

export const loadMovies = (categoryId = null) => {
    const movies = getMoviesGeneralInfo(categoryId);

    return movies;
};

export const loadSingleMovie = (id) => {
    // missing implementation
};

export const loadSearchMovies = (searchTerm = '') => {
    return searchMovies(searchTerm);
};
