import {
    CONTAINER_SELECTOR,
    HOME,
    CATEGORIES,
    FAVORITES,
    ABOUT,
    TRENDING,
} from "../common/constants.js";
// import { toTrendingView } from "../views/trending-view.js";
import { toCategoriesView } from "../views/category-view.js";
import { toFavoritesView } from "../views/favorites-view.js";
import { toAboutView } from "../views/about-view.js";
import { toHomeView } from "../views/home-view.js";
import { toMoviesFromCategoryView } from "../views/movie-views.js";
import { q, setActiveNav } from "./helpers.js";
import { getFavorites } from '../data/favorites.js'
import { getMoviesFullInfo } from '../data/movies.js'
import { loadCategories, loadCategory } from "../requests/request-service.js";
import { movies } from "../data/movies-data.js";

// public API
export const loadPage = (page = "") => {
    switch (page) {
        case HOME:
            setActiveNav(HOME);
            return renderHome();
        case CATEGORIES:
            setActiveNav(CATEGORIES);
            return renderCategories();
        case FAVORITES:
            setActiveNav(FAVORITES);
            return renderFavorites();
        case ABOUT:
            setActiveNav(ABOUT);
            return renderAbout();
        case TRENDING:
            setActiveNav(TRENDING);
            return renderTrending();
        /* if the app supports error logging, use default to log mapping errors */
        default:
            return null;
    }
};

export const renderMovieDetails = (id = null) => {
    // missing implementation
    let movie = movies.filter((movie) => {
        return movie.id === id;
    })[0];
    // console.log(filteredMovies);
    const template = `
    <div class="container">
              <img src="${movie.poster}">
              <p>${movie.genre}</p>
              <p>${movie.director}</p>
              <p>${movie.description}</p>
            </div>`;
    // console.log(template);
};

export const renderCategory = (categoryId = null) => {
    debugger;
    // missing partial implementation
    if (categoryId == null) {
        return `No movies found in this category`;
    }

    const category = loadCategory(categoryId);
    const moviesFilter = getMoviesFullInfo(categoryId);

    q(CONTAINER_SELECTOR).innerHTML = toMoviesFromCategoryView(
        category,
        moviesFilter
    );
};

// private functions


const renderHome = () => {
    q(CONTAINER_SELECTOR).innerHTML = toHomeView();
};

const renderTrending = () => {
    const trending = loadTrending();
    q(CONTAINER_SELECTOR).innerHTML = toTrendingView(trending);
};

const renderCategories = () => {
    const categories = loadCategories();
    q(CONTAINER_SELECTOR).innerHTML = toCategoriesView(categories);
};

const renderFavorites = () => {
    const favorites = getFavorites();
    q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(favorites);
};

const renderAbout = () => {
    q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};

