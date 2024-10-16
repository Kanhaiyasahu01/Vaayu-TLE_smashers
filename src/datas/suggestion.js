import thunderstormGif from "../assets/weather1/thunderstorm (2) (2).gif";
import drizzleGif from "../assets/weather1/drizzle (1).gif";
import rainGif from "../assets/weather1/rain (1).gif";
import snowGif from "../assets/weather1/snow (1).gif";
import atmosphereGif from "../assets/weather1/atmosphere (1).gif";
import clearSkyGif from "../assets/weather1/clear-sky (1).gif";
import cloudsGif from "../assets/weather1/clouds (1).gif";
import defaultWeatherGif from "../assets/weather1/default-weather (2).gif";

export const getHealthAdvice = (aqi) => {
    let advice = {
        wearMask: "Not required",
        stayIndoor: "Not required",
        windows: "Keep open",
        usePurifier: "Not required",
        familyOutdoor: "Allow outdoor"
    };

    if (aqi === 1) {
        // Good
        advice = {
            wearMask: "Not required",
            stayIndoor: "Not required",
            windows: "Keep open",
            usePurifier: "Not required",
            familyOutdoor: "Allow outdoor"
        };
    } else if (aqi === 2) {
        // Fair
        advice = {
            wearMask: "Not required",
            stayIndoor: "Not required",
            windows: "Keep open",
            usePurifier: "Not required",
            familyOutdoor: "Allow outdoor"
        };
    } else if (aqi === 3) {
        // Moderate
        advice = {
            wearMask: "Recommended for sensitive groups",
            stayIndoor: "Consider staying indoors if you're sensitive",
            windows: "Keep closed if sensitive",
            usePurifier: "Recommended for sensitive groups",
            familyOutdoor: "Sensitive groups should limit outdoor activities"
        };
    } else if (aqi === 4) {
        // Poor
        advice = {
            wearMask: "Recommended",
            stayIndoor: "Recommended for everyone",
            windows: "Keep closed",
            usePurifier: "Recommended",
            familyOutdoor: "Limit outdoor activities"
        };
    } else if (aqi === 5) {
        // Very Poor
        advice = {
            wearMask: "Highly recommended",
            stayIndoor: "Strongly recommended for everyone",
            windows: "Keep closed",
            usePurifier: "Strongly recommended",
            familyOutdoor: "Avoid outdoor activities"
        };
    }

    return advice;
};

export const getWeatherHealthAdvice = (weatherData) => {
    const { temp, wind } = weatherData;
    const temperatureCelsius = Math.round(temp - 273.15); // Convert Kelvin to Celsius
    let advice = {
        hydration: "Normal hydration",
        clothing: "Wear comfortable clothes",
        outdoorActivities: "Safe for outdoor activities",
        windProtection: "No wind protection needed"
    };

    // Temperature-based advice
    if (temperatureCelsius <= 5) {
        advice.hydration = "Keep warm and stay hydrated";
        advice.clothing = "Wear warm clothes, including a coat and gloves";
        advice.outdoorActivities = "Limit outdoor activities due to cold";
    } else if (temperatureCelsius >= 30) {
        advice.hydration = "Drink plenty of water to stay hydrated";
        advice.clothing = "Wear light, breathable clothing";
        advice.outdoorActivities = "Avoid strenuous activities in the heat";
    }

    // Wind speed-based advice
    if (wind.speed > 10) {
        advice.windProtection = "Wear wind-resistant clothing or stay indoors if possible";
        advice.outdoorActivities = "Avoid outdoor activities in strong winds";
    } else if (wind.speed > 5 && wind.speed <= 10) {
        advice.windProtection = "Wear light wind protection";
    }

    return advice;
};

export const getWeatherGif = (weatherConditionCode) => {
    if (weatherConditionCode >= 200 && weatherConditionCode < 300) {
      return thunderstormGif; // Thunderstorm
    } else if (weatherConditionCode >= 300 && weatherConditionCode < 400) {
      return drizzleGif; // Drizzle
    } else if (weatherConditionCode >= 500 && weatherConditionCode < 600) {
      return rainGif; // Rain
    } else if (weatherConditionCode >= 600 && weatherConditionCode < 700) {
      return snowGif; // Snow
    } else if (weatherConditionCode >= 700 && weatherConditionCode < 800) {
      return atmosphereGif; // Atmosphere (fog, mist, etc.)
    } else if (weatherConditionCode === 800) {
      return clearSkyGif; // Clear sky
    } else if (weatherConditionCode >= 801 && weatherConditionCode <= 804) {
      return cloudsGif; // Clouds
    } else {
      return defaultWeatherGif; // Default or unknown weather
    }
  };
  