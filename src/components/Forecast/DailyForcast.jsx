import React from 'react';
import { Box } from '@mui/material';
import getWeatherIcon from '../../utils/weatherIcons';

const DailyForecast = ({ weatherData }) => {
  if (!weatherData || !weatherData.list) {
    return null;
  }

  // Group data by date and calculate the daily high and low temperatures
  const dailyData = weatherData.list.reduce((acc, entry) => {
    const date = new Date(entry.dt * 1000).toLocaleDateString();
    if (!acc[date]) {
      acc[date] = {
        date: date,
        temp_min: entry.main.temp_min,
        temp_max: entry.main.temp_max,
        weather: entry.weather,
        icon: entry.weather[0].icon,
      };
    } else {
      acc[date].temp_min = Math.min(acc[date].temp_min, entry.main.temp_min);
      acc[date].temp_max = Math.max(acc[date].temp_max, entry.main.temp_max);
    }
    return acc;
  }, {});

  return (
    <Box display='flex' flexWrap='wrap'>
      {Object.values(dailyData).map((entry, index) => {
        const iconClass = getWeatherIcon(entry.icon);
        const date = new Date(entry.date);
        const dayName = date.toLocaleString('en-US', { weekday: 'short' });

        return (
          <Box key={index} display='flex' flexDirection='column' width={{ xs: '50%', sm: '25%', md: '12.5%' }}>
            <p>{dayName}</p>
            <i className={`wi ${iconClass} weather-icon-gradient`} />
            <p>Low: {Math.floor(entry.temp_min)}°F</p>
            <p>High: {Math.floor(entry.temp_max)}°F</p>
            <p>{entry.weather[0].description}</p>
          </Box>
        );
      })}
    </Box>
  );
};

export default DailyForecast;
