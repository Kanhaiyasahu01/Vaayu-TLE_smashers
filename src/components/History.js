import React from 'react';
import { SliderCom } from './SliderCom';
import 'react-horizontal-scrolling-menu/dist/styles.css';

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const History = ({ historicalData, city }) => {
  if (!historicalData || !historicalData.list) {
    return <p className="text-center text-red-500">No historical data available.</p>;
  }

  return (
    <div className="history-section flex justify-center mt-10">
      <div className="w-8/12">
        <h2 className="text-3xl text-center font-bold">{`Historical Air Quality Data for ${capitalizeFirstLetter(city)}`}</h2>

        <SliderCom dataSlider={historicalData} />
      </div>
    </div>
  );
};
