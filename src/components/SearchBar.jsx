import React from 'react';
import { useSearchBar } from './searchComponents';

const SearchBar = () => {
  const { query, handleInputChange, handleSearchClick } = useSearchBar();

  return (
    <div className='search-bar'>
      <input
        type='text'
        placeholder='Search City or Zip Code'
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default SearchBar;
