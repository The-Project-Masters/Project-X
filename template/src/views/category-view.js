import { movies } from "../data/movies-data.js";

export const toCategoriesView = (categories) => `
<div id="categories">
  <h1>Categories</h1>
  <div class="content">
    ${categories.map(toSingleCategoryView).join("\n")}
  </div>
</div>
`;

const toSingleCategoryView = (category) => {
  const cardTemplate = `
    <div class="category-card">
      <h1>${category.name}</h1>
      <p>${category.moviesCount} movies</p>
      <a href="#" class="view-category" data-category="${category.id}">View category</a>
    </div>
  `;

  let filteredMovies = movies.filter((movie) => {
    return movie.genre === category;
  });

  // console.log(filteredMovies);
  const template = `
  <div class="container">
    ${filteredMovies
      .map((movie) => {
        return `
      <div id="${movie.id}">
            <h1>${movie.title}</h1>
            <h2>${movie.year}</h2>
            <img src="${movie.poster}">
            <a href=""></a>
          </div>`;
      })
      .join("\n")}
        </div>`;
  // console.log(template);

  return cardTemplate;
};
// toSingleCategoryView('Action');
