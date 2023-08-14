import React, { useState } from 'react';
import { Card, Box } from '@mui/material';
import Navbar from './Navbar/Navbar';
import WeatherCard from './Weather/WeatherCard';
import WeatherInfoCard from './Weather/WeatherInfoCard';
import HourlyForecast from './Forecast/HourlyForecast';
import DailyForecast from './Forecast/DailyForcast';

const ParentComponent = ({ weatherData, setWeatherData }) => {
  const [temperatureUnit, setTemperatureUnit] = useState('fahrenheit'); // Add this line

  return (
    <Box padding={2}>
      <Navbar
        setWeatherData={setWeatherData}
        temperatureUnit={temperatureUnit} // Pass this prop
        setTemperatureUnit={setTemperatureUnit} // Pass this prop
      />
      <Box display='flex' justifyContent='space-between'>
        <Card sx={{ flex: '0 0 48%', padding: 2 }}>
          <WeatherCard weatherData={weatherData} temperatureUnit={temperatureUnit} /> {/* Pass temperatureUnit if needed */}
        </Card>
        <Card sx={{ flex: '0 0 48%', padding: 2 }}>
          <WeatherInfoCard weatherData={weatherData} temperatureUnit={temperatureUnit} /> {/* Pass temperatureUnit if needed */}
        </Card>
      </Box>
      <Card sx={{ marginTop: 2, padding: 2 }}>
        <HourlyForecast weatherData={weatherData} temperatureUnit={temperatureUnit} /> {/* Pass temperatureUnit if needed */}
      </Card>
      <Card sx={{ marginTop: 2, padding: 2 }}>
        <DailyForecast weatherData={weatherData} temperatureUnit={temperatureUnit} /> {/* Pass temperatureUnit if needed */}
      </Card>
    </Box>
  );
};

export default ParentComponent;
