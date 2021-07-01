import React from "react";

const Home = ({ inputValue, onInputChange, cities, addCity, removeCity }) => {
  return (
    <div className="home">
      <div className="home__control">
        <input
          className="home__input"
          type="text"
          value={inputValue}
          onChange={onInputChange}
        />
        <button
          className="home__button"
          type="button"
          onClick={() => addCity(inputValue)}
        >
          Добавить
        </button>
      </div>
      <div className="home__cities cities">
        {cities.map((city) => (
          <div className="cities__city-item city-item" key={city}>
            {city}
            <button
              className="city-item__remove-button"
              type="button"
              onClick={() => removeCity(city)}
            >
              Удалить
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
