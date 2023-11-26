import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { fetchConfiguration } from '../API';
import Error from 'components/Error/Error';

export const MovieItem = ({ movie }) => {
  const [src, setSrc] = useState('');
  const [error, setError] = useState(false);

  const { title, release_date, vote_average, overview, genres, poster_path } =
    movie;
  const releaseDate = new Date(release_date).getFullYear();
  const userScore = Math.round((vote_average / 10) * 100);

  useEffect(() => {
    async function getPosterUrl() {
      try {
        setError(false);
        const config = await fetchConfiguration();
        const baseUrl = config.base_url;
        const posterSize = config.poster_sizes[3];
        const posterSrc = `${baseUrl}${posterSize}${poster_path}`;
        setSrc(posterSrc);
      } catch (error) {
        setError(true);
      }
    }
    getPosterUrl();
  }, [poster_path]);

  return (
    <div>
      {error && <Error />}
      <img src={src} alt="movie poster" />
      <h2>
        {title} ({releaseDate})
      </h2>
      <p>User score: {userScore} %</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h4>Genres</h4>

      <ul>
        {genres.map(({ id, name }) => {
          return <li key={id}>{name}</li>;
        })}
      </ul>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
