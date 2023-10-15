import { renderFavoriteStatus } from '../events/helpers.js';
export const toSingleGifView = (gif) => `
  <div data-gif-id="${gif.id}" class="preview">
    <img src="${gif.images.fixed_height.url}" alt="" class="trending_gif">
    <div class="info">
    <p class="gifName">
    <h3>${gif.title }</h3>
    </p>
    <p class="userInfo">
    username: ${gif.user && gif.user.username ? 
    (gif.user.username.length <= 19 ? gif.user.username :
      gif.user.username.slice(0, 19) + '...') :
    'No Username'}
    </p>
    <p class="dateUplaod">
    Date: ${gif.import_datetime}
    </p>
    </div>
    <div class="favorites">${renderFavoriteStatus(gif.id)}</div>
  </div>
`;
