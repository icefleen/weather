const API_KEY = "e033e95b43360a6af0afa45190c21a86";

const fetchWeather = async (city) => {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=ru&units=metric`
  );

  const data = await response.json();

  return data;
};

export default fetchWeather;
