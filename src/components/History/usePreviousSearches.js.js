import { useState, useEffect } from 'react';
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from '../../utils/localStorage';
import { fetchHourlyWeather } from '../../api/weatherAPI';

export const usePreviousSearches = setWeatherData => {
  const [previousSearches, setPreviousSearches] = useState([]);

  useEffect(() => {
    const searches = loadFromLocalStorage('weatherHistory');
    setPreviousSearches(searches || []);
  }, []);

  const handleDeleteClick = index => {
    const newSearches = [...previousSearches];
    newSearches.splice(index, 1);
    saveToLocalStorage('weatherHistory', newSearches);
    setPreviousSearches(newSearches);
  };

  const handlePreviousSearchClick = async city => {
    try {
      const weatherData = await fetchHourlyWeather(city);
      setWeatherData(weatherData);
    } catch (error) {
      console.error('Error fetching weather for previous search:', error);
    }
  };

  const saveSearch = async city => {
    const previousSearches = loadFromLocalStorage('weatherHistory') || [];

    if (!previousSearches.some(search => search.query === city)) {
      const newSearches = [...previousSearches, { query: city }];
      saveToLocalStorage('weatherHistory', newSearches);
      setPreviousSearches(newSearches);
    }
  };

  return {
    previousSearches,
    handleDeleteClick,
    handlePreviousSearchClick,
    saveSearch,
  };
};
