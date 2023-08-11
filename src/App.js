import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import ParentComponent from './components/ParentComponent';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  return (
    <ThemeProvider theme={theme}>
      <Navbar setWeatherData={setWeatherData} />
      <ParentComponent weatherData={weatherData} />
    </ThemeProvider>
  );
}

export default App;
