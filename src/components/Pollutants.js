import React from 'react';
import { FaSmog, FaWind, FaCloud, FaWater, FaRadiation, FaTemperatureLow } from 'react-icons/fa';
import { GlowCapture, Glow } from '@codaworks/react-glow';
import { Tilt } from 'react-tilt';
import { defaultOptions } from '../datas/tilt';
import "../CommonCss/glowingCorner.css"
const pollutantDetails = {
  pm2_5: { name: "PM2.5", icon: <FaSmog />, description: "Particulate Matter 2.5", glowColor: "hsl(0, 100%, 50%)" },
  pm10: { name: "PM10", icon: <FaWind />, description: "Particulate Matter 10", glowColor: "hsl(30, 100%, 50%)" },
  no2: { name: "NO2", icon: <FaCloud />, description: "Nitrogen Dioxide", glowColor: "hsl(60, 100%, 50%)" },
  so2: { name: "SO2", icon: <FaWater />, description: "Sulfur Dioxide", glowColor: "hsl(120, 100%, 50%)" },
  co: { name: "CO", icon: <FaRadiation />, description: "Carbon Monoxide", glowColor: "hsl(240, 100%, 50%)" },
  o3: { name: "O3", icon: <FaTemperatureLow />, description: "Ozone", glowColor: "hsl(300, 100%, 50%)" },
};

export const Pollutants = ({ pollutionData }) => {
  const pollutantKeys = Object.keys(pollutantDetails);

  return (
    <div className='w-full mx-auto'>
        <GlowCapture>
        <Tilt options={defaultOptions}>
          <Glow color='hsl(338.69 100% 48.04%)'>
            <div className="pollutants-section w-8/12 mx-auto mt-12 mb-8 glow:shadow-glow-md glow:bg-glow/50 p-6 rounded-lg shadow-lg border border-richblack-600">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Air Pollutant Levels
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-12">
                {pollutantKeys.map((key) => {
                  const { name, icon, glowColor } = pollutantDetails[key];
                  const level = pollutionData?.list[0]?.components[key] || "N/A";

                  return (
                    <div
                      key={key}
                      className="p-4 rounded-lg shadow-md bg-opacity-10 border border-richblack-600 text-richblack-100 flex flex-col items-center justify-center transition-transform duration-300 transform hover:bg-opacity-50"
                      style={{ '--clr': glowColor }} 
                    >
                      <div className="text-6xl mb-2 text-white">{icon}</div>
                      <h3 className="text-lg text-white">{name}</h3>
                      <p className="text-2xl font-bold mb-1">{level} µg/m³</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Glow>
          </Tilt>

        </GlowCapture>
    </div>
  );
};
