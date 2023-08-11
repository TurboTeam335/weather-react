import { handleResponse } from './utils';

const apiKey = process.env.REACT_APP_API_KEY;

export const getAirPollution = async (lat, lon) => {
  const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  return fetch(url).then(handleResponse);
};

export const getAirPollutionForecast = async (lat, lon) => {
  const url = `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  return fetch(url).then(handleResponse);
};

export const getAirPollutionHistory = async (lat, lon, start, end) => {
  const url = `http://api.openweathermap.org/data/2.5/air_pollution/history?lat=${lat}&lon=${lon}&start=${start}&end=${end}&appid=${apiKey}`;
  return fetch(url).then(handleResponse);
};
