import React, { useState, useEffect, useRef } from 'react';
import { useSearchBar } from './SearchComponents';
import useGoogleAutocomplete from './useGoogleAutocomplete';
import WeatherCard from '../Weather/WeatherCard';
import { useTheme } from '@mui/system';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import './styles/SearchBar.css';

const SearchBar = () => {
  const [weatherData, setWeatherData] = useState(null);
  const {
    query,
    handleInputChange,
    handleSearchClick,
    noResults,
    resetNoResults, 
  } = useSearchBar(setWeatherData);

  const google = window.google;
  const theme = useTheme();

  const handlePlaceSelect = (place) => {
    if (!place.address_components) return; 
    const cityComponent = place.address_components.find(
      (component) => component.types.includes('locality')
    );

    if (cityComponent) {
      const cityName = cityComponent.long_name; 
      handleSearchClick(cityName); 
    }
  };

  useEffect(() => {
    if (searchInputRef.current) {
      const autocomplete = new google.maps.places.Autocomplete(searchInputRef.current);
      autocomplete.addListener('place_changed', () => {
        const selectedPlace = autocomplete.getPlace();
        handlePlaceSelect(selectedPlace);
      });
    }
  }, []);

  const error = noResults ? "No Results Found" : null;
  const searchInputRef = useGoogleAutocomplete(handlePlaceSelect);
 
  return (
    <div className='search-bar'>
      <input
        ref={searchInputRef}
        type='text'
        placeholder='Search City or Zip Code'
        value={query}
        onChange={handleInputChange}
        style={{ color: '#E4EFFF', background: '#668EBC', borderRadius: '20px' }}
      />
      <button onClick={handleSearchClick}>Search</button>

      {noResults && (
        <Dialog open={noResults} onBackdropClick={resetNoResults}>
          <DialogContent>
            <div className="error-message">No Results Found</div>
          </DialogContent>
        </Dialog>
      )}
      
      <WeatherCard weatherData={weatherData} />
    </div>
  );
};

export default SearchBar;
