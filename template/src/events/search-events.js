import { CONTAINER_SELECTOR } from '../common/constants.js';
import { toSearchView } from '../views/search-view.js';
import { q } from './helpers.js';
import { getSearchResults } from '../requests/request-service.js';

/**
 * Renders search results on the page based on the provided search term.
 *
 * @param {string} searchTerm - The search term to use for querying search results.
 * @returns {void} - No return value, the function updates the page content with search results.
 */
export const renderSearchItems = async (searchTerm) => {
  const gifs = await getSearchResults(searchTerm);

  q(CONTAINER_SELECTOR).innerHTML = toSearchView(gifs.data, searchTerm, gifs.pagination);
};
