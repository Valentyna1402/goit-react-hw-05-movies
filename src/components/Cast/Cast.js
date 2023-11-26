import { useState, useEffect } from 'react';
import { fetchMovieCast } from '../API';
import { useParams } from 'react-router-dom';

import Loader from 'components/Loader';
import { fetchConfiguration } from '../API';
import Error from 'components/Error/Error';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [src, setSrc] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieCast() {
      try {
        setError(false);
        const MovieCast = await fetchMovieCast(movieId);
        setCast(MovieCast);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    getMovieCast();
  }, [movieId]);

  useEffect(() => {
    async function getImageUrl() {
      try {
        const config = await fetchConfiguration();
        const baseUrl = config.base_url;
        const imageSize = config.poster_sizes[0];
        const imageSrc = `${baseUrl}${imageSize}`;
        setSrc(imageSrc);
      } catch (error) {
      }
    }
    getImageUrl();
  }, []);

  return (
    <div>
      {loading && <Loader />}
      {error && <Error /> }
      {cast.length > 0 ?       
      (<ul>
        {cast.map(({profile_path, cast_id, name, character}) => {
          const imageSrc = `${src}${profile_path}`;
          return (
            <li key={cast_id}>
              {profile_path !== null && (
                <img src={imageSrc} alt="artist" />
              )}
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </ul>) : <p>Sorry, we don't have information about this cast.</p>}
    </div>
  );
}
