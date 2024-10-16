import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Helper function to get the weather icon URL
const getWeatherIconUrl = (iconCode) => `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

// Capitalizes the first letter of the city name
const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

// Formats the date and time from timestamp
const formatDateTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  }) + ', ' + date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const WeatherForecast = ({ weatherForecastData, city }) => {
  if (!weatherForecastData || !weatherForecastData.list) {
    return <p className="text-center text-red-500">No forecast data available.</p>;
  }

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="weather-forecast mt-10 px-4 md:px-8 w-10/12 mx-auto">
      <h2 className="text-3xl text-center font-bold text-white mb-6">
        {`Weather Forecast for ${capitalizeFirstLetter(city)}`}
      </h2>

      <Slider {...settings}>
        {weatherForecastData.list.map((item, index) => (
            <div
  key={index}
  className="bg-white bg-opacity-10 p-6 m-5 md:p-8 rounded-lg border border-white border-opacity-30 text-center w-full  flex flex-col justify-between transform transition-transform hover:scale-105 hover:bg-opacity-30 overflow-hidden box-border"
  style={{ padding: '1rem', boxSizing: 'border-box' }}
>
  <p className="text-sm font-semibold mb-2">
    {formatDateTime(item.dt)}
  </p>

  <img
    src={getWeatherIconUrl(item.weather[0].icon)}
    alt={item.weather[0].description}
    className="w-24 h-24 mx-auto my-4"  // Larger icon
  />

  <p className="text-4xl font-bold mt-4">
    {Math.round(item.main.temp - 273.15)}°C
  </p>
  
  <p className="text-lg text-gray-300 mt-2">
    {capitalizeFirstLetter(item.weather[0].description)}
  </p>
</div>

        ))}
      </Slider>
    </div>
  );
};
