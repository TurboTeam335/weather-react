import { saveToLocalStorage, loadFromLocalStorage, removeFromLocalStorage } from '../../utils/localStorage';

// Example usage
const key = 'weatherHistory';

// Saving data
const weatherData = { /* ... some data ... */ };
saveToLocalStorage(key, weatherData);

// Loading data
const loadedWeatherData = loadFromLocalStorage(key);

// Removing data
removeFromLocalStorage(key);
