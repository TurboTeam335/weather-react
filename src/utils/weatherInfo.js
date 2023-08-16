export const getWeatherDetails = (weatherData, temperatureUnit) => {
  if (!weatherData || !weatherData.list || weatherData.list.length === 0) {
    return null;
  }
  

  const { list, city } = weatherData;
  // console.log(city)
  const { main, wind, weather, clouds, rain, snow, sys } = list[0];
  const date = new Date(list[0].dt * 1000);
  // const windSpeedMph = (wind.speed * 2.23694).toFixed(2);
  const temperatureInFahrenheit = main.temp;
  const temperatureInCelsius = (main.temp - 32) * 5 / 9;

  const temperature = temperatureUnit === 'fahrenheit' ? temperatureInFahrenheit : temperatureInCelsius;
  const feelsLikeTemperature = temperatureUnit === 'fahrenheit' ? main.feels_like : (main.feels_like - 32) * 5 / 9;


  const windSpeed =
    temperatureUnit === 'fahrenheit' ? wind.speed * 2.23694 : wind.speed * 3.6;

    return {
      city: city, 
      country: weatherData.country, 
      main: {
      ...main,
      temp: temperature,
      feels_like: feelsLikeTemperature,
      temp_min: temperatureUnit === 'fahrenheit' ? main.temp_min : (main.temp_min - 32) * 5 / 9,
      temp_max: temperatureUnit === 'fahrenheit' ? main.temp_max : (main.temp_max - 32) * 5 / 9,
    },
    wind: { ...wind, speed: windSpeed.toFixed(2) },
    weather,
    clouds,
    rain,
    snow,
    date,
  };
};
