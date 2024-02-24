/* eslint-disable react/prop-types */
export const CardForecastWeather = ({ city }) => {
  return (
    <>
      <div className="card-body" key={city.dt}>
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
    </>
  );
};
