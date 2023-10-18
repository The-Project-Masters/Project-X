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

// public API
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

// private functions
const renderHome = async () => {
    const trending = await loadHomeTrending();
  
    const favorites = await loadHomeFavorites();
    
    let uploaded = await Promise.all(getUploaded().map(getGifById));
  
    uploaded = { data: uploaded.map(x => x.data) };
  
    q(CONTAINER_SELECTOR).innerHTML = toHomeView(trending, favorites, uploaded);
  };

const renderTrending = async () => {
    const trending = await loadTrending(10);
    q(CONTAINER_SELECTOR).innerHTML = toTrendingView(trending);
};

const renderFavorites = async () => {
    const favorites = await loadHomeFavorites();
    q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(favorites);
};

const renderUpload = async () => {
    let uploaded = await Promise.all(getUploaded().map(getGifById));
  
    uploaded = { data: uploaded.map(x => x.data) };
    
    q(CONTAINER_SELECTOR).innerHTML = toUploadView(uploaded);
};

const renderAbout = () => {
    q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};

