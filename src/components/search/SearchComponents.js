import { useState } from 'react';
import { fetchHourlyWeather } from '../../api/weatherAPI';

export const useSearchBar = (setWeatherData) => {
  const [query, setQuery] = useState('');

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  const handleSearchClick = async () => {
    
    try {
      const { city } = await fetchHourlyWeather(query);
      // Handle saving the search, executing the search, etc.
  
      // Update the weather data in the parent component
      fetchHourlyWeather(query)
        .then(data => {
          console.log('Hourly Weather Data:', data);
          setWeatherData(data);
        })
        .catch(error => {
          console.error('An error occurred while fetching the weather:', error);
        });
  
      setQuery(''); // Reset the query after successful search
    } catch (error) {
      console.error('Error executing search:', error);
    }
  };
  

  return {
    query,
    handleInputChange,
    handleSearchClick,
  };
};
