import React from 'react'

export const Info = () => {
  return (
    <div className="info-page container mx-auto px-4 py-8">
      
      {/* Air Pollution Overview */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Air Pollution Overview</h2>
        <p className="mb-6">
          Air pollution consists of various harmful components, including particulate matter (PM), carbon monoxide (CO), nitrogen dioxide (NO2), and ozone (O3). Monitoring air quality is essential to mitigate health risks.
        </p>
        <h3 className="text-2xl font-semibold mb-2">Key Air Pollutants</h3>
        <ul className="list-disc list-inside">
          <li><strong>PM2.5:</strong> Fine particles that pose serious health risks when inhaled.</li>
          <li><strong>PM10:</strong> Larger particles that affect respiratory functions.</li>
          <li><strong>CO (Carbon Monoxide):</strong> Reduces the amount of oxygen in the bloodstream.</li>
          <li><strong>NO2 (Nitrogen Dioxide):</strong> A significant component of smog, affecting lungs.</li>
          <li><strong>O3 (Ozone):</strong> Ground-level ozone, which harms lung tissue and plants.</li>
          <li><strong>SO2 (Sulfur Dioxide):</strong> Causes acid rain and respiratory issues.</li>
        </ul>
      </section>

      {/* Weather Overview */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Weather Overview</h2>
        <p className="mb-6">
          Weather data provides vital information about the environment, including temperature, humidity, wind speed, and forecast.
        </p>
        <h3 className="text-2xl font-semibold mb-2">Key Weather Components</h3>
        <ul className="list-disc list-inside">
          <li><strong>Temperature:</strong> Measures the heat in the atmosphere, which affects daily activities and health.</li>
          <li><strong>Humidity:</strong> Indicates the amount of moisture in the air, influencing comfort levels.</li>
          <li><strong>Wind Speed:</strong> Determines how fast air moves and impacts weather conditions like storms.</li>
          <li><strong>Forecast:</strong> Predicts upcoming weather conditions to help in planning activities and safety.</li>
        </ul>
      </section>

      {/* Health Advice */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Health Advice</h2>
        <p className="mb-6">
          Health recommendations are based on air quality and weather data to help you stay safe and healthy.
        </p>
        <h3 className="text-2xl font-semibold mb-2">Health Tips Based on Air Quality</h3>
        <ul className="list-disc list-inside">
          <li><strong>Good (AQI 1):</strong> Air quality is satisfactory. No precautions are needed.</li>
          <li><strong>Fair (AQI 2):</strong> Air quality is generally acceptable, but sensitive individuals should limit outdoor exposure.</li>
          <li><strong>Moderate (AQI 3):</strong> Sensitive groups may experience discomfort. Consider wearing a mask if sensitive to pollution.</li>
          <li><strong>Poor (AQI 4):</strong> Health effects may be felt by the general public. It is advisable to limit outdoor activities and wear a mask.</li>
          <li><strong>Very Poor (AQI 5):</strong> Avoid outdoor activities. Stay indoors, wear a mask, and use air purifiers if possible.</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-6 mb-2">Weather Health Tips</h3>
        <ul className="list-disc list-inside">
          <li><strong>High Humidity:</strong> Drink plenty of water and avoid strenuous activities outdoors.</li>
          <li><strong>Strong Winds:</strong> Secure outdoor objects and avoid walking in open spaces.</li>
          <li><strong>Cold Weather:</strong> Wear layers of clothing to protect against hypothermia and frostbite.</li>
        </ul>
      </section>

      {/* Data Sources */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Data Sources</h2>
        <p>
          This application integrates real-time data from the OpenWeatherMap API to fetch air pollution, weather data, and forecasts. This information helps users make informed decisions based on current environmental conditions.
        </p>
      </section>
      
    </div>
  );
}
