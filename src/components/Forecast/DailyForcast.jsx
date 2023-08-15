import React from 'react';
import { Box } from '@mui/material';
import getWeatherIcon from '../../utils/weatherIcons';

const DailyForecast = ({ weatherData, temperatureUnit }) => {
  if (!weatherData || !weatherData.list) {
    return null;
  }

  const today = new Date().toLocaleDateString();

  const dailyData = weatherData.list.reduce((acc, entry) => {
    const date = new Date(entry.dt * 1000).toLocaleDateString();
    const temp_min = temperatureUnit === 'fahrenheit'
      ? entry.main.temp_min
      : (entry.main.temp_min - 32) * 5 / 9;
    const temp_max = temperatureUnit === 'fahrenheit'
      ? entry.main.temp_max
      : (entry.main.temp_max - 32) * 5 / 9;

    if (!acc[date]) {
      acc[date] = {
        date: date,
        temp_min,
        temp_max,
        weather: entry.weather,
        icon: entry.weather[0].icon,
      };
    } else {
      acc[date].temp_min = Math.min(acc[date].temp_min, temp_min);
      acc[date].temp_max = Math.max(acc[date].temp_max, temp_max);
    }
    return acc;
  }, {});

  return (
    <Box display='flex' flexWrap='wrap'>
      {Object.values(dailyData).map((entry, index) => {
        const iconClass = getWeatherIcon(entry.icon);
        const date = new Date(entry.date);
        const isToday = date.toLocaleDateString() === today;
        const dayName = isToday ? 'Today' : date.toLocaleString('en-US', { weekday: 'short' });

        return (
          <Box key={index} display='flex' flexDirection='column' width={{ xs: '50%', sm: '25%', md: '12.5%' }}>
            <p>{dayName}</p>
            <i className={`wi ${iconClass} weather-icon-gradient`} />
            <p>Low: {Math.floor(entry.temp_min)}°{temperatureUnit === 'fahrenheit' ? 'F' : 'C'}</p>
            <p>High: {Math.floor(entry.temp_max)}°{temperatureUnit === 'fahrenheit' ? 'F' : 'C'}</p>
            <p>{entry.weather[0].description}</p>
          </Box>
        );
      })}
    </Box>
  );
};

export default DailyForecast;
