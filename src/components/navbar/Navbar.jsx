import React from 'react';
import { AppBar, Select, MenuItem } from '@mui/material';
import { useTheme } from '@mui/system';
import { StyledToolbar } from '../../styles/StyledComponents';
import { useSearchBar } from '../Search/SearchComponents';
import SearchContainerComponent from '../Search/SearchContainer';

const Navbar = ({ setWeatherData }) => {
  const theme = useTheme();
  const { query, handleInputChange, handleSearchClick } =
    useSearchBar(setWeatherData);
  const [temperatureUnit, setTemperatureUnit] = React.useState('fahrenheit');

  const handleTemperatureChange = event => {
    setTemperatureUnit(event.target.value);
  };

  return (
    <AppBar position='static' color='transparent'>
      <StyledToolbar>
        <SearchContainerComponent
          query={query}
          handleInputChange={handleInputChange}
          handleSearchClick={handleSearchClick}
        />
        <Select
          value={temperatureUnit}
          onChange={handleTemperatureChange}
          style={{ color: theme.palette.text.primary }}
        >
          <MenuItem value='fahrenheit'>&deg;F</MenuItem>
          <MenuItem value='celsius'>&deg;C</MenuItem>
        </Select>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
