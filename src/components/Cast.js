import { useState, useEffect } from 'react';
import { fetchMovieCast } from './API';
import { useParams } from 'react-router-dom';

import { fetchConfiguration } from './API';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [src, setSrc] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieCast() {
      try {
        const MovieCast = await fetchMovieCast(movieId);
        setCast(MovieCast);
        setLoading(false);
      } catch (error) {}
    }
    getMovieCast();
  }, [movieId]);

  useEffect(() => {
    async function getImageUrl() {
      try {
        const config = await fetchConfiguration();
        const baseUrl = config.base_url;
        const imageSize = config.poster_sizes[0];
        let imageSrc = `${baseUrl}${imageSize}`;
        setSrc(imageSrc);
      } catch (error) {
        console.log(error);
      }
    }
    getImageUrl();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading..</p>
      ) : (
        <ul>
          {cast.map(item => {
            const imageSrc = `${src}${item.profile_path}`;
            return (
              <li key={item.cast_id}>
                <img src={imageSrc} alt="artist pipture" />
                <p>{item.name}</p>
                <p>Character: {item.character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
