import { renderFavoriteStatus } from '../events/favorites-events.js';

export const toMoviesFromCategoryView = (category, movies) => `
<div id="movies">
  <h1>${category.name} movies:</h1>
  <div class="content">
    ${movies.map(toMovieSimple).join('\n')}
  </div>
</div>
`;

export const toSingleMovieView = (movie) => `
<div id="single-movie">
<h1>${movie.title}</h1>
<div class ="single-movie-detailed">
${movie.map(toMovieDetailed).join('\n')}
</div>
`;

export const toMovieSimple = (movie) => `
<div class="movie-simple">
    <h2>${movie.title}</h2>
    <h3>${movie.year}</h3>
    <img src="${movie.poster}"></img>
    <p> View details: favorite </p>
</div>
`;

const toMovieDetailed = (movie) => `
<!-- your template here -->
`;
