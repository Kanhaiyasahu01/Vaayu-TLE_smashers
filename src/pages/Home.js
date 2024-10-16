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


  // new 
  const [isAirSelected, setIsAirSelected] = useState(true);

  const getOneDayAgoTimestamp = () => {
    const now = new Date();
    return Math.floor(now.getTime() / 1000) - 24 * 60 * 60; // Subtracting 1 day in seconds
  };

  const fetchCoordinatesByCity = async (city) => {
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
  };

  const fetchPollutionData = async (lat, lon) => {
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
      // console.log('Printing Pollution data');
      // console.log(data);
    } catch (err) {
      setError(err.message);
      setPollutionData(null);
    } finally {
      setLoading(false);
    }
  };

  const fetchForecastData = async (lat, lon) => {
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
      // console.log('Printing Forecast data');
      // console.log(data);
    } catch (err) {
      setError(err.message);
      setForecastData(null);
    } finally {
      setLoading(false);
    }
  };

  const fetchHistoricalData = async (lat, lon) => {
    setLoading(true);
    setError(null);
    try {
      const endTimestamp = Math.floor(Date.now() / 1000); // Current time in UNIX timestamp
      const startTimestamp = getOneDayAgoTimestamp(); // 1 day ago from the current time in UNIX timestamp

      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/air_pollution/history?lat=${lat}&lon=${lon}&start=${startTimestamp}&end=${endTimestamp}&appid=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch historical air pollution data');
      }
      const data = await response.json();
      setHistoricalData(data);
      // console.log('Printing Historical data');
      // console.log(data);
    } catch (err) {
      setError(err.message);
      setHistoricalData(null);
    } finally {
      setLoading(false);
    }
  };

  const fetchWeatherData = async (lat, lon) => {
    setLoading(true);
    setError(null); // Reset error
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
      setWeatherData(data);
      console.log('Printing weather data');
      console.log(data);
    } catch (err) {
      setError(err.message);
      setWeatherData(null); // Clear data on error
    } finally {
      setLoading(false);
    }
  };


  const fetchWeatherForcastData = async (lat, lon) => {
    setLoading(true);
    setError(null); // Reset error
    try {
      const response = await fetch(
        // `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
      setWeatherForecastData(data);
      console.log('Printing weather forcast data');
      console.log(data);
    } catch (err) {
      setError(err.message);
      setWeatherForecastData(null); // Clear data on error
    } finally {
      setLoading(false);
    }
  };



 
  useEffect(() => {
    if (city) {
      fetchCoordinatesByCity(city);
    } else if (showInitialLocation && initialLocation) {
      setCoordinates(initialLocation);
    }
  }, [city, initialLocation, showInitialLocation]);

  useEffect(() => {
    if (coordinates) {
       const { lat, lon } = coordinates;
       fetchPollutionData(lat, lon);
       fetchForecastData(lat, lon);
       fetchHistoricalData(lat, lon);
       fetchWeatherData(lat, lon);
       fetchWeatherForcastData(lat, lon);
    }
 }, [coordinates]);
 

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
  }, [pollutionData]);useEffect(() => {
  let intervalId;

  if (coordinates) {
    const { lat, lon } = coordinates;
    fetchPollutionData(lat, lon);
    fetchForecastData(lat, lon);
    fetchHistoricalData(lat, lon);
    fetchWeatherData(lat, lon);
    fetchWeatherForcastData(lat, lon);

    // Set interval to refetch every 10 minutes
    intervalId = setInterval(() => {
      fetchPollutionData(lat, lon);
      fetchForecastData(lat, lon);
      fetchHistoricalData(lat, lon);
      fetchWeatherData(lat, lon);
      fetchWeatherForcastData(lat, lon);
    }, 600000); // 600000 ms = 10 minutes
  }

  return () => clearInterval(intervalId); // Cleanup interval on unmount or when coordinates change
}, [coordinates]);


useEffect(() => {
  let intervalId;

  if (coordinates) {
    const { lat, lon } = coordinates;
    fetchPollutionData(lat, lon);
    fetchForecastData(lat, lon);
    fetchHistoricalData(lat, lon);
    fetchWeatherData(lat, lon);
    fetchWeatherForcastData(lat, lon);

    // Set interval to refetch every 10 minutes
    intervalId = setInterval(() => {
      fetchPollutionData(lat, lon);
      fetchForecastData(lat, lon);
      fetchHistoricalData(lat, lon);
      fetchWeatherData(lat, lon);
      fetchWeatherForcastData(lat, lon);
    }, 600000); // 600000 ms = 10 minutes
  }

  return () => clearInterval(intervalId); // Cleanup interval on unmount or when coordinates change
}, [coordinates]);


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
