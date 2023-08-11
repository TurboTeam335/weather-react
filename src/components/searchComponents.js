import { useState } from 'react';
import { fetchHourlyWeather } from '../api/weatherAPI';

export const useSearchBar = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  const handleSearchClick = () => {
    console.log('Search Query:', query);

    fetchHourlyWeather(query)
      .then(data => {
        console.log('Hourly Weather Data:', data);
      })
      .catch(error => {
        console.error('An error occurred while fetching the weather:', error);
      });
  };

  return {
    query,
    handleInputChange,
    handleSearchClick,
  };
};
