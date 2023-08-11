import { useState } from 'react';
import { fetchHourlyWeather } from '../../api/weatherAPI';

export const useSearchBar = (setWeatherData) => {
  const [query, setQuery] = useState('');

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  const handleSearchClick = () => {
    console.log('Search Query:', query);

    fetchHourlyWeather(query)
    .then(data => {
      console.log('Hourly Weather Data:', data);
      setWeatherData(data); // Update the weather data in the parent component
    })
    .catch(error => {
      console.error('An error occurred while fetching the weather:', error);
    });
    console.log(typeof setWeatherData); // should log "function"
    console.log(setWeatherData); // should log the function definition
    
  };

  return {
    query,
    handleInputChange,
    handleSearchClick,
  };
};

