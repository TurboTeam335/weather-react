import { useState } from 'react';
import { fetchHourlyWeather } from '../../api/weatherAPI';

export const useSearchBar = (setWeatherData) => {
  const [query, setQuery] = useState('');
  const [noResults, setNoResults] = useState(false);

  const resetNoResults = () => setNoResults(false);
  
    const handleInputChange = e => {
      setQuery(e.target.value);
    };
  
    const handleSearchClick = async () => {
      try {
        const data = await fetchHourlyWeather(query);
        // console.log("data:", data); // Debugging log
        if (data && data.city) {
          setWeatherData(data);
          setNoResults(false);
        } else {
          setNoResults(true);
        }
        setQuery('');
      } catch (error) {
        // console.log("Error during search:", error.message); // Debugging log
        setNoResults(true); 
      }
    };
    
    return {
      query,
      handleInputChange,
      handleSearchClick,
      noResults,
      resetNoResults
    };
  };
  
