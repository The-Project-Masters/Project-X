import { toSingleGifView } from './gif-view.js';

export const toHomeView = (trending, favorites, upload) => `
<div id="home">
  <section class="trendingHome">
    <div class="container">
      <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Top-Rated Gifs</h2>
      <!-- Icon Divider-->
      <div class="divider-custom">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
        <div class="divider-custom-line"></div>
      </div>
      <div class="row justify-content-left">
        ${trending.data.map(toSingleGifView).join('')}
      </div>
    </div>
  </section>

  <section class="favoritesHome">
    <div class="container">
      <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">My Favorites</h2>
      <!-- Icon Divider-->
      <div class="divider-custom">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
        <div class="divider-custom-line"></div>
      </div>
      <div class="row justify-content-left">
        ${favorites.data.map(toSingleGifView).join('')}
      </div>
    </div>
  </section>

  <section class="trendingHome">
    <div class="container">
      <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">My Uploads</h2>
      <!-- Icon Divider-->
      <div class="divider-custom">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
        <div class="divider-custom-line"></div>
      </div>
      <div class="row justify-content-left">
        ${(upload.data ? upload.data.map(toSingleGifView).join('') : upload)}
      </div>
    </div>
  </section>
</div>
`;