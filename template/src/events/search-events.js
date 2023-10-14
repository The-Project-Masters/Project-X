import { CONTAINER_SELECTOR } from '../common/constants.js';
import { searchMovies } from '../data/movies.js';
import { loadSearchMovies } from '../requests/request-service.js';
import { toSearchView } from '../views/search-view.js';
import { q } from './helpers.js';

export const renderSearchItems = async (searchTerm) => {
  const movies = await loadSearchMovies(searchTerm);

  q(CONTAINER_SELECTOR).innerHTML = toSearchView(movies, searchTerm);
};
