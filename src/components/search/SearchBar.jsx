import React, { useState, useEffect, useRef } from 'react';
import { useSearchBar } from './SearchComponents';
import useGoogleAutocomplete from './useGoogleAutocomplete';
import WeatherCard from '../Weather/WeatherCard';
import { useTheme } from '@mui/system';
import './styles/SearchBar.css'

const SearchBar = () => {
  const { query, setQuery, handleInputChange, handleSearchClick } = useSearchBar();
  const [weatherData, setWeatherData] = useState(null);
  const searchBar = useSearchBar(setWeatherData);
  const google = window.google;
  const theme = useTheme();


  const handlePlaceSelect = (place) => {
    if (!place.address_components) return; // Return if no address components found

    // Find the component that corresponds to the locality (city)
    const cityComponent = place.address_components.find(
      (component) => component.types.includes('locality')
    );

    if (cityComponent) {
      const cityName = cityComponent.long_name; // Extract the long name of the city
      setQuery(cityName); // Update the query state with the selected city name
      handleSearchClick(); // Optionally, you can trigger a search immediately after selection
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

  const searchInputRef = useGoogleAutocomplete(handlePlaceSelect);
  return (
    <div className='search-bar'>
      <input
        ref={searchInputRef}
        type='text'
        placeholder='Search City or Zip Code'
        value={searchBar.query}
        onChange={searchBar.handleInputChange}
        style={{ color: '#E4EFFF', background: '#668EBC', borderRadius: '20px' }}
      />
      <button onClick={handleSearchClick}>Search</button>
      <WeatherCard weatherData={weatherData} />
    </div>
  );
};

export default SearchBar;
