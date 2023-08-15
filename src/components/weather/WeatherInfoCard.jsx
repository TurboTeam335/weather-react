import React from 'react';
import { getWeatherDetails } from '../../utils/weatherInfo';
import {
  WeatherInfoContainer,
  WeatherDetail,
  WeatherDiv
} from '../../styles/WeatherInfoContainer'; 

const WeatherInfoCard = ({ weatherData, temperatureUnit }) => {
  const weatherDetails = getWeatherDetails(weatherData, temperatureUnit);
  if (!weatherDetails) return null;

  const { main, clouds, rain, snow } = weatherDetails;

  return (
    <WeatherInfoContainer>
      <WeatherDiv>
        <WeatherDetail>
          {Math.floor(weatherDetails.main.temp_max)}°
          {temperatureUnit === 'fahrenheit' ? 'F' : 'C'}
        </WeatherDetail>
        <WeatherDetail>High</WeatherDetail>
      </WeatherDiv>
    
      <WeatherDiv>
        <WeatherDetail>
          {Math.floor(weatherDetails.wind.speed)}{' '}
          {temperatureUnit === 'fahrenheit' ? 'mph' : 'kph'}
        </WeatherDetail>
        <WeatherDetail>Wind</WeatherDetail>
      </WeatherDiv>
      <WeatherDiv>
        <WeatherDetail> {main.humidity}%</WeatherDetail>
        <WeatherDetail>Humidity</WeatherDetail>
      </WeatherDiv>
      <WeatherDiv>
        <WeatherDetail>
          {Math.floor(weatherDetails.main.temp_min)}°
          {temperatureUnit === 'fahrenheit' ? 'F' : 'C'}
        </WeatherDetail>
        <WeatherDetail>Low</WeatherDetail>
      </WeatherDiv>
     
      <WeatherDiv>
  {((rain && (rain['3h'] || rain['1h'])) || (snow && (snow['3h'] || snow['1h']))) ? (
    <>
      {rain && (
        <>
          <WeatherDetail>
            {Math.floor(rain['3h'] || rain['1h'])}%
          </WeatherDetail>
          <WeatherDetail>Rain</WeatherDetail>
        </>
      )}
      {snow && (
        <>
          <WeatherDetail>
            {Math.floor(snow['3h'] || snow['1h'])}%
          </WeatherDetail>
          <WeatherDetail>Snow</WeatherDetail>
        </>
      )}
    </>
  ) : (
    <>
      <WeatherDetail>0%</WeatherDetail>
      <WeatherDetail>Rain</WeatherDetail>
    </>
  )}
</WeatherDiv>
<WeatherDiv>
        <WeatherDetail>{clouds ? clouds.all : 0}%</WeatherDetail>
        <WeatherDetail>Cloudiness</WeatherDetail>
      </WeatherDiv>

    </WeatherInfoContainer>
  );
};

export default WeatherInfoCard;
