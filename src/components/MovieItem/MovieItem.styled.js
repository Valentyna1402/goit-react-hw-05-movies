import styled from 'styled-components';

const ItemWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

const TextWrapper = styled.div`
  margin-left: 20px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const Text = styled.p`
  margin-bottom: 40px;
`;

const Overview = styled.h3`
  margin-bottom: 20px;
`;

const Genres = styled.h4`
  margin-bottom: 20px;
`;

const GenreList = styled.ul`
  display: flex;
  gap: 30px;
`;

const List = styled.ul`
  list-style-type: square;
  margin-top: 20px;
`;

const ListItem = styled.li`
  color: rgba(148, 136, 255, 0.815);
  margin-bottom: 10px;
`;

export {
  List,
  ItemWrapper,
  Text,
  TextWrapper,
  Title,
  Overview,
  ListItem,
  GenreList,
  Genres,
};
