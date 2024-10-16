import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const ChartSection = ({ forecastData }) => {
  const processedData = forecastData?.list?.map((entry) => ({
    time: new Date(entry.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    pm25: entry.components.pm2_5,
    aqi: entry.main.aqi,
  }));

  return (
    <div className="chart-section w-10/12 mx-auto">
      <h2 className="text-center text-xl font-bold mb-4 mt-4">Air Pollution Forecast</h2>
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
          <Line type="monotone" dataKey="pm25" stroke="#8884d8" />
          <Line type="monotone" dataKey="aqi" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
