import { HOME, TRENDING, FAVORITES, ABOUT, CONTAINER_SELECTOR } from '../common/constants.js';
import { toAboutView } from "../views/about-view.js";
import { toTrendingView } from "../views/trending-view.js";
import { toHomeView } from "../views/home-view.js";
// import { toUploadView } from '../views/upload-view.js';
import { q, setActiveNav } from "./helpers.js";
import { loadTrending } from "../requests/request-service.js";
// import { getGifById } from '../data/giphy.js';
import { toFavoritesView } from "../views/favorites-view.js";
// import { getUploaded } from '../data/uploaded.js';


import { getFavorites } from '../data/favorites.js'

// public API
export const loadPage = (page = "") => {
    switch (page) {
        case HOME:
            setActiveNav(HOME);
            return renderHome();
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

// private functions

const renderHome = () => {
    q(CONTAINER_SELECTOR).innerHTML = toHomeView();
};

const renderTrending = async () => {
    const trending = await loadTrending(10);
    q(CONTAINER_SELECTOR).innerHTML = toTrendingView(trending);
};

const renderFavorites = () => {
    const favorites = getFavorites();
    q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(favorites);
};

const renderAbout = () => {
    q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};

