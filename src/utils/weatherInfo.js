export const getWeatherDetails = weatherData => {
  if (!weatherData || weatherData.list.length === 0) {
    return null;
  }

  const { list, city } = weatherData;
  const { main, wind, weather, clouds, rain, snow, sys } = list[0];
  const date = new Date(list[0].dt * 1000);
  const windSpeedMph = (wind.speed * 2.23694).toFixed(2);

  return {
    city,
    main,
    wind: { ...wind, speed: windSpeedMph },
    weather,
    clouds,
    rain,
    snow,
    date,
  };
};
