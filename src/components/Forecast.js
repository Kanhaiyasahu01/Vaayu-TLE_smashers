import React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { SliderCom } from './SliderCom';

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const Forecast = ({ forecastData, city }) => {
  if (!forecastData || !forecastData.list) {
    return <p className="text-center text-red-500">No forecast data available.</p>;
  }

  return (
    <div className="forecast-section mt-10 flex justify-center">
      <div className="w-8/12">
        <h2 className="text-3xl text-center font-bold ">{`Air Quality Forecast for ${capitalizeFirstLetter(city)}`}</h2>

        <SliderCom dataSlider={forecastData}/>
      </div>
    </div>
  );
};
