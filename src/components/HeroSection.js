import React from 'react';
import ReactSpeedometer from "react-d3-speedometer";
import { TypeAnimation } from 'react-type-animation';
import { IoLocationOutline } from "react-icons/io5";
import { getAqiDescription } from '../datas/description';
import goodGif from "../assets/Good.gif";
import fairGif from "../assets/Fair.gif";
import moderateGif from "../assets/Moderate.gif";
import poorGif from "../assets/Poor.gif";
import veryPoorGif from "../assets/very poor.gif";
import pattern from "../assets/pattern.png";
import { defaultOptions } from '../datas/tilt';
import { Tilt } from 'react-tilt';
import { getWeatherGif } from '../datas/suggestion';
import { WiEarthquake } from 'react-icons/wi';
import atmosphere from "../assets/weather/atmosphere.gif";
import clearSky from "../assets/weather/clear-sky.gif"
import clouds from "../assets/weather/clouds.gif"
import defaultWeather from "../assets/weather/default-weather.gif"
import drizzle from "../assets/weather/drizzle.gif"
import rain from "../assets/weather/rain.gif"
import snow from "../assets/weather/snow.gif"
import thunderstorm from "../assets/weather/thunderstorm.gif"

export const HeroSection = ({isAirSelected, setIsAirSelected,aqi, city, isCurrentLocation,weatherData }) => {  
  const aqiGifMap = {
    1: goodGif,
    2: fairGif,
    3: moderateGif,
    4: poorGif,
    5: veryPoorGif,
  };

  const gifSrc = aqiGifMap[aqi] || null;
  const weatherGifSource = getWeatherGif(weatherData?.weather[0]?.id);
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const { description } = getAqiDescription(aqi);

  return (
    <div className='relative w-10/12 mx-auto overflow-hidden'>

      {/* Toggle Button */}
      <div className="flex justify-center mt-4 mb-4">
  {/* Parent Div for Toggle Switch */}
  <div className="relative flex items-center bg-gray-200 w-36 h-10 rounded-full p-1 transition-all duration-300">
    {/* Toggle Background */}
    <div
      className={`absolute top-1/2 transform -translate-y-1/2 left-1 right-1 w-[calc(50%-4px)] h-8 rounded-full transition-all duration-300 ${
        isAirSelected ? 'bg-blue-500 translate-x-0' : 'bg-blue-500 translate-x-full'
      }`}
    ></div>

    {/* Air Button */}
    <button
      onClick={() => setIsAirSelected(true)}
      className={`flex-1 z-10 text-center text-sm font-semibold transition-all duration-300 ${
        isAirSelected ? 'text-white' : 'text-gray-800'
      }`}
    >
      Air
    </button>

    {/* Weather Button */}
    <button
      onClick={() => setIsAirSelected(false)}
      className={`flex-1 z-10 text-center text-sm font-semibold transition-all duration-300 ${
        !isAirSelected ? 'text-white' : 'text-gray-800'
      }`}
    >
      Weather
    </button>
  </div>
</div>


      <div className="relative w-full md:w-10/12 mx-auto my-6 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between animate-fade-in">
        {/* Left Side: Text Content */}
        <div className="flex flex-col items-center md:items-start md:w-1/2 text-center md:text-left mb-4 space-y-4 animate-slide-up">
          {/* City Name at the Top Left */}
          <div className="flex flex-row items-center justify-center md:justify-start gap-2">
            <IoLocationOutline className="text-3xl md:text-4xl lg:text-5xl text-richblack-200" />
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-richblack-200">
              {isCurrentLocation ? 'Your Current Location' : capitalizeFirstLetter(city)}
            </p>
          </div>

          {/* Conditional rendering for Air/Weather section */}
          <div>
            {isAirSelected ? (
              <p className="text-lg font-semibold text-richblack-yellow mt-5">
                <span className="font-bold text-blue-100 text-2xl md:text-3xl block md:inline">Breathe Easy, </span>
                <span className="text-yellow-100 text-2xl md:text-3xl block md:inline">
                  <TypeAnimation
                    sequence={[
                      'Live Better',
                      1500,
                      'Enjoy Clean Air',
                      1500,
                      'Stay Healthy',
                      1500,
                    ]}
                    wrapper="span"
                    cursor={true}
                    speed={50}
                    style={{ fontSize: '1em', fontFamily: 'Inter, sans-serif' }}
                    repeat={Infinity}
                  />
                </span>
                <br />
                <span className="block mt-5 text-base md:text-lg text-richblack-300">
                  Breathing clean air is essential for good health. <br />
                  Stay informed about your local air quality and protect your well-being.
                </span>
              </p>
            ) : (
              <p className="text-lg font-semibold text-richblack-yellow mt-5">
                <span className="font-bold text-blue-100 text-2xl md:text-3xl block md:inline">Weather Watch, </span>
                <span className="text-yellow-100 text-2xl md:text-3xl block md:inline">
                  <TypeAnimation
                    sequence={[
                      'Be Prepared',
                      1500,
                      'Stay Safe',
                      1500,
                      'Dress Smart',
                      1500,
                      'Check the Forecast',
                      1500,
                      'Plan Your Day',
                      1500,
                    ]}
                    wrapper="span"
                    cursor={true}
                    speed={50}
                    style={{ fontSize: '1em', fontFamily: 'Inter, sans-serif' }}
                    repeat={Infinity}
                  />
                </span>
                <br />
                <span className="block mt-5 text-base md:text-lg text-richblack-300">
                  Stay updated on the weather to prepare for your day. <br />
                  Know the forecast and adjust your plans to stay comfortable.
                </span>
              </p>
            )}
          </div>
        </div>

        {/* Right Side: AQI/Weather Section */}
        <div className="flex flex-col items-center md:w-1/2 space-y-4">
          {isAirSelected ? (
            <div className='flex flex-col items-center md:flex-row justify-center space-x-4'>
              {/* AQI GIF */}
              <div className="flex justify-center items-center mb-4">
                {gifSrc && (
                  <img
                    src={gifSrc}
                    alt={`Air Pollution Data`}
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 object-cover rounded-full"
                  />
                )}
              </div>

              {/* AQI Speedometer */}
              <Tilt options={defaultOptions}>
                <div className="flex justify-center items-center">
                  <ReactSpeedometer
                    value={aqi + 0.5}
                    minValue={1}
                    maxValue={6}
                    segments={5}
                    customSegmentStops={[1, 2, 3, 4, 5, 6]}
                    segmentColors={["#00FF00", "#9ACD32", "#FFFF00", "#FFA500", "#FF0000"]}
                    needleColor="#0000FF"
                    currentValueText={`AQI: ${description}`}
                    textColor="#ffffff"
                    height={window.innerWidth < 768 ? 150 : 200}
                    width={window.innerWidth < 768 ? 200 : 300}
                    transitionDuration={1000}
                    animate={true}
                  />
                </div>
              </Tilt>
            </div>
          ) : (
            <div className="flex justify-center items-center ">
  {/* Weather GIF */}
  {weatherGifSource && (
    <img
      src={weatherGifSource}
      alt="Weather Data"
      className=""
    />
  )}
</div>
          )}
        </div>
      </div>
    </div>
  );
};
