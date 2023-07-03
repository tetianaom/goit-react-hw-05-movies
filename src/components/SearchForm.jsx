import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import { Wrapper, IconSearchBtn, Input } from './SearchForm.styled';

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
    <Wrapper onSubmit={handleSubmit}>
      <IconSearchBtn type="submit">
        <FiSearch size="16px" />
      </IconSearchBtn>
      <Input type="text" value={search} onChange={handleChange} />
    </Wrapper>
  );
};
