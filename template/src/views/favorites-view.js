import { toSingleGifView } from './gif-view.js';

export const toFavoritesView = (favorites) => `
<div id="gifs">
  <h1>Favorite gifs:</h1>
  <div class="content-gifs">
    ${favorites.data.map(toSingleGifView).join('\n') || '<p>Add some gifs to favorites to see them here.</p>'}
  </div>
</div>
`;

