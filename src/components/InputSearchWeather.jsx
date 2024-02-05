/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { petitionCity } from "../helpers/apiOpenWeather";
import { CardInformationWeather } from "./CardInformationWeather";

export const InputSearchWeather = () => {
  const [inputCity, setInputCity] = useState("");
  const [cityData, setCityData] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  const fetchData = async () => {
    try {
      if (inputCity.length >= 3) {
        const cities = await petitionCity(inputCity);
        setCityData(cities);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onInputChange = ({ target }) => {
    setInputCity(target.value);
  };

  const resetInputValue = () => {
    setInputCity("");
  };

  useEffect(() => {
    fetchData();
  }, [inputCity]);

  const handleSelectChange = (event) => {
    const selectedIndex = event.target.selectedIndex;
    const selectedCity = cityData[selectedIndex];
    if (selectedCity) {
      setSelectedCity(selectedCity);
    }
  };
  return (
    <>
      <div
        className="container "
        style={{ maxWidth: "500px", marginTop: "7%" }}
      >
        <div className="input-group input-group-lg">
          <span
            className="input-group-text bg-transparent"
            id="inputGroup-sizing-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
            value={inputCity}
            onChange={onInputChange}
            style={{
              borderLeft: "none",
              borderRight: "none",
              boxShadow: "none",
              outline: "none",
            }}
          />

          {inputCity.length > 0 ? (
            <span
              className="input-group-text bg-transparent"
              id="inputGroup-sizing-lg"
            >
              <button
                className="btn btn-sm"
                style={{ border: "none" }}
                onClick={resetInputValue}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>
              </button>
            </span>
          ) : (
            <span
              className="input-group-text bg-transparent"
              id="inputGroup-sizing-lg"
            ></span>
          )}
        </div>
        <div>
          {inputCity.length >= 3 && (
            <select
              className="form-select"
              size="3"
              aria-label="Size 3 select example"
              style={{ overflow: "hidden" }}
              onChange={handleSelectChange}
            >
              {cityData.map((city) => (
                <option key={city.lat}>
                  {city.name} - {city.state}
                </option>
              ))}
            </select>
          )}
        </div>
        {selectedCity && (
          <CardInformationWeather
            lat={selectedCity.lat}
            lon={selectedCity.lon}
          />
        )}
      </div>
    </>
  );
};
