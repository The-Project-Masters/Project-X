import { toSingleGifView } from './gif-view.js';

export const toHomeView = (trending, favorites, upload) => `
<div id="home">
  <section class="trendingHome">
    <h1>Trending</h1>
    <div class="content">
      <ul class = "content-gifs">
        <li>
          ${trending.data.map(toSingleGifView).join('</li><li>')}
        </li>
      </ul>
    </div>
  </section>
  <section class="favoritesHome">
    <h1>Favorites</h1>
    <div class="content">
      <ul class = "content-gifs">
        <li>
          ${favorites.data.map(toSingleGifView).join('</li><li>')}
        </li>
      </ul>
    </div>
  </section>
</div>
`;