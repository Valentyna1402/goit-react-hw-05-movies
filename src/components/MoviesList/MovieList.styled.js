import styled from 'styled-components';

const List = styled.ol`
  counter-reset: orderedlist;
`;

const Item = styled.li`
  & {
    font-size: 16px;
    margin-bottom: 10px;
  }
  &:before {
    counter-increment: orderedlist;
    content: counter(orderedlist);
    font-family: 'Indie Flower';
    display: inline-block;
    font-size: 10px;
    line-height: 0.75;
    width: 25px;
    height: 15px;
    padding-top: 10px;
    margin-right: 10px;
    text-align: center;
    color: #fff;
    background-color: rgba(148, 136, 255, 0.815);
    border-radius: 5px;
  }
`;

export { List, Item };
