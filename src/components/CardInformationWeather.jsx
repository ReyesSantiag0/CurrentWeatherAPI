/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { petitionWeatherCity } from "../helpers/apiOpenWeather";

export const CardInformationWeather = ({ lat, lon }) => {
  const [cityClimateData, setCityClimateData] = useState([]);

  const fetchData = async () => {
    try {
      const cityClimate = await petitionWeatherCity(lat, lon);
      setCityClimateData(cityClimate);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [lat, lon]);

  const actualDate = new Date().toLocaleString();

  return (
    <>
      <div className="container py-3" style={{ maxWidth: "500px" }}>
        <p>Localización: </p>
        {cityClimateData.map((city) => (
          <div className="card text-center" key={city.id}>
            <div className="card-body">
              <h5 className="card-title">
                {city.name} - {city.country}
              </h5>
              <p>{actualDate}</p>
              <hr />
              <div className="row">
                <div className="col">
                  <div className="row">
                    <h1>
                      {(city.temp - 273).toFixed(0)}°C
                      <img
                        src={`http://openweathermap.org/img/wn/${city.icon}.png`}
                        alt="Weather Icon"
                      />
                    </h1>
                    <h5>{city.description}</h5>
                  </div>

                  <hr />

                  <div className="row">
                    <p>
                      Sensación térmica: {(city.feels_like - 273).toFixed(0)}°C
                    </p>
                  </div>

                  <hr />

                  <div className="row">
                    <p>Nubosidad: {city.clouds}%</p>
                  </div>
                </div>

                <div className="col">
                  <div className="row">
                    <p>
                      Temperatura máxima: {(city.temp_max - 273).toFixed(0)}°C
                    </p>
                    <p>
                      Temperatura mínima: {(city.temp_min - 273).toFixed(0)}°C
                    </p>
                  </div>

                  <hr />

                  <div className="row">
                    <p>Humedad: {city.humidity}%</p>
                  </div>

                  <hr />

                  <div className="row">
                    <p>Presión: {city.sea_level}hPa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
