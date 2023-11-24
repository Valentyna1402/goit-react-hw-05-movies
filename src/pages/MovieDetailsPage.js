import { NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { fetchMovieDetails } from '../components/API';
import { MovieItem } from 'components/MovieItem';


export default function MovieDetailsPage() {
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);
    const { movieId } = useParams();

    useEffect(() => {
        async function getMovieDetails() {
            try {
              const movieItem = await fetchMovieDetails(movieId);
              setMovie(movieItem);
              setLoading(false);
            } catch (error) {
            }
          }
          getMovieDetails();
    },[])
    

   return (
        <div>
            {loading ? <p>Loading..</p> : <MovieItem movie={movie}/>}
          <div>
            <p>Additional information</p>
            <ul>
              <li>
                <NavLink to="cast">Cast</NavLink>
              </li>
              <li>
                <NavLink to="reviews">Reviews</NavLink>
              </li>
            </ul>
          </div>
        </div>
      );
  }