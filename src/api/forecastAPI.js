import { handleResponse } from './utils';

const apiKey = process.env.REACT_APP_API_KEY;

export const forecastWeather = (city) => {
  const baseUrl = `https://api.openweathermap.org/data/2.5/forecast`;

  const url = `${baseUrl}?q=${city}&units=imperial&appid=${apiKey}`;

  return fetch(url)
    .then((response) => handleResponse(response))
    .then((data) => {

      const dailyForecast = data.list.filter((item, index) => index % 8 === 0);

      return {
        city: data.city.name,
        country: data.city.country,
        forecast: dailyForecast.map(item => ({
          date: item.dt_txt,
          temperature: item.main.temp,
          weather: item.weather[0].description,
          icon: item.weather[0].icon,
        })),
      };
    })
    .catch((error) => {
      console.error("An error occurred while fetching the forecast:", error);
    });
};
