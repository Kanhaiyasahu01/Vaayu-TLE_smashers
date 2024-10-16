import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const WeatherForecastGraph = ({ weatherForecastData }) => {
  const processedData = weatherForecastData?.list?.map((entry) => ({
    time: new Date(entry.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    temperature: Math.round(entry.main.temp - 273.15), // Convert from Kelvin to Celsius
    windSpeed: entry.wind.speed,
  }));

  return (
    <div className="chart-section w-10/12 mx-auto">
      <h2 className="text-center text-xl font-bold mb-4 mt-4">Weather Forecast</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={processedData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="temperature" stroke="#ff7300" name="Temperature (°C)" />
          <Line type="monotone" dataKey="windSpeed" stroke="#387908" name="Wind Speed (m/s)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
