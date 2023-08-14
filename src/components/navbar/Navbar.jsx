import React from 'react';
import { AppBar } from '@mui/material';
import { StyledToolbar } from '../../styles/StyledComponents';
import { useSearchBar } from '../Search/SearchComponents';
import SearchContainerComponent from '../Search/SearchContainer';
import { fetchHourlyWeather } from '../../api/weatherAPI';
import TemperatureSelector from '../Navbar/TemperatureSelector';
import MenuButton from '../Navbar/MenuButton';
import { usePreviousSearches } from '../History/usePreviousSearches.js';

const Navbar = ({ setWeatherData, setTemperatureUnit, temperatureUnit }) => {
  const {
    query,
    handleInputChange,
    handleSearchClick: executeSearch,
  } = useSearchBar(setWeatherData);

  const handleTemperatureChange = event => {
    setTemperatureUnit(event.target.value);
  };

  const {
    previousSearches,
    handleDeleteClick,
    handlePreviousSearchClick,
    saveSearch,
  } = usePreviousSearches(setWeatherData);

  const handleSearchClick = async () => {
    try {
      const { city } = await fetchHourlyWeather(query);
      await saveSearch(city);
      executeSearch();
    } catch (error) {
      console.error('Error executing search:', error);
    }
  };

  return (
    <AppBar position='static' color='transparent'>
      <StyledToolbar>
        <MenuButton
          previousSearches={previousSearches}
          handleDeleteClick={handleDeleteClick}
          handlePreviousSearchClick={handlePreviousSearchClick}
        />
        <SearchContainerComponent
          query={query}
          handleInputChange={handleInputChange}
          handleSearchClick={handleSearchClick}
        />
        <TemperatureSelector
          temperatureUnit={temperatureUnit}
          handleTemperatureChange={handleTemperatureChange}
        />
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
