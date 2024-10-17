// HeatMap.js
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet.heat";
import { cities } from "../datas/cities"; // Import the list of cities
import "leaflet/dist/leaflet.css";

// Function to fetch AQI data for a given city
const fetchAqiData = async (city) => {
  const { lat, lon } = city;
  const apiKey = process.env.REACT_APP_API_KEY;
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`
    );
    const data = await response.json();
    return { ...city, aqi: data.list[0].main.aqi };
  } catch (error) {
    console.error(`Failed to fetch AQI data for ${city.name}:`, error);
    return { ...city, aqi: 0 }; // Return aqi as 0 in case of error
  }
};

// Function to get AQI description and color based on AQI value
const getAqiDescription = (aqi) => {
  switch (aqi) {
    case 1:
      return { description: "Good", color: "green" };
    case 2:
      return { description: "Fair", color: "yellow" };
    case 3:
      return { description: "Moderate", color: "orange" };
    case 4:
      return { description: "Poor", color: "red" };
    case 5:
      return { description: "Very Poor", color: "darkred" };
    default:
      return { description: "Unknown", color: "gray" };
  }
};

// Component to render AQI markers on the map
const AqiMarkersLayer = ({ data }) => {
  const map = useMap();

  useEffect(() => {
    if (!data || data.length === 0) return;

    data.forEach((city) => {
      const { lat, lon, aqi } = city;
      const { description, color } = getAqiDescription(aqi);

      // Create a circle marker for each city
      const marker = L.circleMarker([lat, lon], {
        radius: 10,
        color: color,
        fillColor: color,
        fillOpacity: 0.7,
      });

      // Add a tooltip to display AQI value and description
      marker.bindTooltip(`${city.name}: AQI ${aqi} - ${description}`).openTooltip();

      marker.addTo(map);
    });

    // Cleanup markers on component unmount
    return () => {
      map.eachLayer((layer) => {
        if (layer instanceof L.CircleMarker) {
          map.removeLayer(layer);
        }
      });
    };
  }, [data, map]);

  return null;
};

// Main HeatMap component
export const HeatMap = () => {
  const [aqiData, setAqiData] = useState([]);

  useEffect(() => {
    const fetchAllAqiData = async () => {
      const promises = cities.map((city) => fetchAqiData(city));
      const results = await Promise.all(promises);
      setAqiData(results);
    };

    fetchAllAqiData();
  }, []);

  return (
    <div className="h-screen w-full">
      <MapContainer
        center={[20.5937, 78.9629]} // Center of India
        zoom={5}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <AqiMarkersLayer data={aqiData} />
      </MapContainer>
    </div>
  );
};
