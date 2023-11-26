import { Link, useLocation } from 'react-router-dom';

import { List, Item } from './MovieList.styled';

export const MoviesList = ({ items }) => {
  const location = useLocation();

  return (
    <List>
      {items.map(({ id, title }) => (
        <Item key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }} className='item-link'>
            {title}
          </Link>
        </Item>
      ))}
    </List>
  );
};
