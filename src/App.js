import React, { useState } from 'react';
import './App.css';
import ParentComponent from './components/ParentComponent';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';


function App() {
  const [weatherData, setWeatherData] = useState(null);
  return (
    <ThemeProvider theme={theme}>
      <ParentComponent weatherData={weatherData} setWeatherData={setWeatherData} />
    </ThemeProvider>
  );
}

export default App;
