import React, { useState, useEffect } from 'react';
import { HeroSection } from '../components/HeroSection';
import { Pollutants } from '../components/Pollutants';
import { HealthAdvice } from '../components/HealthAdvice';
import { Weather } from '../components/Weather';
import { Forecast } from '../components/Forecast';
import { History } from '../components/History';
import { ThreeCircles } from 'react-loader-spinner'; // Import the loader
import { ChartSection } from '../components/ChartSection';
import { HistoryChart } from '../components/HistoryChart';
import { WeatherForecast } from '../components/WeatherForcast';
import { WeatherForecastGraph } from '../components/WeatherForecastGraph';
import toast from 'react-hot-toast';
import frame from "../assets/Frame.png";
import { WeatherHealthAdvice } from '../components/WeatherHealthAdvice';
import { useCallback } from 'react';

export const Home = ({ city, initialLocation, showInitialLocation }) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [coordinates, setCoordinates] = useState(null);
  const [pollutionData, setPollutionData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [weatherForecastData, setWeatherForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isAirSelected, setIsAirSelected] = useState(true);

  const getOneDayAgoTimestamp = () => {
    const now = new Date();
    return Math.floor(now.getTime() / 1000) - 24 * 60 * 60;
  };

  const fetchCoordinatesByCity = useCallback(async (city) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch coordinates');
      }
      const data = await response.json();
      if (data.length > 0) {
        setCoordinates({
          lat: data[0].lat,
          lon: data[0].lon,
        });
      } else {
        setError('City not found');
        setCoordinates(null);
      }
    } catch (err) {
      setError(err.message);
      setCoordinates(null);
    } finally {
      setLoading(false);
    }
  }, [API_KEY]);

  const fetchPollutionData = useCallback(async (lat, lon) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch air pollution data');
      }
      const data = await response.json();
      setPollutionData(data);
    } catch (err) {
      setError(err.message);
      setPollutionData(null);
    } finally {
      setLoading(false);
    }
  }, [API_KEY]);

  const fetchForecastData = useCallback(async (lat, lon) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch air pollution forecast data');
      }
      const data = await response.json();
      setForecastData(data);
    } catch (err) {
      setError(err.message);
      setForecastData(null);
    } finally {
      setLoading(false);
    }
  }, [API_KEY]);

  const fetchHistoricalData = useCallback(async (lat, lon) => {
    setLoading(true);
    setError(null);
    try {
      const endTimestamp = Math.floor(Date.now() / 1000);
      const startTimestamp = getOneDayAgoTimestamp();

      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/air_pollution/history?lat=${lat}&lon=${lon}&start=${startTimestamp}&end=${endTimestamp}&appid=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch historical air pollution data');
      }
      const data = await response.json();
      setHistoricalData(data);
    } catch (err) {
      setError(err.message);
      setHistoricalData(null);
    } finally {
      setLoading(false);
    }
  }, [API_KEY]);

  const fetchWeatherData = useCallback(async (lat, lon) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  }, [API_KEY]);

  const fetchWeatherForcastData = useCallback(async (lat, lon) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch weather forecast data');
      }
      const data = await response.json();
      setWeatherForecastData(data);
    } catch (err) {
      setError(err.message);
      setWeatherForecastData(null);
    } finally {
      setLoading(false);
    }
  }, [API_KEY]);

  useEffect(() => {
    if (city) {
      fetchCoordinatesByCity(city);
    } else if (showInitialLocation && initialLocation) {
      setCoordinates(initialLocation);
    }
  }, [city, initialLocation, showInitialLocation, fetchCoordinatesByCity]);

  useEffect(() => {
    if (coordinates) {
      const { lat, lon } = coordinates;
      fetchPollutionData(lat, lon);
      fetchForecastData(lat, lon);
      fetchHistoricalData(lat, lon);
      fetchWeatherData(lat, lon);
      fetchWeatherForcastData(lat, lon);
    }
  }, [
    coordinates,
    fetchPollutionData,
    fetchForecastData,
    fetchHistoricalData,
    fetchWeatherData,
    fetchWeatherForcastData
  ]);

  useEffect(() => {
    if (pollutionData) {
      const aqi = pollutionData.list[0]?.main?.aqi;
      if (aqi) {
        if (aqi >= 3) {
          toast.error("Consider wearing a mask and stay at home");
        } else {
          toast.success("Weather condition is good");
        }
      }
    }
  }, [pollutionData]);

  useEffect(() => {
    let intervalId;
    if (coordinates) {
      const { lat, lon } = coordinates;
      intervalId = setInterval(() => {
        fetchPollutionData(lat, lon);
        fetchForecastData(lat, lon);
        fetchHistoricalData(lat, lon);
        fetchWeatherData(lat, lon);
        fetchWeatherForcastData(lat, lon);
      }, 600000);
    }
    return () => clearInterval(intervalId);
  }, [
    coordinates,
    fetchPollutionData,
    fetchForecastData,
    fetchHistoricalData,
    fetchWeatherData,
    fetchWeatherForcastData
  ]);


  return (
    <div className="home-page relative overflow-hidden">
     {/* Gradient Backgrounds */}
     <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-700 to-transparent opacity-60 blur-3xl z-0" />
  <div className="absolute top-1/4 right-0 transform -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-blue-800 to-transparent opacity-60 blur-3xl z-0" />
  <div className="absolute bottom-0 right-0 transform -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-blue-800 to-transparent opacity-60 blur-3xl z-0" />
  {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-bl from-blue-900 to-transparent opacity-60 blur-3xl " /> */}
  <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-blue-800 to-transparent opacity-60 blur-3xl z-0" />


      {/* Error Handling */}
      {error && (
        <div className="flex justify-center items-center h-screen">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error:</strong>
            <span className="block sm:inline"> {error}</span>
          </div>
        </div>
      )}

      {/* Loader */}
      {loading && !error && ( // Ensure loader isn't shown when there's an error
        <div className="flex justify-center items-center h-screen">
        <ThreeCircles
            visible={true}
            height="100"
            width="100"
            color="#4fa94d"
            ariaLabel="three-circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />
        </div>
      )}

      {/* Content */}
      {!loading && !error && (
        <>
          {/* Hero Section covering AQI index and thought */}
          <HeroSection 
          isAirSelected={isAirSelected}
            setIsAirSelected={setIsAirSelected}
            aqi={pollutionData?.list[0]?.main?.aqi} 
            city={city || (showInitialLocation && initialLocation ? 'Your Location' : '')}
            isCurrentLocation={!city && showInitialLocation} 
            weatherData={weatherData}
          />
          {
            isAirSelected ? (
              <>
                {/* Pollutants Section displaying components of air pollution */}
                <Pollutants pollutionData={pollutionData} />

                        {/* Suggestion/Health Advice Section with background frame */}
            <div className="w-full bg-richwhite bg-repeat-x" style={{ backgroundImage: `url(${frame})` }}>
              <HealthAdvice aqi={pollutionData?.list[0]?.main?.aqi} />
              </div>
              
          {/* Forecast Section displaying air pollution forecast */}
          <Forecast forecastData={forecastData} city={city} />
          
          <ChartSection forecastData={forecastData}/>
          {/* Historical Section displaying air pollution history */}
          <History historicalData={historicalData} city={city} />

          <HistoryChart historicalData={historicalData} />
   

              </>
            ):
            (
              <>

                {/* Weather Section with white background */}
                <div className="w-full bg-richwhite">
                  <Weather weatherData={weatherData} />
                </div>

                <div>
                  <WeatherHealthAdvice weatherData={weatherData}/>
                </div>

                <div className='w-full'>
                  <WeatherForecast weatherForecastData={weatherForecastData} city={city}/>
                </div>

                <div>
                  <WeatherForecastGraph weatherForecastData={weatherForecastData} />
                </div>
              </>
            )
          }
    

         
   


          
        </>
      )}
    </div>
  );
};
