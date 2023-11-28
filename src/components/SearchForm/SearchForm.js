import { IoSearchOutline } from 'react-icons/io5';

import { Form, Input, Button } from './SearchForm.styled';

export default function SearchForm({ onSubmit: handleSubmit }) {
  return (
    <Form
      onSubmit={evt => {
        evt.preventDefault();
        const query = evt.target.input.value;
        handleSubmit(query.trim().toLowerCase());
        evt.target.reset();
      }}
    >
      <Input
        type="text"
        name="input"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      ></Input>
      <Button type="submit">
        <IoSearchOutline />
      </Button>
    </Form>
  );
}
