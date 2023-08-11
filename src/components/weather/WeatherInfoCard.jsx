import { getWeatherDetails } from '../../utils/weatherInfo';

const WeatherInfoCard = ({ weatherData }) => {
  const weatherDetails = getWeatherDetails(weatherData);
  if (!weatherDetails) return null;

  const { main, wind, clouds, rain, snow, } = weatherDetails;

  return (
    <div>
      <p>Min Temperature: {main.temp_min}°F</p>
      <p>Max Temperature: {main.temp_max}°F</p>
      <p>Humidity: {main.humidity}%</p>
      {/* <p>Pressure: {main.pressure} hPa</p> */}
      <p>Wind Speed: {wind.speed} mph</p>
      <p>Cloudiness: {clouds ? clouds.all : 0}%</p>
      {rain && <p>Rain: {rain['3h'] || rain['1h']} mm</p>}
      {snow && <p>Snow: {snow['3h'] || snow['1h']} mm</p>}
    </div>
  );
};

export default WeatherInfoCard;
