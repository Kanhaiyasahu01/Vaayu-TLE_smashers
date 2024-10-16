import React from 'react';
import { FaTemperatureHigh, FaWind, FaTint, FaTachometerAlt, FaCloud } from 'react-icons/fa';
export const Weather = ({ weatherData }) => {
  if (!weatherData) return null; // If no weather data is available, return null

  // Destructuring weather data for easier use
  const { main, weather, wind } = weatherData;
  const weatherCondition = weather[0]?.description || 'No data'; // Fallback if no description

  return (
    <div className='w-full mx-auto'>
      <div className="weather-section w-8/12 mx-auto pt-12 pb-12">
        {/* Big Card Container */}
        <div className="p-6 rounded-lg ">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">
            Current Weather
          </h2>

          {/* Weather Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-12">
            {/* Temperature */}
            <div className="p-4 rounded-lg shadow-xl bg-white border border-richblack-300 text-black flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-110">
              <FaTemperatureHigh className="text-6xl mb-2 text-black" />
              <p className="text-lg font-semibold text-black">Temperature</p>
              <p className="text-2xl font-bold mb-1">{Math.round(main.temp - 273.15)}°C</p> {/* Convert Kelvin to Celsius */}
            </div>

            {/* Humidity */}
            <div className="p-4 rounded-lg shadow-xl bg-white border border-richblack-300 text-black flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-110">
              <FaTint className="text-6xl mb-2 text-black" />
              <p className="text-lg font-semibold text-black">Humidity</p>
              <p className="text-2xl font-bold mb-1">{main.humidity}%</p>
            </div>

            {/* Wind Speed */}
            <div className="p-4 rounded-lg shadow-xl bg-white border border-richblack-300 text-black flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-110">
              <FaWind className="text-6xl mb-2 text-black" />
              <p className="text-lg font-semibold text-black">Wind Speed</p>
              <p className="text-2xl font-bold mb-1">{wind.speed} m/s</p>
            </div>

            {/* Pressure */}
            <div className="p-4 rounded-lg shadow-xl bg-white border border-richblack-300 text-black flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-110">
              <FaTachometerAlt className="text-6xl mb-2 text-black" />
              <p className="text-lg font-semibold text-black">Pressure</p>
              <p className="text-2xl font-bold mb-1">{main.pressure} hPa</p>
            </div>

            {/* Feels Like Temperature */}
            <div className="p-4 rounded-lg shadow-xl bg-white border border-richblack-300 text-black flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-110">
              <FaTemperatureHigh className="text-6xl mb-2 text-black" />
              <p className="text-lg font-semibold text-black">Feels Like</p>
              <p className="text-2xl font-bold mb-1">{Math.round(main.feels_like - 273.15)}°C</p> {/* Convert Kelvin to Celsius */}
            </div>

            {/* Weather Condition */}
            <div className="p-4 rounded-lg shadow-xl bg-white border border-richblack-300 text-black flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-110">
              <FaCloud className="text-6xl mb-2 text-black" />
              <p className="text-lg font-semibold text-black">Condition</p>
              <p className="text-2xl font-bold mb-1 capitalize">{weatherCondition}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
