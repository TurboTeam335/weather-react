import { apiKey } from './config';
import { handleResponse } from './utils';

export const forecastWeather = (city) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => data.list.filter((item, index) => index % 8 === 0));
};
