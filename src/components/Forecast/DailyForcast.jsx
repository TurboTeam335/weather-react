import React from 'react';
import { Box, Divider } from '@mui/material';
import getWeatherIcon from '../../utils/weatherIcons';
import { getGradient } from '../../styles/temperatureColors';
import { useTheme } from '@mui/material/styles';
import {
  StyledBox,
  DailyContainer,
  DailyItemContainer,
} from '../../styles/DailyForecastStyles';

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
    // if (date === today) return acc;
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
      <StyledBox>
        <h3>5-Day Forecast</h3>
      </StyledBox>
      <DailyContainer>
        {Object.values(dailyData).map((entry, index, array) => {
          const iconClass = getWeatherIcon(entry.icon);
          const date = new Date(entry.date);
          const isToday = date.toLocaleDateString() === today;
          const dayName = isToday
            ? 'Today'
            : date.toLocaleString('en-US', { weekday: 'short' });
          return (
            <>
              <DailyItemContainer key={index}>
                <Box width='20%' textAlign='center'>
                  <p>{dayName}</p>
                </Box>{' '}
                {/* Set a specific width and center the text */}
                <Box width='20%' textAlign='center'>
                  <i
                    className={`wi ${iconClass} weather-icon-gradient`}
                    style={{ fontSize: '1.5em' }}
                  />
                </Box>
                <Box width='20%' textAlign='center'>
                  <p>
                    {Math.floor(entry.temp_min)}°
                    {temperatureUnit === 'fahrenheit' ? 'F' : 'C'}
                  </p>
                </Box>
                <Box width='35%'>
                  <div
                    className='gradient-box'
                    style={{
                      width: '100%', 
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
                <Box width='20%' textAlign='center'>
                  <p>
                    {Math.floor(entry.temp_max)}°
                    {temperatureUnit === 'fahrenheit' ? 'F' : 'C'}
                  </p>
                </Box>
              </DailyItemContainer>
              {index < array.length - 1 && (
                <Divider
                sx={{
                  backgroundColor: theme.palette.custom.white, 
                  marginLeft: '3em',
                  marginRight: '3em',
                
                  '@media (max-width: 768px)': {
                    marginLeft: '2em', 
                    marginRight: '2em',
                  },

                  '@media (max-width: 480px)': {
                    marginLeft: '.5em', 
                    marginRight: '.5em',
                  },
                }}
              />
              
              )}
            </>
          );
        })}
      </DailyContainer>
    </>
  );
};

export default DailyForecast;
