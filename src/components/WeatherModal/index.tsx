import React, { useEffect, useState } from 'react';
import { FiArrowLeft, FiX } from 'react-icons/fi';
import CityCard from '../CityCard';

import { Container } from './styles';

interface WeatherData {
  data: {
    id: number;
    name: string;
    weather: WheaterDescription[];
    wind: {
      deg: number;
      speed: number;
    };
  };
}

interface WheaterDescription {
  id: number;
  description: string;
  main: string;
}

const WeatherModal = ({ lat, lng }: any) => {
  console.log(lat, lng, 'aqui');
  const [cityList, setCityList] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [pickedCity, setPickedCity] = useState<any>();
  const [showCity, setShowCity] = useState<boolean>(false);
  const [closeModal, setCloseModal] = useState<boolean>(false);

  useEffect(() => {
    try {
      fetch(
        `http://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lng}&units=metric&cnt=15&APPID=${process.env.NEXT_PUBLIC_WEATHER_APP_ID}`
      ).then(response => {
        response.json().then(data => {
          setCityList(data.list);
          setLoading(false);
          console.log(data.list, 'data');
        });
      });
    } catch (err) {
      console.log(err, 'error');
    }
  }, []);

  function cityLink({ city }) {
    try {
      setPickedCity(city);
      setShowCity(true);
    } catch (error) {
      return 'Error loading your city! Try again';
    }
  }

  function closeButton() {
    setCloseModal(true);
    console.log(closeModal, 'modal');
  }

  return (
    <>
      {closeModal === false ? (
        <Container>
          <div>
            {showCity === false ? (
              <h1>Choose a City</h1>
            ) : (
              <h1>Check the Weather</h1>
            )}

            {!showCity ? null : (
              <button onClick={() => setShowCity(false)}>
                <FiArrowLeft size={25} color="#FFFFFF" />
                <p>back to list</p>
              </button>
            )}
            <button onClick={closeButton}>
              <FiX size={25} color="#FFFFFF" />
              <p>close window</p>
            </button>
          </div>

          {showCity === false ? (
            <ul>
              {loading
                ? null
                : cityList.map(city => {
                    return (
                      <li key={city.id}>
                        <div>
                          <button onClick={() => cityLink({ city })}>
                            {city.name}
                          </button>
                          <p>{city.main.temp}°C</p>
                          <p>MAX {city.main.temp_max}°C</p>
                          <p>MIN {city.main.temp_min}°C</p>
                        </div>
                      </li>
                    );
                  })}
            </ul>
          ) : (
            <CityCard city={pickedCity} />
          )}
        </Container>
      ) : null}
    </>
  );
};

export default WeatherModal;
