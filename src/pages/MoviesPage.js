import { fetchSearchedMovies } from 'components/API';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';

import SearchForm from 'components/SearchForm/SearchForm';
import { MoviesList } from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader';
import Error from 'components/Error/Error';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [params, setParams] = useSearchParams();
  const query = params.get('query') ?? '';

  useEffect(() => {
    if (!query) return;
    async function getMoviesbyQuery() {
      try {
        setError(false);
        setLoading(true);
        const moviesItems = await fetchSearchedMovies(query);
        setMovies(moviesItems);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMoviesbyQuery();
  }, [query]);

  const handleSubmit = newQuery => {
    if (newQuery === '') {
      toast.error('Please, enter your request');
      return;
    }
    params.set('query', newQuery);
    setParams(params);
  };

  return (
    <div>
      <SearchForm onSubmit={handleSubmit}></SearchForm>
      {loading && <Loader />}
      {error && <Error />}
      {movies.length > 0 && <MoviesList items={movies} />}
    </div>
  );
}
