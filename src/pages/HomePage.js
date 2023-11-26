import { useEffect, useState } from 'react';

import { fetchTrendMovies } from '../components/API';
import { MoviesList } from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader';
import Error from 'components/Error/Error';

export default function HomePage() {
  const [topMovies, setTopMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getTopMovies() {
      try {
        setError(false);
        const topMovies = await fetchTrendMovies();
        setTopMovies(topMovies);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getTopMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {loading && <Loader />}
      {error && <Error />}
      {topMovies.length > 0 && <MoviesList items={topMovies} />}
    </div>
  );
}
