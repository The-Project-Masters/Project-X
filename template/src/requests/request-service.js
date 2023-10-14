import { getMoviesFullInfo } from '../data/movies.js';

export const loadCategories = async () => {
  // const categories = getCategories();
  // return categories;
  const fetchedData = await fetch(`http://localhost:3000/categories`);
  const data = await fetchedData.json();
  return data;
};

export const loadCategory = async (id = null) => {
  // const category = getCategory(id);
  // return category;
  const fetchedData = await fetch(`http://localhost:3000/categories/${id}`);
  const data = await fetchedData.json();
  

  return data;
}

export const loadMovies = async (categoryId = null) => {
  // const movies = getMoviesGeneralInfo(categoryId);
  // return movies;

  if(categoryId){
    const fetchedData = await fetch(`http://localhost:3000/categories/${categoryId}/movies`);
    const data = await fetchedData.json();
    return data;
  }

  const fetchedData2 = await fetch(`http://localhost:3000/movies`);
  const data2 = await fetchedData2.json();
  return data2;
  

};

export const loadMoviesDetails = async (categoryId = null) => {
  const movies = getMoviesFullInfo(categoryId);
  return movies;
};

export const loadSingleMovie = async (id) => {
  // const movie = getMovieById(id);
  // return movie;  
  const fetchedData = await fetch(`http://localhost:3000/movies/${id}`);
  const movie = await fetchedData.json();

  return movie;
};

export const loadSearchMovies = async (searchTerm = '') => {
  // const movies = searchMovies(searchTerm);

  // return movies;
  const fetchedData = await fetch(`http://localhost:3000/movies?search=${searchTerm}`);
  const searchData = await fetchedData.json();
  
  return searchData;
};
