import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '3e74a828484d6b0f83071233fd134bba'


export async function fetchTrendingMovies() {
   const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`).catch(err => err.message);
  return response.data.results;
}

export async function fetchMovieById(movieId) {
  const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`).catch(err => alert('No results'));
  return response.data;
}

export async function fetchMovieCast(movieId) {
  const response = await axios.get(`/movie/${movieId}/credits?api_key=${API_KEY}`).catch(err => err.message);
  return response.data.cast;
}

export async function fetchMovieReviews(movieId) {
  const response = await axios.get(`/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`).catch(err => err.message);
  return response.data;
}


export async function fetchSearch(query) {
  const response = await axios.get(`/search/movie/?api_key=${API_KEY}&query=${query}`).catch(err => err.message);
  return response.data;
}