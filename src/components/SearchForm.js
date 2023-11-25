export default function SearchForm({ onSubmit: handleSubmit }) {
  return (
    <form onSubmit={evt => {
        evt.preventDefault();
        const query = evt.target.input.value;
        handleSubmit(query.toLowerCase());
        evt.target.reset();
      }}>
      <input type="text"
          name='input'
          autoComplete="off"
          autoFocus
          placeholder="Search movies">
          </input>
      <button type="submit">Search</button>
    </form>
  );
}
