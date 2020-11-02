import React from 'react';

import { Container } from './styles';

interface ICity {
  city: {
    name: string;
    main: {
      temp: number;
      feels_like: number;
      temp_max: number;
      temp_min: number;
      humidity: number;
    };
    wind: {
      deg: number;
      speed: number;
    };
  };
}

const CityCard = ({ city }: ICity) => {
  console.log(city, 'city');
  return (
    <Container>
      <h1>{city.name}</h1>

      <h2>{Math.round(city.main.temp)}°C</h2>
      <p>Feels like: {Math.round(city.main.feels_like)}°C</p>
      <p>Max temp:{Math.round(city.main.temp_max)}°C</p>
      <p>Min temp: {Math.round(city.main.temp_min)}°C</p>
      <p>Humidity: {city.main.humidity}</p>
      <p>Wind Temp: {city.wind.deg}</p>
      <p>Wind Speed: {city.wind.speed}</p>
    </Container>
  );
};

export default CityCard;
