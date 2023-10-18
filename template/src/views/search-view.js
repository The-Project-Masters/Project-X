import { toSingleGifView } from './gif-view.js';
export const toSearchView = (gifs, searchTerm, pagination) => `
<section id="gifs" class="favoritesHome">
    <div class="container">
      <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">GIFs found for "<em>${searchTerm}</em> "</h2>
      <!-- Icon Divider-->
      <div class="divider-custom">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
        <div class="divider-custom-line"></div>
      </div>
      <div class="row justify-content-left">
      ${
          gifs.map(toSingleGifView).join('') ||
          '<p>No gifs are found based on your input.</p>'
      }
      </div>
    </div>
  </section>
`;
