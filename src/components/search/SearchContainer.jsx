import React from 'react';
import { StyledInputBase, StyledIconButton, SearchContainer } from '../../styles/StyledComponents';
import SearchIcon from '@mui/icons-material/Search';

const SearchContainerComponent = ({ query, handleInputChange, handleSearchClick }) => {
  return (
    <SearchContainer>
      <StyledInputBase
        placeholder="Search City or Zip Code"
        value={query}
        onChange={handleInputChange}
        onKeyPress={(e) => { if (e.key === 'Enter') handleSearchClick(); }}
      />
      <StyledIconButton onClick={handleSearchClick}>
        <SearchIcon />
      </StyledIconButton>
    </SearchContainer>
  );
};

export default SearchContainerComponent;
