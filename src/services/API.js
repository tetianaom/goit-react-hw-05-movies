import axios from 'axios';

const API_KEY = 'b2d4091651a56eb06e12f309ba271df6';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: API_KEY,
};

export const getTrendingMovies = async () => {
  const response = await axios.get('trending/movie/day');

  return response.data;
};

export const fetchMovieByName = async query => {
  const response = await axios.get(`search/movie`, {
    params: {
      query,
    },
  });

  return response.data;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(`movie/${movieId}`);

  return response.data;
};

export const fetchMovieCast = async movieId => {
  const response = await axios.get(`movie/${movieId}/credits`);

  return response.data;
};

export const fetchMovieReviews = async movieId => {
  const response = await axios.get(`movie/${movieId}/reviews`);

  return response.data;
};
