import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  align-items: center;
  margin: 30px 0 30px 0;
`;

const Input = styled.input`
  min-width: 260px;
  border: 1px solid rgba(148, 136, 255, 0.815);
  outline: none;
  padding: 10px;
`;

const Button = styled.button`
  width: 40px;
  height: 37px;
  border: none;
  margin-left: 0;
  background-color: rgba(148, 136, 255, 0.815);
`;

export { Form, Input, Button };
