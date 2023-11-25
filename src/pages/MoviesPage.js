import { fetchSearchedMovies } from 'components/API';
import SearchForm from 'components/SearchForm';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getMoviesbyQuery() {
      if (query === '') {
        return;
      }
      try {
        const moviesItems = await fetchSearchedMovies(query);
        setMovies(moviesItems);
        setLoading(false);
      } catch (error) {}
    }
    getMoviesbyQuery();
  }, [query]);

  const handleSubmit = newQuery => {
    setQuery(newQuery);
  };

  return (
    <div>
      <SearchForm onSubmit={handleSubmit}></SearchForm>
      {loading && <p>Loading..</p>}
      {movies.length > 0 && (
        <ul>
          {movies.map(movie => {
            return <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>;
          })}
        </ul>
      )}
    </div>
  );
}
