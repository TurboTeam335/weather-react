import { getWeatherDetails } from '../../utils/weatherInfo';

const WeatherInfoCard = ({ weatherData }) => {
  const weatherDetails = getWeatherDetails(weatherData);
  if (!weatherDetails) return null;

  const { main, wind, clouds, rain, snow, } = weatherDetails;

  return (
    <div>
      <p>Low {Math.floor(main.temp_min)}°F</p>
      <p>High {Math.floor(main.temp_max)}°F</p>
      
      <p>Humidity {main.humidity}%</p>
      {/* <p>Pressure: {main.pressure} hPa</p> */}
      <p>Wind {Math.floor(wind.speed)} mph</p>
      <p>Cloudiness {clouds ? clouds.all : 0}%</p>
      {rain && <p>Rain {Math.floor(rain['3h'] || rain['1h'])}%</p>}
      {snow && <p>Snow {Math.floor(snow['3h'] || snow['1h'])}%</p>}
    </div>
  );
};

export default WeatherInfoCard;
