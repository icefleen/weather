import React from "react";
import CityCard from "./CityCard";

const Weather = ({ cities }) => {
  return (
    <div className="weather">
      {cities.map((city) => (
        <CityCard city={city} key={city} />
      ))}
    </div>
  );
};

export default Weather;
