import { HOME, TRENDING, FAVORITES, ABOUT, UPLOAD, CONTAINER_SELECTOR } from '../common/constants.js';
import { toHomeView } from '../views/home-view.js';
import { toTrendingView } from '../views/trending-view.js';
import { toFavoritesView } from '../views/favorites-view.js';
import { toUploadView } from '../views/upload-view.js';
import { toAboutView } from '../views/about-view.js';
import { q, setActiveNav } from './helpers.js';
import { getGifById } from '../data/giphy.js';
import { getUploaded } from '../data/uploaded.js';
import { loadTrending, loadHomeTrending, loadHomeFavorites } from '../requests/request-service.js';

/**
 * The page loader function to render different pages based on the specified page.
 *
 * @param {string} page - The target page to load.
 * @returns {void} - No return value, the function updates the page content.
 */
export const loadPage = (page = "") => {
    switch (page) {
        case HOME:
            setActiveNav(HOME);
            return renderHome();
        case TRENDING:
            setActiveNav(TRENDING);
            return renderTrending();
        case FAVORITES:
            setActiveNav(FAVORITES);
            return renderFavorites();
        case UPLOAD:
            setActiveNav(UPLOAD);
            return renderUpload();
        case ABOUT:
            setActiveNav(ABOUT);
            return renderAbout();
        /* if the app supports error logging, use default to log mapping errors */
        default:
            return null;
    }
};

/**
 * Renders the Home page with trending GIFs, favorite GIFs, and uploaded GIFs.
 *
 * @returns {void} - No return value, the function updates the Home page content.
 */
const renderHome = async () => {
    const trending = await loadHomeTrending();

    const favorites = await loadHomeFavorites();

    let uploaded = await Promise.all(getUploaded().map(getGifById));

    uploaded = { data: uploaded.map(x => x.data) };

    q(CONTAINER_SELECTOR).innerHTML = toHomeView(trending, favorites, uploaded);
};

/**
 * Renders the Trending page with trending GIFs.
 *
 * @returns {void} - No return value, the function updates the Trending page content.
 */
const renderTrending = async () => {
    const trending = await loadTrending(10);
    q(CONTAINER_SELECTOR).innerHTML = toTrendingView(trending);
};

/**
 * Renders the Favorites page with favorite GIFs.
 *
 * @returns {void} - No return value, the function updates the Favorites page content.
 */
const renderFavorites = async () => {
    const favorites = await loadHomeFavorites();
    q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(favorites);
};

/**
 * Renders the Upload page with uploaded GIFs.
 *
 * @returns {void} - No return value, the function updates the Upload page content.
 */
const renderUpload = async () => {
    let uploaded = await Promise.all(getUploaded().map(getGifById));

    uploaded = { data: uploaded.map(x => x.data) };

    q(CONTAINER_SELECTOR).innerHTML = toUploadView(uploaded);
};

/**
 * Renders the About page with information about the application.
 *
 * @returns {void} - No return value, the function updates the About page content.
 */
const renderAbout = () => {
    q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};
