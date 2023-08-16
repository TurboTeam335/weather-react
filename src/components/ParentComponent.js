import React, { useState } from 'react';
import { Card, Box, Grid } from '@mui/material';
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
    <Box
  sx={{
    marginTop: { xs: '1em', md: '0' }, 
  }}
>
      <LocationAndDate weatherData={weatherData} />

      </Box>
      <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
  <Card
    sx={{
      marginTop: { xs: '1em', md: '2em' }, 
      padding: 2,
      background: 'transparent',
      boxShadow: 'none',
      borderBottom: { xs: weatherData ? '1px solid white' : 'none', md: 'none' },
      borderRight: { md: weatherData ? '1px solid white' : 'none', xs: 'none' },
      borderRadius: '0',
    }}
  >
    <WeatherCard
      weatherData={weatherData}
      temperatureUnit={temperatureUnit}
    />
  </Card>
</Grid>

        <Grid item xs={12} md={6}>
          <Card
            sx={{
              marginTop: { xs: '0', md: '2em' },
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
        </Grid>
      </Grid>

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
