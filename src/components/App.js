
import React from "react";
import '../styles/App.css';
import AutoCompleteCities from "./AutoCompletionCities";

const App = () => {
  const INDIA_CITIES = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai",
    "Kolkata", "Pune", "Ahmedabad", "Surat", "Jaipur", "Kanpur",
    "Nagpur", "Lucknow", "Patna", "Indore", "Thane"
  ];
  return (
    <div>
      {/* Do not remove the main div */}
      <AutoCompleteCities suggestions={INDIA_CITIES} />
    </div>
  )
}

export default App
