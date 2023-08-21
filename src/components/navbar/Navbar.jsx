import React, { useState } from 'react';
import { AppBar } from '@mui/material';
import { StyledToolbar } from '../../styles/NavbarComponents';
import { useSearchBar } from '../Search/SearchComponents';
import SearchContainerComponent from '../Search/SearchContainer';
import { fetchHourlyWeather } from '../../api/weatherAPI';
import TemperatureSelector from '../Navbar/TemperatureSelector';
import MenuButton from '../Navbar/MenuButton';
import { usePreviousSearches } from '../History/usePreviousSearches.js';
import './styles/Navbar.css';

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

  const [noResults, setNoResults] = useState(false);

  const handleSearchClick = async () => {
    try {
      const { city } = await fetchHourlyWeather(query);
      await saveSearch(city);
      executeSearch();
      setNoResults(false); 
    } catch (error) {
      console.error('Error executing search:', error);
      setNoResults(true); 
    }
  };

  return (
    <AppBar position='static' color='transparent' elevation={0}>

      <StyledToolbar className='navbar'>
        <MenuButton
          previousSearches={previousSearches}
          handleDeleteClick={handleDeleteClick}
          handlePreviousSearchClick={handlePreviousSearchClick}
        />
        <SearchContainerComponent
          className='SearchContainer'
          query={query}
          handleInputChange={handleInputChange}
          handleSearchClick={handleSearchClick}
          noResults={noResults}
          setNoResults={setNoResults}
        />
  
        <TemperatureSelector
          temperatureUnit={temperatureUnit}
          handleTemperatureChange={handleTemperatureChange}
        />
        {/* {noResults && (
          <div className='error-message'>
            <p>Search Results</p>
            <p>No Results Found</p>
          </div>
        )} */}
      </StyledToolbar>
    </AppBar>
  );
  
};

export default Navbar;
