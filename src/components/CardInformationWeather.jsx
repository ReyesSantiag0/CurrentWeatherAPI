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

  return (
    <>
      <div className="container py-3" style={{ maxWidth: "500px" }}>
        <p>Localización: </p>
        {cityClimateData.map((city) => (
          <div className="card text-center" key={city.id}>
            <div className="card-body">
              <h5 className="card-title">{city.name}</h5>
              <p className="card-text">{city.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
