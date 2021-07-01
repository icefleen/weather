import { useState, useEffect } from "react";
import fetchWeather from "../api/fetchWeather";

const useWeather = (city) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchWeather(city)
      .then((data) => {
        const weatherData = {
          temp: data.main.temp,
          desc: data.weather[0].description,
        };

        setWeather(weatherData);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [city]);

  return { weather, loading, error };
};

export default useWeather;
