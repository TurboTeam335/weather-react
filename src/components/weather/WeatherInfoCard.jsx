import { getWeatherDetails } from '../../utils/weatherInfo';

const WeatherInfoCard = ({ weatherData, temperatureUnit }) => { // Add temperatureUnit prop
  const weatherDetails = getWeatherDetails(weatherData, temperatureUnit); // Pass temperatureUnit
  if (!weatherDetails) return null;

  const { main, wind, clouds, rain, snow, } = weatherDetails;

  return (
    <div>
      <p>Low {Math.floor(weatherDetails.main.temp_min)}°{temperatureUnit === 'fahrenheit' ? 'F' : 'C'}</p>
      <p>High {Math.floor(weatherDetails.main.temp_max)}°{temperatureUnit === 'fahrenheit' ? 'F' : 'C'}</p>
      
      <p>Humidity {main.humidity}%</p>
      {/* <p>Pressure: {main.pressure} hPa</p> */}
      <p>Wind {Math.floor(weatherDetails.wind.speed)} {temperatureUnit === 'fahrenheit' ? 'mph' : 'kph'}</p> {/* Adjust unit */}
      <p>Cloudiness {clouds ? clouds.all : 0}%</p>
      {rain && <p>Rain {Math.floor(rain['3h'] || rain['1h'])}%</p>}
      {snow && <p>Snow {Math.floor(snow['3h'] || snow['1h'])}%</p>}
    </div>
  );
};

export default WeatherInfoCard;
