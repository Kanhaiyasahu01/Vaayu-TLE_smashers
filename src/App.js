import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { HeatMap } from "./pages/HeatMap";
import { Footer } from "./components/Footer";
import { Info } from "./pages/Info";
import toast from 'react-hot-toast';

function App() {
  const [city, setCity] = useState("");
  const [initialLocation, setInitialLocation] = useState(null);

  const handleCitySearch = (searchCity) => {
    setCity(searchCity);
  };

  // Fetch initial location using Geolocation API
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setInitialLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
          toast.success("Showing air quality data for your current location.");
        },
        (error) => {
          console.error("Geolocation error: ", error);
          toast.error("Could not fetch your location. Please enter a city.");
        }
      );
    } else {
      toast.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className="relative min-h-screen text-white font-inter bg-richblack-900">
      {/* Main content wrapper */}
      <div className="relative z-10 w-full mx-auto">
        <Navbar onCitySearch={handleCitySearch} />

        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                city={city} 
                initialLocation={initialLocation} 
                showInitialLocation={!city} // Show initial location if no city is searched
              />
            } 
          />
          <Route path="/about" element={<About />} />
          <Route path="/heatmap" element={<HeatMap />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
