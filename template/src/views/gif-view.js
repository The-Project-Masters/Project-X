import { renderFavoriteStatus } from '../events/helpers.js';
export const toSingleGifView = (gif) => `
  <div data-gif-id="${gif.id}" class="col-md-6 col-lg-3 mb-4">
    <div class="trending_gif">
      <img src="${gif.images.fixed_height.url}" alt="${gif.title}">
      <div class="info">
        <h5 class="gifName">${gif.title }</h5>
        <div class="userInfo">
          <i class="fas fa-user"></i> <strong>From:</strong> ${gif.user && gif.user.username ? 
          (gif.user.username.length <= 19 ? gif.user.username :
            gif.user.username.slice(0, 19) + '...') :
          'No Username'}
        </div>
        
        <div class="dateUplaod">
          <i class="fas fa-calendar"></i> <strong>Added:</strong> ${gif.import_datetime}
        </div>

        <div class="linkToGif">
        <i class="fas fa-up-right-from-square"></i> <a target="_blank" href="https://media2.giphy.com/media/${gif.id}/giphy.gif">Open in GIPHY</a>
      </div>

      </div>
      <div class="favorites">${renderFavoriteStatus(gif.id)}</div>

    </div>
  </div>
`;
