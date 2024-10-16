export const getAqiDescription = (aqi) => {
    switch (aqi) {
      case 1:
        return { description: "Good", borderColor: "border-green-500" };
      case 2:
        return { description: "Fair", borderColor: "border-lightgreen-500" };
      case 3:
        return { description: "Moderate", borderColor: "border-yellow-500" };
      case 4:
        return { description: "Poor", borderColor: "border-orange-500" };
      case 5:
        return { description: "Very Poor", borderColor: "border-red-500" };
      default:
        return { description: "Unknown", borderColor: "border-gray-500" };
    }
  };