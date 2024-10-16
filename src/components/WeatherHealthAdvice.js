import React from 'react';
import { getWeatherHealthAdvice } from '../datas/suggestion';
import { FaTint, FaTshirt, FaSun, FaWind } from 'react-icons/fa';

export const WeatherHealthAdvice = ({ weatherData }) => {
  const advice = getWeatherHealthAdvice(weatherData);

  return (
    <div className="weather-advice-container w-8/12 mx-auto pt-12">
      {/* Big Card Container */}
      <div className="p-6 rounded-lg">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Weather Health Advice
        </h2>

        {/* Advice Container */}
        <div className="flex justify-around flex-wrap gap-2">
          {/* Hydration Advice */}
          <div className="advice-item flex flex-col items-center text-white transition-transform duration-300 hover:scale-110">
            <div className="icon-container hover:scale-110 transition-transform duration-300">
              <FaTint className="text-8xl mb-4 rounded-full border-4 border-blue-500 p-3" />
            </div>
            <p className="text-lg font-semibold">Hydration:</p>
            <p>{advice.hydration}</p>
          </div>

          {/* Clothing Advice */}
          <div className="advice-item flex flex-col items-center text-white transition-transform duration-300 hover:scale-110">
            <div className="icon-container hover:scale-110 transition-transform duration-300">
              <FaTshirt className="text-8xl mb-4 rounded-full border-4 border-yellow-500 p-3" />
            </div>
            <p className="text-lg font-semibold">Clothing:</p>
            <p>{advice.clothing}</p>
          </div>

          {/* Outdoor Activities Advice */}
          <div className="advice-item flex flex-col items-center text-white transition-transform duration-300 hover:scale-110">
            <div className="icon-container hover:scale-110 transition-transform duration-300">
              <FaSun className="text-8xl mb-4 rounded-full border-4 border-orange-500 p-3" />
            </div>
            <p className="text-lg font-semibold">Outdoor Activities:</p>
            <p>{advice.outdoorActivities}</p>
          </div>

          {/* Wind Protection Advice */}
          <div className="advice-item flex flex-col items-center text-white transition-transform duration-300 hover:scale-110">
            <div className="icon-container hover:scale-110 transition-transform duration-300">
              <FaWind className="text-8xl mb-4 rounded-full border-4 border-green-500 p-3" />
            </div>
            <p className="text-lg font-semibold">Wind Protection:</p>
            <p>{advice.windProtection}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
