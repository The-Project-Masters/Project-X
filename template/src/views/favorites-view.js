import { toSingleGifView } from './gif-view.js';

export const toFavoritesView = (favorites) => {
  // Insert new favorites at the beginning of the list
  const sortedFavorites = [...favorites.data].reverse();

  return `
    <div id="gifs">
    <section class="favoritesHome">
    <div class="container">
      <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Favorites</h2>
      <!-- Icon Divider-->
      <div class="divider-custom">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
        <div class="divider-custom-line"></div>
      </div>
      <div class="row justify-content-left">
      ${sortedFavorites.map(toSingleGifView).join('\n') || '<p>Add some gifs to favorites to see them here.</p>'}
      </div>
    </div>
  </section>
    </div>
  `;
};



