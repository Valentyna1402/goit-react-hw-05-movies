import axios from 'axios';

const API_KEY = '463666b8f3a7102c5815199d8d982f16';
axios.defaults.baseURL = `https://api.themoviedb.org/3`;

export const fetchTrendMovies = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};

export const fetchSearchedMovies = async query => {
  const response = await axios.get(
    `/search/movie?query=${query}&api_key=${API_KEY}`
  );
  return response.data;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
};

export const fetchMovieCast = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}`);
  return response.data.cast;
};

export const fetchMovieReviews = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return response.data.results;
};


export const fetchConfiguration = async () => {
    const response = await axios.get(
        `/configuration?api_key=${API_KEY}`
    );
    return response.data.images;
}