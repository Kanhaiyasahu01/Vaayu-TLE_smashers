import React from 'react';
import { getHealthAdvice } from '../datas/suggestion';
import { FaMask, FaHome, FaWindowMaximize, FaFilter, FaUserFriends } from 'react-icons/fa';
import { getAqiDescription } from '../datas/description';

export const HealthAdvice = ({ aqi }) => {
  const advice = getHealthAdvice(aqi);
  const { borderColor } = getAqiDescription(aqi);

  return (
    <div className="health-advice-container w-8/12 mx-auto pt-12">
      {/* Big Card Container */}
      <div className="p-6 rounded-lg ">
        <h2 className="text-3xl font-bold text-black mb-6 text-center">
          Health Advice
        </h2>

        {/* Advice Container */}
        <div className="flex justify-around flex-wrap gap-2">
          {/* Advice Items */}
          <div className="advice-item flex flex-col items-center text-black transition-transform duration-300 hover:scale-110 ">
            <FaMask className={`text-8xl mb-4 rounded-full  border-4 ${borderColor} p-3 transition-transform duration-300 hover:scale-110` } />
            <p className="text-lg font-semibold">Wear Mask:</p>
            <p className='text-black'>{advice.wearMask}</p>
          </div>
          <div className="advice-item flex flex-col items-center text-black transition-transform duration-300 hover:scale-110">
            <FaHome className={`text-8xl mb-4 rounded-full border-4 ${borderColor} p-3 transition-transform duration-300 hover:scale-110`} />
            <p className="text-lg font-semibold">Stay Indoor:</p>
            <p className='text-black'>{advice.stayIndoor}</p>
          </div>
          <div className="advice-item flex flex-col items-center text-black transition-transform duration-300 hover:scale-110">
            <FaWindowMaximize className={`text-8xl mb-4 rounded-full border-4 ${borderColor} p-3 transition-transform duration-300 hover:scale-110`} />
            <p className="text-lg font-semibold">Windows:</p>
            <p className='text-black'>{advice.windows}</p>
          </div>
          <div className="advice-item flex flex-col items-center text-black transition-transform duration-300 hover:scale-110">
            <FaFilter className={`text-8xl mb-4 rounded-full border-4 ${borderColor} p-3 transition-transform duration-300 hover:scale-110`} />
            <p className="text-lg font-semibold">Use Purifier:</p>
            <p className='text-black'>{advice.usePurifier}</p>
          </div>
          <div className="advice-item flex flex-col items-center text-black transition-transform duration-300 hover:scale-110">
            <FaUserFriends className={`text-8xl mb-4 rounded-full border-4 ${borderColor} p-3 transition-transform duration-300 hover:scale-110`} />
            <p className="text-lg font-semibold">Family Outdoor:</p>
            <p className='text-black'>{advice.familyOutdoor}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
