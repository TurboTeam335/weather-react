import React from 'react';
import { Box, Divider } from '@mui/material';
import getWeatherIcon from '../../utils/weatherIcons';
import { getGradient } from '../../styles/temperatureColors';
import { useTheme } from '@mui/material/styles';

const DailyForecast = ({ weatherData, temperatureUnit }) => {
  const theme = useTheme();
  if (!weatherData || !weatherData.list) {
    return null;
  }

  const today = new Date().toLocaleDateString();

  const dailyData = weatherData.list.reduce((acc, entry) => {
    const date = new Date(entry.dt * 1000).toLocaleDateString();
    const temp_min =
      temperatureUnit === 'fahrenheit'
        ? entry.main.temp_min
        : ((entry.main.temp_min - 32) * 5) / 9;
    const temp_max =
      temperatureUnit === 'fahrenheit'
        ? entry.main.temp_max
        : ((entry.main.temp_max - 32) * 5) / 9;

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
    <>
      <Box
        display='flex'
        justifyContent='flex-start'
        width='100%'
        paddingLeft={1}
        color='custom.white'
        lineHeight='0.5em'
      >
        <h3>6-Day Forecast</h3>
      </Box>
      <Box
        display='flex'
        flexDirection='column' // Add flex direction to stack children vertically
        bgcolor='custom.blue'
        color='custom.white'
        borderRadius={2}
      >
        {Object.values(dailyData).map((entry, index, array) => {
          const iconClass = getWeatherIcon(entry.icon);
          const date = new Date(entry.date);
          const isToday = date.toLocaleDateString() === today;
          const dayName = isToday
            ? 'Today'
            : date.toLocaleString('en-US', { weekday: 'short' });
            return (
              <>
                <Box
                  key={index}
                  display='flex'
                  alignItems='center'
                  justifyContent='space-between' // Change this to 'space-between'
                  fontSize={20}
                  width='100%'
                  padding={1}
                >
                  <Box width='20%' textAlign='center'><p>{dayName}</p></Box> {/* Set a specific width and center the text */}
                  <Box width='20%' textAlign='center'>
                    <i
                      className={`wi ${iconClass} weather-icon-gradient`}
                      style={{ fontSize: '1.5em' }}
                    />
                  </Box>
                  <Box width='20%' textAlign='center'><p>{Math.floor(entry.temp_min)}°{temperatureUnit === 'fahrenheit' ? 'F' : 'C'}</p></Box>
                  <Box width='35%'>
                    <div
                      style={{
                        width: '100%', // Set this to 100%
                        height: '10px',
                        background: getGradient(
                          Math.floor(entry.temp_min),
                          Math.floor(entry.temp_max),
                          temperatureUnit
                        ),
                        borderRadius: '20px',
                      }}
                    />
                  </Box>
                  <Box width='20%' textAlign='center'><p>{Math.floor(entry.temp_max)}°{temperatureUnit === 'fahrenheit' ? 'F' : 'C'}</p></Box>
                </Box>
                {index < array.length - 1 && (
                <Divider
                style={{
                  backgroundColor: theme.palette.custom.white, // Use the custom white color
                  marginLeft: '3em',
                  marginRight: '3em',
                }}
              />
              )}
              </>
            );
            
        })}
      </Box>
    </>
  );
};

export default DailyForecast;
