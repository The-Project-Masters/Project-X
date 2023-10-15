import { toSingleGifView } from './gif-view.js';
export const toTrendingView = (trending) => `
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
`;

