import React from 'react';
import getWeatherIcon from '../../utils/weatherIcons';
import { Box } from '@mui/material';

const HourlyForecast = ({ weatherData }) => {
  if (!weatherData || !weatherData.list) {
    return null;
  }

  const { list } = weatherData;

  return (
    <Box display='flex' flexWrap='wrap'>
      {list.slice(0, 8).map((forecast, index) => {
        // Extracting the time from the forecast object
        const date = new Date(forecast.dt_txt);
        const hours = date.getHours();
        const period = hours < 12 ? 'am' : 'pm';
        const displayHour = hours % 12 === 0 ? 12 : hours % 12; // Convert 24-hour format to 12-hour

        // Getting the icon class based on the current forecast
        const iconClass = getWeatherIcon(forecast.weather[0].icon);

        return (
          <Box key={index} display='flex' flexDirection='column' width={{ xs: '50%', sm: '25%', md: '12.5%' }}>
            <p>
              {displayHour}
              {period}
            </p>
            <i className={`wi ${iconClass} weather-icon-gradient`} />
            <p>{Math.floor(forecast.main.temp)}°F</p>
          </Box>
        );
      })}
    </Box>
  );
};

export default HourlyForecast;
