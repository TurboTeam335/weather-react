import React, { useEffect, useRef } from 'react';
import {
  StyledInputBase,
  StyledIconButton,
  SearchContainer,
} from '../../styles/NavbarComponents';
import SearchIcon from '@mui/icons-material/Search';

const SearchContainerComponent = ({
  query,
  handleInputChange,
  handleSearchClick,
  noResults,
  setNoResults
}) => {
  const searchContainerRef = useRef(null);

  const handleClickOutside = (event) => {
    if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
      setNoResults(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [noResults]);
  return (
    <div className="SearchContainer" ref={searchContainerRef}>
        <SearchContainer>
      <StyledInputBase
        placeholder='Search City or Zip Code'
        value={query}
        onChange={handleInputChange}
        onKeyPress={e => {
          if (e.key === 'Enter') handleSearchClick();
        }}
      />
      <StyledIconButton onClick={handleSearchClick}>
        <SearchIcon />
      </StyledIconButton>
      </SearchContainer>
      {noResults && (
        <div className='error-message'>
          <p>Search Results</p>
          <p>No Results Found</p>
        </div>
      )}
    </div>
  );
};

export default SearchContainerComponent;
