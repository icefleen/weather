import React from "react";
import useWeather from "../hooks/useWeather";

const CityCard = ({ city }) => {
  const { weather, loading, error } = useWeather(city);

  return (
    <div className="city-card">
      <div className="city-card__header">{city}</div>
      <div className="city-card__body">
        {weather && (
          <>
            <div className="city-card__temp">Температура: {weather.temp}</div>
            <div className="city-card__description">{weather.desc}</div>
          </>
        )}
        {error && <div className="city-card__error">Ошибка</div>}
        {loading && <div className="city-card__loading">Загрузка...</div>}
      </div>
    </div>
  );
};

export default CityCard;
