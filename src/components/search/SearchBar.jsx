import React, { useState } from 'react';
import { useSearchBar } from './SearchComponents';
import WeatherCard from '../weather/WeatherCard';

const SearchBar = () => {
  const { query, handleInputChange, handleSearchClick } = useSearchBar();
  const [weatherData, setWeatherData] = useState(null);
  const searchBar = useSearchBar(setWeatherData);

  return (
    <div className='search-bar'>
      <input
        type='text'
        placeholder='Search City or Zip Code'
        value={searchBar.query}
        onChange={searchBar.handleInputChange}
      />
      <button onClick={handleSearchClick}>Search</button>
      <WeatherCard weatherData={weatherData} />
    </div>
  );
};

export default SearchBar;
