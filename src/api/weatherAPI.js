import { handleResponse } from './utils';

const apiKey = process.env.REACT_APP_API_KEY;
const baseUrl = 'https://api.openweathermap.org/data/2.5';

export const fetchHourlyWeather = location => {
  let queryParam;
  if (/^\d+$/.test(location)) { // Check if it's a zip code
    queryParam = `zip=${location},us`; // Assuming USA for zip code; adjust if needed
  } else {
    const [city, state, country] = location.split(','); // Split location into parts
    queryParam = `q=${city}${state ? ', ' + state : ''}${country ? ', ' + country : ''}`; // Construct query based on available parts
  }

  const url = `${baseUrl}/forecast?${queryParam}&units=imperial&appid=${apiKey}`;
  return fetch(url)
    .then(handleResponse)
    .then(data => ({ list: data.list, city: data.city.name }))
    .catch(error => {
      console.error('Fetch error:', error);
      throw error;
    });
};



export const fetchDailyWeather = city => {
  const url = `${baseUrl}/forecast/daily?q=${city}&cnt=7&units=imperial&appid=${apiKey}`;
  return fetch(url)
    .then(handleResponse)
    .then(data => ({ list: data.list, city: data.city.name }))
    .catch(error => {
      console.error('Fetch error:', error);
      throw error;
    });
};

export const fetchWeatherByLocation = (lat, lon) => {
  const url = `${baseUrl}/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
  return fetch(url)
    .then(handleResponse)
    .then(data => data)
    .catch(error => {
      console.error('Fetch error:', error);
      throw error;
    });
};

export const fetchWeatherAlerts = (lat, lon) => {
  const url = `${baseUrl}/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,flags&appid=${apiKey}`;
  return fetch(url)
    .then(handleResponse)
    .then(data => data.alerts)
    .catch(error => {
      console.error('Fetch error:', error);
      throw error;
    });
};
