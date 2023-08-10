import { apiKey } from './config';
import { handleResponse } from './utils';

export const fetchHourlyWeather = (city) => {
  return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`)
    .then(handleResponse)
    .then((data) => data.list)
    .catch((error) => {
      console.error('Fetch error:', error);
      throw error;
    });
};

export const fetchWeatherByLocation = (lat, lon) => {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`)
    .then(handleResponse)
    .then((data) => data)
    .catch((error) => {
      console.error('Fetch error:', error);
      throw error;
    });
};

export const fetchWeatherAlerts = (lat, lon) => {
  return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,flags&appid=${apiKey}`)
    .then(handleResponse)
    .then((data) => data.alerts)
    .catch((error) => {
      console.error('Fetch error:', error);
      throw error;
    });
};

export const fetchDailyWeather = (city) => {
  return fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=7&units=imperial&appid=${apiKey}`)
    .then(handleResponse)
    .then((data) => data.list)
    .catch((error) => {
      console.error('Fetch error:', error);
      throw error;
    });
};

