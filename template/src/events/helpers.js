import { EMPTY_HEART, FULL_HEART } from '../common/constants.js';
import { getFavorites } from '../data/favorites.js';

/**
 * Selects the first DOM element that matches the given CSS selector.
 *
 * @param {string} selector - The CSS selector to match.
 * @returns {Element | null} - The first matching DOM element, or null if none is found.
 */
export const q = (selector) => document.querySelector(selector);

/**
 * Selects all DOM elements that match the given CSS selector.
 *
 * @param {string} selector - The CSS selector to match.
 * @returns {NodeList} - A list of DOM elements matching the selector.
 */
export const qs = (selector) => document.querySelectorAll(selector);

/**
 * Sets the active state for the navigation links based on the current page.
 *
 * @param {string} page - The current page to set as active.
 */
export const setActiveNav = (page) => {
  const navs = qs('a.nav-link');

  Array.from(navs).forEach((element) =>
    element.getAttribute('data-page') === page
      ? element.classList.add('active')
      : element.classList.remove('active')
  );
};

/**
 * Renders the favorite status indicator for a GIF.
 *
 * @param {string} gifId - The unique identifier of the GIF.
 * @returns {string} - HTML code for the favorite status indicator.
 */
export const renderFavoriteStatus = (gifId) => {
  const favorites = getFavorites();

  return favorites.includes(gifId)
    ? `<span class="favorite active" data-gif-id="${gifId}">${FULL_HEART}</span>`
    : `<span class="favorite" data-gif-id="${gifId}">${EMPTY_HEART}</span>`;
};
