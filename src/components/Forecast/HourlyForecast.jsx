import React, { useState, useEffect } from 'react';
import getWeatherIcon from '../../utils/weatherIcons';
import {
  TodayWeatherContainer,
  ForecastContainer,
  ForecastItem,
} from '../../styles/HourlyForecastStyles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HourlyForecast = ({ weatherData, temperatureUnit }) => {
  // State to manage whether to show the slider
  const [showSlider, setShowSlider] = useState(window.innerWidth < 768);

  // Effect to listen for window resize
  useEffect(() => {
    const handleResize = () => setShowSlider(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!weatherData || !weatherData.list) {
    return null;
  }

  const { list } = weatherData;
  const currentTime = new Date();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const upcomingForecasts = list
    .filter(forecast => {
      const forecastTime = new Date(forecast.localDate);
      return forecastTime >= currentTime;
    })
    .slice(0, 8);

  const renderForecastItems = () => {
    return upcomingForecasts.map((forecast, index) => {
      const date = new Date(forecast.localDate);
      const hours = date.getHours();
      const period = hours < 12 ? 'am' : 'pm';
      const displayHour = hours % 12 === 0 ? 12 : hours % 12;
      const temperature =
        temperatureUnit === 'fahrenheit'
          ? Math.floor(forecast.main.temp)
          : Math.floor(((forecast.main.temp - 32) * 5) / 9);

      const iconClass = getWeatherIcon(forecast.weather[0].icon);

      return (
        <ForecastItem key={index}>
          <p>
            {displayHour}
            {period}
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <i
              className={`wi ${iconClass} weather-icon-gradient`}
              style={{ fontSize: '2.5em' }}
            />
          </div>

          <p>
            {temperature}°{temperatureUnit === 'fahrenheit' ? 'F' : 'C'}
          </p>
        </ForecastItem>
      );
    });
  };

  return (
    <>
      <TodayWeatherContainer>
        <h3>Today's Weather</h3>
      </TodayWeatherContainer>
      <ForecastContainer>
        {showSlider ? (
          <Slider {...settings}>{renderForecastItems()}</Slider>
        ) : (
          <div
            style={{ display: 'flex', flexDirection: 'row', overflowX: 'auto' }}
          >
            {' '}
            {/* Add a container with horizontal direction */}
            {renderForecastItems()}
          </div>
        )}
      </ForecastContainer>
    </>
  );
};

export default HourlyForecast;
