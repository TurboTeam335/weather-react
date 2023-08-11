const apiKey = process.env.REACT_APP_API_KEY;

export const getWeatherMapTileUrl = (layer, z, x, y) => {
  const baseUrl = 'https://tile.openweathermap.org/map';
  return `${baseUrl}/${layer}/${z}/${x}/${y}.png?appid=${apiKey}`;
};
