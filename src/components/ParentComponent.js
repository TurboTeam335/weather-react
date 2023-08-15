import React, { useState } from 'react';
import { Card, Box } from '@mui/material';
import Navbar from './Navbar/Navbar';
import LocationAndDate from './Weather/LocationAndDate';
import WeatherCard from './Weather/WeatherCard';
import WeatherInfoCard from './Weather/WeatherInfoCard';
import HourlyForecast from './Forecast/HourlyForecast';
import DailyForecast from './Forecast/DailyForcast';

const ParentComponent = ({ weatherData, setWeatherData }) => {
  const [temperatureUnit, setTemperatureUnit] = useState('fahrenheit');

  return (
    <Box padding={2}>
      <Navbar
        setWeatherData={setWeatherData}
        temperatureUnit={temperatureUnit}
        setTemperatureUnit={setTemperatureUnit}
      />
      <LocationAndDate weatherData={weatherData} />
      <Box display='flex' justifyContent='space-between'>
        <Card
          sx={{
            flex: '0 0 48%',
            padding: 2,
            background: 'transparent',
            boxShadow: 'none',
            borderRight: weatherData ? '1px solid white' : 'none',
            borderRadius: '0',
          }}
        >
          <WeatherCard
            weatherData={weatherData}
            temperatureUnit={temperatureUnit}
          />
        </Card>
        <Card
          sx={{
            flex: '0 0 48%',
            padding: 2,
            background: 'transparent',
            boxShadow: 'none',
          }}
        >
          <WeatherInfoCard
            weatherData={weatherData}
            temperatureUnit={temperatureUnit}
          />
        </Card>
      </Box>

      <Card
        sx={{
          marginTop: 2,
          padding: 2,
          background: 'transparent',
          boxShadow: 'none',
        }}
      >
        <HourlyForecast
          weatherData={weatherData}
          temperatureUnit={temperatureUnit}
        />{' '}
      </Card>
      <Card
        sx={{
          marginTop: 2,
          padding: 2,
          background: 'transparent',
          boxShadow: 'none',
        }}
      >
        <DailyForecast
          weatherData={weatherData}
          temperatureUnit={temperatureUnit}
        />{' '}
      </Card>
    </Box>
  );
};

export default ParentComponent;
