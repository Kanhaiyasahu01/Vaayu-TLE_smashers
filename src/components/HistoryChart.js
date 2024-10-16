import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Format historical data to include both AQI and PM2.5 values
const formatHistoricalData = (historicalData) => {
  if (!historicalData || !historicalData.list) return [];

  return historicalData.list.map((item, index) => ({
    time: new Date(item.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    aqi: item.main.aqi,
    pm25: item.components.pm2_5, // Extract PM2.5 value
  }));
};

export const HistoryChart = ({ historicalData }) => {
  const formattedData = formatHistoricalData(historicalData);

  return (
    <div className='mt-5 w-10/12 mx-auto'>
        <h2 className="text-center text-xl font-bold mb-4 mt-4">Air Pollution History</h2>

        <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={formattedData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        {/* Bar for AQI */}
        <Bar dataKey="aqi" fill="#82ca9d" name="AQI" />
        {/* Bar for PM2.5 */}
        <Bar dataKey="pm25" fill="#8884d8" name="PM2.5" />
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
};
