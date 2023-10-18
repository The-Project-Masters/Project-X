import { toSingleGifView } from './gif-view.js';

export const toFavoritesView = (favorites) => {
  // Insert new favorites at the beginning of the list
  const sortedFavorites = [...favorites.data].reverse();

  return `
    <div id="gifs">
      <h1>Favorite gifs:</h1>
      <div class="content-gifs">
        ${sortedFavorites.map(toSingleGifView).join('\n') || '<p>Add some gifs to favorites to see them here.</p>'}
      </div>
    </div>
  `;
};