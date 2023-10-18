import { toSingleGifView } from './gif-view.js';
export const toTrendingView = (trending) => `
<div id="home">
<section class="trendingHome">
<div class="container">
  <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Trending</h2>
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
`;

