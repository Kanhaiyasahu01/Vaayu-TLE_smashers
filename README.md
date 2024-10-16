# Vaayu - Air Quality and Weather Monitoring Dashboard by TLE_Smashers

**Vaayu** is a real-time air quality monitoring dashboard that provides detailed information on air pollution, weather, and health advice based on the current air quality index (AQI). It fetches data using the OpenWeatherMap API and presents both real-time and historical insights to help users make informed decisions.

## Features

- **Real-Time Air Quality Monitoring**: Get up-to-date air pollution data by city name.
- **Historical Data**: View past air quality trends.
- **Weather Data**: Real-time weather updates integrated with pollution data.
- **Air Pollution Forecast**: Predict future pollution levels for the selected location.
- **Personalized Health Advice**: Recommendations based on current AQI, tailored to different conditions.
- **Interactive UI**: Designed with React and styled using Tailwind CSS for a responsive and modern experience.
- **Periodic Data Fetching**: Automatic updates every 10 minutes to ensure data freshness.
- **Geolocation Support**: Automatically fetch air quality data based on the user's current location.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend APIs**: OpenWeatherMap (Air Pollution, Weather, Forecast APIs)
- **Geolocation**: Browser Geolocation API
- **Styling**: Tailwind CSS with custom configurations

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/vaayu.git

2. cd vaayu

3. npm install

4. create .env file in the root directory and app your API key.
    REACT_APP_API_KEY = your_api_key_here.
    
5. npm start
