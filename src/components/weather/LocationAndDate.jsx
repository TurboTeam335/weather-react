import React from 'react';
import { getWeatherDetails } from '../../utils/weatherInfo';
import {   
  LocationAndDateContainer,
  City,
  DateText,
} from '../../styles/LocationComponents'

const LocationAndDate = ({ weatherData, temperatureUnit }) => { 
  const weatherDetails = getWeatherDetails(weatherData, temperatureUnit); 
  if (!weatherDetails) return null;

  const { city, state, country, date } = weatherDetails; 
  const options = { weekday: 'long', day: 'numeric', month: 'long' };
  const formattedDate = date.toLocaleDateString('en-US', options);

  let location = city;
  if (country === "US") { 
    location += `, ${country}`;
  } else {
    location += `, ${country}`;
  }
  

  return (
    <LocationAndDateContainer className='location-and-date' >
      <City>{location}</City> {/* Display city, state if in US, or city, country otherwise */}
      <DateText>{formattedDate}</DateText>
    </LocationAndDateContainer>
  );
};

export default LocationAndDate;

