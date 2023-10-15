import { toSingleGifView } from './gif-view.js';
export const toSearchView = (gifs, searchTerm, pagination) => `
<section id="gifs">
  <h1>GIFs found for "${searchTerm}":</h1>
  <small>Shown ${pagination.count} of ${pagination.total_count}</small>
  <div class="content">
    <ul class="content-gifs">
      <li>
    ${gifs.map(toSingleGifView).join('</li><li>') || '<p>Add some GIFs to favorites to see them here.</p>'}
      </li>
    </ul>
  </div>
</section>
`;