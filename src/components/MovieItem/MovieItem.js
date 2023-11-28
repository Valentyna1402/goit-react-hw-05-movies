import { Link } from 'react-router-dom';
import NoImage from './images/no-image-available.jpg'

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
  const { title, release_date, vote_average, overview, genres, poster_path } =
    movie;
  const releaseDate = new Date(release_date).getFullYear();
  const userScore = Math.round((vote_average / 10) * 100);

  const src = poster_path
    ? `https://image.tmdb.org/t/p/w300/${poster_path}`
    : NoImage;

  return (
    <div>
      <ItemWrapper>
        <img src={src} alt="movie poster" width='300' />
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
