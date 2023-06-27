import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';

export const SearchForm = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = event => {
    setSearch(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(search);
    setSearch('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label type="submit">
        <FiSearch size="16px" />
      </label>
      <input type="text" value={search} onChange={handleChange} />
    </form>
  );
};
