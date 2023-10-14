// import { movies } from "../data/movies-data.js";

//   export const renderSearchItems = (searchTerm) => {
//     // missing implementation
//     let filteredMovies = movies.filter((movie)=>{
//       return movie.title.includes(searchTerm);
//     });
//     const template = `
//     <div class="container">
//       ${filteredMovies.map((movie) => {
//         return `
//         <div id="${movie.id}">
//               <h1>${movie.title}</h1>
//               <h2>${movie.year}</h2>
//               <img src="${movie.poster}">
//               <a href=""></a>
//             </div>`
//             }).join('\n')}
//           </div>`
//           // console.log(template);
//         };
//         // renderSearchItems('Labyrinth');

import { CONTAINER_SELECTOR } from '../common/constants.js';
import { loadSearchMovies } from '../requests/request-service.js';
import { toSearchView } from '../views/search-view.js';
import { q } from './helpers.js';

export const renderSearchItems = (searchTerm) => {
    const movies = loadSearchMovies(searchTerm);
    q(CONTAINER_SELECTOR).innerHTML = toSearchView(movies, searchTerm);
};
