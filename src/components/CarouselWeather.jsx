/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import modalImage from "../assets/modalImage.jpg";
import { petitionForecastCity } from "../helpers/apiOpenWeather";
import { CardForecastWeather } from "./CardForecastWeather";

export const CarouselWeather = ({ latCity, lonCity }) => {
  const [cityWeatherForecastData, setCityWeatherForecastData] = useState([]);

  const fetchData = async () => {
    try {
      const cityWeatherForecast = await petitionForecastCity(latCity, lonCity);
      setCityWeatherForecastData(cityWeatherForecast);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [latCity, lonCity]);

  return (
    <>
      <div
        className="container"
        style={{ maxWidth: "500px", position: "relative" }}
      >
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {cityWeatherForecastData.map((city, index) => (
              <div
                key={city.dt}
                className={`carousel-item ${
                  index === 0 ? "active" : ""
                } background-image`}
                style={{ backgroundImage: `url(${modalImage})` }}
              >
                <div className="container text-center">
                  <div className="row align-items-start">
                    <div className="col">
                      <div
                        key={city.dt}
                        className="card my-3 border-0"
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          color: "white",
                        }}
                      >
                        <div className="card-body">
                          <h5 className="card-title">{city.dt_txt}</h5>
                          <h1>
                            {city.temp.toFixed(0)}°C
                            <img
                              src={`http://openweathermap.org/img/wn/${city.icon}.png`}
                              alt="Weather Icon"
                            />
                          </h1>
                          <p className="card-text">{city.description}</p>
                          <p className="card-text">
                            {city.name} - {city.country}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div
                        key={city.dt}
                        className="card my-3 border-0"
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          color: "white",
                        }}
                      >
                        <div className="card-body">
                          <h5 className="card-title">{city.dt_txt}</h5>
                          <h1>
                            {city.temp.toFixed(0)}°C
                            <img
                              src={`http://openweathermap.org/img/wn/${city.icon}.png`}
                              alt="Weather Icon"
                            />
                          </h1>
                          <p className="card-text">{city.description}</p>
                          <p className="card-text">
                            {city.name} - {city.country}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};
