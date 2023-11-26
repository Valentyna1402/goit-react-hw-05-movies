import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { fetchConfiguration } from '../API';
import Error from 'components/Error/Error';
import {
  List,
  ItemWrapper,
  Text,
  TextWrapper,
  Title,
  Overview,
  ListItem,
  GenreList,
  Genres,
} from './MovieItem.styled';

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
      <ItemWrapper>
        <img src={src} alt="movie poster" />
        <TextWrapper>
          <Title>
            {title} ({releaseDate})
          </Title>
          <Text>User score: {userScore} %</Text>
          <Overview>Overview</Overview>
          <Text>{overview}</Text>
          <Genres>Genres</Genres>
          <GenreList>
            {genres.map(({ id, name }) => {
              return <ListItem key={id}>{name}</ListItem>;
            })}
          </GenreList>
        </TextWrapper>
      </ItemWrapper>
      <div>
        <p>Additional information</p>
        <List>
          <ListItem>
            <Link to="cast">Cast</Link>
          </ListItem>
          <ListItem>
            <Link to="reviews">Reviews</Link>
          </ListItem>
        </List>
      </div>
    </div>
  );
};
