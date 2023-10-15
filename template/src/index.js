import { HOME } from './common/constants.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';
import { q } from './events/helpers.js';
import { loadPage } from './events/navigation-events.js';
import { renderSearchItems } from './events/search-events.js';

document.addEventListener('DOMContentLoaded', () => {

  // add global listener
  document.addEventListener('click', event => {
    // nav events
    if (event.target.classList.contains('nav-link')) {
      loadPage(event.target.getAttribute('data-page'));
    }

    // toggle favorite event
    if (event.target.classList.contains(/* favorites item class here */)) {
      toggleFavoriteStatus(+event.target.getAttribute(/* your correct data attribute here */));
    }

  });

  // search events
  q('input#search').addEventListener('input', event => {
    renderSearchItems(event.target.value);
  });

  loadPage(HOME);

});