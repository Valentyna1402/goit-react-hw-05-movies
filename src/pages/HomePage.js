import { useEffect, useState } from 'react';
import { fetchTrendMovies } from '../components/API';

import { MoviesList } from 'components/MoviesList';

export default function HomePage() {
  const [topMovies, setTopMovies] = useState([]);


  useEffect(() => {
    async function getTopMovies() {
      try {
        const topMovies = await fetchTrendMovies();
        setTopMovies(topMovies);
      } catch (error) {
        console.log(error)
      }
    }
    getTopMovies();
  }, []);

  return (
    <div>
    <h1>Trending today</h1>
      <MoviesList items={topMovies} />
    </div>
  );
}
