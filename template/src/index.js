import { HOME } from './common/constants.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';
import { q } from './events/helpers.js';
import { loadPage } from './events/navigation-events.js';
import { renderSearchItems } from './events/search-events.js';
import { uploadingGif, clearUploads } from './requests/upload-request.js';

// Event listener for when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Global click event listener
  document.addEventListener('click', (event) => {
    // Handle navigation events
    if (event.target.classList.contains('nav-link')) {
      // Navigate to the selected page
      loadPage(event.target.getAttribute('data-page'));
    }

    // Toggle favorite event
    if (event.target.classList.contains('favorite')) {
      // Toggle the favorite status of a GIF
      toggleFavoriteStatus(event.target.getAttribute('data-gif-id'));
    }

    // Upload event
    if (event.target.classList.contains('uploadBtn')) {
      // Trigger the GIF uploading process
      uploadingGif();
    }

    // Clear uploaded GIFs event
    if (event.target.classList.contains('clearUploads')) {
      // Clear the list of uploaded GIFs and load the HOME page
      clearUploads();
      loadPage(HOME);
    }
  });

  // Search input field event
  q('input#search').addEventListener('input', (event) => {
    // Render search results based on the input value
    renderSearchItems(event.target.value);
  });

  // Load the default page (HOME) upon DOM load
  loadPage(HOME);
});
