import React from 'react';
import { Card, Box } from '@mui/material';
import WeatherCard from './Weather/WeatherCard';
import WeatherInfoCard from './Weather/WeatherInfoCard';
import HourlyForecast from './Forecast/HourlyForecast';
import DailyForecast from './Forecast/DailyForcast';

const ParentComponent = ({ weatherData }) => {
  return (
    <Box padding={2}>
      <Box display="flex" justifyContent="space-between">
        <Card sx={{ flex: '0 0 48%', padding: 2 }}>
          <WeatherCard weatherData={weatherData} />
        </Card>
        <Card sx={{ flex: '0 0 48%', padding: 2 }}>
          <WeatherInfoCard weatherData={weatherData} />
        </Card>
      </Box>
      <Card sx={{ marginTop: 2, padding: 2 }}>
        <HourlyForecast weatherData={weatherData} />
      </Card>
      <Card sx={{ marginTop: 2, padding: 2 }}>
        <DailyForecast weatherData={weatherData} />
      </Card>
    </Box>
  );
};

export default ParentComponent;
