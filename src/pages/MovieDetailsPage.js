import {
  Link,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import { fetchMovieDetails } from '../components/API';
import { MovieItem } from 'components/MovieItem/MovieItem';
import Loader from 'components/Loader';
import Error from 'components/Error/Error';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        setError(false);
        const movieItem = await fetchMovieDetails(movieId);
        setMovie(movieItem);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMovieDetails();
  }, [movieId]);

  return (
    <div>
      <Link to={backLinkRef.current.state?.from ?? '/movies'} className='backLinkRef'>Go back</Link>
      {loading ? <Loader /> : <MovieItem movie={movie} />}
      {error && <Error />}
      <Outlet />
    </div>
  );
}
