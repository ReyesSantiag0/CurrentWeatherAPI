import { useState } from "react";
import { petition } from "../helpers/apiOpenWeather";

export const InputSearchWeather = () => {
  const [city, setCity] = useState("");
  const onInputChange = ({ target }) => {
    setCity(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const inputValueTrim = city.trim();
    if (inputValueTrim.length < 1) return;
    petition(city);
    setCity("");
  };

  return (
    <>
      <div
        className="container "
        style={{ maxWidth: "500px", marginTop: "7%" }}
      >
        <form onSubmit={onSubmit}>
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
              value={city}
              onChange={onInputChange}
            />
          </div>
        </form>
      </div>
    </>
  );
};
