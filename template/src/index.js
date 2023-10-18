import { HOME } from './common/constants.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';
import { q } from './events/helpers.js';
import { loadPage } from './events/navigation-events.js';
import { renderSearchItems } from './events/search-events.js';
import { uploadingGif , clearUploads} from './requests/upload-request.js';

document.addEventListener('DOMContentLoaded', () => {
  // add global listener
  document.addEventListener('click', (event) => {
    // nav events
    if (event.target.classList.contains('nav-link')) {
      loadPage(event.target.getAttribute('data-page'));
    }

    // toggle favorite event
    if (event.target.classList.contains('favorite')) {
      toggleFavoriteStatus(event.target.getAttribute('data-gif-id'));
    }

    if(event.target.classList.contains('uploadBtn')){
      uploadingGif();
    }

    if(event.target.classList.contains('clearUploads')){
      clearUploads();
      loadPage(HOME);
    }
  });

  // search events
  q('input#search').addEventListener('input', (event) => {
    renderSearchItems(event.target.value);
  });

  loadPage(HOME);    
});
