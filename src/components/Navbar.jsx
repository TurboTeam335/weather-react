import React from 'react';
import { AppBar, Toolbar, InputBase, Select, MenuItem, IconButton } from '@mui/material';
import { styled, useTheme } from '@mui/system';
import { useSearchBar } from './searchComponents';
import SearchIcon from '@mui/icons-material/Search';

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.palette.background.default};
`;

const SearchContainer = styled('div')`
  position: relative;
  background: #668EBC;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 0 65px;
`;

const StyledInputBase = styled(InputBase)`
  padding: 5px;
  color: ${(props) => props.theme.palette.text.primary};
  flex-grow: 1;

  ::placeholder {
    color: ${(props) => props.theme.palette.text.primary};
    opacity: 1; 
  }
`;

const StyledIconButton = styled(IconButton)`
  position: absolute;
  right: 0;
  color: ${(props) => props.theme.palette.text.primary};
`;

const Navbar = () => {
  const theme = useTheme();
  const { query, handleInputChange, handleSearchClick } = useSearchBar();
  const [temperatureUnit, setTemperatureUnit] = React.useState('fahrenheit');

  const handleTemperatureChange = (event) => {
    setTemperatureUnit(event.target.value);
  };

  return (
    <AppBar position="static" color="transparent">
      <StyledToolbar>
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
        <Select
          value={temperatureUnit}
          onChange={handleTemperatureChange}
          style={{ color: theme.palette.text.primary }}
        >
          <MenuItem value="fahrenheit">&deg;F</MenuItem>
          <MenuItem value="celsius">&deg;C</MenuItem>
        </Select>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
