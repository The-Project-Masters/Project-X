import { CONTAINER_SELECTOR } from '../common/constants.js';
import { toSearchView } from '../views/search-view.js';
import { q } from './helpers.js';
import { getSearchResults } from '../requests/request-service.js';

export const renderSearchItems = async (searchTerm) => {
  const gifs = await getSearchResults(searchTerm);

  q(CONTAINER_SELECTOR).innerHTML = toSearchView(gifs.data, searchTerm, gifs.pagination);
};
