import 'weather-icons/css/weather-icons.css';

const getWeatherIcon = (code) => {
  switch (code) {
    case '01d': return 'wi-day-sunny';
    case '01n': return 'wi-night-clear';
    case '02d': return 'wi-day-cloudy';
    case '02n': return 'wi-night-alt-cloudy';
    case '03d': return 'wi-day-cloudy-high'; 
    case '03n': return 'wi-night-alt-cloudy-high'; 
    case '04d': return 'wi-cloudy'; 
    case '04n': return 'wi-night-cloudy'; 
    case '09d': return 'wi-day-showers'; 
    case '09n': return 'wi-night-showers'; 
    case '10d': return 'wi-day-rain';
    case '10n': return 'wi-night-rain'; 
    case '11d': return 'wi-day-thunderstorm'; 
    case '11n': return 'wi-night-thunderstorm'; 
    case '13d': return 'wi-day-snow'; 
    case '13n': return 'wi-night-snow'; 
    case '50d': return 'wi-day-fog';
    case '50n': return 'wi-night-fog'; 
    default: return 'wi-na';
  }
};

export default getWeatherIcon;
