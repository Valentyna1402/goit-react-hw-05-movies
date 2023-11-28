import { useState, useEffect } from 'react';
import { fetchMovieCast } from '../API';
import { useParams } from 'react-router-dom';

import Loader from 'components/Loader';
import Error from 'components/Error/Error';
import { List, Item, Text } from './Cast.styled';
import NoImage from './images/no-photo-available-icon.jpg';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
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
    }
    getMovieCast();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      {error && <Error />}
      {cast.length > 0 ? (
        <List>
          {cast.map(({ profile_path, cast_id, name, character }) => {
            const src = profile_path
            ? `https://image.tmdb.org/t/p/w92/${profile_path}`
            : NoImage;
            return (
              <Item key={cast_id}>
                  <img src={src} alt="artist" width={92}/>
                <div>
                  <Text>{name}</Text>
                  <Text>
                    <b>Character:</b> {character}
                  </Text>
                </div>
              </Item>
            );
          })}
        </List>
      ) : (
        <Text>Sorry, we don't have information about this cast.</Text>
      )}
    </div>
  );
}
